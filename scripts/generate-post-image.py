#!/usr/bin/env python3
"""
LinkedIn Post Image Generator — Google Gemini API

Generates post images from prompts with optional logo integration.
Parses prompt markdown files from the linkedin/images/ directory.

Usage:
    # Generate a specific concept (logo included by default)
    python scripts/generate-post-image.py --file linkedin/images/friday-post-speed-image-prompts.md --concept 3

    # Generate all concepts
    python scripts/generate-post-image.py --file linkedin/images/friday-post-speed-image-prompts.md --all

    # Generate 3 variations of a concept (pick the best one)
    python scripts/generate-post-image.py --file linkedin/images/friday-post-speed-image-prompts.md --concept 3 --variations 3

    # Without logo
    python scripts/generate-post-image.py --file linkedin/images/friday-post-speed-image-prompts.md --concept 3 --no-logo

    # Custom logo
    python scripts/generate-post-image.py --file linkedin/images/friday-post-speed-image-prompts.md --concept 3 --logo path/to/logo.png

    # Inline prompt
    python scripts/generate-post-image.py --prompt "Your detailed prompt here"

    # List available concepts in a file
    python scripts/generate-post-image.py --file linkedin/images/friday-post-speed-image-prompts.md --list

Setup:
    pip install -r scripts/requirements.txt
    set GEMINI_API_KEY=your-api-key-here
"""

import argparse
import mimetypes
import os
import re
import sys
from datetime import datetime
from pathlib import Path

from google import genai
from google.genai import types

# Default logo path (white version for dark brand bars)
DEFAULT_LOGO = "public/logo-white.png"


# ---------------------------------------------------------------------------
# Prompt extraction
# ---------------------------------------------------------------------------

def extract_prompts(file_path: str) -> list[dict]:
    """Extract numbered prompts from a markdown file.

    Looks for sections like:
        ## Prompt 1 -- "The Hourglass"
    Then grabs the longest code block in that section as the prompt text.

    Returns list of {"number": int, "name": str, "prompt": str}.
    """
    content = Path(file_path).read_text(encoding="utf-8")

    # Split on prompt headings (## Prompt N)
    sections = re.split(r"(?=##\s+Prompt\s+\d)", content)
    prompts = []

    for section in sections:
        heading = re.match(
            r'##\s+Prompt\s+(\d+)\s*[-\u2013\u2014]+\s*["\u201c](.+?)["\u201d]',
            section,
        )
        if not heading:
            continue

        number = int(heading.group(1))
        name = heading.group(2)

        # Find all fenced code blocks, pick the longest (the actual prompt)
        blocks = re.findall(r"```\n?(.*?)```", section, re.DOTALL)
        if blocks:
            prompt_text = max(blocks, key=len).strip()
            prompts.append({"number": number, "name": name, "prompt": prompt_text})

    return prompts


# ---------------------------------------------------------------------------
# Prompt adaptation (Midjourney → Gemini)
# ---------------------------------------------------------------------------

def extract_aspect_ratio(prompt: str) -> str | None:
    """Pull --ar value from Midjourney params if present."""
    match = re.search(r"--ar\s+(\d+:\d+)", prompt)
    return match.group(1) if match else None


def extract_negative_prompts(prompt: str) -> str | None:
    """Extract the --no list from Midjourney params and convert to avoidance instructions."""
    match = re.search(r"--no\s+(.+?)(?=\s+--|$)", prompt)
    if not match:
        return None
    items = [item.strip() for item in match.group(1).split(",") if item.strip()]
    return items


def adapt_prompt(prompt: str) -> str:
    """Convert a Midjourney prompt into a Gemini-optimized prompt.

    - Strips platform-specific params (--ar, --s, --v, --q, --style, etc.)
    - Converts --no list into explicit avoidance instructions
    - Keeps the full prompt body untouched (no simplification)
    """
    # Extract negative prompts before stripping
    negatives = extract_negative_prompts(prompt)

    # Strip all Midjourney params
    cleaned = re.sub(
        r"\s*--(?:ar|s|v|q|style|no|seed|chaos|weird|niji|quality)\b[^-]*",
        "",
        prompt,
    )
    # Clean up any leftover double-dashes from param removal
    cleaned = re.sub(r"\s*--\s*$", "", cleaned).strip()

    # Append avoidance instructions converted from --no
    if negatives:
        avoid_list = ", ".join(negatives)
        cleaned += (
            f"\n\nCRITICAL AVOIDANCE LIST — Do NOT include any of the following "
            f"in the generated image: {avoid_list}."
        )

    return cleaned


def build_prompt(prompt: str, *, with_logo: bool = False) -> str:
    """Wrap an adapted prompt with industry context and quality instructions."""

    adapted = adapt_prompt(prompt)

    preamble = (
        "You are generating a premium, high-end marketing image for a LinkedIn post. "
        "The client is LexumSoft, a digital marketing agency that works exclusively "
        "with plumbing and HVAC contractors across the United States.\n\n"
        "QUALITY STANDARD: This image must be indistinguishable from work produced by "
        "a top-tier creative agency. Maximum detail, maximum realism, maximum visual "
        "impact. Photorealistic rendering where the prompt calls for photography. "
        "Cinematic lighting, professional color grading, razor-sharp where in focus. "
        "This is a premium marketing asset — not a generic stock image.\n\n"
        "INDUSTRY CONTEXT: The target audience is plumbing and HVAC business owners. "
        "The visual language should feel relevant to the trades — tools, equipment, "
        "service vehicles, job sites, phones ringing, urgency, craftsmanship. Even "
        "when the concept is metaphorical, ground it in elements that a contractor "
        "would immediately recognize and relate to.\n\n"
    )

    if with_logo:
        preamble += (
            "LOGO PLACEMENT: A company logo image is attached. This is the LexumSoft "
            "logo — a geometric origami bird. You MUST reproduce this exact logo in "
            "the brand bar at the bottom of the image. Place it in the bottom-left "
            "corner of the brand bar, to the left of the headline text. The logo "
            "should be clearly visible, approximately 40-50 pixels tall relative to "
            "the brand bar height, rendered in white on the dark charcoal background. "
            "Keep the logo's geometric origami bird shape exactly as shown in the "
            "reference — do not simplify, redraw, abstract, or alter it in any way. "
            "It must be a faithful reproduction of the provided logo.\n\n"
        )

    return preamble + "IMAGE PROMPT:\n\n" + adapted


# ---------------------------------------------------------------------------
# Image generation
# ---------------------------------------------------------------------------

def generate_image(
    client: genai.Client,
    prompt: str,
    *,
    logo_path: str | None = None,
    aspect_ratio: str = "1:1",
    model: str = "gemini-3-pro-image-preview",
    output_path: str = "output.png",
) -> bool:
    """Generate an image via Gemini and save to disk. Returns True on success."""

    # Extract AR from prompt if present
    prompt_ar = extract_aspect_ratio(prompt)
    ar = prompt_ar or aspect_ratio

    # Build the full enriched prompt
    has_logo = logo_path is not None
    full_prompt = build_prompt(prompt, with_logo=has_logo)

    # Build multimodal content parts
    parts: list[types.Part] = []

    if logo_path:
        logo_file = Path(logo_path)
        if not logo_file.exists():
            print(f"  Error: logo not found — {logo_path}")
            return False
        mime = mimetypes.guess_type(logo_path)[0] or "image/png"
        parts.append(types.Part.from_bytes(data=logo_file.read_bytes(), mime_type=mime))

    parts.append(types.Part.from_text(text=full_prompt))

    contents = [types.Content(role="user", parts=parts)]

    config = types.GenerateContentConfig(
        image_config=types.ImageConfig(
            aspect_ratio=ar,
            image_size="1K",
        ),
        response_modalities=["IMAGE"],
    )

    print(f"  Generating ({model}, {ar}, logo={'yes' if has_logo else 'no'})...")

    out = Path(output_path)
    out.parent.mkdir(parents=True, exist_ok=True)

    generated = False
    for chunk in client.models.generate_content_stream(
        model=model,
        contents=contents,
        config=config,
    ):
        if chunk.parts is None:
            continue
        part = chunk.parts[0]
        if part.inline_data and part.inline_data.data:
            ext = mimetypes.guess_extension(part.inline_data.mime_type) or ".png"
            final = out.with_suffix(ext)
            final.write_bytes(part.inline_data.data)
            print(f"  Saved: {final}")
            generated = True
        elif hasattr(part, "text") and part.text:
            print(f"  API response: {part.text}")

    if not generated:
        print("  Warning: no image generated — the API may have filtered this prompt.")

    return generated


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def slugify(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def resolve_logo(args) -> str | None:
    """Resolve logo path: explicit --logo, default, or --no-logo."""
    if args.no_logo:
        return None
    if args.logo:
        return args.logo
    # Default logo
    if Path(DEFAULT_LOGO).exists():
        return DEFAULT_LOGO
    return None


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="Generate LinkedIn post images using Google Gemini API",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s --file linkedin/images/friday-post-speed-image-prompts.md --concept 3
  %(prog)s --file linkedin/images/friday-post-speed-image-prompts.md --all
  %(prog)s --file linkedin/images/friday-post-speed-image-prompts.md --concept 3 --variations 3
  %(prog)s --file linkedin/images/friday-post-speed-image-prompts.md --concept 3 --no-logo
  %(prog)s --prompt "Your detailed prompt" --output generated/
  %(prog)s --file linkedin/images/friday-post-speed-image-prompts.md --list
        """,
    )

    # Input
    source = parser.add_mutually_exclusive_group(required=True)
    source.add_argument("--prompt", "-p", help="Inline image prompt text")
    source.add_argument("--file", "-f", help="Markdown file with numbered prompts")

    # Concept selection
    concept_group = parser.add_mutually_exclusive_group()
    concept_group.add_argument("--concept", "-c", type=int, help="Concept number (1-4)")
    concept_group.add_argument("--all", "-a", action="store_true", help="Generate all concepts")
    concept_group.add_argument("--list", action="store_true", help="List concepts in file and exit")

    # Logo
    logo_group = parser.add_mutually_exclusive_group()
    logo_group.add_argument("--logo", "-l", help="Logo image path (default: public/logo-white.png)")
    logo_group.add_argument("--no-logo", action="store_true", help="Skip logo entirely")

    # Output
    parser.add_argument(
        "--output", "-o", default="linkedin/images/generated",
        help="Output directory (default: linkedin/images/generated)",
    )
    parser.add_argument("--name", "-n", help="Custom output filename (no extension)")

    # Generation
    parser.add_argument("--aspect-ratio", "--ar", default="1:1", help="Aspect ratio (default: 1:1)")
    parser.add_argument(
        "--model", "-m", default="gemini-3-pro-image-preview",
        help="Gemini model (default: gemini-3-pro-image-preview)",
    )
    parser.add_argument("--api-key", "-k", help="Gemini API key (or set GEMINI_API_KEY)")
    parser.add_argument(
        "--variations", "-v", type=int, default=1,
        help="Number of variations to generate per concept (default: 1)",
    )

    args = parser.parse_args()

    # Resolve API key
    api_key = args.api_key or os.environ.get("GEMINI_API_KEY")

    # Resolve logo
    logo = resolve_logo(args)
    if logo:
        print(f"Logo: {logo}")
    else:
        print("Logo: none")

    # ------------------------------------------------------------------
    # FILE mode
    # ------------------------------------------------------------------
    if args.file:
        fpath = Path(args.file)
        if not fpath.exists():
            print(f"Error: file not found — {args.file}")
            sys.exit(1)

        prompts = extract_prompts(args.file)
        if not prompts:
            print(f"Error: no prompts found in {args.file}")
            sys.exit(1)

        # List mode — no API key needed
        if args.list:
            print(f"\nConcepts in {args.file}:\n")
            for p in prompts:
                print(f"  {p['number']}. {p['name']}")
            print()
            return

        if not api_key:
            print("Error: set GEMINI_API_KEY or pass --api-key")
            sys.exit(1)

        # Pick concepts
        if args.all:
            selected = prompts
        elif args.concept:
            selected = [p for p in prompts if p["number"] == args.concept]
            if not selected:
                avail = [p["number"] for p in prompts]
                print(f"Error: concept {args.concept} not found. Available: {avail}")
                sys.exit(1)
        else:
            print("Error: use --concept N, --all, or --list with --file")
            sys.exit(1)

        client = genai.Client(api_key=api_key)

        # Derive a short stem from the file name
        stem = re.sub(r"-image-prompts?$", "", fpath.stem)

        for p in selected:
            slug = slugify(p["name"])
            for v in range(1, args.variations + 1):
                suffix = f"-v{v}" if args.variations > 1 else ""
                fname = args.name or f"{stem}-{p['number']}-{slug}{suffix}"
                out = str(Path(args.output) / f"{fname}.png")
                print(f"\n--- Concept {p['number']}: {p['name']}{f' (variation {v}/{args.variations})' if args.variations > 1 else ''} ---")
                generate_image(
                    client,
                    p["prompt"],
                    logo_path=logo,
                    aspect_ratio=args.aspect_ratio,
                    model=args.model,
                    output_path=out,
                )

    # ------------------------------------------------------------------
    # INLINE prompt mode
    # ------------------------------------------------------------------
    else:
        if not api_key:
            print("Error: set GEMINI_API_KEY or pass --api-key")
            sys.exit(1)

        client = genai.Client(api_key=api_key)
        for v in range(1, args.variations + 1):
            suffix = f"-v{v}" if args.variations > 1 else ""
            fname = args.name or f"generated-{datetime.now().strftime('%Y%m%d-%H%M%S')}{suffix}"
            out = str(Path(args.output) / f"{fname}.png")
            print(f"\n--- Inline prompt{f' (variation {v}/{args.variations})' if args.variations > 1 else ''} ---")
            generate_image(
                client,
                args.prompt,
                logo_path=logo,
                aspect_ratio=args.aspect_ratio,
                model=args.model,
                output_path=out,
            )

    print("\nDone.")


if __name__ == "__main__":
    main()
