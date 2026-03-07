# Speed-to-Lead Post -- Image Prompts (Final Output, No Post-Production)

**Post:** "The first contractor to respond wins 35-50% of leads. Most plumbers take 4+ hours."
**Topic:** Speed-to-lead / response time as the invisible revenue killer for plumbing & HVAC companies -- 5-minute response window, lost revenue math, conversion data
**Image dimensions:** 1200 x 1200 px (1:1 square)
**CTA keyword:** SPEED

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

## Prompt 1 -- "The Crawl Space Text-Back"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

This is a photorealistic scene grounded in the plumbing contractor's real world. It shows LexumSoft's automated text-back system in action -- the phone handling a lead while the plumber physically cannot answer. Gemini handles this well because the scene is a single environment (crawl space) with one key focal point (the phone screen). The phone screen text is the highest-risk element but is kept to two short elements for rendering success.

---

### Prompt

```
IMPORTANT: This is a PHOTOREALISTIC scene grounded in the plumbing/HVAC contractor's real world. Every material, tool, and environment detail must be authentic to the trades. This image must pass the "contractor recognition test" -- a plumber scrolling LinkedIn should immediately think "that's my life." The scene also shows a specific digital marketing system (automated text-back) working in real time.

SCENE AND ENVIRONMENT: A cinematic, photorealistic scene shot from ground level inside a residential crawl space. Square format, 1:1 aspect ratio. A plumber is lying on his back in a tight crawl space, working directly above his chest. His arms are raised, both hands gripping a large pipe wrench clamped onto a copper sweat joint overhead. His forearms and knuckles are visibly dirty -- pipe dope, copper residue, grime, sweat. These are working hands, not clean stock photo hands. He wears a faded navy blue work shirt with the sleeves rolled up past the elbows. A bright LED headlamp strapped to his forehead casts a harsh directional beam upward onto the copper pipes and floor joists above, creating dramatic shadows across the wooden structure.

The crawl space environment is authentic and detailed: exposed wooden floor joists overhead with spider webs in the corners, fiberglass insulation (pink batts) stuffed between some joists, a white vapor barrier on the ground beneath the plumber, copper supply lines and white PEX tubing running along the joists, cobwebs, a slight dust haze in the headlamp beam. The space is tight -- the plumber's chest is approximately 18 inches from the joists above. His toolbox or tool bag sits beside his left hip, partially open, with a roll of solder and a propane torch tip visible.

THE PHONE -- THE FOCAL POINT: His smartphone lies face-up on the white vapor barrier approximately 18 inches from his right hip, at the bottom-right area of the frame. The phone screen is brightly illuminated and is the single most important element in the entire image. The screen glows with warm amber-gold light that contrasts dramatically against the cool, dim crawl space environment. The amber phone glow casts a small warm reflection on the vapor barrier beneath it.

THE PHONE SCREEN CONTENT (must be clearly legible): The phone displays an SMS messaging interface on a dark background. The most recent message is an outgoing text (shown in an amber-gold or green message bubble, aligned to the right side of the screen) that reads:

"Thanks for reaching out! We received your request and a team member will call you within the hour."

Above this message, a notification banner at the top of the phone screen reads: "New Lead — Water Heater Replacement"

Below the outgoing message, a small timestamp reads: "Sent — 47 seconds ago"

The phone screen content tells the story: a new lead came in via web form, and the system automatically sent a personalized text-back in 47 seconds -- while the plumber is physically unable to answer because he is on his back in a crawl space.

CAMERA: Ground-level perspective, as if the camera is lying on the vapor barrier beside the plumber, looking slightly upward. Equivalent to a 24mm wide-angle lens at f/2.8. The phone screen and the plumber's dirty hands on the pipe wrench are both in the focus zone. The crawl space ceiling (joists, pipes, insulation) is in slightly softer focus above. Shallow depth of field with cinematic bokeh on the background details. The wide angle exaggerates the tight, claustrophobic feeling of the crawl space.

LIGHTING: The primary light source is the plumber's LED headlamp, casting a harsh white beam upward onto the copper pipes and creating dramatic shadows on the joists. The secondary light source is the phone screen's warm amber-gold glow, illuminating the vapor barrier and casting a small warm pool of light in the otherwise cool environment. A faint cool ambient fill simulates light leaking in from the crawl space access opening somewhere behind the camera. The overall image is low-key with high contrast -- dark shadows punctuated by the headlamp beam and the phone glow.

COLOR PALETTE: Cool blue-gray ambient shadows in the crawl space, warm copper tones on the pipes, harsh white from the headlamp, warm amber-gold from the phone screen. The phone is the ONLY warm amber element in the lower portion of the frame, making it the undeniable focal point. The copper pipes above catch warm tones from the headlamp but the dominant crawl space atmosphere is cool and dim.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

In the upper-left area of the image, positioned over the darker shadow area of the crawl space ceiling where text will read clearly, two lines of clean white text:

Line 1 (bold, approximately 40 point relative to 1200px canvas, DM Sans Bold or clean geometric sans-serif): "You're under the house."
Line 2 (bold, same style, same size, directly below): "Your system is closing the next job."

In the lower-left area, small amber-gold text at approximately 18 point: "Auto text-back in 60 seconds."

BRAND BAR (bottom 15% of the frame): A solid opaque horizontal bar spans the full width across the bottom 15 percent. Filled with near-black charcoal. A thin 2-pixel amber-gold accent line runs across the full width at the very top edge of this bar.

Inside the brand bar, the LexumSoft logo (attached image) is placed in the bottom-left corner, approximately 40-50 pixels tall, rendered in white on the dark charcoal background. The logo is a geometric origami bird shape with the wordmark "LexumSoft" beside it -- reproduce it faithfully from the attached reference.

In the bottom-right corner of the bar, small muted stone-gray text reads: "lexumsoft.com" at approximately 16 point, right-aligned with 24 pixels of padding from edges.

MOOD: Visceral recognition meets quiet confidence. The crawl space is uncomfortable, real, gritty -- every plumber has been here. But the glowing phone on the ground tells a different story: even in this moment, the business is running. The system is working. The lead is being handled. The contractor does not need to choose between finishing the job and losing a customer. This image should make a plumber feel both seen (that's my reality) and inspired (I want that system).
```

---

### Regeneration Notes

- **If phone screen SMS text garbles:** Simplify to just the notification banner ("New Lead — Water Heater") and the timestamp ("Auto-replied 47s ago"). Remove the full SMS message.
- **If crawl space environment is too dark to read text overlay:** Add "A subtle dark gradient overlay covers the upper-left 30% of the image to ensure white text reads clearly against the crawl space ceiling."
- **If the plumber's body position is awkward or unrealistic:** Simplify to "A plumber's dirty hands and forearms are visible reaching upward to work on copper pipes in a crawl space. The rest of his body is out of frame. Only the hands, arms, and the phone beside him are visible."
- **If the scene renders as too clean/stock-photo:** Add "The crawl space is DIRTY and REAL -- dust, cobwebs, stains on the vapor barrier, scratched copper fittings, worn tool handles. This is not a staged photo. This is mid-job."

---
---

## Prompt 2 -- "Two Homeowners, Two Outcomes"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

Split-screen composition showing both sides of the speed-to-lead story: the homeowner who got a fast automated response vs. the one who waited 4 hours. Gemini handles split compositions well when the divider and color temperature difference are clearly described. The phone screen text on the right half is the key risk element.

---

### Prompt

```
IMPORTANT: This is a PHOTOREALISTIC split-screen composition showing two contrasting outcomes of the same event -- a homeowner submitting a plumbing service request. The left side shows what happens when the contractor has NO automated system (lead lost). The right side shows what happens when the contractor has LexumSoft's automated text-back system (lead won). Every detail must be authentic to the home services industry.

LAYOUT: Square format, 1:1 aspect ratio. The image is divided into two halves by a clean vertical split at the exact center. A thin 3-pixel amber-gold vertical line runs from the top of the image to where the brand bar begins (approximately 85% down). The left and right halves have dramatically different color grading but identical image quality and photorealistic rendering.

LEFT HALF -- "THE LOST LEAD" (cold, desaturated, blue-gray color grading):

A photorealistic scene inside a residential utility room or basement. A homeowner -- a woman in her 40s, wearing a casual t-shirt and jeans -- stands near a standard residential tank water heater. The water heater is clearly leaking: a pool of water on the concrete basement floor, two or three bath towels thrown down to absorb the water, one towel visibly soaked and darkened. The woman is looking at her phone with an expression of visible frustration and impatience -- brow slightly furrowed, mouth set. Her phone screen shows a web form submission confirmation that reads "Request Submitted" with a timestamp visible showing it was submitted hours ago. No response has come.

The environment is lit with cold, harsh overhead fluorescent tube lighting typical of a residential basement. The walls are unfinished drywall or cinder block. A furnace or HVAC unit is partially visible beside the water heater. Exposed pipes run along the ceiling. The entire left half is color-graded in cold steel blue-gray with desaturated tones -- all warmth has been drained from this side.

A text element on the left half: In the upper portion of the left panel, bold white text reads: "4h 17m. No response." at approximately 28 point, clean geometric sans-serif. Below it, smaller muted gray text: "She already booked your competitor." at approximately 16 point.

RIGHT HALF -- "THE WON LEAD" (warm, amber-tinted, inviting):

A photorealistic scene inside a residential kitchen. A homeowner -- a man in his 30s, wearing a casual button-down shirt -- is sitting at a kitchen table, holding his phone, looking visibly relieved and nodding slightly. His phone screen shows an SMS conversation with an incoming message (in an amber-gold or green bubble) that reads:

"Hi! Thanks for reaching out. We received your request and a team member will call you within the hour."

The timestamp on the message shows: "47 seconds ago"

Through the kitchen window behind him, a white contractor's service van is visible parked at the curb or pulling into the driveway. The van is slightly out of focus but clearly recognizable as a work vehicle. The kitchen is warm-lit -- afternoon sun coming through the window, warm wood tones on the table, a coffee mug on the table. The entire right half is color-graded in warm amber-gold tones with rich, inviting warmth.

A text element on the right half: In the upper portion of the right panel, bold amber-gold text reads: "47 seconds. Auto text-back." at approximately 28 point. Below it, smaller white text: "Job booked before your competitor called." at approximately 16 point.

CENTER BADGE: At the vertical center of the image, straddling the amber-gold divider line, a small rounded rectangle badge with near-black charcoal fill and a 1-pixel amber-gold border contains white text reading: "Same lead. Different system." at approximately 14 point. The badge is approximately 200 pixels wide and 40 pixels tall.

CAMERA AND QUALITY: Both halves are shot at the same camera distance and angle -- medium shot, approximately equivalent to a 50mm lens at f/2.8. Both homeowners are framed from approximately waist-up. Both halves have the same level of photorealistic detail, the same shallow depth of field on background elements. The ONLY differences are the color grading, the expressions, and the phone screen content.

COLOR CONTRAST: The left-to-right color temperature shift should be dramatic and immediately readable. Left is COLD: steel blue, desaturated, lifeless fluorescent light, drained of all warmth. Right is WARM: amber-gold, saturated, natural afternoon sunlight, rich with life and comfort. This color contrast IS the argument -- it should be visible even as a thumbnail in the LinkedIn feed.

BRAND BAR (bottom 15%): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at top edge. LexumSoft logo (attached image) in bottom-left, approximately 40-50 pixels tall, white on dark. "lexumsoft.com" in muted stone gray, bottom-right, 16 point, right-aligned with 24px padding.

MOOD: The left half is dread and missed opportunity -- a real person dealing with a real emergency who is being ignored. The right half is relief and trust -- a real person who got a fast response and is already on the path to resolution. The van arriving seals it. Together, the two halves make an argument that cannot be unseen: your system determines which side of this image your customers end up on.
```

---

### Regeneration Notes

- **If the split merges into one scene:** Add "This is a graphic design split-screen diptych. The left and right halves are two COMPLETELY SEPARATE photographic scenes placed side by side with a clear vertical amber-gold divider line between them."
- **If the phone screen text garbles on either side:** LEFT: Simplify to just "No Response" with a red X icon. RIGHT: Simplify to just "Auto-replied in 47s" with a green checkmark.
- **If the center badge doesn't render:** Remove it; the color contrast and text overlays carry the message without it.
- **If the water heater leak doesn't render convincingly:** Add "Water is pooling on the concrete floor around the base of the water heater. Multiple soaked towels are on the floor absorbing the water. The leak is VISIBLE and OBVIOUS."
- **If the service van through the window isn't visible:** Remove the van; the warm color grading and the SMS on the phone screen are sufficient to tell the "won lead" story.

---
---

## Prompt 3 -- "The Dashboard on the Truck Seat"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

Overhead shot into a contractor's truck showing the prioritized callback queue on a mounted phone/tablet. The truck interior details (tools, fittings, clipboard) are what make this image niche-authentic. The phone screen interface is the focal point showing LexumSoft's system. Gemini handles dashboard/UI rendering well, and the overhead angle simplifies the composition.

---

### Prompt

```
IMPORTANT: This is a PHOTOREALISTIC overhead scene of a plumbing/HVAC contractor's work truck interior. The image shows the real, lived-in workspace of a tradesman -- tools, parts, paperwork -- alongside a modern digital lead management system on a phone screen. This bridges the contractor's physical world with LexumSoft's digital system. Every detail must be authentic to the trades.

SCENE AND CAMERA: An overhead shot looking down at approximately 45 degrees through the open driver's-side door of a white contractor work truck or van. Square format, 1:1 aspect ratio. The camera is positioned just outside and above the open door, looking down and slightly inward at the truck's front cabin. The driver's seat is visible in the lower-left. The passenger seat occupies the center-right of the frame. The dashboard and windshield are visible in the upper portion.

THE PASSENGER SEAT -- ORGANIZED CHAOS: The passenger seat contains the real daily life of a contractor, arranged naturally (not staged):

- A metal clipboard with a partially visible handwritten invoice or work order, pen clipped to the top
- A roll of yellow Teflon tape (PTFE tape) sitting on the clipboard
- Two or three brass fittings (elbows, couplings) loose on the seat
- A pair of channel-lock pliers (Channellock brand blue handles) lying across the invoice
- A small coil of copper wire or a copper stub-out

These items are scattered naturally, the way a plumber actually tosses parts and tools on the passenger seat between jobs. Not arranged, not symmetrical -- real.

THE DASHBOARD AND DRIVER AREA:
- A pair of worn leather work gloves tossed on the dashboard
- A travel coffee mug (stainless steel or insulated) in the cup holder between the seats
- A fluorescent yellow hi-vis safety vest draped over the driver's headrest
- The steering wheel is partially visible with a sun-faded cover

THE PHONE SCREEN -- HERO FOCAL POINT: A smartphone is mounted in a phone holder clipped to the dashboard air vent or mounted on a suction cup near the windshield. The phone screen is illuminated and clearly legible. It displays a clean, modern, dark-themed lead management dashboard interface with amber-gold accent colors. The screen shows:

Header at top of screen: "Lead Queue" in white text on a dark background

Three lead entries listed vertically, each as a card or row:

Entry 1 (marked with a bright amber-gold priority dot):
"Sarah M. — Water Heater — URGENT"
"Auto-texted 47s ago · Call back by 10:15 AM"

Entry 2 (marked with a smaller amber-gold dot):
"Mike R. — AC Install — Quote"
"Auto-texted 2m ago · Call back by 10:30 AM"

Entry 3 (marked with a gray dot):
"Jennifer L. — Drain Cleaning"
"Auto-texted 8m ago · Callback 11:00 AM"

The interface is clean, well-organized, and uses the LexumSoft brand colors: dark charcoal background, amber-gold for priority indicators and accents, white for primary text, muted gray for secondary text. The screen glows with warm amber-gold light.

THROUGH THE WINDSHIELD: The background visible through the windshield (out of focus, soft bokeh) shows a suburban residential neighborhood -- a house with siding and a small front yard, mailbox at the curb, a tree. This suggests the contractor is parked in front of a customer's home, between jobs.

LIGHTING: Natural daylight enters through the windshield and open door, creating a bright, realistic daytime interior. The phone screen glows with warm amber-gold, slightly brighter than the ambient daylight hitting it. The brass fittings catch sunlight and glint warmly. The overall lighting is natural and documentary-style -- not dramatic studio lighting, but clean, authentic, real.

COLOR PALETTE: Natural daylight tones (warm whites, soft shadows), warm brass/copper metallic accents on the fittings, blue from the channel-lock handles, yellow from the Teflon tape and hi-vis vest, warm amber-gold from the phone screen. The phone screen's amber glow is the visual anchor point that draws the eye into the organized digital system amid the physical chaos.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

In the upper-left area of the image (over the dashboard/windshield area where it reads clearly against the brighter background), white text with a subtle dark drop shadow for legibility:

Line 1 (bold, approximately 36 point, DM Sans Bold): "Every lead answered."
Line 2 (bold, same style): "Every callback prioritized."

Below, with 12px spacing, smaller amber-gold text at approximately 18 point: "While you finish the job."

BRAND BAR (bottom 15%): Solid near-black charcoal bar, full width. Thin 2-pixel amber-gold accent line at top. LexumSoft logo (attached) bottom-left, approximately 40-50 pixels tall, white on dark. "lexumsoft.com" bottom-right, muted stone gray, 16 point.

MOOD: Calm capability. Unlike the urgency of the crawl space or the drama of the split-screen, this image is about quiet control. The truck is messy -- that is real life. But the phone screen is clean and organized -- that is the system. The contrast between the physical chaos (brass fittings, Teflon tape, scattered tools) and the digital order (clean lead queue, prioritized callbacks, auto-texted confirmations) is the entire value proposition of LexumSoft. A contractor sees this and thinks: "My truck looks like that. My phone does NOT look like that. I want it to."
```

---

### Regeneration Notes

- **If the phone screen lead queue text garbles:** Simplify to just 3 lines with names and job types only: "Sarah M. — Water Heater", "Mike R. — AC Install", "Jennifer L. — Drain Cleaning" with colored priority dots. Remove the "Auto-texted" timestamps.
- **If the overhead angle is wrong (renders as eye-level instead of looking down):** Add "Bird's eye view, camera looking straight down into the truck interior from above the open driver's door. The seat surfaces are visible from directly above."
- **If the tools on the passenger seat don't look authentic:** Add "Real plumbing tools and parts: brass compression fittings with hexagonal nuts, a 12-inch straight pipe wrench, a roll of yellow PTFE thread seal tape, a blue-handled channel-lock plier. These items are scattered casually, not arranged."
- **If the windshield background is too prominent and competes with the phone screen:** Add "The windshield background is heavily blurred, blown out with bright daylight bokeh, so the viewer's attention stays on the phone screen and the tools on the passenger seat."

---
---

## Prompt 4 -- "The After-Hours Save"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

This is the most emotionally charged concept -- showing a real HVAC emergency at night and LexumSoft's AI Receptionist handling the call. The split between the photorealistic homeowner scene and the stylized AI interface panel is the highest-complexity element. Gemini handles photo-to-graphic transitions when the boundary is clearly described. The emotional stakes (child freezing, furnace dead) are what make this image impossible to scroll past.

---

### Prompt

```
IMPORTANT: This is a CINEMATIC PHOTOREALISTIC scene combined with a stylized graphic panel, showing a real HVAC emergency and LexumSoft's AI Receptionist handling it at 11:47 PM while the contractor sleeps. The left portion is a photorealistic home interior. The right portion is a stylized dark graphic panel showing the AI system at work. Both are rendered in the same image as one cohesive composition. Every detail must be authentic to the home services industry.

LAYOUT: Square format, 1:1 aspect ratio. The image flows from a photorealistic scene on the left (approximately 55% of the frame width) into a stylized dark graphic panel on the right (approximately 45%). There is no hard divider between them -- instead, the photorealistic scene gradually transitions into the dark panel through a soft ambient gradient, as if the right edge of the photo dissolves into the digital system interface. The brand bar spans the bottom 16%.

LEFT PORTION -- THE EMERGENCY (photorealistic, cold, tense):

A dimly lit residential hallway at night. A man in his late 30s wearing gray sweatpants and a white t-shirt stands near a wall-mounted thermostat, pressing his phone to his ear with his right hand. His posture is tense -- shoulders slightly hunched, head tilted toward the phone, free hand rubbing the back of his neck. His breath is faintly visible in the cold air (the house temperature has dropped dangerously). The thermostat on the wall behind him displays "54°F" -- a temperature that communicates real danger, especially for the family.

In the background, through a doorway into the living room, a child (approximately 6-8 years old) is curled up on a couch wrapped tightly in a thick blanket, illuminated by the blue-white glow of a television. The child detail is important -- it raises the emotional stakes from "inconvenience" to "my family is freezing."

The hallway light is off. The scene is lit only by the cool blue-white glow from the living room TV, a faint warm amber glow from a nightlight low on the wall, and the cold blue light from the phone screen pressed to the man's ear. The color temperature is overwhelmingly cold -- steel blue, icy white, desaturated. The walls show family photos in frames (slightly out of focus). A closed door behind the man leads to the furnace room / mechanical closet. The environment is a typical middle-class American home.

RIGHT PORTION -- THE AI RECEPTIONIST SYSTEM (stylized dark graphic panel):

The right 45% of the frame is a near-black charcoal panel that acts as a window into what is happening on the other end of the phone call. This portion is NOT photorealistic -- it is a clean, premium, dark-themed graphic/UI visualization showing the AI system at work.

At the top of the panel, a small label in amber-gold text reads: "AI Receptionist — Active" at approximately 14 point, with a small pulsing amber-gold dot beside it.

Below the label, a voice waveform visualization in amber-gold -- a horizontal band of varying-height bars or smooth audio wave peaks, approximately 40 pixels tall and spanning most of the panel width. The waveform pulses with energy, indicating the AI is actively speaking. The waveform glows with a subtle amber halo.

Below the waveform, a speech bubble or text card with a very subtle dark espresso brown fill and rounded corners contains the AI's response in white text at approximately 16 point:

"I can get a technician out first thing tomorrow morning. Does 8 AM work for you?"

Below the speech bubble, a compact scheduling interface card shows the appointment being booked in real time. The card has a near-black background with a 1-pixel amber-gold border and contains:

"Booked: Nov 14 — 8:00 AM"
"Job: Furnace No-Heat"
"Customer: Johnson Residence"

Each line is in white text at approximately 13 point. A small green checkmark or amber-gold checkmark appears beside "Booked" to confirm the appointment is locked in.

Below the booking card, a small label in muted stone gray reads: "Synced to your calendar automatically" at approximately 11 point.

The transition between the photorealistic left portion and the dark graphic right portion happens through a soft, ambient gradient -- the hallway wall on the far right of the photo fades into the dark charcoal of the AI panel. A very subtle amber-gold connection line or glow arc bridges from the phone at the man's ear toward the voice waveform, visually linking the call to the AI system.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

Spanning the top of the image across both portions, on a subtle dark gradient that ensures readability, two lines of white text:

Line 1 (bold, approximately 36 point, DM Sans Bold): "11:47 PM. His furnace died."
Line 2 (bold, same style): "Your AI answered on the second ring."

BRAND BAR (bottom 16%): Solid near-black charcoal bar, full width. Thin 2-pixel amber-gold accent line at top.

Inside the brand bar, centered horizontally, bold white text reads: "Never miss another call." at approximately 32 point, DM Sans Bold.

LexumSoft logo (attached) bottom-left, approximately 40-50 pixels tall, white on dark. "lexumsoft.com" bottom-right, muted stone gray, 16 point, right-aligned with 24px padding.

COLOR PALETTE: Left (photorealistic): cold steel blue, icy white, desaturated tones, faint warm amber from nightlight. Right (graphic panel): near-black charcoal, dark espresso brown, amber-gold for waveform and accents, white for text. The amber-gold is the visual thread connecting both halves -- it appears as the nightlight glow in the photo, the phone screen glow, and the AI interface accents.

MOOD: Parental urgency meets technological reassurance. The left half is every HVAC contractor's nightmare scenario as a homeowner -- a family freezing at midnight, desperate for help. The right half is the resolution -- the AI system handling it professionally, booking the appointment, confirming the job, while the contractor sleeps. The emotional payoff is: "Your business saved this family tonight. You didn't even wake up." For a contractor scrolling LinkedIn, this hits on two levels: as a business owner who wants to capture these jobs, and as a parent who understands the child-on-the-couch stakes.
```

---

### Regeneration Notes

- **If the photo-to-graphic transition is awkward:** Add a clean vertical amber-gold divider line at the 55% mark instead of a gradient transition. Both portions still rendered in the same image.
- **If the AI speech bubble text garbles:** Simplify to just "Appointment booked: Tomorrow 8 AM" -- one short line instead of a full sentence.
- **If the booking card details garble:** Simplify to a single line: "Booked: Nov 14 — 8:00 AM — Furnace No-Heat" with an amber-gold checkmark.
- **If the child in the background is not visible or looks wrong:** Remove the child. The man standing alone with visible breath and the 54°F thermostat reading is sufficient to communicate cold emergency.
- **If the voice waveform doesn't render as a waveform:** Replace with a simple amber-gold horizontal line with 3 concentric semi-circle sound waves emanating from it (like a speaker icon).
- **If the thermostat reading "54°F" doesn't render:** Remove the thermostat. Add visible breath from the man and describe frost on the hallway window as alternative cold indicators.
- **If the entire right panel collapses into the photo:** Explicitly add "The right 45% of the image is a FLAT GRAPHIC PANEL with a solid near-black charcoal fill. It is NOT a photograph. It is a clean, flat, dark user interface design on a solid dark background."
