# The $30K Generic Agency Mistake Post -- Image Prompts (Final Output, No Post-Production)

**Post:** "You spent $30K on marketing last year. Your agency can't name your top 3 services."
**Topic:** Generic agencies waste contractor budgets with recycled cross-industry playbooks -- same $5K/month budget produces 1.8x ROI with a generalist vs. 10.2x ROI with a plumbing/HVAC specialist, a $504K/year gap. Vince's 7-truck Tennessee plumbing company went from 1.8x to 10.2x ROI after switching.
**Image dimensions:** 1200 x 1200 px (1:1 square)
**CTA keyword:** SWITCH

**Style:** Hybrid Photo + UI Overlay (cinematic photorealistic scene with floating digital UI panels)

Every prompt in this document produces a FINISHED LinkedIn post image. The AI generates the scene, all UI overlay panels, text overlays, the brand bar, and every typographic element. There is no second step. No Canva. No Figma. One prompt, one finished image.

---
---

## LexumSoft Brand Guide -- Complete Reference

### Brand Colors

| Token | Hex | Color Name for Prompts | Usage |
|-------|-----|------------------------|-------|
| warm-dark (Primary Dark) | #1A1714 | near-black charcoal, very dark warm brown | Dark backgrounds, text bars, brand bar |
| warm-dark-surface | #2A2520 | dark espresso brown | Elevated cards, secondary dark surfaces |
| amber (Brand Accent) | #C2710C | amber-gold, burnt orange-gold | CTAs, highlights, accent lines, featured elements |
| amber-hover | #A85D0A | dark amber, deep burnt gold | Depth, shadow tones on amber elements |
| sage (Secondary Accent) | #2A7C6F | deep teal-green, muted sage | Secondary highlights, success states |
| warm-text-muted | #A39E99 | muted stone gray | Captions, attribution, "lexumsoft.com" text |

### Typography

| Property | Value |
|----------|-------|
| Primary Font | DM Sans (Google Font) |
| Available Weights | Regular 400, Medium 500, Bold 700, Black 900 |
| Fallback Stack | Inter, Montserrat, system sans-serif |
| For AI prompts | "clean modern geometric sans-serif, similar to DM Sans or Inter" |

### Logo and Wordmark

- Geometric origami bird + wordmark "LexumSoft"
- White version: `public/logo-white.png` (for dark backgrounds -- default)
- Primary color version: `public/logo.png` (amber-gold, for light backgrounds)
- In image prompts: the logo is attached as an image file by the generation script. Reference it as "LexumSoft logo (attached)" -- do NOT describe the logo's appearance in words.

### Design Language

- Premium, sophisticated, dark-mode-forward aesthetic
- Dark sections: near-black charcoal background with white text
- Accent: amber-gold for CTAs, highlights, featured elements
- Thin amber accent lines as separators
- Muted stone gray for attribution and fine print
- Cards use subtle elevation with dark espresso on dark backgrounds

### Key Rules for All Image Prompts

1. Every prompt must produce a complete, final image. No references to adding anything later.
2. All text must be described with exact wording, font style, weight, color, size relative to the canvas, and precise placement.
3. Brand bar at the bottom of every image: near-black charcoal strip with "lexumsoft.com" in muted stone gray.
4. Amber-gold accent lines wherever a separator or highlight is needed.
5. When the AI platform does not support font-name specification, describe as "clean modern geometric sans-serif."
6. Text must be isolated in its own paragraph within the prompt, separate from the scene description.
7. Use color NAMES, not hex codes, in the prompt body.
8. Maximum 2-3 text elements per image for rendering reliability.
9. LexumSoft logo (attached as image file) placed bottom-left of brand bar, approximately 40-50px tall. Do NOT describe the logo in words.

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

## Prompt 1 -- "The $30K Receipt"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

The recommended lead concept. A plumbing contractor sits at his kitchen table late at night, staring at a stack of generic agency invoices -- twelve months of $2,500 charges, $30K gone. His phone sits face-up on the table showing zero new leads in the call log. Floating UI panels expose the ugly truth: a vanity metrics report full of "impressions" and "clicks" that never turned into booked jobs, and a revenue analysis showing the pathetic 1.8x ROI. This is the "problem scene" -- the moment a contractor realizes his agency has been collecting checks while delivering nothing. The kitchen table late-night bill review is a universally recognizable contractor ritual.

**Visual Impact:** High
**Priority:** 1

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic scene inside a suburban kitchen late at night. Square format, 1:1 aspect ratio. A male plumbing contractor in his mid-40s sits at the kitchen table, slumped back in his chair with one hand pressed against his forehead and the other resting flat on a stack of printed invoices spread across the table. His expression is exhausted frustration -- the look of a man who just added up twelve months of agency fees and realized he has nothing to show for it. He wears a faded heather gray t-shirt with the sleeves slightly pushed up, revealing forearms with tan lines and a few scratches from crawl space work.

The kitchen table is covered with the evidence: a stack of 8-10 printed invoices with visible headers reading "Marketing Services" and monthly totals, some circled in red ink by the contractor. A red ink pen lies across one invoice. A calculator sits nearby with a number visible on the display. His smartphone lies face-up on the table beside the invoices, screen illuminated showing an empty call log -- no new leads. A coffee mug half-full of cold coffee, a pair of reading glasses set down on the invoices, and a yellow legal pad with handwritten calculations visible ("$2,500 x 12 = $30,000" partially visible). In the background, the kitchen is dim -- only the overhead pendant light above the table is on, creating a pool of warm tungsten light on the table surface while the rest of the kitchen fades into deep shadow. A refrigerator with kids' drawings held by magnets is barely visible in the background. Through a window, the darkness of late night -- no daylight, just the faint glow of a porch light.

FOCAL POINT ELEMENT: The contractor's hand pressed against his forehead, the stack of invoices beneath his other hand, and the phone showing zero new leads form a triangle of frustration. The invoices are the physical evidence; the phone is the proof of failure; his posture is the emotional consequence. The overhead pendant light creates a spotlight effect on the table -- as if the evidence is under interrogation.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating in the scene, as if viewed through an augmented reality HUD):

IMPORTANT: All UI panels must be LARGE -- each panel should be approximately 25-30% of the image width. Use heavy glassmorphism with visible frosted-glass blur behind each panel. Border glow should be prominent and clearly visible -- a 3-4px glowing border, not a faint hint.

ELEMENT 1 -- VANITY METRICS REPORT PANEL (floating to the upper-right of the scene, large and prominent):
A large dark semi-transparent rounded rectangle panel (heavy glassmorphism -- visible frosted blur behind the panel) with a BRIGHT, prominent MUTED RED glowing border (3-4px solid glow). Inside, generous padding and spacing between items:
- Header in muted red text, bold, 18pt equivalent: "Your Agency Report"
- A thin muted red horizontal rule below the header
- White text lines with small gray chart-line icons beside each:
  - "Impressions: 45,200"
  - "Clicks: 1,840"
  - "Reach: 28,500"
- Below, separated by spacing, a small muted red status badge with white text: "Booked Jobs: 0"
- At the bottom, muted stone gray italic text: "Same report every month."
The panel represents the useless deliverable -- vanity metrics that measure nothing real.

ELEMENT 2 -- ROI BREAKDOWN PANEL (floating to the upper-left of the scene, same visual weight as Element 1):
A large dark semi-transparent rounded rectangle panel (heavy glassmorphism) with a BRIGHT muted red glowing border (3-4px). Inside:
- Header in muted red text, bold: "12-Month Investment"
- Very large white text, approximately 40pt equivalent: "$30,000"
- A thin muted red horizontal rule
- White text: "ROI: 1.8x"
- Muted stone gray text: "Barely breaking even"
- A muted red pill badge at the bottom with white text: "Revenue: $54K" and a small red sideways arrow icon (stagnant, not growing)

ELEMENT 3 -- LOST REVENUE PILL (floating below both panels, centered between them):
A pill-shaped badge with muted red background and white bold text: "$504,000/yr gap vs. specialist"

Thin amber-gold curved lines with small glowing data dots flow from the phone screen and the invoice stack upward to both floating panels, as if the hidden data is being extracted from the documents and revealed.

CAMERA: 50mm lens equivalent, shot from across the kitchen table at slightly above eye level, looking down at the contractor at a 10-degree angle. Medium shot framing him from chest up with the table surface, invoices, phone, and calculator visible. The pendant light creates a natural spotlight. Shallow depth of field -- the kitchen background behind him dissolves into soft bokeh darkness. The floating UI panels are rendered crisp and sharp on their own focal plane.

LIGHTING: A single warm tungsten pendant light hanging above the kitchen table creates a dramatic pool of golden-warm light on the table surface, the invoices, and the contractor's face and arms. The rest of the kitchen is in deep shadow. The phone screen emits a cool blue-white glow on the table surface beside it. The VANITY METRICS panel on the right emits a muted reddish glow. The ROI BREAKDOWN panel on the left emits a matching muted reddish glow. Both red-glowing panels cast faint crimson light on the scene -- the color of money lost. The warm pendant light versus the cold red panel glow creates a visual tension between the comfortable kitchen and the uncomfortable truth.

COLOR PALETTE: Warm tungsten yellow from the pendant light, deep kitchen shadows, the white of the invoices catching the light, cold blue-white from the phone screen, muted red from both UI panel borders creating an ominous wash, brass/copper from the pendant fixture. The dominant mood is warm-domestic-invaded-by-cold-truth. The red panels are the intruders in an otherwise cozy kitchen -- the data that ruins the evening.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

HEADLINE BACKGROUND: A horizontal gradient bar spanning the full width of the image, positioned at the top. The gradient goes from LEFT to RIGHT: solid near-black charcoal (100% opacity) on the left edge, fading smoothly to fully transparent (0% opacity) on the right edge. The gradient bar is approximately 80-90px tall, covering just the headline area.

Line 1 (HEADLINE): "$30K Spent. Zero Booked Jobs." -- white, approximately 36 point, clean modern geometric sans-serif bold, positioned inside the gradient bar, left-aligned with 40px padding from the left edge, vertically centered within the gradient bar

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: Every contractor has had this night. It is 11 PM, the kids are asleep, the kitchen is quiet, and you are sitting under the pendant light going through a year of invoices that add up to $30,000 -- and asking yourself what you got for it. The phone has not rung any harder. The invoices show the same report every month: impressions, clicks, reach -- numbers that mean nothing to a man who measures success in booked jobs. The floating panels make the waste undeniable: vanity metrics, a pathetic 1.8x ROI, and a $504K/year gap compared to what a specialist could deliver. A contractor scrolling LinkedIn sees this and feels it in his stomach -- "That is my kitchen table. Those are my invoices. I need to know what my agency is actually delivering."
```

---

### Regeneration Notes

- **If the vanity metrics panel text garbles:** Simplify to just 3 lines: "Impressions: 45,200" and "Clicks: 1,840" and "Booked Jobs: 0" in muted red. Remove the gray italic text and chart icons.
- **If the ROI breakdown panel is unreadable:** Simplify to just "$30,000" in large white text with "ROI: 1.8x" in muted red below it. Remove the revenue pill and "barely breaking even" line.
- **If the lost revenue pill garbles:** Simplify to "$504K/yr gap" or remove entirely. The two main panels carry the message.
- **If connecting data lines fail:** Remove them entirely. Panels floating above the table still read as connected to the invoices.
- **If the kitchen looks too staged or bright:** Add "The kitchen is DIM and MOODY -- only the pendant light above the table is on. The rest of the kitchen is in deep shadow. The table surface shows wear marks, water ring stains from mugs, a few crumbs. This is a LIVED-IN kitchen at 11 PM, not a showroom."
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.
- **If the headline gradient bar does not render:** Fall back to "semi-transparent dark gradient overlay behind the headline text for readability."

---
---

## Prompt 2 -- "Same Budget, Different Results"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

The solution scene. Vince -- the 7-truck Tennessee plumbing contractor from the post -- sits in his office chair looking at a tablet showing a performance dashboard, leaning back with the satisfied posture of a man who just watched his ROI climb from 1.8x to 10.2x on the same $5K/month budget. Floating UI panels tell the transformation story: the BEFORE state (generic agency, 1.8x ROI, $9K revenue) versus the AFTER state (specialist, 10.2x ROI, $51K revenue) with identical $5K budget badges anchoring both sides. The warm golden lighting of a productive office reinforces the "after" feeling. The numbers are undeniable.

**Visual Impact:** High
**Priority:** 2

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic scene inside a plumbing contractor's office. Square format, 1:1 aspect ratio. A male plumbing contractor in his early 40s sits in an office chair, leaned back slightly with a quiet, confident expression -- not grinning, but the controlled satisfaction of a man watching the numbers finally work. One hand holds a tablet at a slight angle, the other hand rests on the armrest. He wears a clean charcoal gray company polo with a small embroidered plumbing company logo patch on the chest.

The office reflects a 7-truck plumbing operation: a large whiteboard on the wall behind him filled with a dispatch board -- seven rows of technician names with jobs, addresses, and time slots written in different colored dry-erase markers, most slots filled (a busy schedule). A framed plumbing contractor license hangs beside the whiteboard. On his desk: a 14-inch pipe wrench used as a paperweight on a stack of customer invoices, a roll of Teflon tape, two brass SharkBite push-fit fittings, a coffee mug with a plumbing company logo, a set of van keys, a printed profit-and-loss statement with highlighted rows. A pair of steel-toed work boots sits on the floor beside his desk -- he runs the business AND works jobs. The office has warm overhead lighting supplemented by golden afternoon sunlight streaming through a window, creating a confident, productive atmosphere.

FOCAL POINT ELEMENT: The tablet in his hand glows with warm amber-gold light from a revenue dashboard showing an upward-trending line chart -- a dramatic hockey-stick curve climbing over 3 months. The tablet screen casts warm light on his chin and chest. His rough, calloused hand gripping the tablet tells the story: this is a tradesman, not a desk jockey, and these numbers represent real plumbing jobs.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating in the scene, as if viewed through an augmented reality HUD):

IMPORTANT: All UI panels must be LARGE -- each panel should be approximately 25-30% of the image width. Use heavy glassmorphism with visible frosted-glass blur behind each panel. Border glow should be prominent and clearly visible -- a 3-4px glowing border, not a faint hint.

ELEMENT 1 -- GENERIC AGENCY RESULTS PANEL (floating to the left side of the scene, above the desk):
A large dark semi-transparent rounded rectangle panel (heavy glassmorphism -- visible frosted blur) with a BRIGHT, prominent MUTED RED glowing border (3-4px solid glow). Inside, generous padding:
- Header in muted red text, bold, 18pt equivalent: "Generic Agency"
- A thin muted red horizontal rule
- Large white bold text: "1.8x ROI"
- White text: "Revenue: $9,000/mo"
- White text: "Profit: $4,000/mo"
- A muted amber budget pill at the bottom with white text: "$5K/mo budget"
- A small red downward arrow icon beside the ROI number
The panel appears dim, cold, and stagnant -- representing the old reality.

ELEMENT 2 -- SPECIALIST RESULTS PANEL (floating to the right side of the scene, above the desk):
A large dark semi-transparent rounded rectangle panel (heavy glassmorphism -- visible frosted blur) with a BRIGHT, prominent amber-gold glowing border (3-4px solid glow). Inside, generous padding:
- Header in amber-gold text, bold, 18pt equivalent: "Industry Specialist"
- A thin amber-gold horizontal rule
- Large white bold text: "10.2x ROI"
- White text: "Revenue: $51,000/mo"
- White text: "Profit: $46,000/mo"
- A muted amber budget pill at the bottom with white text: "$5K/mo budget"
- A small green upward arrow icon beside the ROI number
The panel is bright, warm, and dominant -- radiating success and confidence.

A solid black vertical divider line, 4px wide, runs between Elements 1 and 2 from top to bottom of the panels to visually separate them.

ELEMENT 3 -- MONTHLY GAP BADGE (floating below both panels, centered between them):
A pill-shaped badge with amber-gold background and near-black charcoal bold text: "+$42,000/mo -- Same Budget"

Thin amber-gold curved lines with small glowing data dots flow from the tablet screen upward to both floating panels, connecting the data source to the visual comparison.

CAMERA: 50mm lens equivalent, shot from slightly across the desk at the contractor's eye level. Medium shot framing him from chest up with the desk surface, tools, and the dispatch whiteboard behind him visible. Moderate depth of field -- the whiteboard is slightly soft but the technician names and filled slots are recognizable, reinforcing the "busy 7-truck operation" story. The floating UI panels are rendered crisp and sharp on their own focal plane.

LIGHTING: Warm afternoon sunlight streaming through the office window creates golden highlights on the desk surface, the contractor's face, and the pipe wrench. Overhead office lighting provides secondary warm fill. The tablet screen casts warm amber-gold uplight on his chin. The GENERIC panel on the left emits a faint cool reddish glow. The SPECIALIST panel on the right emits warm amber-gold glow that blends with the afternoon sunlight. The right side of the scene glows warmer than the left -- the visual split reinforces the transformation from failure to success.

COLOR PALETTE: Warm golden afternoon tones, charcoal gray of his polo, brass metallic from the SharkBite fittings, dry-erase marker colors on the whiteboard (reds, blues, greens), muted red from the GENERIC panel, bright amber-gold from the SPECIALIST panel. The amber-gold dominates the right side of the frame and harmonizes with the golden sunlight -- success and warmth are visually synonymous.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

HEADLINE BACKGROUND: A horizontal gradient bar spanning the full width of the image, positioned at the top. The gradient goes from LEFT to RIGHT: solid near-black charcoal (100% opacity) on the left edge, fading smoothly to fully transparent (0% opacity) on the right edge. The gradient bar is approximately 80-90px tall, covering just the headline area.

Line 1 (HEADLINE): "Same $5K Budget. 10.2x ROI." -- white, approximately 36 point, clean modern geometric sans-serif bold, positioned inside the gradient bar, left-aligned with 40px padding from the left edge, vertically centered within the gradient bar

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: Quiet triumph. Vince spent two years paying a generic agency $5K/month and barely breaking even at 1.8x ROI. Now, three months after switching to a specialist, the same $5K produces 10.2x ROI -- $51K in revenue instead of $9K. He is not celebrating wildly; he is sitting in his office, looking at the numbers, absorbing the reality that he hired two new techs to handle the demand. The filled dispatch board behind him proves it -- the business is humming. The before/after panels make the gap impossible to dismiss: $42,000 per month, $504,000 per year, same budget. A contractor scrolling LinkedIn does this math instantly and thinks: "If I am getting 1.8x from my agency, what would 10.2x do for my business? I need to know."
```

---

### Regeneration Notes

- **If GENERIC/SPECIALIST panels merge or overlap:** Add "The GENERIC AGENCY panel and INDUSTRY SPECIALIST panel are TWO COMPLETELY SEPARATE floating cards with a clear 4px solid black vertical line between them. They do NOT overlap, blend, or merge. There is visible space between them."
- **If panel text is too dense to render cleanly:** Simplify each panel to THREE lines: the header ("Generic Agency" / "Industry Specialist"), the ROI number ("1.8x ROI" / "10.2x ROI"), and the revenue ("$9,000/mo" / "$51,000/mo"). Remove the profit lines and budget pills.
- **If the monthly gap badge text garbles:** Simplify to just "+$42,000/mo" or remove entirely. The two panels carry the comparison.
- **If the dispatch whiteboard is not visible:** This is important context -- add "LARGE whiteboard filling most of the wall behind the contractor, clearly showing 7 rows of technician names with job assignments written in colored dry-erase marker. Most time slots are FILLED -- this is a busy, successful operation."
- **If the office looks too corporate or generic:** Add "Plumbing-specific clutter on the desk: a 14-inch pipe wrench, a roll of yellow Teflon tape, brass SharkBite fittings, van keys on a carabiner, and a few PVC elbow joints. The floor has a pair of scuffed steel-toed work boots. This is a TRADE BUSINESS office, not a corporate suite."
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.
- **If the headline gradient bar does not render:** Fall back to "semi-transparent dark gradient overlay behind the headline text for readability."

---
---

## Prompt 3 -- "Generic vs. Specialist Dashboard"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

The data story concept. An overhead shot looking down at a contractor's desk -- his tablet shows a Google Ads dashboard, and two massive floating comparison panels dominate the scene. The left panel exposes the generic agency's approach (50+ clients across industries, broad keywords, vanity metrics, no conversion tracking). The right panel reveals the specialist approach (200+ plumbing clients, service-specific keywords, booked-job tracking, geo-fencing). Trade tools scattered on the desk ground the data in the contractor's reality. The checklist format with red X marks and green checkmarks makes the difference immediately scannable. This is a visual audit of what generalist vs. specialist actually looks like at the campaign level.

**Visual Impact:** High
**Priority:** 3

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic overhead shot looking STRAIGHT DOWN at a contractor's desk surface. Bird's eye view, camera looking STRAIGHT DOWN. Square format, 1:1 aspect ratio. The desk is a worn wooden surface with scratches, coffee ring stains, and pen marks -- a real working desk.

Visible on the desk surface, arranged naturally (not staged):
- A tablet device lying face-up in the lower-center of the frame, held by a man's right hand. The hand is rough and calloused with visible pipe dope residue, a small cut healing on one knuckle, and a faded tan line from a watch -- a tradesman's hand.
- His left hand rests flat on the desk beside a printed monthly marketing report with "MONTHLY PERFORMANCE" visible as the header, charts and graphs printed on it
- A 10-inch pipe wrench lying diagonally across the upper portion of the desk
- A pair of worn leather work gloves tossed casually beside the pipe wrench
- Four or five brass compression fittings and elbows scattered near the invoices
- A roll of yellow Teflon tape partially unrolled
- A section of copper type-L pipe, about 8 inches long, with green patina
- A half-empty coffee mug with brown residue inside
- A crumpled supply house receipt
- Two red and blue PEX tubing samples, about 6 inches each
- The edge of a laptop keyboard visible in the upper-left corner of the frame
- A yellow legal pad with handwritten notes visible (dollar amounts, circled numbers)

FOCAL POINT ELEMENT: The tablet screen is brightly illuminated showing a Google Ads campaign interface with a performance graph. The screen casts warm light onto the desk surface and the man's rough fingers. The marketing report beside his left hand -- with its printed charts of "impressions" and "clicks" -- is the old way; the tablet showing real campaign data is the new way.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating above the desk scene, as if viewed through an augmented reality HUD looking down):

IMPORTANT: All UI panels must be LARGE -- each panel should be approximately 25-30% of the image width. Use heavy glassmorphism with visible frosted-glass blur behind each panel. Border glow should be prominent and clearly visible -- a 3-4px glowing border, not a faint hint.

ELEMENT 1 -- GENERIC AGENCY APPROACH PANEL (floating above the left half of the desk):
A large dark semi-transparent rounded rectangle panel (heavy glassmorphism -- visible frosted blur) with a BRIGHT, prominent MUTED RED glowing border (3-4px solid glow). Inside, generous padding:
- Header in muted red text, bold, 18pt equivalent: "Generic Agency"
- A thin muted red horizontal rule
- A checklist with LARGE red X icons (not small) beside each line:
  - "80+ clients, 15 industries" with red X -- white text, 14pt equivalent
  - "Same playbook for everyone" with red X -- white text
  - "Broad keywords, no negatives" with red X -- white text
  - "Reports: impressions only" with red X -- white text
- Below the checklist, a muted red status badge: "ROI: 1.8x"
The panel feels like a failing report card -- every line marked wrong.

ELEMENT 2 -- SPECIALIST APPROACH PANEL (floating above the right half of the desk):
A large dark semi-transparent rounded rectangle panel (heavy glassmorphism -- visible frosted blur) with a BRIGHT, prominent amber-gold glowing border (3-4px solid glow). Inside, generous padding:
- Header in amber-gold text, bold, 18pt equivalent: "Plumbing Specialist"
- A thin amber-gold horizontal rule
- A checklist with LARGE green filled-circle checkmark icons beside each line:
  - "200+ plumbing/HVAC clients" with green checkmark -- white text, 14pt equivalent
  - "Service-specific ad groups" with green checkmark -- white text
  - "Geo-fenced, negative keywords" with green checkmark -- white text
  - "Tracks booked jobs, not clicks" with green checkmark -- white text
- Below the checklist, an amber-gold status badge: "ROI: 10.2x"
The panel feels like a perfect scorecard -- every line correct, glowing with authority.

A solid black vertical divider line, 4px wide, runs between Elements 1 and 2 from top to bottom of the panels to visually separate them.

ELEMENT 3 -- RESULT COMPARISON PILL (floating below both panels, centered):
A pill-shaped badge with amber-gold background and near-black charcoal bold text: "$504,000/yr difference"

Thin amber-gold curved lines with small glowing data dots flow from the tablet screen upward to both floating panels, as if the campaign data is being analyzed and split into two approaches.

CAMERA: Directly overhead, bird's eye view, looking STRAIGHT DOWN at the desk surface. Equivalent to an 85mm lens at f/2.0. The tablet screen, the man's hands, and the marketing report are in sharp focus. The edges of the desk (pipe wrench, laptop corner, gloves, PEX tubing) are in slightly softer focus, creating a natural vignette. The floating UI panels are rendered crisp and sharp on their own focal plane above the desk scene.

LIGHTING: A single warm desk lamp casting directional light from the upper-left corner, creating defined shadows of the pipe wrench, fittings, and the man's hands across the desk surface. The tablet screen provides a secondary warm glow from below. The GENERIC panel emits a muted reddish glow and the SPECIALIST panel emits amber-gold glow, mixing with the desk lamp light. The overall image is moody and contrasty -- deep shadows in corners, warm highlights on brass fittings and copper pipe.

COLOR PALETTE: Warm wood tones of the desk, brass and copper metallic from fittings and pipe, red and blue from PEX tubing samples providing trade-authentic color, muted red from the GENERIC panel, bright amber-gold from the SPECIALIST panel, yellow from Teflon tape. The checklist icons -- red X versus green checkmark -- create an instantly scannable visual shorthand: wrong versus right, failure versus success, generalist versus specialist.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

HEADLINE BACKGROUND: A horizontal gradient bar spanning the full width of the image, positioned at the top. The gradient goes from LEFT to RIGHT: solid near-black charcoal (100% opacity) on the left edge, fading smoothly to fully transparent (0% opacity) on the right edge. The gradient bar is approximately 80-90px tall, covering just the headline area.

Line 1 (HEADLINE): "Your Agency vs. A Specialist." -- white, approximately 36 point, clean modern geometric sans-serif bold, positioned inside the gradient bar, left-aligned with 40px padding from the left edge, vertically centered within the gradient bar

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: A forensic audit. The overhead angle creates an omniscient, clinical perspective -- we are looking down at all the evidence: the marketing report full of vanity metrics, the tablet showing real campaign data, the pipe wrench and brass fittings that remind us whose money this is. The side-by-side panels function like a visual comparison chart: every line the generic agency gets wrong, the specialist gets right. The red X marks are gut punches; the green checkmarks are answers. The $504,000/yr pill at the bottom quantifies the cost of choosing wrong. A contractor scrolling LinkedIn sees this and immediately starts mentally checking off which column their current agency falls into -- and every red X they recognize is a reason to comment SWITCH.
```

---

### Regeneration Notes

- **If the overhead angle renders as eye-level instead:** Add "Bird's eye view, camera looking STRAIGHT DOWN at the desk from directly above. The desk surface fills the entire frame. We see the tops of the hands, the tops of the tools, the tablet screen face-up. There is NO horizon line, NO wall visible -- only the desk surface and objects on it."
- **If the two checklist panels merge or overlap:** Add "The GENERIC AGENCY panel and PLUMBING SPECIALIST panel are TWO COMPLETELY SEPARATE floating cards with a clear 4px solid black vertical line between them. They do NOT overlap, blend, or merge."
- **If checklist text inside panels garbles:** Simplify each panel to just TWO lines: "80+ clients, 15 industries" with red X and "ROI: 1.8x" for GENERIC; "200+ plumbing clients" with green checkmark and "ROI: 10.2x" for SPECIALIST. Remove other checklist items.
- **If the result comparison pill garbles:** Simplify to "$504K/yr gap" or remove entirely.
- **If the desk surface looks too clean:** Add "The desk is WORN and STAINED -- coffee rings, pen marks, scratches in the wood grain, a light film of drywall dust. Brass fittings have tarnish and thread compound residue. The copper pipe section has authentic green patina."
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.
- **If the headline gradient bar does not render:** Fall back to "semi-transparent dark gradient overlay behind the headline text for readability."

---
---

## Prompt 4 -- "The Yoga Studio Playbook"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

The system-in-action concept with a comedic twist. A plumbing contractor stands at a job site -- a residential basement with exposed pipes, a water heater, and concrete floor -- holding a printed marketing plan that is hilariously wrong for his business. Floating UI panels expose the absurdity: the "strategy document" his generic agency sent him contains keywords and tactics for yoga studios, dental offices, and restaurants right alongside his plumbing company. A floating panel shows the one-size-fits-all playbook being applied to wildly different industries. The contractor's expression is a mix of bewilderment and frustration -- he is literally holding proof that his agency does not know what he does. The basement trade setting makes the disconnect between the marketing plan and his reality viscerally obvious.

**Visual Impact:** Medium
**Priority:** 4

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic scene inside a residential basement utility room. Square format, 1:1 aspect ratio. A male plumbing contractor in his late 30s stands in the utility room, holding a multi-page printed marketing report in both hands at chest height, looking at the document with an expression of bewildered disbelief -- eyebrows raised, mouth slightly open, the universal look of "are you serious?" He wears a worn dark blue work shirt with rolled-up sleeves, revealing forearms with pipe dope stains and a few scratches. A headlamp is pushed up on his forehead (turned off -- the overhead work lights are on).

The basement utility room is authentically detailed: a 50-gallon gas water heater to his left with copper supply lines, a gas flex connector visible, and a TPR discharge pipe. Exposed copper pipes and PEX tubing (red and blue lines) run along the floor joists above his head. A condensate drain line from an HVAC unit is visible. Concrete floor with a floor drain. A set of channel-lock pliers with blue handles hangs from his belt loop. His tool bag sits on the concrete floor beside him -- open, with the handles of a pipe wrench, a tubing cutter, and a torch visible. A few brass fittings and a roll of solder sit on top of the water heater. The environment screams "plumbing" -- this is a world that has nothing to do with yoga studios or dental offices.

FOCAL POINT ELEMENT: The printed marketing report he holds in both hands. The pages are visible, and the top page shows printed text that is partially legible -- a list of "client accounts" or "campaign strategies" with industry names visible. The report is the physical manifestation of the generic agency's indifference. His rough, pipe-dope-stained hands holding this clean, printed corporate document create visual irony -- the disconnect between his reality and his agency's understanding of it.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating in the scene, as if viewed through an augmented reality HUD):

IMPORTANT: All UI panels must be LARGE -- each panel should be approximately 25-30% of the image width. Use heavy glassmorphism with visible frosted-glass blur behind each panel. Border glow should be prominent and clearly visible -- a 3-4px glowing border, not a faint hint.

ELEMENT 1 -- GENERIC CLIENT ROSTER PANEL (floating to the upper-right of the scene, large and prominent):
A large dark semi-transparent rounded rectangle panel (heavy glassmorphism -- visible frosted blur) with a BRIGHT, prominent MUTED RED glowing border (3-4px solid glow). Inside, generous padding:
- Header in muted red text, bold, 18pt equivalent: "Your Agency's Clients"
- A thin muted red horizontal rule
- A list of client types in white text with small industry icons beside each:
  - "Sunrise Yoga Studio"
  - "Bright Smile Dental"
  - "Luigi's Italian Kitchen"
  - "YOUR Plumbing Co."
  - "Pet Paradise Grooming"
- Below the list, muted stone gray italic text: "Same strategy for all 5."
The panel reveals the absurdity -- a plumbing company getting the same playbook as a yoga studio.

ELEMENT 2 -- ONE-SIZE-FITS-ALL STRATEGY PANEL (floating to the upper-left of the scene):
A large dark semi-transparent rounded rectangle panel (heavy glassmorphism -- visible frosted blur) with a BRIGHT muted red glowing border (3-4px). Inside:
- Header in muted red text, bold: "Your 'Custom' Strategy"
- A thin muted red horizontal rule
- White text with red X icons:
  - "Generic homepage traffic" with red X
  - "Broad-match keywords" with red X
  - "Monthly impressions report" with red X
- Below, an amber-gold text line as contrast: "No service-specific pages"
- Muted red badge at bottom: "ROI: 1.8x"

ELEMENT 3 -- REALITY CHECK PILL (floating below both panels, centered):
A pill-shaped badge with amber-gold background and near-black charcoal bold text: "50+ clients. 0 plumbing expertise."

Thin amber-gold curved lines with small glowing data dots flow from the marketing report pages upward to both floating panels, as if the document's contents are being analyzed and exposed.

CAMERA: 35mm lens equivalent, shot from slightly below the contractor's eye level (looking up at him slightly -- he is standing and we are at chest height). Medium shot framing him from waist up with the basement utility room visible behind and above him -- the exposed pipes, PEX tubing, and water heater provide the trade context. The marketing report in his hands is in sharp focus. Moderate depth of field -- the water heater and pipe runs are slightly soft but clearly recognizable. The floating UI panels are rendered crisp and sharp on their own focal plane.

LIGHTING: Overhead fluorescent work lights in the basement casting flat, cool white light -- the unglamorous reality of a plumber's workspace. The marketing report pages catch the light and appear bright white against his dark work shirt. The floating UI panels emit muted reddish glow from both sides, casting faint crimson light onto the copper pipes and his face. The fluorescent work-light aesthetic is deliberately unflattering -- this is not a marketing photo, this is a real basement.

COLOR PALETTE: Cool fluorescent white of the work lights, warm copper and brass tones from the pipes and fittings, red and blue from PEX tubing running overhead, dark blue of his work shirt, muted red from both UI panels, bright white of the marketing report pages. The copper pipes and brass fittings provide the trade-authentic color palette that clashes with the corporate marketing report -- visual proof that his agency does not understand his world.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

HEADLINE BACKGROUND: A horizontal gradient bar spanning the full width of the image, positioned at the top. The gradient goes from LEFT to RIGHT: solid near-black charcoal (100% opacity) on the left edge, fading smoothly to fully transparent (0% opacity) on the right edge. The gradient bar is approximately 80-90px tall, covering just the headline area.

Line 1 (HEADLINE): "Same Playbook as a Yoga Studio." -- white, approximately 36 point, clean modern geometric sans-serif bold, positioned inside the gradient bar, left-aligned with 40px padding from the left edge, vertically centered within the gradient bar

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: Absurd recognition. The disconnect is visceral: a plumber standing in a basement surrounded by copper pipes, PEX tubing, a water heater, channel-locks on his belt -- holding a marketing plan that treats his business the same as a yoga studio. The floating panels expose the full roster of his agency's clients and the cookie-cutter strategy they all receive. Every contractor has suspected their agency does not really understand their business; this image makes that suspicion concrete and visual. The basement setting is the punchline -- no yoga studio owner has ever stood here. A contractor scrolling LinkedIn sees this and laughs darkly: "My agency ran the same Facebook ad template for me that they ran for a dog groomer. I am paying $5K a month for this."
```

---

### Regeneration Notes

- **If the client roster panel text garbles:** Simplify to just THREE client names: "Yoga Studio" and "Dental Office" and "YOUR Plumbing Co." with a muted red line below: "Same strategy for all." Remove the other client names and italic text.
- **If the one-size-fits-all strategy panel garbles:** Simplify to just TWO lines: "Generic homepage traffic" with red X and "Broad-match keywords" with red X. Remove the amber-gold text and ROI badge.
- **If the reality check pill garbles:** Simplify to "0 plumbing expertise" or remove entirely. The client roster panel carries the message.
- **If connecting data lines fail:** Remove them entirely. Panels floating near the marketing report still read as analyzing its contents.
- **If the basement looks too clean or staged:** Add "The basement has real working conditions -- a few cobwebs in the floor joist bays above, a slight film of dust on the water heater, drywall dust on the concrete floor near the base of the wall, and a small puddle near the floor drain. The fluorescent lighting is harsh and flat -- this is a WORK ENVIRONMENT."
- **If the headline text is too long:** Shorten to "Same Playbook. Every Client." at 36 point.
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.
- **If the headline gradient bar does not render:** Fall back to "semi-transparent dark gradient overlay behind the headline text for readability."

---
---

## Quick Reference Summary

| # | Concept | Visual Impact | Priority | Key Risk | Logo File |
|---|---------|---------------|----------|----------|-----------|
| 1 | The $30K Receipt | High | 1 | Vanity metrics panel text + late-night kitchen mood | logo-white.png |
| 2 | Same Budget, Different Results | High | 2 | Before/After panel separation + dispatch whiteboard | logo-white.png |
| 3 | Generic vs. Specialist Dashboard | High | 3 | Overhead angle + 4-line checklist text in panels | logo-white.png |
| 4 | The Yoga Studio Playbook | Medium | 4 | Client roster text legibility + basement lighting | logo-white.png |

## Generation Commands

```bash
# Generate the recommended concept (The $30K Receipt)
python scripts/generate-post-image.py --file linkedin/posts/thursday-agency-switch/image-prompts.md --concept 1 --output linkedin/posts/thursday-agency-switch/images

# Generate Same Budget, Different Results
python scripts/generate-post-image.py --file linkedin/posts/thursday-agency-switch/image-prompts.md --concept 2 --output linkedin/posts/thursday-agency-switch/images

# Generate Generic vs. Specialist Dashboard
python scripts/generate-post-image.py --file linkedin/posts/thursday-agency-switch/image-prompts.md --concept 3 --output linkedin/posts/thursday-agency-switch/images

# Generate The Yoga Studio Playbook
python scripts/generate-post-image.py --file linkedin/posts/thursday-agency-switch/image-prompts.md --concept 4 --output linkedin/posts/thursday-agency-switch/images

# Generate all concepts
python scripts/generate-post-image.py --file linkedin/posts/thursday-agency-switch/image-prompts.md --all --output linkedin/posts/thursday-agency-switch/images

# Generate with 2 variations (pick the best)
python scripts/generate-post-image.py --file linkedin/posts/thursday-agency-switch/image-prompts.md --concept 1 --variations 2 --output linkedin/posts/thursday-agency-switch/images
```
