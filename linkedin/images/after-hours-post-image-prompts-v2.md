# After-Hours Post -- Image Prompts V2 (Final Output, No Post-Production)

**Post:** "Your competitor just booked a job at 9 PM. You missed the call."
**Image dimensions:** 1200 x 1200 px (1:1 square)
**CTA keyword:** CALLS

Every prompt in this document produces a FINISHED LinkedIn post image. The AI generates the scene, all text overlays, the brand bar, the logo text, and every typographic element. There is no second step. No Canva. No Figma. One prompt, one finished image.

---
---

## LexumSoft Brand Guide -- Complete Reference

### Brand Colors

| Token | Hex | Color Name for Prompts | Usage |
|-------|-----|------------------------|-------|
| warm-dark (Primary Dark) | #1A1714 | near-black charcoal, very dark warm brown | Dark backgrounds, text bars, primary text on light |
| warm-dark-surface | #2A2520 | dark espresso brown | Elevated cards, secondary dark surfaces |
| amber (Brand Accent) | #C2710C | amber-gold, burnt orange-gold | CTAs, highlights, accent lines, featured elements |
| amber-hover | #A85D0A | dark amber, deep burnt gold | Depth, shadow tones on amber elements |
| amber-light | #FFF8F0 | warm cream, pale ivory | Light tint backgrounds |
| sage (Secondary Accent) | #2A7C6F | deep teal-green, muted sage | Secondary highlights, success states |
| warm-bg | #FAF8F4 | warm off-white, parchment | Light page backgrounds |
| warm-surface | #FFFFFF | white | Cards, surfaces |
| warm-text | #1A1714 | near-black | Primary text (same as warm-dark) |
| warm-text-secondary | #6D6560 | warm medium gray, taupe-gray | Body text, secondary labels |
| warm-text-muted | #A39E99 | muted warm gray, stone gray | Captions, attribution, small text |
| warm-border | #E8E5E1 | light warm gray | Borders, dividers on light backgrounds |
| warm-border-light | #F2F0ED | very light warm gray | Subtle borders, hover states |

### Typography

| Property | Value |
|----------|-------|
| Primary Font | DM Sans (Google Font) |
| Available Weights | Regular 400, Medium 500, Bold 700, Black 900 |
| Fallback Stack | Inter, Montserrat, system sans-serif |
| Heading Style | DM Sans Bold or Black, tight letter-spacing |
| Body Style | DM Sans Regular or Medium |

### Logo and Wordmark

- Logo text reads **"LexumSoft"** -- clean, modern wordmark
- Dark version on light backgrounds, white version on dark backgrounds
- When referencing in image prompts, describe as: small, clean, sans-serif wordmark reading "lexumsoft.com"

### Design Language

- Premium, sophisticated, dark-mode-forward aesthetic
- Dark sections: near-black charcoal (#1A1714) background with white text
- Accent: amber-gold (#C2710C) for CTAs, highlights, featured elements
- Gradient text effects using amber to dark amber gradients
- Cards use subtle elevation with dark espresso (#2A2520) on dark backgrounds
- Thin amber accent lines as separators
- Muted stone gray (#A39E99) for attribution and fine print

### Key Rules for All Image Prompts

1. Every prompt must produce a complete, final image. No references to adding anything later.
2. All text must be described with exact wording, font style, weight, color, size relative to the canvas, and precise placement.
3. Brand bar at the bottom of every image: near-black charcoal strip with "lexumsoft.com" in muted stone gray.
4. Amber-gold accent lines wherever a separator or highlight is needed.
5. DM Sans is the font. When the AI platform does not support font-name specification, describe as "clean modern geometric sans-serif, similar to DM Sans or Inter."
6. Text must be isolated in its own paragraph within the prompt, separate from the scene description.
7. Use color names, not hex codes, in the prompt body. Hex codes are listed here for reference only -- Ideogram and Midjourney do not parse hex values reliably.
8. Maximum 2-3 text elements per image to keep text rendering success rate high.

---
---

## Regeneration Strategy (All Prompts)

Generate 4 images per batch. Expect 1-2 usable outputs per batch. Run up to 3 batches (12 images) before adjusting the prompt.

**Evaluating text rendering quality:**
- Text is readable and spelled correctly on at least one of the 4 outputs = success, use that output
- Text is close but has minor artifacts (a slightly malformed letter, slight spacing issue) = acceptable if the scene is strong
- Text is garbled, overlapping, or missing entire words = regenerate or simplify the text element

If text consistently fails after 3 batches (12 images), remove one text element (start with the smallest/least important one) and regenerate. The scene quality and primary headline are more important than having every text element perfect.

---
---

## Prompt 1 -- "The Drain"

### Platform and Model

**Primary:** Midjourney v6.1
**Fallback:** DALL-E 3

Midjourney is the best choice here because of the single-subject, cinematic lighting composition. The overhead camera angle, vortex motion blur, and material texture rendering (brushed metal, wet porcelain, crumpled currency) are all peak Midjourney strengths. The text overlay is confined to a solid-color bar at the bottom, which gives the AI a clean, high-contrast surface to render typography on -- far easier than text floating over a complex scene.

---

### Prompt (copy-paste ready for Midjourney)

```
Hyper-cinematic top-down photograph looking directly downward into a circular bathroom sink drain, perfectly centered in the frame. Square format, 1:1 aspect ratio. The drain is made of dark matte charcoal metal with a brushed gunmetal finish, recessed into a white porcelain sink basin. Twelve crisp US hundred-dollar bills are caught mid-spiral around the drain opening, swirling clockwise like water being sucked into a vortex. The bills are slightly crumpled and curling at the edges, some partially folded, creating a natural whirlpool pattern. The innermost bills are being pulled into the dark void of the drain hole, disappearing into blackness. The outermost bills are still flat against the wet porcelain surface.

Each bill is edge-lit with a warm amber-gold glow emanating from inside the drain, as if a golden light source burns deep below the pipe. The amber light catches the textured surface of each bill, creating rim lighting on every crinkle and fold. The white porcelain sink reflects subtle amber caustic light patterns. Tiny water droplets sit on the porcelain surface, each one catching the amber glow as pinpoint highlights.

A single modern smartphone with a dark screen bezel sits on the flat porcelain rim of the sink at the top-right of the frame, positioned at a slight diagonal angle. The phone screen is illuminated, showing a warm amber-gold glow with a notification indicator. The screen casts a rectangular light reflection onto the wet sink surface.

Camera: directly overhead, 90-degree top-down angle, equivalent to a 35mm prime lens at f/2.8. Sharp focus on the bills and drain at center frame. The smartphone on the rim falls into slight soft focus due to the shallow depth of field. Subtle circular motion blur on the tips of the spiraling bills to convey movement. The overall composition creates a powerful vortex that pulls the viewer's eye from the edges inward toward the dark drain center.

Lighting: primary light source is the amber-gold glow from inside the drain, pushing upward and out, illuminating the undersides and edges of the bills. Secondary fill light is a cool, dim overhead ambient light simulating a bathroom ceiling fixture, keeping the porcelain readable but not bright. Color temperature contrast between warm amber from below and cool neutral from above. High contrast, dramatic, noir-inspired.

Color palette: near-black drain void, dark charcoal metal, white porcelain with amber reflections, warm amber-gold on bill edges and light spill, muted green of the hundred-dollar bill ink. No bright greens or saturated colors anywhere else.

Mood: ominous, visceral, unsettling. The feeling of watching something valuable disappear and being unable to stop it. Cinematic tension.

TEXT OVERLAY RENDERED DIRECTLY ON THE IMAGE: A solid opaque horizontal bar spans the full width of the image across the bottom 18 percent. The bar is filled with a near-black charcoal color, completely solid, no transparency. A thin 3-pixel amber-gold horizontal accent line runs across the full width at the very top edge of this bar. Inside the bar, centered both horizontally and vertically, large bold clean modern sans-serif white text reads exactly: "4 missed calls. 4 jobs gone." The text is approximately 60 point relative to the 1200 pixel canvas. In the bottom-right corner of the bar, small muted stone-gray text in a lighter weight reads: "lexumsoft.com" at approximately 20 point size, right-aligned with 32 pixels of padding from the right edge.

Post-processing: slight film grain, subtle vignette darkening the four corners, teal-and-orange color grading pushed toward the amber side, high micro-contrast on textures, desaturated midtones with saturated highlights. --ar 1:1 --s 250 --v 6.1 --q 2 --style raw --no watermark, signature, border, frame, collage, cartoon, illustration, anime, 3d render, clipart
```

---

### Recommended Parameters

| Parameter | Value | Reason |
|-----------|-------|--------|
| `--ar` | `1:1` | LinkedIn square post format |
| `--s` | `250` | Moderate stylization. Enough cinematic polish without over-rendering the bills into painterly mush. |
| `--v` | `6.1` | Best current Midjourney version for photorealism and material textures. |
| `--q` | `2` | Maximum quality. Worth it for the fine texture detail on bills, water droplets, metal, and the text bar. |
| `--style` | `raw` | Reduces Midjourney's default beautification. Keeps the image grounded and cinematic, not fantasy. |
| `--no` | (see prompt) | Excludes cartoon elements, borders, watermarks. Does NOT exclude "text" or "words" because the text overlay is intentional. |

---

### Why This Works

1. **Single focal point** -- Midjourney excels when there is one clear subject (the drain vortex) with supporting elements (phone, porcelain). No competing centers of attention.
2. **Material specificity** -- "brushed gunmetal finish," "white porcelain," "matte charcoal metal" give Midjourney concrete texture targets. Vague material descriptions produce generic results.
3. **Light source motivation** -- Every light in the scene has a physical origin (amber glow from drain, phone screen, overhead fixture). Midjourney renders motivated lighting far better than ambient mood descriptions.
4. **Motion language** -- "mid-spiral," "swirling clockwise," "slight circular motion blur on tips" tells the model exactly how to convey movement without making the whole image blurry.
5. **Text on solid bar** -- The text is placed on a solid opaque near-black rectangle with high contrast white lettering. This is the highest-success-rate configuration for AI text rendering. The bar gives the text engine a clean, uniform background instead of competing with scene detail.
6. **Negative prompt excludes cartoons but NOT text** -- Because we want text in the image, the `--no` parameter deliberately omits "text, words, letters" which the old version included. Including those would fight against our text overlay.

---

### Regeneration Tips

**What to look for in a GOOD output:**
- The vortex spiral reads clearly as a clockwise rotation pulling inward
- Individual bills are distinguishable as hundred-dollar bills, not generic green paper
- The amber glow from the drain is the dominant light source with visible rim lighting on bill edges
- The drain is clearly a sink drain (circular, metal, dark) not a floor drain or abstract hole
- The phone is present on the rim and does not dominate the composition
- The bottom bar is solid, opaque, full-width, and near-black
- "4 missed calls. 4 jobs gone." is readable and correctly spelled in white text on the bar
- "lexumsoft.com" is present somewhere in the bar area (minor positioning errors are acceptable)
- The thin amber accent line is visible at the top of the bar

**What to REJECT:**
- Bills that look like confetti or generic green shapes
- The vortex motion is absent (bills just sitting flat)
- The amber light is too weak or replaced by generic white lighting
- Extra objects appear that were not described
- The bottom bar is missing, transparent, or does not span the full width
- The headline text is garbled, misspelled, or unreadable
- The overhead angle is not truly top-down

**Iteration strategy for text issues:** If the headline text is garbled after 2 batches, simplify it to "4 missed calls." (shorter text renders more reliably). If "lexumsoft.com" consistently fails, remove it from the prompt and keep only the headline -- a single text element has a much higher success rate than two. If the bar itself is not rendering, add "graphic design text banner" to the opening sentence of the text overlay paragraph.

---
---

## Prompt 2 -- "The Split Second"

### Platform and Model

**Primary:** Ideogram v3 (Design mode)
**Fallback:** DALL-E 3

Ideogram in Design mode is the right call for this diptych composition. Split-screen layouts and typographic overlays are both Ideogram Design mode strengths. The combination of a graphic layout with embedded text is exactly what Design mode was built for. Midjourney would likely merge the two halves and struggle with the pill-shaped text badges.

---

### Prompt (copy-paste ready for Ideogram)

```
Diptych layout, split-screen photographic composition divided exactly in half vertically. Square format, 1:1 aspect ratio, two equal panels side by side. A thin glowing amber-gold vertical line runs from top to bottom of the frame, separating the two halves.

LEFT HALF, warm and alive: Interior of a plumber's white work van at twilight golden hour. View from the passenger seat looking across to the driver seat area. A modern smartphone mounted on the dashboard is ringing, its screen casting a warm amber-gold glow across the dark charcoal leather dashboard and steering wheel. Through the open rear cargo doors behind the front seats, copper pipe fittings, wrenches, and a red pipe cutter are visible stacked on metal shelving. The windshield shows a suburban street bathed in the last warm golden light of sunset, sky gradient from deep amber at horizon to soft lavender above. Everything feels active, ready, about to happen. Warm color temperature throughout this half, dominant tones of amber, gold, warm brown, and copper.

RIGHT HALF, cold and abandoned: The exact same van interior, same angle, same dashboard, same tools visible through rear doors. But now the smartphone screen shows a cold pale blue-white glow. The windshield shows the same street now in deep blue moonlight, no golden warmth anywhere. The overall color temperature is shifted entirely to cold steel blue, desaturated teal, and deep charcoal shadow. The dashboard looks empty and still. No sunset, no warmth. Everything feels frozen in a moment of missed opportunity. The tools in the back are barely visible in shadow.

Both halves share the same spatial composition and camera angle for maximum contrast. The only difference is the color temperature and mood. Shot at eye level from the passenger seat, equivalent to a 24mm wide-angle lens. Deep depth of field so both the dashboard phone and the rear cargo area are in focus. Subtle film grain across both panels. Cinematic photography, editorial advertising, commercial campaign imagery, moody atmospheric, high production value.

TEXT AND BRAND ELEMENTS RENDERED DIRECTLY ON THE IMAGE: On the left half, in the lower 20 percent of the panel, a pill-shaped badge with a near-black charcoal background and rounded corners contains bold clean sans-serif amber-gold text reading exactly: "You answered." The badge has 24 pixels of vertical padding and 40 pixels of horizontal padding. On the right half, in the same position, an identical pill-shaped badge with near-black charcoal background contains bold clean sans-serif white text reading exactly: "You didn't." Both badges are centered horizontally within their respective halves. At the very bottom of the full image, a solid near-black charcoal horizontal bar spans the full width, 56 pixels tall. Inside this bar, centered, small clean sans-serif white text reads: "lexumsoft.com" at approximately 18 point size.
```

---

### Ideogram Settings

| Setting | Value | Reason |
|---------|-------|--------|
| **Style** | Design | Best for split-screen layouts, graphic compositions, and embedded typography |
| **Aspect Ratio** | 1:1 (Square) | LinkedIn post format |
| **Magic Prompt** | OFF | Prevents Ideogram from rewriting and diluting the precise layout and text instructions |
| **Model** | v3 (latest) | Best spatial understanding for diptych layouts and text rendering |

---

### Why This Works

1. **"Diptych layout" opening** -- This is the critical phrase that tells Ideogram to treat the image as two distinct panels rather than a single blended scene.
2. **LEFT HALF / RIGHT HALF labels** -- Ideogram's parser responds well to explicit panel labeling. Describing each half in its own paragraph with a clear label prevents bleed-through.
3. **Same composition, different mood** -- By specifying identical spatial layout in both halves, the contrast becomes purely emotional. The viewer's eye locks onto the color temperature shift.
4. **Concrete color descriptions** -- "amber, gold, warm brown, copper" vs. "cold steel blue, desaturated teal, deep charcoal shadow." Color names, not hex codes. Ideogram renders named colors more accurately.
5. **Text on solid badges** -- The pill-shaped near-black badges give the text engine a clean, high-contrast surface. Text on solid backgrounds has a dramatically higher success rate than text floating over complex photographic detail.
6. **Minimal text count** -- Only three text elements total: "You answered.", "You didn't.", and "lexumsoft.com". Keeping text count low maximizes the probability that all three render correctly in a single generation.

---

### Regeneration Tips

**What to look for in a GOOD output:**
- Two clearly separated halves with a visible amber-gold divider line
- The left half is unmistakably warm (amber, gold, sunset tones)
- The right half is unmistakably cold (blue, teal, moonlight tones)
- Both halves look like the interior of the same vehicle
- The pill-shaped badges are visible, near-black, with readable text
- "You answered." reads correctly in amber-gold on the left badge
- "You didn't." reads correctly in white on the right badge
- "lexumsoft.com" is present in the bottom bar
- The overall image reads as a "same moment, two outcomes" comparison

**What to REJECT:**
- The two halves have merged into a single panoramic scene
- Color temperatures are too similar between halves
- One half has become abstract or illustrative while the other is photographic
- The text badges are missing or text is garbled
- The van interior is not recognizable as a work vehicle

**Iteration strategy:** If Ideogram keeps merging the two halves after 2 batches:
1. Change opening to "Split-screen diptych layout graphic design composition, two separate photographic panels side by side"
2. Add a blank line between the LEFT HALF and RIGHT HALF paragraphs
3. If text on the badges consistently garbles, simplify to just "Answered." and "Missed." (shorter strings render more reliably)
4. If Design mode keeps failing on the scene, switch to Midjourney v6.1 with `--style raw --ar 1:1 --s 200`, accept that the text badges will need to be part of a re-prompt attempt or use DALL-E 3 which handles explicit text placement better

---
---

## Prompt 3 -- "Underwater Gold" (Recommended)

### Platform and Model

**Primary:** Midjourney v6.1
**Fallback:** DALL-E 3

This is a surreal, fine-art concept with a single subject in an atmospheric environment. Midjourney is unmatched for this type of image. The underwater caustics, light particle effects, and the overall painterly-yet-photographic quality are exactly what Midjourney v6.1 does best at higher stylization. The text elements are placed strategically: the headline sits on the luminous golden water surface (bright, uniform, high contrast against white text) and the dollar figure sits in the darker mid-ground (amber-gold text glows against dark water). Both placements give the text renderer favorable conditions.

---

### Prompt (copy-paste ready for Midjourney)

```
A vintage 1960s black Bakelite rotary dial telephone sinking slowly through deep, nearly black water, rendered in a dark matte charcoal finish with subtle brushed texture on the handset and base. Square format, 1:1 aspect ratio. The phone is tilted at approximately 20 degrees off vertical, descending headfirst with the handset trailing slightly above the base, connected by a coiled cord that floats and undulates in the water like a suspended ribbon. The phone is positioned in the lower-center third of the frame, sinking downward into darkness.

Trailing upward from the phone toward the surface is a luminous column of golden coins and amber light particles. Dozens of gold coins in various sizes tumble and spin in the water above the phone, caught in a vertical stream, some face-on showing circular detail, others edge-on catching light as thin golden lines. Between and around the coins, hundreds of tiny amber-gold light particles float upward like bioluminescent organisms or champagne bubbles, creating a constellation of warm pinpoints ascending toward the surface. The particles are densest near the phone and become more scattered as they rise.

The water is extremely dark, nearly black with a subtle deep navy-blue undertone. Faint caustic light patterns in warm amber ripple across the mid-ground, as if projected from the column of golden light onto invisible surfaces in the water. These caustics are subtle, organic, and undulating.

Far above, the water surface is visible at the very top of the frame, approximately the top 10 to 15 percent of the image. The surface glows with warm golden light from above, diffused and hazy, as if a setting sun is shining down through the water. The surface creates a luminous ceiling of amber-gold light that feels like the world above, like opportunity, like where the phone used to be.

The overall depth reads as: golden surface at top, dark transitional water in upper-middle, luminous coin column in center, sinking phone in lower-center, absolute void blackness at the bottom.

Camera: underwater perspective, slightly below the phone looking upward at approximately 15 degrees. Equivalent to a 50mm lens at f/1.8. Sharp focus on the rotary phone. The coins and particles above are in gradually softer focus as they rise toward the surface, creating a natural depth gradient. The water surface at the very top is a soft, luminous blur.

Lighting: the column of coins and particles is self-luminous, generating the primary warm amber-gold light that illuminates the phone from above and the water around it. The surface glow provides ambient top-down fill. No other light sources. Color temperature is warm amber for all light. The shadows are deep black with subtle dark navy undertone, never gray.

Mood: haunting, melancholic, achingly beautiful. The feeling of watching something valuable sink irretrievably while the light escapes upward. Fine art advertising meets deep-sea photography meets surrealism. Inspired by the visual sensibility of Gregory Crewdson, the underwater work of Zena Holloway, and the surrealism of Rene Magritte.

TEXT AND BRAND ELEMENTS RENDERED DIRECTLY ON THE IMAGE: In the top 12 percent of the image, overlaying the luminous golden water surface glow, clean modern sans-serif white text in a medium weight reads exactly: "Every missed call sinks revenue." The text is approximately 48 point relative to the 1200 pixel canvas, centered horizontally. The bright golden surface behind it provides natural contrast. Below the headline, with a small gap, large bold clean sans-serif amber-gold text reads: "$8,680/month" at approximately 72 point size, centered horizontally. This large amber text sits in the transitional dark water zone where the amber-gold color glows warmly against the dark background. In the bottom-right corner of the image, small muted stone-gray text reads: "lexumsoft.com" at approximately 18 point size, with 28 pixels of padding from the bottom and right edges.

Post-processing: rich deep blacks with no crushed shadows, amber highlights that glow without blooming, subtle chromatic aberration at frame edges, extremely fine film grain, cinematic color science. Desaturated everywhere except the amber-gold tones which should be richly saturated. --ar 1:1 --s 500 --v 6.1 --q 2 --style raw --no watermark, signature, border, frame, cartoon, anime, illustration, bright colors, neon, pink, red, green, modern phone, smartphone, cable
```

---

### Recommended Parameters

| Parameter | Value | Reason |
|-----------|-------|--------|
| `--ar` | `1:1` | LinkedIn square post |
| `--s` | `500` | Higher stylization for fine art. Pushes Midjourney toward more dramatic light rendering and atmospheric depth. |
| `--v` | `6.1` | Best version for underwater caustics and particle effects. |
| `--q` | `2` | Maximum quality. The tiny light particles, coin details, and text rendering all need the rendering budget. |
| `--style` | `raw` | Even at `--s 500`, raw keeps the image from tipping into fantasy illustration. The combination of high stylization plus raw produces "cinematic fine art photography." |
| `--no` | (see prompt) | Critical exclusions: modern phone/smartphone (vintage rotary only), bright/neon colors (restrained palette). No "text" exclusion because text is intentional. |

---

### Why This Works

1. **Single subject, atmospheric environment** -- Midjourney's sweet spot. One object, one environment, one dominant color.
2. **Vertical depth composition** -- The prompt explicitly maps the vertical structure: golden surface at top, dark water, luminous column, sinking phone, void at bottom. Clear compositional roadmap.
3. **Artist references** -- Crewdson, Holloway, Magritte triangulate the exact aesthetic without any single reference overpowering the result.
4. **Self-luminous light logic** -- The coins and particles generate their own light, solving the common problem of underwater scenes looking flat.
5. **Text placement exploits natural contrast zones** -- The headline sits on the bright golden water surface (white text on bright gold = high contrast). The "$8,680/month" sits in the dark mid-ground (amber-gold text on near-black water = high contrast). The "lexumsoft.com" sits in the darkest bottom area (gray text on dark = subtle but readable). Each text element is placed where the scene naturally provides the best background for that text color.
6. **Three text elements, well separated** -- The three texts are in three different vertical zones of the image (top, upper-middle, bottom-right), which prevents the text renderer from cramming everything into one area and garbling it.

---

### Regeneration Tips

**What to look for in a GOOD output:**
- The rotary phone is clearly identifiable as a vintage rotary telephone (dial, handset, coiled cord)
- The phone has a dark matte charcoal finish (not bright red, not white, not shiny)
- The coin column and light particles create a visible vertical stream from phone to surface
- The water surface glow at the top is warm amber-gold, not cold blue
- "Every missed call sinks revenue." is readable in white text at the top of the image
- "$8,680/month" is readable in amber-gold text below the headline
- "lexumsoft.com" is present near the bottom-right (minor positioning errors are fine)
- The overall image feels like fine art photography, not a stock photo or cartoon
- The mood is hauntingly beautiful, not scary or horror-themed

**What to REJECT:**
- A modern smartphone instead of a vintage rotary phone
- Bright tropical underwater colors (coral, turquoise, bright blue)
- The phone is floating or rising instead of sinking
- No coins or light particles
- The text is completely garbled or missing
- Multiple phones or objects not described

**Iteration strategy for text issues:** If the headline consistently garbles after 2 batches, shorten it to "Missed calls sink revenue." (4 words instead of 5). If "$8,680/month" garbles (numbers are harder for AI text engines), try "$8,680" alone without "/month". If "lexumsoft.com" is the problem, drop it and keep only the headline and dollar figure. Prioritize the headline as the most important text element. If ALL text is failing, try switching to DALL-E 3 which has stronger text rendering at the cost of slightly less cinematic scene quality.

---
---

## Prompt 4 -- "The 6PM Line"

### Platform and Model

**Primary:** Midjourney v6.1
**Fallback:** DALL-E 3 (handles explicit geometric divisions more literally)

This is the most compositionally ambitious of the four prompts. The diagonal split between day and night, the bird's-eye aerial perspective, and the tilt-shift lens effect all play to Midjourney's strengths. However, the diagonal division is a risk -- Midjourney may blend the two halves. The text elements here are placed on the two contrasting backgrounds (white text on the bright day side, amber-gold text on the dark night side) plus a solid bottom bar for the CTA, giving the text engine favorable rendering conditions throughout.

---

### Prompt (copy-paste ready for Midjourney)

```
Aerial bird's-eye photograph looking straight down at a residential suburban street in the American suburbs. Square format, 1:1 aspect ratio. Single-story and two-story houses with driveways, manicured front lawns, a gray asphalt street running diagonally from upper-left to lower-right through the frame. Trees, mailboxes, parked cars along the curb.

The image is divided by a razor-sharp diagonal line running from the upper-right corner to the lower-left corner of the frame. This line is the boundary between two completely different times of day on the same street. Along the diagonal boundary itself, a thin luminous amber-gold glow marks the edge where the two realities meet.

UPPER-LEFT TRIANGLE, golden hour daylight: The houses, street, and lawns are bathed in warm late-afternoon golden hour sunlight casting long amber-tinted shadows to the east. A white commercial plumber's work van is parked in a driveway with its rear cargo doors open, revealing organized tool shelving inside. A figure in a work uniform is walking up the front pathway toward a house where a homeowner stands in the open front door. The scene is active, warm, bustling with life. Colors are warm amber-gold, soft green lawns, white house siding glowing in golden light. The overall feel is productive and thriving.

LOWER-RIGHT TRIANGLE, deep night: The same street, same houses, but now in deep darkness. Street lamps cast small cold blue-white pools of light on the asphalt. The houses are dark, windows unlit, driveways empty. The lawns are dark charcoal green, nearly black. In the center of the night-side sidewalk, a single oversized modern smartphone stands upright like a monolith, perfectly vertical, its screen glowing with warm amber-gold light. The phone screen is bright enough to cast a rectangular pool of amber light on the surrounding sidewalk. The phone is approximately the height of a fire hydrant relative to the street scale, making it an unmistakable focal point. The night side feels empty, still, and silent, dominated by deep shadow.

Camera: aerial drone shot, directly overhead at 90 degrees looking straight down. Equivalent to a 45mm tilt-shift lens creating a miniature-model effect where the scene looks like a detailed diorama. Shallow band of focus across the center of the frame with soft blur at the top and bottom edges. The tilt-shift effect compresses the depth and makes everything look slightly like a toy miniature while maintaining photorealistic textures.

Lighting: UPPER-LEFT uses natural golden hour sunlight from a low western sun angle creating long warm shadows, color temperature warm amber. LOWER-RIGHT uses sparse cold artificial street lighting at blue-white, supplemented by the amber glow of the phone screen. The contrast between the two lighting setups is extreme and intentional.

Color palette: Upper-left is dominated by amber-gold, warm green, soft white, golden yellow. Lower-right is dominated by dark charcoal, deep navy, cold blue-white from streetlights, with the amber phone screen as the only warm accent.

Mood: revelatory, god's-eye-view perspective. The feeling of seeing a truth about time and money that is normally invisible. The day side feels like opportunity seized. The night side feels like opportunity evaporated.

TEXT AND BRAND ELEMENTS RENDERED DIRECTLY ON THE IMAGE: On the upper-left golden-hour triangle, in the top-left area approximately 12 percent from the top and 8 percent from the left, bold clean modern sans-serif white text with a subtle dark drop shadow reads: "Before 6 PM" at approximately 42 point size. On the lower-right night triangle, in the bottom-right area approximately 12 percent from the bottom and 8 percent from the right, bold clean modern sans-serif amber-gold text reads: "After 6 PM" at approximately 42 point size. At the exact center of the image where the diagonal line crosses, large bold clean modern sans-serif white text with amber-gold drop shadow reads: "6:00 PM" at approximately 80 point size, straddling the diagonal boundary. At the very bottom of the image, a solid opaque near-black charcoal horizontal bar spans the full width, approximately 52 pixels tall. Inside this bar, centered, clean sans-serif white text at 20 point reads: "Comment CALLS" with a small gap, then muted stone-gray text reads: "lexumsoft.com" right-aligned.

Post-processing: high micro-contrast for architectural detail, subtle tilt-shift blur gradient, slightly desaturated midtones, cinematic color grading with orange-and-teal pushed to extremes across the diagonal split. Fine film grain. Vignette on outer edges. --ar 1:1 --s 300 --v 6.1 --q 2 --style raw --no watermark, signature, border, frame, cartoon, anime, illustration, interior view, ground level, eye level, portrait
```

---

### Recommended Parameters

| Parameter | Value | Reason |
|-----------|-------|--------|
| `--ar` | `1:1` | LinkedIn square post |
| `--s` | `300` | Moderate-high stylization. Enough for dramatic lighting split and tilt-shift miniature effect without making architectural detail painterly. |
| `--v` | `6.1` | Best version for aerial perspectives and architectural photography. |
| `--q` | `2` | Maximum quality. Tiny architectural details and multiple text elements need the rendering budget. |
| `--style` | `raw` | Keeps the diagonal boundary sharp and the color temperature contrast honest. |
| `--no` | (see prompt) | "interior view, ground level, eye level, portrait" prevents Midjourney from abandoning the aerial perspective. No "text/words" exclusion because text is intentional. |

---

### Why This Works

1. **Explicit diagonal geometry** -- The prompt specifies exactly where the diagonal runs, which triangle is day and which is night, and that the boundary is "perfectly sharp."
2. **UPPER-LEFT / LOWER-RIGHT labels** -- Explicit spatial labels help the model parse the composition.
3. **The phone-as-monolith scale reference** -- "approximately the height of a fire hydrant relative to the street scale" gives a concrete size comparison, preventing the phone from rendering as normal-sized (invisible from aerial) or building-sized (absurd).
4. **Tilt-shift lens specification** -- The miniature effect makes the scene feel like a controlled diorama, which sells the day/night split as intentional and adds premium editorial quality.
5. **Text placed on contrasting backgrounds** -- "Before 6 PM" in white on the bright golden day side. "After 6 PM" in amber-gold on the dark night side. "6:00 PM" at the high-contrast diagonal boundary. "Comment CALLS" on a solid dark bar. Every text element has a favorable background for rendering.
6. **Multiple text elements are spatially separated** -- The four text zones (top-left, bottom-right, center, bottom bar) are spread across the entire image, preventing the text renderer from crowding them together.

---

### Regeneration Tips

**What to look for in a GOOD output:**
- The aerial/bird's-eye perspective is truly top-down (rooftops, not facades)
- The diagonal split is visible and relatively sharp
- The day side is unmistakably warm golden hour
- The night side is unmistakably dark with cold artificial light
- The white van with open doors is visible on the day side
- The glowing phone monolith is visible on the night side
- "6:00 PM" is readable at or near the center
- "Before 6 PM" and "After 6 PM" are readable on their respective sides
- The bottom bar is present with "Comment CALLS" text
- The tilt-shift blur effect is present

**What to REJECT:**
- Ground-level or eye-level perspective instead of aerial
- No discernible diagonal split
- Day and night halves are too similar in color temperature
- The phone monolith is missing from the night side
- All text is garbled or missing
- The scene is not residential suburban

**Iteration strategy:** The diagonal split is the hardest element. If Midjourney blends the halves after 2 batches:
1. Add "sharp geometric boundary, no gradient, no blending" after the diagonal description
2. Increase `--s` to 400 to push the color contrast
3. If diagonal still fails, switch to a VERTICAL split (left = day, right = night) and relabel text to match -- vertical splits have a much higher success rate
4. For text: if "6:00 PM" renders but the smaller labels do not, keep only "6:00 PM" and the bottom bar. Two text elements are easier than four.
5. If switching to DALL-E 3 for better geometric precision, rewrite the prompt in natural flowing sentences (DALL-E 3 prefers prose over labeled sections) and remove all Midjourney parameters.

---
---

## Generation Priority Order

If time is limited, generate in this order:

1. **Prompt 3: "Underwater Gold"** -- Highest probability of a stunning first-batch result. Single subject, atmospheric environment, high stylization. Text is well-placed on natural contrast zones. Safest bet for a scroll-stopping LinkedIn image with readable text.
2. **Prompt 1: "The Drain"** -- Second highest probability. Single focal point, clear composition, text is on a solid opaque bar (highest text-success configuration). May need 2 batches to get the bill spiral right.
3. **Prompt 2: "The Split Second"** -- Medium difficulty. Ideogram Design mode handles the diptych layout and text badges well, but the split may need iteration.
4. **Prompt 4: "The 6PM Line"** -- Most ambitious and highest difficulty. Diagonal split, aerial perspective, tilt-shift, and four text elements. Budget 3 batches minimum. Be prepared to simplify to a vertical split and fewer text elements.

---

## Quick Reference -- Before Generating

- [ ] Midjourney Discord or web app logged in, `/imagine` ready (Prompts 1, 3, 4)
- [ ] Ideogram v3 open in a browser tab, Design mode selected (Prompt 2)
- [ ] DALL-E 3 accessible as fallback for any prompt
- [ ] This document open for reference during regeneration and evaluation
- [ ] Brand color names memorized: near-black charcoal, amber-gold, white, muted stone gray
