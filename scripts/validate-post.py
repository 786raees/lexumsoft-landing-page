#!/usr/bin/env python3
"""
LinkedIn Post Validator

Validates a LinkedIn post markdown file against format and quality rules.

Usage:
    python scripts/validate-post.py linkedin/posts/friday-speed/post.md

Checks:
    1. Character count (post body must be under 3,000)
    2. Required sections present
    3. CTA keyword present and formatted
    4. Hashtag count (8-12)
    5. First comment includes standard footer
    6. Separator formatting

Exit codes:
    0 = all checks passed
    1 = one or more checks failed
    2 = file not found or parse error
"""

import json
import re
import sys
from pathlib import Path


def extract_section(content: str, heading: str) -> str | None:
    """Extract content under a ## heading until the next ## or end of file."""
    pattern = rf"^## {re.escape(heading)}.*?\n(.*?)(?=^## |\Z)"
    match = re.search(pattern, content, re.MULTILINE | re.DOTALL)
    return match.group(1).strip() if match else None


def extract_code_block(section: str) -> str | None:
    """Extract the content of the first fenced code block in a section."""
    match = re.search(r"```\n?(.*?)```", section, re.DOTALL)
    return match.group(1).strip() if match else None


def extract_cta_keyword(content: str) -> str | None:
    """Extract the CTA keyword from the header."""
    match = re.search(r"\*\*CTA keyword:\*\*\s*(\w+)", content)
    return match.group(1) if match else None


def count_hashtags(post_body: str) -> int:
    """Count hashtags in the post body (lines with # words at the end)."""
    # Find the last line that contains hashtags
    lines = post_body.strip().split("\n")
    hashtag_count = 0
    for line in reversed(lines):
        tags = re.findall(r"#\w+", line)
        if tags:
            hashtag_count += len(tags)
            break
    return hashtag_count


def validate(file_path: str) -> dict:
    """Run all validation checks and return results."""
    path = Path(file_path)
    if not path.exists():
        return {
            "status": "error",
            "message": f"File not found: {file_path}",
            "checks": [],
        }

    content = path.read_text(encoding="utf-8")
    checks = []

    # --- Check 1: Required sections ---
    required_sections = {
        "The Post": None,
        "First Comment": None,
        "Post Image Prompts": None,
        "Deployment Notes": None,
    }

    missing = []
    for section_name in required_sections:
        section = extract_section(content, section_name)
        required_sections[section_name] = section
        if section is None:
            missing.append(section_name)

    if missing:
        checks.append({
            "name": "sections",
            "status": "fail",
            "detail": f"Missing sections: {', '.join(missing)}",
        })
    else:
        checks.append({
            "name": "sections",
            "status": "pass",
            "detail": "All 4 required sections found",
        })

    # --- Check 2: Character count ---
    post_section = required_sections.get("The Post")
    post_body = None
    char_count = 0

    if post_section:
        post_body = extract_code_block(post_section)
        if post_body:
            char_count = len(post_body)
            if char_count > 3000:
                checks.append({
                    "name": "character_count",
                    "status": "fail",
                    "detail": f"{char_count:,} / 3,000 (over by {char_count - 3000})",
                })
            elif char_count < 1000:
                checks.append({
                    "name": "character_count",
                    "status": "warn",
                    "detail": f"{char_count:,} / 3,000 (unusually short)",
                })
            else:
                checks.append({
                    "name": "character_count",
                    "status": "pass",
                    "detail": f"{char_count:,} / 3,000",
                })
        else:
            checks.append({
                "name": "character_count",
                "status": "fail",
                "detail": "No code block found in The Post section",
            })

    # --- Check 3: CTA keyword ---
    cta = extract_cta_keyword(content)
    if cta:
        checks.append({
            "name": "cta_keyword",
            "status": "pass",
            "detail": cta,
        })
    else:
        checks.append({
            "name": "cta_keyword",
            "status": "fail",
            "detail": "No **CTA keyword:** found in header",
        })

    # --- Check 4: Hashtag count ---
    if post_body:
        hashtag_count = count_hashtags(post_body)
        if hashtag_count < 8:
            checks.append({
                "name": "hashtag_count",
                "status": "warn",
                "detail": f"{hashtag_count} hashtags (recommend 8-12)",
            })
        elif hashtag_count > 12:
            checks.append({
                "name": "hashtag_count",
                "status": "warn",
                "detail": f"{hashtag_count} hashtags (recommend 8-12)",
            })
        else:
            checks.append({
                "name": "hashtag_count",
                "status": "pass",
                "detail": f"{hashtag_count} hashtags",
            })

    # --- Check 5: First comment footer ---
    first_comment = required_sections.get("First Comment")
    if first_comment:
        comment_body = extract_code_block(first_comment) or first_comment
        if "200+" in comment_body or "200+ contractors" in comment_body:
            checks.append({
                "name": "first_comment_footer",
                "status": "pass",
                "detail": "Standard footer present",
            })
        else:
            checks.append({
                "name": "first_comment_footer",
                "status": "warn",
                "detail": "Missing '200+ contractors served' footer",
            })

    # --- Check 6: Separator formatting ---
    if post_body:
        separators = re.findall(r"^---$", post_body, re.MULTILINE)
        if separators:
            checks.append({
                "name": "separators",
                "status": "pass",
                "detail": f"{len(separators)} separator lines found",
            })
        else:
            checks.append({
                "name": "separators",
                "status": "warn",
                "detail": "No --- separators found (recommended for readability)",
            })

    # --- Check 7: No em-dashes ---
    if post_body:
        em_dashes = post_body.count("\u2014") + post_body.count("\u2013")
        if em_dashes > 0:
            checks.append({
                "name": "em_dash",
                "status": "fail",
                "detail": f"Found {em_dashes} em-dash(es). Replace with double hyphens (--)",
            })
        else:
            checks.append({
                "name": "em_dash",
                "status": "pass",
                "detail": "No em-dashes found",
            })

    # --- Overall status ---
    has_fail = any(c["status"] == "fail" for c in checks)
    status = "fail" if has_fail else "pass"

    return {
        "status": status,
        "character_count": char_count,
        "character_limit": 3000,
        "file": file_path,
        "cta_keyword": cta,
        "checks": checks,
    }


def main():
    if len(sys.argv) < 2:
        print("Usage: python scripts/validate-post.py <post-file.md>")
        sys.exit(2)

    file_path = sys.argv[1]
    result = validate(file_path)

    print(json.dumps(result, indent=2))

    if result["status"] == "error":
        sys.exit(2)
    elif result["status"] == "fail":
        sys.exit(1)
    else:
        sys.exit(0)


if __name__ == "__main__":
    main()
