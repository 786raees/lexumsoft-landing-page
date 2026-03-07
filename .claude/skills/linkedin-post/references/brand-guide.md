# LexumSoft Brand Guide -- LinkedIn Content

## Business Identity

- **Company:** LexumSoft
- **Founder:** Waqar Khan (waqar@lexumsoft.com)
- **Niche:** Exclusively serves plumbing & HVAC companies across the US
- **Positioning:** "#1 Digital Marketing Agency for Plumbing & HVAC Companies"
- **Website:** lexumsoft.com

## Brand Colors

| Token | Hex | Color Name for Prompts | Usage |
|-------|-----|------------------------|-------|
| warm-dark (Primary Dark) | #1A1714 | near-black charcoal, very dark warm brown | Dark backgrounds, text bars, brand bar |
| warm-dark-surface | #2A2520 | dark espresso brown | Elevated cards, secondary dark surfaces |
| amber (Brand Accent) | #C2710C | amber-gold, burnt orange-gold | CTAs, highlights, accent lines, featured elements |
| amber-hover | #A85D0A | dark amber, deep burnt gold | Depth, shadow tones on amber elements |
| sage (Secondary Accent) | #2A7C6F | deep teal-green, muted sage | Secondary highlights, success states |
| warm-text-muted | #A39E99 | muted stone gray | Captions, attribution, "lexumsoft.com" text |

## Typography

| Property | Value |
|----------|-------|
| Primary Font | DM Sans (Google Font) |
| Available Weights | Regular 400, Medium 500, Bold 700, Black 900 |
| Fallback Stack | Inter, Montserrat, system sans-serif |
| For AI prompts | "clean modern geometric sans-serif, similar to DM Sans or Inter" |

## Logo

- Geometric origami bird + wordmark "LexumSoft"
- White version: `public/logo-white.png` (for dark backgrounds -- default)
- Primary color version: `public/logo.png` (amber-gold, for light backgrounds)
- In image prompts: the logo is attached as an image file by the generation script. Reference it as "LexumSoft logo (attached)" in the prompt. Do NOT describe the logo's appearance in words -- the AI sees the actual file.
- Use `--logo public/logo-white.png` (default) for dark brand bars. Use `--logo public/logo.png` for light backgrounds.

## Design Language

- Premium, sophisticated, dark-mode-forward aesthetic
- Dark sections: near-black charcoal (#1A1714) background with white text
- Accent: amber-gold (#C2710C) for CTAs, highlights, featured elements
- Thin amber accent lines as separators
- Muted stone gray (#A39E99) for attribution and fine print
- Cards use subtle elevation with dark espresso (#2A2520) on dark backgrounds

## Image Prompt Rules

1. Every prompt must produce a FINISHED image. No post-production, no Canva, no Figma.
2. All text must be described with exact wording, font style, weight, color, size, and placement.
3. Brand bar at bottom of every image: near-black charcoal strip (~15% of image height), "lexumsoft.com" in muted stone gray.
4. Thin 2px amber-gold accent line at top of brand bar.
5. Use color NAMES in prompts, not hex codes. AI generators don't parse hex reliably.
6. Text paragraph must be isolated from scene description in the prompt.
7. Maximum 2-3 text overlay elements per image for rendering reliability.
8. LexumSoft logo (attached as image file by the generation script) placed bottom-left of brand bar, ~40-50px tall. Do NOT describe the logo in words -- the AI sees the actual file.

## Niche Grounding Rules (for images)

Every image must pass the **"contractor recognition test"** -- a plumber scrolling LinkedIn should immediately think "that's my life."

**Authentic materials:** pipe dope, copper fittings, PEX tubing, Teflon tape, channel-locks, pipe wrenches, solder, brass fittings, cast iron, fiberglass insulation, vapor barriers
**Real environments:** crawl spaces, basements, truck cabs, utility rooms, job sites, attics, mechanical rooms
**Real conditions:** dirty hands, worn gloves, dusty environments, tools scattered on truck seats
**Technology shown:** phone/tablet displaying LexumSoft systems (auto text-back SMS, prioritized lead queue, AI receptionist interface, GBP dashboard)

**NEVER:** abstract infographics, generic stock photos, metaphorical-only concepts, images that could belong to any industry

## Brand Voice (for post copy)

- Direct, confident, no-fluff
- Stat-driven and specific (exact numbers, not "lots of" or "many")
- Speaks contractor's language (trucks, booked jobs, callbacks, service areas, average ticket)
- Warm but authoritative -- empathetic to the owner-operator reality
- No exclamation marks in post body (Waqar's preference)
- NEVER use em-dashes (the long dash character). Always use double hyphens (--) instead. This applies everywhere: post body, first comment, deployment notes, DM templates.

## LinkedIn Constraints

- **Post body limit:** 3,000 characters (including spaces, line breaks, hashtags)
- **Target:** 2,800-2,950 characters
- **Image dimensions:** 1200 x 1200 px (1:1 square)
- **First comment:** Post within 60 seconds of publishing
- **Separators:** `---` lines render as thin horizontal rules in LinkedIn feed
- **Do NOT edit posts** after publishing (LinkedIn suppresses edited posts in first 24h)
- **No links in post body** -- LinkedIn suppresses posts with external links by ~60%. Links go in first comment only.

## Key Stats (use verbatim in posts and first comments)

- 200+ plumbing & HVAC clients served
- $2.5M+ in trackable revenue generated
- 90-Day ROI Guarantee
- No long-term contracts
- 4.9/5 client satisfaction rating
- 847% average client ROI
