# Image Prompt File Template

Use this structure for every new image prompts file saved to `linkedin/posts/<slug>/image-prompts.md`.

The brand guide section below is **always included verbatim** from the brand-guide.md reference. Both the post writer and image prompter agents use the same brand constants.

---

```markdown
# {Angle} Post -- Image Prompts (Final Output, No Post-Production)

**Post:** "{First line or two-line hook from the post}"
**Topic:** {Topic summary in one sentence}
**Image dimensions:** 1200 x 1200 px (1:1 square)
**CTA keyword:** {KEYWORD}

**Style:** Hybrid Photo + UI Overlay (cinematic photorealistic scene with floating digital UI panels)

Every prompt in this document produces a FINISHED LinkedIn post image. The AI generates the scene, all UI overlay panels, text overlays, the brand bar, and every typographic element. There is no second step. No Canva. No Figma. One prompt, one finished image.

---
---

## LexumSoft Brand Guide -- Complete Reference

{Copy the full Brand Colors table, Typography table, Logo section, Design Language section, and Key Rules from references/brand-guide.md}

---
---

## Regeneration Strategy (All Prompts)

Generate 4 images per batch. Expect 1-2 usable outputs per batch. Run up to 3 batches (12 images) before adjusting the prompt.

**Evaluating text rendering quality:**
- Text is readable and spelled correctly on at least one of the 4 outputs = success, use that output
- Text is close but has minor artifacts (slightly malformed letter, spacing issue) = acceptable if the scene is strong
- Text is garbled, overlapping, or missing entire words = regenerate or simplify the text element

If text consistently fails after 3 batches (12 images), remove one text element (start with the smallest/least important one) and regenerate. The scene quality and primary headline are more important than having every text element perfect.

---
---

## Prompt {N} -- "{Concept Name}"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

{1-2 sentences explaining the concept and its emotional angle.}

**Visual Impact:** {High / Medium}
**Priority:** {N}

---

### Prompt

` ` `
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: {Detailed physical setting. Include trade-authentic details: specific pipe types, tool brands, material textures, lighting conditions. A real person in a real environment.}

FOCAL POINT ELEMENT: {The key story-telling element -- a person interacting with a device (phone/tablet) in the scene.}

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating in the scene, as if viewed through an augmented reality HUD):

ELEMENT 1 -- {NAME} ({placement}):
A dark semi-transparent rounded rectangle panel (glassmorphism card) with a subtle amber-gold border glow. Inside:
{Specific data content: metrics, checklist items with icons, status text, before/after numbers}

ELEMENT 2 -- {NAME} ({placement}):
{Smaller panel with supporting data: progress bars, status badges, notification-style cards}

ELEMENT 3 -- {NAME} ({placement}):
{Optional: result badge, competitor comparison, or revenue outcome pill}

{Optional: A thin amber-gold curved line connects from the subject's device to the floating panels, with small glowing data dots flowing along it.}

CAMERA: {Lens type (35mm, 50mm, 85mm), angle, depth of field, framing.}

LIGHTING: {Primary light source, color temperature. Note: floating UI panels emit a subtle amber-gold glow that casts faint warm light on nearby surfaces.}

COLOR PALETTE: {Dominant tones, warm/cool balance. The amber-gold from UI panels provides warm accent.}

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

At the {top/top-left/center} of the image, with a subtle dark gradient overlay for readability:

Line 1 (HEADLINE): "{Exact text}" -- white, approximately 32-36 point, clean modern geometric sans-serif bold, {placement}

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: {2-3 sentences describing the emotional impact.}
` ` `

---

### Regeneration Notes

- **If UI panels garble:** Simplify to ONE panel with just the key metric and 2-3 short text lines. Remove smaller panels.
- **If connecting data line fails:** Remove it entirely. Panels floating near the device still read as connected.
- **If text inside panels is unreadable:** Make panels larger and reduce content to just key numbers and icons.
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.
- **If scene looks too stock-photo:** Add more specific trade-authentic material details (worn tools, grime, real lighting).
```

## Concept Diversity Requirements

All 4 concepts use the **hybrid photo + UI overlay style** but cover different emotional angles:

1. **The Problem Scene** (usually recommended) -- The "before" moment. A homeowner or contractor experiencing the pain point. Floating UI panels reveal hidden data (failures, missed opportunities, losses). Moody, urgent lighting. The UI makes the invisible problem VISIBLE.
2. **The Solution Scene** -- The "after" moment. A contractor seeing positive results. Floating UI panels show success metrics, checklists of changes made, revenue badges. Warm, golden lighting. The UI shows proof of transformation.
3. **The System in Action** -- LexumSoft technology working in real time. Person interacting with device while floating panels show the system's output. The tech is the hero.
4. **The Data Story** -- Overhead or close-up angle. Device screen + floating comparison panels. Trade tools visible in the environment. The numbers tell the story.

**Rate each by visual impact:** High / Medium
**Set priority order** based on visual impact and emotional resonance with the contractor audience.

## Generation Commands

```bash
# Generate a specific concept (white logo on dark brand bar -- default)
python scripts/generate-post-image.py --file linkedin/posts/<slug>/image-prompts.md --concept 1 --output linkedin/posts/<slug>/images

# Generate with primary color logo (for light backgrounds)
python scripts/generate-post-image.py --file linkedin/posts/<slug>/image-prompts.md --concept 1 --logo public/logo.png --output linkedin/posts/<slug>/images

# Generate with 2 variations (pick the best)
python scripts/generate-post-image.py --file linkedin/posts/<slug>/image-prompts.md --concept 1 --variations 2 --output linkedin/posts/<slug>/images

# Generate all concepts
python scripts/generate-post-image.py --file linkedin/posts/<slug>/image-prompts.md --all --output linkedin/posts/<slug>/images

# List available concepts
python scripts/generate-post-image.py --file linkedin/posts/<slug>/image-prompts.md --list
```
