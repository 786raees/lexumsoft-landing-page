# Reviews Are Losing You Bids Post -- Image Prompts (Final Output, No Post-Production)

**Post:** "You have 14 Google reviews. Your competitor has 212. The homeowner never called you."
**Topic:** Contractors with 12-20 Google reviews losing bids to competitors with 200+ -- automated review generation system closes the gap, Craig's 4-truck HVAC company went from 12 reviews at 3.8 stars to 215 reviews at 4.9 stars in 8 months
**Image dimensions:** 1200 x 1200 px (1:1 square)
**CTA keyword:** REVIEWS

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

## Prompt 1 -- "The Review Gap"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

The recommended lead concept. A contractor sits in his truck cab after finishing a job, phone in hand, Googling his own company -- and the floating UI panels expose the devastating truth. His listing sits at 14 reviews and 3.8 stars while his competitor's listing floats beside it at 212 reviews and 4.8 stars. This is the "problem scene" -- the moment a contractor realizes why the phone has been quiet. The competitive gap is made viscerally visible through side-by-side Google Business Profile comparison panels. The truck cab grounds the viewer in a contractor's daily life; the UI panels deliver the gut punch.

**Visual Impact:** High
**Priority:** 1

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic scene inside the cab of a white contractor work truck, shot from the passenger side looking toward the driver. Square format, 1:1 aspect ratio. A male HVAC contractor in his mid-40s sits in the driver's seat, holding his smartphone in his right hand at chest height, staring at the screen with an expression of dawning realization -- brow furrowed, mouth slightly open, jaw tightening. He just Googled "HVAC repair near me" and the results tell the story. He wears a faded charcoal gray work t-shirt under an open high-visibility yellow safety vest. His left hand grips the steering wheel loosely. His hands are rough and calloused -- cracked knuckles, a smudge of refrigerant oil on his thumb, a worn leather watch strap.

The truck cab is authentically lived-in: a metal clipboard with a handwritten work order rests on the passenger seat, a pair of channel-lock pliers with blue handles sits on the center console, two brass flare fittings rolling near the gearshift, a stainless steel travel mug in the cupholder, a crumpled receipt from a supply house on the dashboard, van keys hanging from the ignition. Through the windshield (soft bokeh), a suburban residential street is visible -- a house with a central AC condenser unit in the side yard, afternoon overcast light.

FOCAL POINT ELEMENT: The contractor's phone screen glows with cool blue-white light from a Google search results page. The screen shows a list of local HVAC companies but the specific details are NOT legible at this distance -- the floating UI panels will tell the story instead. The phone screen glow illuminates his chin and the underside of his face, casting the moment in a revealing, unflattering light.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating in the scene, as if viewed through an augmented reality HUD):

ELEMENT 1 -- COMPETITOR LISTING PANEL (floating to the upper-right of the scene, large):
A large dark semi-transparent rounded rectangle panel (glassmorphism card) with a bright amber-gold border glow. Inside:
- Header in amber-gold text: "Your Competitor"
- A row of 5 gold star icons, 4.8 of them filled in amber-gold
- White text: "4.8 stars"
- Large white bold text: "212 Reviews"
- Below, a small green badge with white text: "#1 Local Pack"
- A small green upward arrow icon beside the badge
The panel radiates confidence and authority -- bright, alive, dominant.

ELEMENT 2 -- YOUR LISTING PANEL (floating to the upper-left of the scene, same size as Element 1):
A dark semi-transparent rounded rectangle panel with a subtle MUTED RED border glow. Inside:
- Header in muted red text: "Your Listing"
- A row of 5 star icons, only 3.8 of them filled in muted amber (the remaining 1.2 stars are gray outlines)
- White text: "3.8 stars"
- Large white bold text: "14 Reviews"
- Below, a small muted red badge with white text: "#5 Local Pack"
- A small red downward arrow icon beside the badge
The panel appears dim, thin, inadequate -- clearly losing the comparison.

A solid black vertical divider line, 4px wide, runs between Elements 1 and 2 from top to bottom of the panels to visually separate them.

ELEMENT 3 -- REVENUE GAP PILL (floating below both panels, centered between them):
A pill-shaped badge with muted red background and white bold text: "$39,000/yr gap"

Thin amber-gold curved lines with small glowing data dots flow from the phone screen upward to both floating panels, as if the search results are being analyzed and displayed.

CAMERA: 50mm lens equivalent, shot from the passenger seat looking at the driver in three-quarter profile. Medium close-up framing the contractor from chest up with the truck interior visible. Shallow depth of field -- the windshield background is soft bokeh. The floating UI panels are rendered crisp and sharp on their own focal plane.

LIGHTING: Overcast afternoon daylight entering through the windshield, providing flat, cool ambient fill on the contractor's face. The phone screen casts cool blue-white uplight on his chin and jaw. The COMPETITOR panel on the right emits a warm amber-gold glow. The YOUR LISTING panel on the left emits a faint muted reddish glow. The color contrast between the two panels -- warm gold versus cold red -- visually reinforces which side is winning.

COLOR PALETTE: Cool overcast daylight tones, muted gray of the truck interior, fluorescent yellow of the safety vest providing a trade-authentic color anchor, warm amber-gold from the competitor panel, muted red from the contractor's own listing panel, metallic blue from the channel-lock handles on the console. The amber-gold dominates the right side of the frame, pulling the eye to the competitor's success -- the visual knife twist.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

At the top-center of the image, with a semi-transparent dark gradient overlay behind the text for readability:

Line 1 (HEADLINE): "14 Reviews vs. 212 Reviews." -- white, approximately 34 point, clean modern geometric sans-serif bold, centered

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: Competitive gut punch. Every contractor has Googled their own company and seen the competitor sitting above them with five times the reviews. This image captures that exact moment -- alone in the truck, staring at the screen, realizing the phone has been quiet because homeowners are choosing the other guy before they ever call. The side-by-side panels make the gap impossible to rationalize away. The $39,000/yr revenue pill is the math that turns discomfort into urgency. A plumber or HVAC tech scrolling LinkedIn sees this and immediately thinks: "I have 16 reviews. My competitor has over 100. How many jobs am I losing right now?"
```

---

### Regeneration Notes

- **If the two listing panels merge or overlap:** Add "The YOUR LISTING panel and COMPETITOR panel are TWO COMPLETELY SEPARATE floating cards with a clear 4px solid black vertical line between them. They do NOT overlap, blend, or merge. There is visible space between them."
- **If star rating icons garble:** Replace star icons with simple text: "Rating: 3.8" and "Rating: 4.8" in the respective panels. Remove the icon row entirely.
- **If the revenue gap pill text garbles:** Simplify to just "$39K/yr gap" or remove entirely. The two comparison panels carry the message.
- **If truck cab looks generic:** Add "HVAC-specific details on the center console and passenger seat: two brass flare fittings, a digital manifold display unit, a roll of yellow electrical tape, and a crumpled receipt from an HVAC supply house."
- **If headline text is too long to render cleanly:** Shorten to "14 vs. 212 Reviews." at 36 point.
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.

---
---

## Prompt 2 -- "The Text That Builds Empires"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

The system in action. A homeowner stands in their kitchen after a completed HVAC service call, phone in hand, having just received an automated review request text. Floating UI panels show the review automation system working in real time -- the text message sent, the Google review link active, and a live counter ticking up as reviews flow in. The technology is the hero. The homeowner's kitchen grounds the scene in a real service call aftermath. This is the moment that happens 10+ times per week for a contractor with the right system -- every completed job becoming social proof automatically.

**Visual Impact:** High
**Priority:** 2

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic scene inside a residential kitchen, just after an HVAC or plumbing service call has been completed. Square format, 1:1 aspect ratio. A female homeowner in her late 30s stands at the kitchen island, holding her smartphone in both hands, looking at the screen with a warm, pleased expression -- a genuine smile, the look of a satisfied customer who just had a great service experience. She wears a casual gray sweater and has her hair pulled back.

The kitchen tells the story of a just-completed service call: in the background, slightly out of focus, a utility closet or basement door is ajar with the edge of a new water heater or furnace visible through the doorway. On the kitchen island near her: a printed service invoice with a company letterhead, a pen for the signature she just gave, a glass of water. The kitchen is a normal suburban kitchen -- granite or quartz countertop, stainless steel appliances, a few dishes in the drying rack, a fruit bowl. Warm afternoon light enters through a window above the kitchen sink, casting golden light across the island surface.

FOCAL POINT ELEMENT: Her phone is held prominently in both hands at chest height, angled slightly toward the camera so the screen is clearly visible and LARGE in the frame -- the phone occupies roughly 15-20% of the total image area. The screen shows a bright, clearly readable SMS text message conversation: a green message bubble with large white text reading "How was your service today? Tap to leave a review:" and a blue underlined link "g.page/review" below it. The text on the phone screen must be LARGE ENOUGH to read at LinkedIn thumbnail size. The phone screen is the bridge between the real-world service experience and the automated review system running in the background.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating in the scene, as if viewed through an augmented reality HUD):

IMPORTANT: All UI panels must be LARGER than the current generation -- each panel should be approximately 25-30% of the image width. Use strong glassmorphism with visible frosted-glass blur behind each panel. Border glow should be prominent and clearly visible, not subtle -- a 3-4px glowing border, not a faint hint.

ELEMENT 1 -- REVIEW AUTOMATION PANEL (floating to the upper-right of the homeowner, large and prominent):
A large dark semi-transparent rounded rectangle panel (heavy glassmorphism -- visible frosted blur behind the panel) with a BRIGHT, prominent amber-gold glowing border (3-4px solid glow, not subtle). Inside, generous padding and spacing between items:
- Header in amber-gold text, bold, 18pt equivalent: "Review System"
- A thin amber-gold horizontal rule below the header
- A workflow checklist with LARGE green filled-circle checkmark icons (not small):
  - "Job completed" with green checkmark -- white text, 14pt equivalent
  - "Auto-text sent" with green checkmark -- white text, 14pt equivalent
  - "Review link clicked" with green checkmark -- white text, 14pt equivalent
- Below the checklist, separated by spacing, a small pulsing amber-gold dot with white text: "Awaiting review..."
The panel should feel like a real software dashboard widget -- polished, spaced, professional.

ELEMENT 2 -- REVIEW GROWTH COUNTER (floating to the upper-left, same visual weight as Element 1):
A large dark semi-transparent panel (heavy glassmorphism) with a BRIGHT amber-gold glowing border (3-4px). Inside:
- Header in amber-gold text, bold: "Google Reviews"
- Very large white text, approximately 48pt equivalent: "215"
- A thin amber-gold progress bar below the number, completely full, with rounded ends
- Small muted stone gray text below the bar: "Started at 12"
- A green pill badge with white text: "+203 in 8 months" with a small green upward arrow icon

ELEMENT 3 -- RATING BADGE (floating below Element 2, aligned to its left edge):
A pill-shaped badge with solid amber-gold background and near-black charcoal bold text: "4.9 stars" with a small row of 5 filled amber-gold star icons to the left of the text.

A thin amber-gold curved line with small glowing data dots flows from the homeowner's phone screen upward to the Review Automation Panel, showing the data path from the customer's action to the system dashboard.

CAMERA: 35mm lens equivalent, shot from across the kitchen island at the homeowner's eye level. Medium shot framing her from waist up with the kitchen environment visible behind her. The phone in her hands and her face are in sharp focus. The utility closet doorway and background kitchen are in moderate soft focus. The floating UI panels are rendered crisp and sharp on their own focal plane.

LIGHTING: Warm afternoon sunlight streaming through the kitchen window, creating golden highlights on the countertop surface and the homeowner's face. The phone screen adds a cooler secondary light from below. The floating UI panels emit a subtle amber-gold glow. The overall scene feels warm, domestic, and positive -- the glow of a satisfied customer and a system that just worked perfectly.

COLOR PALETTE: Warm kitchen tones (wood, granite, stainless steel), golden afternoon sunlight, the homeowner's gray sweater providing a neutral anchor, amber-gold from the UI panels providing brand warmth, green checkmarks signaling system success. The palette is inviting and domestic -- this is the customer's world, and the automation system fits naturally into it.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

HEADLINE BACKGROUND: A horizontal gradient bar spanning the full width of the image, positioned at the top. The gradient goes from LEFT to RIGHT: solid near-black charcoal (100% opacity) on the left edge, fading smoothly to fully transparent (0% opacity) on the right edge. The gradient bar is approximately 80-90px tall, covering just the headline area. This creates a cinematic title card effect where the left side has a dark backdrop for text readability and the right side blends seamlessly into the kitchen scene.

Line 1 (HEADLINE): "Every Job Becomes a Review." -- white, approximately 36 point, clean modern geometric sans-serif bold, positioned inside the gradient bar, left-aligned with 40px padding from the left edge, vertically centered within the gradient bar

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: Effortless social proof. This is what automated review generation looks like from the customer's side -- a simple text, a quick tap, a 5-star review posted. The homeowner is genuinely happy (the service was great), the text arrived at the perfect moment (while gratitude is fresh), and the system handles everything without the tech ever asking awkwardly. The floating panels show the cumulative power: 12 reviews became 215, the rating climbed to 4.9, all through this exact moment repeated hundreds of times. A contractor scrolling LinkedIn sees this and thinks: "My customers are happy too -- I just don't have a system to capture it. That's the only difference."
```

---

### Regeneration Notes

- **If the review automation checklist garbles:** Simplify to just 2 lines: "Job Done" and "Text Sent" with green checkmarks. Remove the "Awaiting review" status line.
- **If the review growth counter text garbles:** Simplify to just "215" in large white text with "Reviews" in amber-gold above it. Remove the progress bar and the "+203" line.
- **If phone screen text garbles:** Simplify to just a green SMS notification glow on the phone screen with no readable text -- the floating panels tell the data story instead.
- **If the kitchen looks too staged or stock-photo:** Add "The kitchen is a REAL suburban kitchen -- a small water stain near the sink faucet, a few crumbs on the counter, a dish towel draped over the oven handle, fingerprints on the stainless steel refrigerator. LIVED-IN, not a showroom."
- **If the utility closet / service evidence is not visible:** Remove that detail. The service invoice on the counter is sufficient to tell the "just finished a job" story.
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.

---
---

## Prompt 3 -- "Before/After Review Profile"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

The data story concept. A split-composition showing Craig's Google Business Profile transformation -- the "before" profile (12 reviews, 3.8 stars, buried in results) versus the "after" profile (215 reviews, 4.9 stars, #1 Local Pack). The contractor sits at his desk with a tablet showing the results while floating side-by-side panels make the before/after undeniable. HVAC tools and office details ground the scene. The numbers are the hero -- stark, clean, impossible to dismiss. The split-screen format with explicit divider line keeps the two states visually separated.

**Visual Impact:** High
**Priority:** 3

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic scene inside a small HVAC contractor's office. Square format, 1:1 aspect ratio. A male HVAC contractor in his late 30s sits at his desk, leaning forward with one elbow on the desk and his other hand resting on a tablet that lies flat on the desk surface. His expression is quiet triumph -- a controlled, satisfied nod, the look of a man staring at proof that the investment worked. He wears a clean navy blue company polo with a small embroidered HVAC company logo patch on the chest.

The desk has the tools of an HVAC business owner: a set of refrigerant manifold gauge hoses (red and blue) coiled loosely near the corner of the desk, a stack of printed customer invoices, a pen, a coffee mug with steam rising, a package of air filters leaning against the monitor base, a few brass flare fittings used as paperweights on papers. Behind him: a whiteboard with a job schedule written in dry-erase marker (several names and dates visible), a framed HVAC contractor license, a January calendar with many dates circled. The office has warm overhead lighting and daylight from a window -- the atmosphere is productive, not luxurious.

FOCAL POINT ELEMENT: The tablet on the desk glows with warm amber-gold light from a Google Business Profile analytics screen showing an upward-trending graph. His hand rests beside the tablet, rough knuckles and a small scar on his index finger -- a tradesman's hand that also runs a business. The tablet screen casts warm light onto the desk surface and the surrounding invoices.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating in the scene, as if viewed through an augmented reality HUD):

ELEMENT 1 -- BEFORE GBP PANEL (floating to the left side of the scene, above the desk):
A dark semi-transparent rounded rectangle panel with a subtle MUTED RED border glow. Inside:
- Header in muted red text: "8 MONTHS AGO"
- White text: "12 Reviews"
- A row of star outlines with only 3.8 filled in muted amber, the rest gray outlines
- White text: "3.8 Stars"
- A muted red badge at the bottom: "#5 Local Pack"
- A small red downward arrow icon
The panel appears dim, faded, and inadequate -- the old reality.

ELEMENT 2 -- AFTER GBP PANEL (floating to the right side of the scene, above the desk):
A dark semi-transparent rounded rectangle panel with a bright amber-gold border glow. Inside:
- Header in amber-gold text: "TODAY"
- White text: "215 Reviews"
- A row of 5 star icons, 4.9 filled in bright amber-gold
- White text: "4.9 Stars"
- An amber-gold badge at the bottom: "#1 Local Pack"
- A small green upward arrow icon
The panel is brighter, vibrant, and dominant -- the new reality radiating success.

A solid black vertical divider line, 4px wide, runs between the BEFORE and AFTER panels from top to bottom of the panels to visually separate them.

ELEMENT 3 -- RESULT BADGE (floating below both panels, centered between them):
A pill-shaped badge with amber-gold background and near-black charcoal text: "12 to 215 in 8 months"

Thin amber-gold curved lines with small glowing data dots flow from the tablet screen upward to both floating panels, connecting the data source to the visual story.

CAMERA: 50mm lens equivalent, shot from slightly across the desk at eye level with the contractor. Medium close-up framing him from chest up with the desk surface, tablet, tools, and the wall behind him visible. Moderate depth of field -- the whiteboard and license are slightly soft but recognizable. The floating UI panels are rendered crisp and sharp on their own focal plane.

LIGHTING: Warm overhead office lighting with supplemental daylight from the window, creating a productive, confident atmosphere. The tablet screen casts warm amber-gold uplight on the desk surface and his hand. The BEFORE panel on the left emits a faint cool reddish glow. The AFTER panel on the right emits warm amber-gold glow. The right side of the scene glows warmer than the left -- the visual split reinforces the transformation story.

COLOR PALETTE: Warm office tones (wood desk, navy polo, white walls), red and blue from refrigerant gauge hoses providing trade-authentic color, muted red from the BEFORE panel, bright amber-gold from the AFTER panel. The amber-gold dominates the right half of the frame, visually pulling the viewer's eye toward the success outcome.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

At the top-center of the image, with a semi-transparent dark gradient overlay behind the text for readability:

Line 1 (HEADLINE): "Same Company. Different Reviews." -- white, approximately 34 point, clean modern geometric sans-serif bold, centered

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: The proof of transformation. Craig -- the 4-truck HVAC company in Michigan -- went from invisible to dominant in 8 months. The before/after panels make the case undeniable: 12 reviews became 215, 3.8 stars became 4.9, #5 Local Pack became #1. The contractor sitting at his desk with the tablet and the HVAC tools around him is not a marketing person or a tech founder -- he is a tradesman who let a system do the work. A contractor scrolling LinkedIn does the math: "If he went from 12 to 215 in 8 months, where would I be by October if I started now?"
```

---

### Regeneration Notes

- **If BEFORE/AFTER panels merge or overlap:** Add "The BEFORE panel and AFTER panel are TWO COMPLETELY SEPARATE floating cards with a clear 4px solid black vertical line between them. They do NOT overlap, blend, or merge. There is visible space between them."
- **If star rating icons garble:** Replace star icons with simple text: "3.8 Stars" and "4.9 Stars" in the respective panels. Remove the icon rows entirely.
- **If panel text is too dense to render cleanly:** Simplify each panel to just THREE elements: the header ("8 MONTHS AGO" / "TODAY"), the review count ("12 Reviews" / "215 Reviews"), and the Local Pack badge ("#5" / "#1"). Remove star rows.
- **If the result badge text garbles:** Simplify to just "12 to 215" or remove entirely. The two panels carry the comparison.
- **If the office looks too stock-photo:** Add "HVAC-specific clutter on the desk -- a fin comb tool, a replacement capacitor in blister packaging, a section of copper refrigerant tubing, and a crumpled receipt from an HVAC supply house. The desk has coffee ring stains and pen marks."
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.

---
---

## Prompt 4 -- "The Homeowner's Decision"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

The problem scene from the homeowner's perspective. A homeowner sits at their laptop in a dim living room late at night -- a broken furnace scenario, cold house, searching for help. Floating UI panels show what the homeowner sees: two HVAC companies side by side, one with 200+ reviews and high stars, one with 14 reviews and mediocre stars. The cursor hovers over the one with more reviews. This reframes the review gap from the CUSTOMER's point of view, making the contractor viewer realize: "This is what happens before they call me -- or don't." The nighttime cold-house setting adds urgency.

**Visual Impact:** Medium
**Priority:** 4

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic scene inside a suburban living room late at night. Square format, 1:1 aspect ratio. A female homeowner in her early 40s sits on a couch, hunched forward over a laptop on the coffee table, her face illuminated by the screen glow. She wears a thick hoodie and has a blanket wrapped around her shoulders -- the furnace is broken and the house is cold. Her expression is focused and urgent -- choosing between contractors at 10 PM with the temperature dropping. One hand rests on the laptop touchpad, the other is pulling the blanket tighter around her shoulders.

The living room shows subtle signs of a cold house: a space heater with a glowing orange element sits on the floor nearby, casting warm orange light on the carpet. A mug of hot tea or cocoa on the coffee table, steam rising. A smartphone lies on the couch beside her with a missed call notification visible -- she tried calling one company and got no answer. The room is dimly lit -- a single table lamp provides weak warm light. Through the window behind the couch, a dark winter night with snow or frost visible on the glass. The living room has a lived-in look: a throw pillow askew, a kids' toy peeking out from under the coffee table, a stack of mail on the end table.

FOCAL POINT ELEMENT: The laptop screen is the brightest element in the scene, casting cool blue-white light on her face and hands. The screen shows a Google Maps / Local Pack style search results interface with two HVAC company listings visible -- but the specific details are told through the floating UI panels. The screen light dominates the dim room, creating a dramatic chiaroscuro effect.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating in the scene, as if viewed through an augmented reality HUD):

ELEMENT 1 -- WINNING COMPANY PANEL (floating to the upper-right of the laptop, large and prominent):
A dark semi-transparent rounded rectangle panel with a bright amber-gold border glow. Inside:
- Header in amber-gold text: "Company A"
- A row of 5 star icons filled in amber-gold
- White text: "4.8 Stars"
- Large white bold text: "212 Reviews"
- A small green text line: "Responds in under 1 hour"
- An amber-gold "CALL NOW" button indicator at the bottom
The panel appears trustworthy, authoritative, safe -- the obvious choice.

ELEMENT 2 -- LOSING COMPANY PANEL (floating to the upper-left, same size but visually weaker):
A dark semi-transparent rounded rectangle panel with a subtle MUTED RED border glow. Inside:
- Header in muted red text: "Company B"
- A row of 5 star icons, only 3.8 filled in muted amber, the rest gray outlines
- White text: "3.8 Stars"
- Large white bold text: "14 Reviews"
- A small muted red text line: "Last review: 6 months ago"
- A dim, faded "CALL" button indicator at the bottom
The panel appears uncertain, risky, forgettable -- easy to skip.

A solid black vertical divider line, 4px wide, runs between Elements 1 and 2 from top to bottom of the panels to visually separate them.

ELEMENT 3 -- DECISION INDICATOR (floating below both panels, centered):
A small rounded rectangle notification card with dark background and amber-gold border. Inside, white text: "97% search online before calling" with a small amber-gold information icon.

CAMERA: 35mm lens equivalent, shot from slightly above and behind the homeowner's right shoulder (over-the-shoulder composition), looking down at the laptop screen and coffee table. The homeowner's shoulder and side of face are visible in the left foreground, creating depth. The laptop screen, coffee table, and space heater are in sharp focus. The living room background is in moderate soft focus. The floating UI panels are rendered crisp and sharp on their own focal plane.

LIGHTING: The laptop screen is the dominant light source -- cool blue-white illuminating the homeowner's face, hands, and the coffee table surface. The space heater emits a warm orange glow from the right side of the frame, casting amber-orange light on the carpet and the edge of the couch. The table lamp provides a weak, warm fill. The floating UI panels emit their respective glows -- amber-gold on the right (winning company) and muted red on the left (losing company). The overall scene is dark, intimate, and urgent -- a cold house, a late night, a decision being made.

COLOR PALETTE: Dark living room tones, cool blue-white from the laptop, warm orange from the space heater, amber-gold from the winning company panel, muted red from the losing company panel. The contrast between the warm orange of the space heater (the symptom -- trying to stay warm) and the cool laptop screen (the solution -- finding a contractor) creates a push-pull visual tension. The amber-gold winning panel pulls the viewer's eye to the company the homeowner is about to choose.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

At the top-left of the image, with a semi-transparent dark gradient overlay behind the text for readability:

Line 1 (HEADLINE): "She Chose the One With More Reviews." -- white, approximately 32 point, clean modern geometric sans-serif bold, top-left with 40px padding from edges

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: The decision you never see. This is what happens before a contractor's phone rings -- or doesn't. A homeowner with a broken furnace, cold house, kids asleep, searching Google at 10 PM. She is not comparing your skill level or your years of experience. She is comparing star counts and review totals. Company A has 212 reviews at 4.8 stars and responds in under an hour. Company B has 14 reviews at 3.8 stars and the last review was six months ago. There is no contest. A contractor scrolling LinkedIn sees this from the other side and realizes: "This is why I lost that bid last week. She never even called me. She chose the other guy before my phone could ring."
```

---

### Regeneration Notes

- **If the two company panels merge or overlap:** Add "The COMPANY A panel and COMPANY B panel are TWO COMPLETELY SEPARATE floating cards with a clear 4px solid black vertical line between them. They do NOT overlap, blend, or merge."
- **If star rating icons garble:** Replace star icons with simple text: "4.8 Stars" and "3.8 Stars" in the respective panels. Remove the icon rows.
- **If panel text is too dense:** Simplify each panel to THREE elements: company header, star rating text, and review count. Remove the "Responds in under 1 hour" / "Last review: 6 months ago" lines and the button indicators.
- **If the decision indicator notification garbles:** Remove it entirely. The two comparison panels and the headline carry the story.
- **If the over-the-shoulder angle fails (too much shoulder, face not visible):** Adjust to: "Camera position shifted to the right, showing the homeowner's face in three-quarter profile illuminated by laptop glow. The laptop screen is visible at an angle from this position."
- **If the living room looks too dark to read:** Add "The table lamp is slightly brighter, casting warm golden light across the couch and coffee table. The scene is MOODY but not pitch-black -- key details (space heater, tea mug, blanket, phone on couch) are all visible."
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.

---
---

## Quick Reference Summary

| # | Concept | Visual Impact | Priority | Key Risk | Logo File |
|---|---------|---------------|----------|----------|-----------|
| 1 | The Review Gap | High | 1 | Side-by-side panel separation + star icons | logo-white.png |
| 2 | The Text That Builds Empires | High | 2 | Review automation checklist + phone text | logo-white.png |
| 3 | Before/After Review Profile | High | 3 | Before/After panel separation + dense text | logo-white.png |
| 4 | The Homeowner's Decision | Medium | 4 | Two comparison panels + nighttime lighting balance | logo-white.png |

## Generation Commands

```bash
# Generate the recommended concept (The Review Gap)
python scripts/generate-post-image.py --file linkedin/posts/wednesday-reviews/image-prompts.md --concept 1 --output linkedin/posts/wednesday-reviews/images

# Generate The Text That Builds Empires
python scripts/generate-post-image.py --file linkedin/posts/wednesday-reviews/image-prompts.md --concept 2 --output linkedin/posts/wednesday-reviews/images

# Generate Before/After Review Profile
python scripts/generate-post-image.py --file linkedin/posts/wednesday-reviews/image-prompts.md --concept 3 --output linkedin/posts/wednesday-reviews/images

# Generate The Homeowner's Decision
python scripts/generate-post-image.py --file linkedin/posts/wednesday-reviews/image-prompts.md --concept 4 --output linkedin/posts/wednesday-reviews/images

# Generate all concepts
python scripts/generate-post-image.py --file linkedin/posts/wednesday-reviews/image-prompts.md --all --output linkedin/posts/wednesday-reviews/images

# Generate with 2 variations (pick the best)
python scripts/generate-post-image.py --file linkedin/posts/wednesday-reviews/image-prompts.md --concept 1 --variations 2 --output linkedin/posts/wednesday-reviews/images
```
