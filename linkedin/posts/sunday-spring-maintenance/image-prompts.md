# Spring Maintenance Push / Recurring Revenue Post -- Image Prompts (Final Output, No Post-Production)

**Post:** "Every summer you're drowning in calls. Every January you're wondering how to make payroll. Same cycle. Every year."
**Topic:** Feast-or-famine revenue cycle broken by spring maintenance plan marketing -- Nathan's 5-truck HVAC company went from $11K to $38K January revenue after building 147 maintenance contracts in 90 days
**Image dimensions:** 1200 x 1200 px (1:1 square)
**CTA keyword:** SPRING

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

## Prompt 1 -- "The Feast-or-Famine Dashboard"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

The recommended lead concept. An HVAC contractor sits in his small office during a dead January, staring at his laptop while floating UI panels expose the brutal truth: a revenue bar chart showing the summer spike crashing into winter drought, with a flat amber-gold "maintenance revenue line" showing what predictable income looks like. This is the "before" moment -- the seasonal rollercoaster made visible through data. The empty office, the quiet phone, and the thin winter light sell the pain. The UI panels show the escape route he hasn't taken yet.

**Visual Impact:** High
**Priority:** 1

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic scene inside a small HVAC contractor's office during winter. Square format, 1:1 aspect ratio. A male HVAC contractor in his mid-40s sits at a cluttered desk, leaning back in his office chair with one hand rubbing his forehead and the other resting on the desk near a closed laptop. His expression is weary exhaustion -- the thousand-yard stare of a business owner watching his bank account drain. He wears a heavyweight charcoal gray Carhartt work jacket over a company polo. His hands are rough, knuckles cracked from cold weather work.

The desk tells the winter story: a stack of unpaid supplier invoices with yellow sticky notes, a desk phone with no blinking message light (no calls coming in), a ceramic coffee mug with the handle chipped, scattered HVAC-specific items -- a set of refrigerant gauge manifold hoses coiled loosely, a package of replacement capacitors, a Sharpie with the cap off. Behind him on the wall: a large whiteboard dispatch board that is almost completely empty -- one lonely job ticket pinned in a column labeled "TUESDAY," all other day columns blank. A January calendar hangs on the wall with very few dates circled. The window behind him shows gray overcast winter daylight -- bare trees, dull sky. The room has flat, depressing fluorescent lighting.

FOCAL POINT ELEMENT: The closed laptop and the empty dispatch board behind him are the focal tension points. His hand on his forehead is the emotional anchor -- the weight of a slow month pressing down. A smartphone lies face-down on the desk beside the laptop, silent.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating in the scene, as if viewed through an augmented reality HUD):

ELEMENT 1 -- REVENUE ROLLERCOASTER CHART (floating to the right of the contractor, large panel):
A large dark semi-transparent rounded rectangle panel (glassmorphism card) with a subtle muted red border glow. Inside:
- Header in white text: "Annual Revenue"
- A bar chart showing 12 months (J through D). June, July, August bars are tall and filled in amber-gold. September through February bars drop dramatically -- October and November are half-height in muted gray, December through February are barely visible stubs in muted red. March through May are medium-height in muted gray.
- A horizontal dashed line crosses the chart at approximately 60% height, labeled in amber-gold text: "Maintenance Plan Revenue" -- this flat line represents predictable income
- Below the chart, muted red text: "$42K summer to $11K winter"

ELEMENT 2 -- JANUARY STATUS CARD (floating to the upper-left of the scene):
A smaller dark semi-transparent panel with muted red border glow. Inside:
- White text: "January Revenue"
- Large muted red text: "$11,000"
- A thin progress bar below, barely filled (approximately 25%), in muted red
- Small muted gray text below: "vs. $42K peak"

ELEMENT 3 -- MISSED OPPORTUNITY PILL (floating below Element 1):
A pill-shaped badge with muted red background and white text: "0 Maintenance Contracts"

CAMERA: 35mm lens equivalent, shot from slightly above and to the right of the desk, looking down at a 20-degree angle. The contractor is framed from mid-torso up with the desk surface, dispatch board, and window visible. Shallow depth of field -- the January calendar and window are in soft focus. The floating UI panels are rendered crisp and sharp on their own focal plane.

LIGHTING: Flat, unflattering overhead fluorescent tubes casting even, cool-white light with no warmth. Weak gray winter daylight filters through the window behind him, adding no color -- just flat grayness. The only warmth in the scene comes from the amber-gold elements in the floating UI panels, which emit a faint glow onto the desk surface. The muted red panel borders add an ominous cool tone. The overall scene feels drained of energy -- like the revenue.

COLOR PALETTE: Cool grays and flat whites from fluorescent lighting, muted winter tones through the window, warm charcoal from his Carhartt jacket, sparse amber-gold only in the UI panel chart bars (showing what summer USED to be), muted red dominating the UI panels (showing the current reality). The scene is deliberately desaturated and cold -- the visual equivalent of a $11K January.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

At the top-left of the image, with a semi-transparent dark gradient overlay behind the text for readability:

Line 1 (HEADLINE): "Same Cycle. Every Year." -- white, approximately 34 point, clean modern geometric sans-serif bold, top-left with 40px padding from edges

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: The quiet dread of a slow winter month. Every HVAC owner knows this feeling -- the phone that doesn't ring, the dispatch board that's mostly empty, the stack of bills that doesn't stop growing even when the work does. The floating revenue chart makes the cycle undeniable -- those tall summer bars mocking the tiny winter stubs. But the dashed "maintenance plan revenue" line cutting across the chart whispers the answer. A contractor scrolling LinkedIn in February or March sees this and feels it in his chest: "That is literally my January. Every single year."
```

---

### Regeneration Notes

- **If revenue chart panel garbles:** Simplify to just 4 bars (labeled "JUN," "JUL," "JAN," "FEB") with tall amber bars for summer and tiny red stubs for winter. Remove the dashed maintenance line and the text below the chart.
- **If January status card text garbles:** Simplify to just "$11K" in large muted red text with "January" in white above it.
- **If the missed opportunity pill garbles:** Remove it entirely. The chart and status card carry the message.
- **If dispatch board behind him is not visible or too blurry:** Add "The whiteboard dispatch board is clearly visible and IN FOCUS behind the contractor -- it has labeled columns for each weekday and is ALMOST COMPLETELY EMPTY, with only ONE small job ticket card pinned up."
- **If scene looks too stock-photo clean:** Add "The office is TIRED and WORN -- fluorescent tube buzzing, carpet stained, desk surface scratched, the coffee mug has a brown ring stain. This is not a corporate office -- it is the back room of a small HVAC shop in January."
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.

---
---

## Prompt 2 -- "Nathan's Transformation"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

The solution scene. An HVAC contractor (representing Nathan) sits in his office in early January, but this time he is leaning forward with a quiet confidence, reviewing results on his tablet. The floating UI panels show the transformation: 147 maintenance contracts, $38K January revenue (not $11K), and a revenue comparison that tells the whole story. Warm golden lighting signals that the cycle is broken. This is the "after" moment -- proof that the spring campaign worked.

**Visual Impact:** High
**Priority:** 2

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic scene inside a contractor's office, but this time it feels ALIVE. Square format, 1:1 aspect ratio. A male HVAC contractor in his late 30s sits at his desk leaning forward with both elbows on the desk, holding a tablet at a comfortable reading angle. His expression is quiet satisfaction -- a subtle, controlled smile, the look of a business owner whose plan is finally paying off. He wears a clean navy blue company polo with a small embroidered HVAC company logo patch.

The office is the same modest small-business space -- commercial carpet, whiteboard on the wall -- but the whiteboard dispatch board behind him is NOW FULL. Job tickets fill every day column, several with colored priority stickers. A January calendar on the wall has multiple dates circled and filled in. The desk has a stack of signed service agreements with a yellow folder labeled "Maintenance Contracts," a few refrigerant gauge hoses, a package of air filters leaning against the desk edge, a coffee mug with steam rising from it. Warm late-morning sunlight streams through the window behind him, casting golden light across the desk and his shoulders. The contrast with the first image should be palpable -- same type of office, completely different energy.

FOCAL POINT ELEMENT: The tablet he holds glows with warm amber-gold light from a dashboard showing upward-trending metrics. The screen casts warm light on his face and hands. The stack of signed maintenance agreements on the desk is the secondary focal point -- physical proof of the contracts.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating in the scene, as if viewed through an augmented reality HUD):

ELEMENT 1 -- JANUARY RESULTS PANEL (floating to the upper-right of the contractor, large panel):
A large dark semi-transparent rounded rectangle panel with a bright amber-gold border glow. Inside:
- Header in amber-gold text: "January Revenue"
- Large white text: "$38,000"
- A thin progress bar below, filled approximately 90% in amber-gold
- Below the bar, a smaller comparison line in muted stone gray: "Last Year: $11,000"
- A green upward arrow icon with white text beside it: "+245%"

ELEMENT 2 -- MAINTENANCE CONTRACT COUNTER (floating to the upper-left):
A smaller dark semi-transparent panel with amber-gold border glow. Inside:
- Header in amber-gold text: "Active Contracts"
- Large white text: "147"
- Below in muted stone gray: "Signed in 90 days"
- A small green checkmark icon beside the count

ELEMENT 3 -- REVENUE BADGE (floating below Element 1):
A pill-shaped badge with amber-gold background and near-black charcoal text: "$29,253 plan revenue"

Thin amber-gold curved lines with small glowing data dots flow from the tablet screen outward to the floating panels.

CAMERA: 50mm lens equivalent, shot from slightly across the desk looking at the contractor at eye level. Medium close-up framing him from chest up with the desk surface, tablet, agreements stack, and the full dispatch board behind him visible. Moderate depth of field -- the dispatch board is slightly soft but the job tickets filling it are recognizable. The floating UI panels are rendered crisp and sharp.

LIGHTING: Warm morning sunlight streaming through the window behind the contractor, creating a golden rim light on his shoulders and the top of his head. The tablet screen adds warm amber fill light on his face from below. The floating UI panels emit amber-gold glow that reinforces the warm atmosphere. The overall scene feels warm, confident, and alive -- a dramatic contrast to the cold, flat January lighting of the problem scene.

COLOR PALETTE: Warm golden sunlight tones, amber-gold from UI panels and tablet glow, navy blue from his polo, warm wood or neutral desk tones, green accent from the checkmark and upward arrows. The entire scene is bathed in warmth -- the visual equivalent of a $38K January that used to be $11K.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

At the top-left of the image, with a semi-transparent dark gradient overlay behind the text for readability:

Line 1 (HEADLINE): "147 Contracts. 90 Days." -- white, approximately 34 point, clean modern geometric sans-serif bold, top-left with 40px padding from edges

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: Quiet triumph over the cycle. This is what breaking the feast-or-famine pattern looks like -- not a dramatic celebration, but a calm January morning where the dispatch board is full, the bank account is healthy, and the maintenance contracts are stacking up. The warm golden lighting is the visual payoff -- where Prompt 1 was cold and drained, this scene glows. A contractor scrolling LinkedIn sees this and thinks: "That could be my January. $38K instead of $11K. I need to start building those contracts NOW."
```

---

### Regeneration Notes

- **If January results panel text garbles:** Simplify to just "$38,000" in large white text with "January" in amber-gold above it. Remove the progress bar and comparison line.
- **If contract counter text garbles:** Simplify to just "147" in large white text with "Contracts" in amber-gold below it.
- **If revenue badge garbles:** Remove it entirely. The two main panels carry the story.
- **If the dispatch board behind him is not visibly full:** Add "The whiteboard dispatch board is IN FOCUS and clearly PACKED with job tickets and scheduling cards in every column. It is visibly, obviously full -- a stark contrast to the empty board in the problem scene."
- **If the warm lighting doesn't read as warm enough:** Add "GOLDEN HOUR quality sunlight flooding through the window -- amber-gold light rays visible in the air, warm highlights on every surface. The color temperature is dramatically warmer than typical office fluorescent."
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.

---
---

## Prompt 3 -- "The Spring Campaign Launch"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

The system in action. An HVAC technician stands on a residential rooftop beside an AC condenser unit doing a spring tune-up, phone in hand showing incoming maintenance plan signups. Floating UI panels display the campaign system working in real time -- an email sequence dashboard, a landing page conversion tracker, and a membership signup notification. Morning spring sunlight, blue sky, fresh green trees in the background. The technology is the hero -- the spring campaign machine is running while the technician does the work.

**Visual Impact:** High
**Priority:** 3

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic scene on a residential rooftop or ground-level concrete pad beside a house. Square format, 1:1 aspect ratio. A male HVAC technician in his early 30s kneels beside a residential AC condenser unit (a typical beige/gray outdoor split-system unit with a fan grille on top), performing a spring maintenance tune-up. He has one hand on the unit's access panel (open, exposing the condenser coils and electrical components) and his other hand holds a smartphone at mid-chest height, glancing at the screen with a pleased half-smile.

He wears a clean but not new company uniform -- khaki work pants with knee-pad wear marks, a light blue company polo tucked in, a leather tool belt with a multi-bit screwdriver, a set of refrigerant gauges hanging from the belt, and a digital manifold clipped to his belt loop. His hands have the slight grime of a morning already spent working -- not filthy, but real. A yellow refrigerant recovery tank sits on the ground beside him. A coil of copper refrigerant line is visible near the unit. His toolbag is open on the ground -- visible inside: a fin comb, a capacitor, electrical tape, wire nuts.

The background shows a suburban spring scene: a residential house with vinyl siding, fresh green leaves on trees, a blue sky with a few white clouds, a neatly mowed lawn. The light is warm morning spring sunlight -- golden, clean, optimistic. This is March, and the season is turning.

FOCAL POINT ELEMENT: The technician's phone screen glows with an amber-gold notification -- a new maintenance plan signup. The phone screen shows a simple notification banner: "New Member: Sarah T. -- Priority Plan" with a green checkmark icon. The phone is the bridge between the physical maintenance work and the digital campaign system running in the background.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating in the scene, as if viewed through an augmented reality HUD):

ELEMENT 1 -- CAMPAIGN DASHBOARD PANEL (floating to the upper-right of the scene, large):
A large dark semi-transparent rounded rectangle panel with a subtle amber-gold border glow. Inside:
- Header in amber-gold text: "Spring Campaign"
- A checklist with green checkmark icons:
  - "Email Sequence: Active" green checkmark
  - "Landing Page: Live" green checkmark
  - "Ads Running: 3 Campaigns" green checkmark
- Below the checklist, a small progress counter in white: "47 signups this week"

ELEMENT 2 -- CONVERSION TRACKER (floating to the upper-left):
A smaller dark semi-transparent panel with amber-gold border glow. Inside:
- Header in amber-gold text: "Plan Signups"
- Large white text: "147"
- A thin amber-gold progress bar below, approximately 75% full
- Small muted stone gray text: "90-day goal: 200"

ELEMENT 3 -- REVENUE PROJECTION BADGE (floating below Element 1):
A pill-shaped badge with amber-gold background and near-black charcoal text: "$39,800/yr recurring"

A thin amber-gold curved line with small glowing data dots flows from the technician's phone screen upward to the floating panels.

CAMERA: 35mm lens equivalent, shot from a low angle (ground level looking slightly up), placing the technician and AC unit in the lower two-thirds of the frame with the spring sky and floating UI panels in the upper portion. The technician and AC unit are in sharp focus. The house and trees in the background are in moderate soft focus. The floating UI panels are crisp and sharp.

LIGHTING: Warm morning spring sunlight from the upper-left, casting clean directional shadows. The sunlight gives the technician a warm rim light on his shoulders and creates bright highlights on the AC unit's metal housing. The floating UI panels emit subtle amber-gold glow. The overall scene feels fresh, optimistic, and active -- spring energy.

COLOR PALETTE: Blue sky, fresh green foliage, warm golden sunlight, beige/gray of the AC unit, khaki work pants, light blue polo, amber-gold from UI panels. The palette is warm and alive -- the visual opposite of the cold, gray January scene in Prompt 1.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

At the top-left of the image, with a semi-transparent dark gradient overlay behind the text for readability:

Line 1 (HEADLINE): "March Is the Window." -- white, approximately 34 point, clean modern geometric sans-serif bold, top-left with 40px padding from edges

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: Proactive energy. This is what "breaking the cycle" looks like in real time -- a technician doing the spring tune-up work while the campaign system runs automatically in the background, stacking maintenance contracts. The spring sunlight and blue sky feel like possibility. The floating panels show the machine working -- emails going out, landing page converting, signups climbing toward 200. A contractor scrolling LinkedIn in March sees this and thinks: "I should be doing this RIGHT NOW. The window is open and I'm not using it."
```

---

### Regeneration Notes

- **If campaign dashboard checklist garbles:** Simplify to just 2 lines: "Emails: Active" and "Ads: Running" with green checkmarks. Remove the signup counter.
- **If conversion tracker text garbles:** Simplify to just "147" in large white text with "Signups" in amber-gold above it. Remove the progress bar and goal text.
- **If revenue projection badge garbles:** Remove it entirely. The dashboard and counter carry the story.
- **If phone notification text garbles:** Simplify to just a green notification glow on the phone screen with no readable text -- the floating panels tell the data story instead.
- **If the AC unit doesn't look like a real HVAC condenser:** Add "The outdoor AC condenser unit is a realistic residential split-system unit -- beige/gray metal housing, round fan grille on top, copper refrigerant lines entering the side, a visible electrical disconnect box on the wall nearby. The access panel is removed showing condenser coils."
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.

---
---

## Prompt 4 -- "The Before/After Revenue Comparison"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

The data story concept. An overhead shot looking down at a contractor's desk where a tablet shows January revenue numbers. Floating side-by-side comparison panels make the before/after undeniable: $11K January (no contracts, famine cycle) versus $38K January (147 contracts, predictable revenue). HVAC tools and signed maintenance agreements surround the tablet on the desk. The numbers are the hero -- clean, stark, impossible to ignore.

**Visual Impact:** High
**Priority:** 4

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic overhead shot -- bird's eye view, camera looking STRAIGHT DOWN at a contractor's desk surface. Square format, 1:1 aspect ratio. The desk is a worn wooden surface with coffee ring stains, pen marks, and scratches in the grain -- a real working desk.

Visible on the desk surface, arranged naturally:
- A tablet computer face-up in the center of the frame, held loosely by a man's right hand. The hand is rough and calloused -- an HVAC technician's hand with a small scar on the thumb and grease residue around the fingernails.
- His left hand rests on a stack of signed service agreements -- printed forms with signatures visible, a yellow "Maintenance Plan" folder peeking out from underneath
- A set of refrigerant manifold gauges with red and blue hoses, coiled loosely in the upper-left of the frame
- A digital clamp meter lying diagonally
- A package of replacement capacitors (silver cylindrical components in blister packaging)
- A roll of yellow electrical tape partially unrolled
- Two brass flare fittings and a copper tube section
- A coffee mug (HVAC company logo on it) with brown residue inside
- The edge of a company checkbook or bank statement visible in the corner
- A pen resting on a printed invoice

FOCAL POINT ELEMENT: The tablet screen is brightly illuminated, showing a simplified revenue dashboard with a line graph trending upward. The screen casts warm amber-gold light onto the desk surface and the man's fingers.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating above the desk scene, as if viewed through an augmented reality HUD looking down):

ELEMENT 1 -- BEFORE PANEL (floating above the left half of the desk):
A dark semi-transparent rounded rectangle panel with a subtle MUTED RED border glow. Inside:
- Header in muted red text: "BEFORE"
- Large white text: "$11K"
- Muted gray label: "January Revenue"
- Below, a short list with red X icons:
  - "0 maintenance contracts" red X
  - "Seasonal revenue only" red X
The panel appears dim and lifeless.

ELEMENT 2 -- AFTER PANEL (floating above the right half of the desk):
A dark semi-transparent rounded rectangle panel with a bright amber-gold border glow. Inside:
- Header in amber-gold text: "AFTER"
- Large white text: "$38K"
- Muted gray label: "January Revenue"
- Below, a short list with green checkmark icons:
  - "147 active contracts" green checkmark
  - "Recurring revenue base" green checkmark
The panel is brighter, more vibrant, radiating success.

A solid black vertical divider line, 4px wide, runs between the BEFORE and AFTER panels from top to bottom of the panels to visually separate them.

ELEMENT 3 -- RESULT BADGE (floating below both panels, centered):
A pill-shaped badge with amber-gold background and near-black charcoal text: "+$27K/mo -- Same Company"

Thin amber-gold curved lines with glowing data dots flow from the tablet screen upward to both panels.

CAMERA: Directly overhead, bird's eye view, camera looking STRAIGHT DOWN at the desk surface. Equivalent to an 85mm lens at f/2.0. The tablet screen and the man's hands are in sharp focus. The edges of the desk (gauges, capacitors, coffee mug) are in slightly softer focus, creating a natural vignette. The floating UI panels are rendered crisp and sharp on their own focal plane.

LIGHTING: A warm desk lamp casting directional light from the upper-right, creating defined shadows of the gauges, fittings, and the man's hands across the desk surface. The tablet screen provides a warm amber glow from its surface. The floating UI panels emit subtle amber-gold and red glows. The BEFORE panel casts a faint cool reddish tint on the left side of the desk, while the AFTER panel casts warm amber on the right side -- visually dividing the desk into the two realities.

COLOR PALETTE: Warm wood tones from the desk, brass and copper metallic from fittings and tube section, red and blue from refrigerant gauge hoses, muted red from the BEFORE panel, warm amber-gold from the AFTER panel. The split color temperature (cool left, warm right) reinforces the before/after narrative without needing to split the actual scene.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

At the bottom of the scene, just above the brand bar, with a semi-transparent dark gradient overlay for readability:

Line 1 (HEADLINE): "$11K to $38K. Same January." -- white, approximately 34 point, clean modern geometric sans-serif bold, centered

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: The undeniable math. Looking down at this desk, a contractor sees both his tools and his numbers in the same frame -- the physical world he works in and the financial reality that determines whether he keeps his guys employed through winter. The before/after panels are stark: $11K versus $38K, same month, same company. The signed maintenance agreements on the desk are the physical evidence. A contractor scrolling LinkedIn does the mental math immediately: "If 147 contracts turned $11K January into $38K January, what would 200 contracts do for me?" That is the exact thought that makes them comment SPRING.
```

---

### Regeneration Notes

- **If BEFORE/AFTER panels merge or overlap:** Add "The BEFORE panel and AFTER panel are TWO COMPLETELY SEPARATE floating cards with a clear 4px solid black vertical line between them. They do NOT overlap, blend, or merge. There is visible space between them."
- **If panel text garbles:** Simplify each panel to just TWO elements: "$11K" in muted red for BEFORE and "$38K" in amber-gold for AFTER, with "January" as the only label. Remove the checklist lines entirely.
- **If the result badge text garbles:** Simplify to just "+$27K/mo" and remove "Same Company."
- **If the overhead angle renders as eye-level instead:** Reinforce with "Bird's eye view, camera looking STRAIGHT DOWN at the desk from DIRECTLY ABOVE. The desk surface fills the entire frame. We see the TOPS of the hands, the TOPS of the tools, the tablet screen face-up."
- **If desk surface looks too clean or staged:** Add "The desk is WORN and LIVED-IN -- coffee ring stains, pen marks etched into the wood, a thin layer of dust in the corners, brass fittings with tarnish and flux residue."
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.

---
---

## Quick Reference Summary

| # | Concept | Visual Impact | Priority | Key Risk | Logo File |
|---|---------|---------------|----------|----------|-----------|
| 1 | The Feast-or-Famine Dashboard | High | 1 | Revenue bar chart rendering inside panel | logo-white.png |
| 2 | Nathan's Transformation | High | 2 | Dispatch board fullness + panel text | logo-white.png |
| 3 | The Spring Campaign Launch | High | 3 | Phone notification text + campaign checklist | logo-white.png |
| 4 | The Before/After Revenue Comparison | High | 4 | Overhead angle + before/after panel separation | logo-white.png |

## Generation Commands

```bash
# Generate the recommended concept (Feast-or-Famine Dashboard)
python scripts/generate-post-image.py --file social_media/linkedin/posts/sunday-spring-maintenance/image-prompts.md --concept 1 --output social_media/linkedin/posts/sunday-spring-maintenance/images

# Generate Nathan's Transformation
python scripts/generate-post-image.py --file social_media/linkedin/posts/sunday-spring-maintenance/image-prompts.md --concept 2 --output social_media/linkedin/posts/sunday-spring-maintenance/images

# Generate Spring Campaign Launch
python scripts/generate-post-image.py --file social_media/linkedin/posts/sunday-spring-maintenance/image-prompts.md --concept 3 --output social_media/linkedin/posts/sunday-spring-maintenance/images

# Generate Before/After Revenue Comparison
python scripts/generate-post-image.py --file social_media/linkedin/posts/sunday-spring-maintenance/image-prompts.md --concept 4 --output social_media/linkedin/posts/sunday-spring-maintenance/images

# Generate all concepts
python scripts/generate-post-image.py --file social_media/linkedin/posts/sunday-spring-maintenance/image-prompts.md --all --output social_media/linkedin/posts/sunday-spring-maintenance/images

# Generate with 2 variations (pick the best)
python scripts/generate-post-image.py --file social_media/linkedin/posts/sunday-spring-maintenance/image-prompts.md --concept 1 --variations 2 --output social_media/linkedin/posts/sunday-spring-maintenance/images
```
