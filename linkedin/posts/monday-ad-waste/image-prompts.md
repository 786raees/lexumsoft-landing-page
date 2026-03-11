# Google Ads Waste Post -- Image Prompts (Final Output, No Post-Production)

**Post:** "You're paying $190 per lead. Half of them Googled 'plumber salary.' Your ad budget isn't broken. It's being looted."
**Topic:** Google Ads mismanagement bleeding contractor budgets -- broad keywords, no negative lists, no geo-fencing, $190 CPA crushed to $42 after restructuring
**Image dimensions:** 1200 x 1200 px (1:1 square)
**CTA keyword:** ADS

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

## Prompt 1 -- "The Search Term Horror Show"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

The recommended lead concept. A contractor discovers his Google Ads search terms report is full of garbage queries -- "plumber salary," "plumbing school," "how to fix a toilet" -- bleeding his $3K budget dry. Floating UI overlay panels reveal the hidden damage: wasted spend percentages, irrelevant search terms highlighted in red, and a cost-per-lead metric that makes his stomach drop. This is the "before" moment -- raw frustration grounded in a real contractor's office.

**Visual Impact:** High
**Priority:** 1

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic scene inside a small contractor's home office or back-room office at a plumbing company. Square format, 1:1 aspect ratio. A male plumbing contractor in his mid-40s sits at a cluttered desk, leaning forward with both hands pressed flat on the desk surface, staring at an open laptop screen with an expression of stunned frustration -- jaw tight, brow furrowed, eyes locked on the screen. He wears a faded navy blue work polo with a small embroidered company logo patch on the chest. His forearms show the marks of a working tradesman -- tan lines, a few scratches, calloused hands.

The desk is authentically cluttered: a 14-inch pipe wrench sitting on top of a stack of invoices, a roll of yellow Teflon tape, a coffee mug with brown ring stains, scattered brass fittings (elbows and couplings), a set of van keys on a worn leather keychain, a printed invoice with handwritten notes. Behind him on the wall: a whiteboard with job schedules partially erased, a framed plumbing license, a calendar with circled dates. A pair of worn work boots sits on the floor beside the desk chair. The room has commercial-grade carpet, fluorescent overhead lighting, and a window with cheap vinyl blinds partially open.

FOCAL POINT ELEMENT: The contractor's laptop screen is angled toward the camera showing a Google Ads interface with a search terms report. The screen shows rows of search queries with red highlighted text visible but NOT fully legible at this distance -- the floating UI panels will tell that story instead. The laptop screen glows with cool blue-white light that illuminates his frustrated face.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating in the scene, as if viewed through an augmented reality HUD):

ELEMENT 1 -- SEARCH TERM REPORT PANEL (floating to the upper-right of the laptop, angled slightly toward camera):
A large dark semi-transparent rounded rectangle panel (glassmorphism card) with a subtle amber-gold border glow. Inside the panel, a list of search terms with red X icons beside each one:
- "plumber salary" with a red X
- "plumbing school near me" with a red X
- "how to fix a toilet" with a red X
- "plumber jobs hiring" with a red X
A small label at the top of the panel in amber-gold text reads: "Your Search Terms Report"
Below the list, a muted red status bar reads: "68% irrelevant clicks"

ELEMENT 2 -- COST BREAKDOWN BADGE (floating to the upper-left of the scene):
A smaller dark semi-transparent panel with amber-gold border glow. Inside:
- Large white text: "$190" with a label below in muted stone gray: "Cost Per Lead"
- Below that, a horizontal bar graph: a full-width bar with 40% filled in muted red and labeled "Wasted" and 60% in muted gray labeled "Actual Leads"
- At the bottom of the panel, amber-gold text: "$3,000/mo budget"

ELEMENT 3 -- REVENUE LOSS PILL (floating below Element 1, smaller):
A pill-shaped badge with muted red background and white text: "-$15,950/mo revenue gap"

A thin amber-gold curved line with small glowing data dots flows from the laptop screen upward to connect to Elements 1 and 2, suggesting the data is being pulled from the screen and revealed.

CAMERA: 35mm lens equivalent, shot from slightly above desk level looking down at a 15-degree angle. The contractor is framed from mid-torso up with the desk surface and laptop visible. Shallow depth of field -- the whiteboard and wall behind him are in soft focus. The floating UI panels are rendered crisp and sharp as if they exist on a separate focal plane.

LIGHTING: Primary light from the laptop screen casting cool blue-white on the contractor's face and hands. Overhead fluorescent tubes provide flat, unflattering ambient fill -- the harsh reality of a contractor's office. The floating UI panels emit a subtle amber-gold glow that casts faint warm light on the desk surface and nearby invoices. The red elements in the panels add an ominous warmth to the scene.

COLOR PALETTE: Cool blue-white from the laptop screen, flat fluorescent white ambient, warm brass/copper tones from the fittings on the desk, amber-gold from UI panel borders and accents, muted red from the "wasted" indicators. The overall mood is cold and revealing -- the UI panels expose the ugly truth.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

At the top-left of the image, with a semi-transparent dark gradient overlay behind the text for readability:

Line 1 (HEADLINE): "Your Ad Budget Is Being Looted." -- white, approximately 34 point, clean modern geometric sans-serif bold, top-left with 40px padding from edges

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: Gut-punch recognition. Every contractor who has opened their Google Ads search terms report and seen garbage queries knows this exact moment -- the sick realization that their money has been draining to people who will never hire them. The pipe wrench on the invoices, the brass fittings, the worn boots ground this in HIS world. The floating panels make the invisible damage visible. A plumber scrolling LinkedIn sees this and thinks: "That is literally my desk. I need to check my search terms report right now."
```

---

### Regeneration Notes

- **If search term panel text garbles:** Simplify to just 2 terms ("plumber salary" and "plumbing school") with red X icons, and remove the "68% irrelevant clicks" bar.
- **If the cost breakdown panel is unreadable:** Simplify to just "$190/lead" in large white text with "40% Wasted" in red below it. Remove the bar graph.
- **If the revenue loss pill garbles:** Remove it entirely. The two main panels carry the message.
- **If connecting data line fails:** Remove it entirely. Panels floating near the laptop still read as connected.
- **If scene looks too stock-photo clean:** Add "The desk is MESSY and LIVED-IN -- coffee stains on invoices, a crumpled receipt, dust on the pipe wrench, scuff marks on the desk surface. This is not a staged office."
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.

---
---

## Prompt 2 -- "Before/After Campaign Dashboard"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

Split-composition showing the transformation from Jake's generic campaign ($190 CPA, 16 leads) to the restructured LexumSoft campaign ($42 CPA, 58 leads). The contractor is in the scene interacting with the data on a tablet while floating UI panels show the dramatic before/after comparison. This is the "data story" concept -- the numbers are the hero.

**Visual Impact:** High
**Priority:** 2

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic scene inside the cab of a white contractor work truck, shot from the passenger side looking toward the driver. Square format, 1:1 aspect ratio. A male plumbing contractor in his late 30s sits in the driver's seat, holding a tablet in both hands at chest height, looking at the screen with a focused, slightly relieved expression -- the corner of his mouth turned up in a subtle half-smile. He wears a faded gray t-shirt under an open navy work jacket. His hands are rough and slightly dirty -- pipe dope residue under the fingernails.

The truck cab is authentic: a metal clipboard with a work order rests on the passenger seat, a pair of channel-lock pliers with blue handles sits on the center console, a stainless steel travel mug in the cupholder, a fluorescent yellow hi-vis vest draped over the passenger headrest, van keys in the ignition. Through the windshield (soft bokeh), a suburban neighborhood is visible -- a house with siding, a mailbox, morning light.

FOCAL POINT ELEMENT: The tablet he holds glows with warm amber-gold light from a dashboard interface. The tablet screen shows a simplified Google Ads performance graph trending upward -- a line moving from bottom-left to top-right. The screen casts warm amber light on his chin and chest.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating in the scene, as if viewed through an augmented reality HUD):

ELEMENT 1 -- BEFORE PANEL (floating to the left side of the scene, slightly behind the contractor):
A dark semi-transparent rounded rectangle panel with a subtle RED border glow (not amber -- indicating the "before" state). Inside:
- Header in muted red text: "BEFORE"
- Large white text: "$190" with muted gray label below: "Cost Per Lead"
- White text: "16 leads/mo"
- White text: "$4,950 revenue"
- A small red downward arrow icon beside the revenue number
The panel has a desaturated, cold appearance -- muted and lifeless.

ELEMENT 2 -- AFTER PANEL (floating to the right side of the scene, slightly in front):
A dark semi-transparent rounded rectangle panel with a bright amber-gold border glow (indicating the "after" state). Inside:
- Header in amber-gold text: "AFTER"
- Large white text: "$42" with muted gray label below: "Cost Per Lead"
- White text: "58 leads/mo"
- White text: "$20,900 revenue"
- A small green upward arrow icon beside the revenue number
The panel is brighter, more vibrant, with stronger amber-gold glow -- alive and successful.

ELEMENT 3 -- RESULT BADGE (floating at the bottom-center, between the two panels):
A pill-shaped badge with amber-gold background and near-black charcoal text: "+$15,950/mo -- Same Budget"

A solid black vertical divider line, 4px wide, runs between the BEFORE and AFTER panels from top to bottom of the panels to visually separate them.

Thin amber-gold curved lines with glowing data dots flow from the tablet screen outward to both floating panels.

CAMERA: 50mm lens equivalent, shot from the passenger seat looking at the driver. Medium close-up framing the contractor from chest up with the truck interior visible. Shallow depth of field -- the windshield background is soft bokeh. The floating UI panels are rendered crisp and sharp.

LIGHTING: Morning daylight entering through the windshield provides warm, natural fill on the contractor's face. The tablet screen casts warm amber-gold uplight on his chin and the truck ceiling. The BEFORE panel on the left emits a faint cool reddish glow. The AFTER panel on the right emits warm amber-gold glow. The contrast between the two panel glows reinforces the transformation story.

COLOR PALETTE: Warm morning daylight tones, cool muted red on the BEFORE panel, warm amber-gold on the AFTER panel, metallic blue from channel-lock handles, brass tones from fittings in peripheral vision. The amber-gold dominates the right side of the frame, pulling the viewer's eye toward the positive outcome.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

At the top-center of the image, with a semi-transparent dark gradient overlay behind the text for readability:

Line 1 (HEADLINE): "Same $3K Budget. 3.6x More Leads." -- white, approximately 34 point, clean modern geometric sans-serif bold, centered

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: The relief of proof. Jake has been bleeding money for months and now he is seeing, in hard numbers, what a restructured campaign delivers. The before/after panels make the case undeniable -- same budget, wildly different results. A contractor scrolling LinkedIn does the math instantly and thinks: "If my CPA dropped from $190 to $42, I could add a truck." The truck cab setting grounds this in his daily reality -- he is between jobs, checking results, and the numbers are finally working.
```

---

### Regeneration Notes

- **If BEFORE/AFTER panels merge or overlap:** Add "The BEFORE panel and AFTER panel are TWO COMPLETELY SEPARATE floating cards with a clear 4px solid black vertical line between them. They do NOT overlap or blend into each other."
- **If panel text garbles:** Simplify each panel to just TWO lines: "$190/lead" and "16 leads" for BEFORE; "$42/lead" and "58 leads" for AFTER. Remove revenue lines.
- **If the result badge text garbles:** Simplify to just "+$15,950/mo" and remove "Same Budget."
- **If connecting data lines fail:** Remove them entirely. The spatial placement of panels near the tablet tells the connection story.
- **If truck cab looks generic:** Add "Plumbing-specific details on the passenger seat: a roll of yellow Teflon tape, two brass compression fittings, a 10-inch pipe wrench lying across a clipboard with a handwritten invoice."
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.

---
---

## Prompt 3 -- "The Budget Drain"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

Overhead dramatic shot looking down at a contractor's hands on a desk, one hand gripping a phone showing a Google Ads dashboard, the other hand resting on scattered invoices and receipts. Floating UI panels reveal the 40% waste in his ad spend with a budget bar bleeding red. This is the "problem scene" from a data-forward angle -- the money is literally draining away and the UI makes it visible.

**Visual Impact:** High
**Priority:** 3

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic overhead shot looking straight down at a contractor's desk surface. Square format, 1:1 aspect ratio. The desk is a worn wooden surface with scratches, coffee ring stains, and a thin layer of dust -- a real working desk, not a showroom piece.

Visible on the desk surface, arranged naturally (not staged):
- A smartphone face-up in the lower-center of the frame, held loosely by a man's right hand. The hand is rough and calloused with visible pipe dope residue and a small bandage on one knuckle -- a tradesman's hand.
- His left hand rests flat on the desk beside a stack of printed invoices with handwritten totals and circled amounts
- A 10-inch pipe wrench lying diagonally across the upper portion of the desk
- A pair of worn leather work gloves, tossed casually
- Three or four brass compression fittings scattered near the invoices
- A roll of yellow Teflon tape partially unrolled
- A crumpled receipt from a plumbing supply house
- A half-empty coffee mug with brown residue inside
- The edge of a laptop keyboard visible in the upper-left corner of the frame

FOCAL POINT ELEMENT: The smartphone screen is brightly illuminated, showing a simplified Google Ads dashboard with a spending graph and a prominent cost-per-lead number. The screen casts warm light onto the desk surface and the man's rough fingers gripping the phone.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating above the desk scene, as if viewed through an augmented reality HUD looking down):

ELEMENT 1 -- BUDGET WASTE PANEL (floating above the upper-right quadrant of the desk):
A large dark semi-transparent rounded rectangle panel with a subtle amber-gold border glow. Inside:
- Header in white text: "Monthly Ad Spend: $3,000"
- A horizontal budget bar below the header, full width of the panel. 40% of the bar is filled in muted red and labeled "WASTED" in small white text. 60% is filled in amber-gold and labeled "Actual Leads"
- Below the bar, muted red text: "40% of your budget goes to junk clicks"

ELEMENT 2 -- KEYWORD LEAK CARD (floating above the upper-left quadrant):
A smaller dark semi-transparent panel with amber-gold border glow. Inside:
- Header in amber-gold text: "Top Wasted Keywords"
- Three short lines in white text with red X icons:
  - "plumber salary"
  - "plumbing school"
  - "DIY pipe repair"

ELEMENT 3 -- CPA BADGE (floating just above the phone screen):
A rounded rectangle badge with muted red background and white bold text: "$190 Per Lead"
Below it, a smaller amber-gold pill badge: "Should be $42"

Thin amber-gold curved lines with glowing data dots flow from the phone screen upward to Elements 1 and 2, as if the data is being extracted and displayed.

CAMERA: Directly overhead, looking straight down at the desk surface. Equivalent to an 85mm lens at f/2.0. The phone screen and the hands are in sharp focus. The edges of the desk (pipe wrench, laptop corner, gloves) are in slightly softer focus, creating a natural vignette effect. The floating UI panels are rendered crisp and sharp on their own focal plane.

LIGHTING: A single warm desk lamp casting directional light from the upper-left, creating defined shadows of the pipe wrench, fittings, and the man's hands across the desk surface. The phone screen provides a secondary warm glow from below. The floating UI panels emit subtle amber-gold and red glows that mix with the desk lamp light. The overall image is moody and contrasty -- deep shadows in corners, warm highlights on brass fittings.

COLOR PALETTE: Warm wood tones of the desk, brass/copper metallic from fittings, cold muted red from the "wasted" indicators in the UI panels, warm amber-gold from panel borders and accents, white from the phone screen. The red and amber compete for attention -- the red showing the problem, the amber showing the path out.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

At the bottom of the scene, just above the brand bar, with a semi-transparent dark gradient overlay for readability:

Line 1 (HEADLINE): "40% of Your Ad Budget. Gone." -- white, approximately 34 point, clean modern geometric sans-serif bold, centered

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: Confrontation with waste. The overhead angle creates an omniscient, almost forensic perspective -- we are looking down at the evidence of a contractor's ad budget being looted. The rough hands, the brass fittings, the pipe wrench say "this is a real plumber." The floating panels say "and here is where your money actually goes." The muted red waste indicators create quiet alarm. A contractor sees this and immediately thinks about his own ad spend -- "I should check my numbers."
```

---

### Regeneration Notes

- **If the overhead angle renders as eye-level instead:** Add "Bird's eye view, camera looking STRAIGHT DOWN at the desk from directly above. The desk surface fills the entire frame. We see the tops of the hands, the tops of the tools, the phone screen face-up."
- **If budget waste panel text garbles:** Simplify to just "40% WASTED" in large red text with a simple red/amber horizontal bar below it. Remove the dollar label.
- **If keyword leak card text garbles:** Simplify to just "plumber salary" with a red X icon -- one line only.
- **If CPA badge text garbles:** Simplify to just "$190" in large white text on red background. Remove the "Should be $42" pill.
- **If desk surface looks too clean:** Add "The desk is WORN and STAINED -- coffee rings, pen marks, scratches in the wood grain, a light film of dust. Brass fittings have tarnish and thread compound residue."
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.

---
---

## Prompt 4 -- "The Generic Agency vs. The Specialist"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

The contractor sits in his truck reviewing results on his phone while floating UI panels show a side-by-side comparison: the generic agency's scattered approach (80 clients, 15 industries, broad keywords) versus the LexumSoft specialist approach (plumbing-specific keywords, geo-fence map, negative keyword lists). This is the "system in action" concept -- the technology difference is the hero.

**Visual Impact:** Medium
**Priority:** 4

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic scene inside a contractor's work truck at night. Square format, 1:1 aspect ratio. A male plumbing contractor in his late 30s sits in the driver's seat, leaning back slightly, holding his phone in his right hand at mid-chest height. He is illuminated primarily by the phone screen glow -- warm amber light on his face, casting the rest of the truck cab in deep shadow. His expression is one of quiet realization -- brow slightly raised, mouth slightly open, the look of someone who just understood how badly they have been served.

He wears a worn navy work hoodie with the hood down. His left arm rests on the steering wheel. The truck interior is dimly visible in the ambient light: a coffee cup in the cupholder, the edge of a tool bag on the passenger floor, the glow of a streetlight through the driver's window creating a faint orange rim light on his shoulder. Through the windshield, a dark suburban street with porch lights in the distance -- it is late evening, he has been reviewing numbers after a long day of jobs.

FOCAL POINT ELEMENT: His phone screen glows with a LexumSoft dashboard interface showing campaign performance metrics. The screen is the brightest element in the scene, casting warm amber light that defines his facial features in the darkness.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating in the scene, as if viewed through an augmented reality HUD):

ELEMENT 1 -- GENERIC AGENCY PANEL (floating to the left of the scene, slightly behind him):
A dark semi-transparent rounded rectangle panel with a subtle MUTED RED border glow. Inside:
- Header in muted red text: "Generic Agency"
- White text with red X icons beside each line:
  - "1 ad group, 50+ keywords" red X
  - "No negative keyword list" red X
  - "No geo-fencing" red X
- A muted red status line at the bottom: "$190/lead -- 16 leads/mo"
The panel appears dim, failing, lifeless.

ELEMENT 2 -- LEXUMSOFT PANEL (floating to the right of the scene, slightly in front):
A dark semi-transparent rounded rectangle panel with a bright amber-gold border glow. Inside:
- Header in amber-gold text: "Restructured Campaign"
- White text with green checkmark icons beside each line:
  - "Service-specific ad groups" green checkmark
  - "200+ negative keywords" green checkmark
  - "Geo-fenced to service area" green checkmark
- An amber-gold status line at the bottom: "$42/lead -- 58 leads/mo"
The panel is brighter, more vibrant, radiating competence.

ELEMENT 3 -- TRANSFORMATION ARROW (floating between the two panels):
A large arrow icon pointing from the GENERIC panel to the LEXUMSOFT panel, rendered in amber-gold with a subtle glow. Inside or below the arrow, white text: "Same $3K budget"

A solid black vertical divider line, 4px wide, runs between Elements 1 and 2 from top to bottom of the panels.

CAMERA: 35mm lens equivalent, shot from the passenger seat looking at the driver in a three-quarter profile. The contractor is framed from chest up. Very shallow depth of field -- the background through the windshield is soft bokeh of distant porch lights and streetlights. The phone screen and the contractor's face are in focus. The floating UI panels are rendered crisp and sharp.

LIGHTING: The primary light source is the phone screen -- warm amber glow illuminating the contractor's face, hands, and the steering wheel. A faint orange-amber streetlight rim light comes through the driver's window, catching the edge of his shoulder and hood. The GENERIC panel on the left emits a dim reddish glow. The LEXUMSOFT panel on the right emits a warm amber-gold glow. The truck cab is otherwise dark, making the floating panels and phone screen the dominant visual elements.

COLOR PALETTE: Deep shadows and near-black in the truck cab, warm amber-gold from the phone screen and right panel, muted red from the left panel, faint orange rim light from streetlights. The darkness of the scene makes the floating UI panels pop dramatically -- they are impossible to miss.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

At the top of the image, with a semi-transparent dark gradient overlay behind the text for readability:

Line 1 (HEADLINE): "Your Agency Manages 80 Clients. We Only Do Plumbing and HVAC." -- white, approximately 28 point, clean modern geometric sans-serif bold, centered, wrapping to two lines if needed

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: The moment of clarity. Sitting in his truck after a long day, this contractor is finally seeing the difference between a generic agency that treats his account as one of eighty and a specialist that knows his industry. The darkness of the truck cab isolates him with the truth -- the red panel shows what he has been paying for, the amber panel shows what he should have had. The nighttime setting adds weight and intimacy. A contractor scrolling LinkedIn at night will especially connect with this -- reviewing numbers after hours, alone in the truck, realizing he needs to make a change.
```

---

### Regeneration Notes

- **If the two comparison panels merge:** Add "The GENERIC AGENCY panel and RESTRUCTURED CAMPAIGN panel are TWO COMPLETELY SEPARATE floating cards with a clear 4px solid black vertical line between them. They do NOT overlap, blend, or merge."
- **If checklist text inside panels garbles:** Simplify each panel to just 2 lines: "No negative keywords" with red X and "$190/lead" for GENERIC; "200+ negatives" with green checkmark and "$42/lead" for LEXUMSOFT.
- **If the transformation arrow text garbles:** Remove the arrow entirely. The spatial placement (left = bad, right = good) and color coding (red vs. amber-gold) tell the story.
- **If headline text is too long to render cleanly:** Shorten to: "Generic Agency vs. Plumbing Specialist" at 32 point.
- **If the nighttime truck scene is too dark to see anything:** Add "A dim blue-white dome light inside the truck cab provides faint ambient fill, making the steering wheel, cup holder, and tool bag faintly visible while keeping the overall mood dark and moody."
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.

---
---

## Quick Reference Summary

| # | Concept | Visual Impact | Priority | Key Risk | Logo File |
|---|---------|---------------|----------|----------|-----------|
| 1 | The Search Term Horror Show | High | 1 | Search term panel text legibility | logo-white.png |
| 2 | Before/After Campaign Dashboard | High | 2 | Before/After panel separation and text | logo-white.png |
| 3 | The Budget Drain | High | 3 | Overhead angle + multiple panel text | logo-white.png |
| 4 | Generic Agency vs. Specialist | Medium | 4 | Two comparison panels + long headline | logo-white.png |

## Generation Commands

```bash
# Generate the recommended concept (Search Term Horror Show)
python scripts/generate-post-image.py --file linkedin/posts/monday-ad-waste/image-prompts.md --concept 1 --output linkedin/posts/monday-ad-waste/images

# Generate Before/After Dashboard
python scripts/generate-post-image.py --file linkedin/posts/monday-ad-waste/image-prompts.md --concept 2 --output linkedin/posts/monday-ad-waste/images

# Generate Budget Drain overhead
python scripts/generate-post-image.py --file linkedin/posts/monday-ad-waste/image-prompts.md --concept 3 --output linkedin/posts/monday-ad-waste/images

# Generate Generic vs. Specialist
python scripts/generate-post-image.py --file linkedin/posts/monday-ad-waste/image-prompts.md --concept 4 --output linkedin/posts/monday-ad-waste/images

# Generate all concepts
python scripts/generate-post-image.py --file linkedin/posts/monday-ad-waste/image-prompts.md --all --output linkedin/posts/monday-ad-waste/images

# Generate with 2 variations (pick the best)
python scripts/generate-post-image.py --file linkedin/posts/monday-ad-waste/image-prompts.md --concept 1 --variations 2 --output linkedin/posts/monday-ad-waste/images
```
