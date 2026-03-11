# From Referral-Dependent to System-Dependent Post -- Image Prompts (Final Output, No Post-Production)

**Post:** "Your best month last year was $68K. Your worst was $19K. Same team. Same skills. Different luck."
**Topic:** Referral-dependent contractors experience wild revenue swings (60-80% of work from word-of-mouth) with zero control over when the next job arrives -- a marketing system creates a predictable floor. Brett's 5-truck Indiana plumbing company went from $52K/$18K revenue swings to consistent $31K/month with a $24K floor. The gap between referral-dependent and system-dependent: $97,500/year.
**Image dimensions:** 1200 x 1200 px (1:1 square)
**CTA keyword:** REFERRALS

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

## Prompt 1 -- "The Revenue Roller Coaster"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

The recommended lead concept. A plumbing contractor sits at his kitchen table late in the evening, staring at a laptop showing a revenue chart with wild month-to-month swings. His phone sits face-down and silent beside him -- no new leads, no missed calls, no notifications. Through the kitchen window, his work truck sits in the driveway, idle. Floating UI panels expose the volatility: a jagged revenue line chart showing the roller coaster ($68K peak crashing to $19K valley), a lead source breakdown showing 74% from referrals, and a gap badge revealing $97,500/year left on the table. This is the "problem scene" -- the moment a contractor stares at his own numbers and realizes referrals are not a strategy, they are a gamble. The kitchen table late-evening number-crunch is the most universally recognizable contractor ritual.

**Visual Impact:** High
**Priority:** 1

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic scene inside a suburban kitchen late in the evening. Square format, 1:1 aspect ratio. A male plumbing contractor in his mid-40s sits at the kitchen table, leaning forward on his elbows, both hands pressed together against his mouth in a thinking posture -- the look of a man studying numbers he does not want to believe. He wears a faded navy blue work t-shirt with the sleeves pushed up, revealing forearms with tan lines, a few small scars, and the faint residue of pipe dope near his wrist. A worn leather watch strap on his left wrist.

The kitchen table tells the story of a business owner's evening ritual: a laptop open in front of him showing a colorful bar chart with wildly uneven bars (the revenue history -- some bars tall, some barely visible), a yellow legal pad with handwritten notes and circled numbers beside the laptop, a calculator, a cold half-drunk coffee mug with a brown ring stain on the table beneath it, a red pen, a crumpled receipt from a plumbing supply house. His smartphone lies face-down beside the legal pad -- deliberately turned over because there is nothing to see. No missed calls. No new leads. Silence.

On the chair beside him: a crumpled high-visibility yellow safety vest tossed over the chair back, a pair of worn leather work gloves. Through the kitchen window behind him, visible in the evening blue-hour light: his white work truck with a ladder rack sits in the driveway, idle, the company name on the door panel barely visible in the dim light. The kitchen is lit by a warm overhead pendant light that creates a dramatic pool of tungsten-warm light on the table surface, while the rest of the kitchen falls into deep shadow. A refrigerator with a child's drawing held by a magnet is barely visible in the dark background.

FOCAL POINT ELEMENT: The contractor's hands pressed against his mouth, his eyes locked on the laptop screen. The laptop shows a bar chart with dramatically uneven bars -- some tall (good months), some barely visible (bad months) -- creating a visual roller coaster pattern. The pendant light spotlights the table like an interrogation lamp: the laptop, the legal pad, the silent phone, the cold coffee. This is the evidence table.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating in the scene, as if viewed through an augmented reality HUD):

IMPORTANT: All UI panels must be LARGE -- each panel should be approximately 25-30% of the image width. Use heavy glassmorphism with visible frosted-glass blur behind each panel. Border glow should be prominent and clearly visible -- a 3-4px glowing border, not a faint hint.

ELEMENT 1 -- REVENUE VOLATILITY PANEL (floating to the upper-right of the scene, large and prominent):
A large dark semi-transparent rounded rectangle panel (heavy glassmorphism -- visible frosted blur behind the panel) with a BRIGHT, prominent MUTED RED glowing border (3-4px solid glow). Inside, generous padding and spacing between items:
- Header in muted red text, bold, 18pt equivalent: "12-Month Revenue"
- A thin muted red horizontal rule below the header
- A small jagged line chart rendered inside the panel showing dramatic peaks and valleys -- the visual roller coaster. The line is muted red. The highest peak has a small white label: "$68K" and the lowest valley has a small white label: "$19K"
- Below the chart, white text: "Variance: 3.6x"
- A muted red pill badge at the bottom with white text: "Unpredictable"
The panel radiates instability and anxiety -- the revenue is out of control.

ELEMENT 2 -- LEAD SOURCE BREAKDOWN PANEL (floating to the upper-left of the scene, same visual weight as Element 1):
A large dark semi-transparent rounded rectangle panel (heavy glassmorphism) with a BRIGHT muted red glowing border (3-4px). Inside:
- Header in muted red text, bold: "Lead Sources"
- A simple horizontal bar chart with two bars:
  - A large muted red bar labeled "Referrals: 74%" -- nearly full width
  - A tiny amber-gold bar labeled "Other: 26%" -- barely visible width
- Below the bars, separated by spacing, white text: "20 leads/month avg"
- Muted stone gray text: "Some months: 8"
- A muted red status badge: "No control"
The panel shows the dangerous over-reliance on a single unpredictable source.

ELEMENT 3 -- REVENUE GAP PILL (floating below both panels, centered between them):
A pill-shaped badge with muted red background and white bold text: "$97,500/yr gap"

Thin amber-gold curved lines with small glowing data dots flow from the laptop screen upward to both floating panels, as if the hidden revenue data is being extracted and analyzed in real time.

CAMERA: 50mm lens equivalent, shot from across the kitchen table at slightly above eye level, looking at the contractor at a 10-degree downward angle. Medium shot framing him from chest up with the table surface, laptop, legal pad, phone, and tools visible. The pendant light creates a natural spotlight. Shallow depth of field -- the kitchen background behind him dissolves into soft bokeh darkness. The truck through the window is a soft recognizable shape. The floating UI panels are rendered crisp and sharp on their own focal plane.

LIGHTING: A single warm tungsten pendant light hanging above the kitchen table creates a dramatic pool of golden-warm light on the table surface, the laptop, the legal pad, and the contractor's face and arms. The rest of the kitchen is in deep shadow. The laptop screen emits cool blue-white light on his chin and hands. The REVENUE VOLATILITY panel on the right emits a muted reddish glow. The LEAD SOURCE panel on the left emits a matching muted reddish glow. Both red-glowing panels cast faint crimson light on the scene -- the color of instability. Through the window, the blue-hour twilight provides a cool-toned backlight on the truck silhouette. The warm pendant light versus the cold red panel glow creates visual tension between the comfortable kitchen and the uncomfortable numbers.

COLOR PALETTE: Warm tungsten yellow from the pendant light, deep kitchen shadows, cool blue-white from the laptop screen, muted red from both UI panel borders creating an ominous wash, the faded navy of his work shirt, the yellow of the safety vest on the chair providing a trade-authentic color accent, blue-hour twilight through the window. The dominant mood is warm-domestic-invaded-by-cold-truth -- a cozy kitchen turned into a war room where the numbers do not lie.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

HEADLINE BACKGROUND: A horizontal gradient bar spanning the full width of the image, positioned at the top. The gradient goes from LEFT to RIGHT: solid near-black charcoal (100% opacity) on the left edge, fading smoothly to fully transparent (0% opacity) on the right edge. The gradient bar is approximately 80-90px tall, covering just the headline area.

Line 1 (HEADLINE): "$68K to $19K. Same Team." -- white, approximately 36 point, clean modern geometric sans-serif bold, positioned inside the gradient bar, left-aligned with 40px padding from the left edge, vertically centered within the gradient bar

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: Every contractor knows this night. The jobs slowed down three weeks ago. The phone stopped ringing. The truck has been sitting in the driveway more than it should. And now you are at the kitchen table with the laptop open, looking at the numbers, and the revenue chart looks like an EKG of a heart attack -- $68K one month, $19K three months later. Same crew, same skills, same trucks. The only variable is whether someone happened to recommend you this month. The floating panels make the dependency visible: 74% of your leads come from referrals, and you control exactly none of them. The $97,500/year gap pill is the cost of hoping instead of building. A plumber scrolling LinkedIn sees this and feels it instantly -- "That is my kitchen table. Those are my numbers. I cannot keep running a business on luck."
```

---

### Regeneration Notes

- **If the revenue line chart inside the panel garbles:** Replace the chart with simple text lines: "Best Month: $68K" and "Worst Month: $19K" in white text, stacked vertically. Remove the chart entirely.
- **If the lead source horizontal bars garble:** Replace with text only: "Referrals: 74%" in muted red and "Other: 26%" in amber-gold. Remove the bar chart.
- **If the headline text renders poorly:** Shorten to "$68K to $19K." at 38 point. Remove "Same Team."
- **If the truck through the window is not recognizable:** Remove the window detail. The table scene carries the story.
- **If the phone face-down does not read as "silent":** Add "A small dark notification badge on the phone's edge showing '0 missed calls' in dim white text."
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.

---
---

## Prompt 2 -- "The Predictable Floor"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

The data story concept. Brett -- 5-truck plumbing company in Indiana -- sits at his desk in his small office, tablet in hand, looking at a before/after revenue comparison with quiet confidence. Floating UI panels show the transformation as two side-by-side bar chart panels: the left panel shows the old referral-dependent revenue (wildly uneven bars, red glow, unpredictable) and the right panel shows the new system-dependent revenue (steady consistent bars with an upward trend, amber-gold glow, a solid floor line at $24K). A result badge shows the monthly floor. The plumbing office grounds the scene with dispatch board, license, and trade tools. The numbers are the hero -- the visual proof that a system replaced the gamble.

**Visual Impact:** High
**Priority:** 2

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic scene inside a small plumbing contractor's office. Square format, 1:1 aspect ratio. A male plumbing contractor in his late 30s sits at his desk, leaning back slightly in his office chair, holding a tablet in his left hand at a comfortable viewing angle. His expression is calm, confident satisfaction -- a controlled nod, the look of a man who just watched his third consecutive month hit the same revenue target. Not celebration, just certainty. He wears a clean charcoal gray company polo with a small embroidered plumbing company patch on the chest.

The desk has the tools of a plumbing business owner: a pipe wrench used as a paperweight on a stack of customer invoices, a roll of yellow Teflon tape near the monitor base, two brass SharkBite fittings sitting on a notepad, a pen, a coffee mug with the handle turned toward him (still warm -- this is a good morning, not a late-night crisis). Behind him on the wall: a whiteboard dispatch board with technician names and job assignments written in multiple colors -- the board is FULL, every row populated, several entries highlighted in green (completed). A framed plumbing contractor license hangs beside the whiteboard. A small shelf holds a few plumbing reference books and a hard hat. The office has warm overhead fluorescent lighting with daylight entering through a window to the right -- the atmosphere is productive, organized, alive.

FOCAL POINT ELEMENT: The tablet in his hand glows with warm amber-gold light from a revenue dashboard screen showing an upward-trending line chart. His right hand rests on the desk near the pipe wrench, fingers relaxed -- the posture of a man who is no longer anxious about the numbers. The tablet screen casts warm light onto his face and the desk surface. The full dispatch board behind him is the visual proof that the system is working -- every slot filled.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating in the scene, as if viewed through an augmented reality HUD):

IMPORTANT: All UI panels must be LARGE -- each panel should be approximately 25-30% of the image width. Use heavy glassmorphism with visible frosted-glass blur behind each panel. Border glow should be prominent and clearly visible -- a 3-4px glowing border, not a faint hint.

ELEMENT 1 -- BEFORE: REFERRAL REVENUE PANEL (floating to the upper-left of the scene):
A large dark semi-transparent rounded rectangle panel (heavy glassmorphism -- visible frosted blur behind the panel) with a BRIGHT, prominent MUTED RED glowing border (3-4px solid glow). Inside, generous padding and spacing:
- Header in muted red text, bold, 18pt equivalent: "BEFORE: Referrals Only"
- A thin muted red horizontal rule below the header
- A simplified bar chart with 6 vertical bars of wildly different heights -- some tall, some barely visible -- representing 6 months of unpredictable revenue. The bars are muted red.
- Below the bars, two white text lines:
  - "High: $52K"
  - "Low: $18K"
- A muted red pill badge at the bottom: "No Floor"
The panel radiates chaos and unpredictability -- you never know what next month brings.

ELEMENT 2 -- AFTER: SYSTEM REVENUE PANEL (floating to the upper-right of the scene):
A large dark semi-transparent rounded rectangle panel (heavy glassmorphism) with a BRIGHT amber-gold glowing border (3-4px). Inside, generous padding and spacing:
- Header in amber-gold text, bold, 18pt equivalent: "AFTER: Marketing System"
- A thin amber-gold horizontal rule below the header
- A simplified bar chart with 6 vertical bars of CONSISTENT, EVEN heights, each slightly taller than the last -- representing 6 months of steady upward-trending revenue. The bars are amber-gold.
- A HORIZONTAL DASHED LINE running across the bar chart at the level of the shortest bar, labeled in white text: "$24K floor"
- Below the bars, two white text lines:
  - "Average: $31K/mo"
  - "Floor: $24K/mo"
- A deep teal-green pill badge at the bottom: "Predictable"
The panel radiates stability and growth -- every month has a floor you can hire against.

A solid black vertical divider line, 4px wide, runs between the BEFORE and AFTER panels from top to bottom of the panels to visually separate them.

ELEMENT 3 -- TRANSFORMATION BADGE (floating below both panels, centered between them):
A pill-shaped badge with amber-gold background and near-black charcoal bold text: "+$97,500/yr"

Thin amber-gold curved lines with small glowing data dots flow from the tablet screen upward to both floating panels, connecting the data source to the visual comparison.

CAMERA: 50mm lens equivalent, shot from slightly across the desk at eye level with the contractor. Medium shot framing him from chest up with the desk surface, tablet, tools, and the dispatch board wall behind him visible. Moderate depth of field -- the dispatch board and license are slightly soft but recognizable and clearly populated. The floating UI panels are rendered crisp and sharp on their own focal plane.

LIGHTING: Warm overhead fluorescent office lighting with supplemental daylight from the window to the right, creating a productive, confident atmosphere. The tablet screen casts warm amber-gold uplight on the desk surface, his hand, and his face. The BEFORE panel on the left emits a faint cool reddish glow. The AFTER panel on the right emits warm amber-gold glow. The right side of the scene glows warmer than the left -- the visual split reinforces the transformation story. The full dispatch board is warmly lit, every name and job readable enough to feel real.

COLOR PALETTE: Warm office tones (wood desk or laminate surface, charcoal polo, white walls), the yellow of the Teflon tape and brass of the SharkBite fittings providing trade-authentic color anchors, muted red from the BEFORE panel on the left, bright amber-gold from the AFTER panel on the right, deep teal-green from the "Predictable" badge signaling success. The amber-gold dominates the right half of the frame, visually pulling the viewer's eye toward the stable, growing future. The full dispatch board behind him glows with the warm overhead light -- the visual proof of a system that fills the calendar.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

HEADLINE BACKGROUND: A horizontal gradient bar spanning the full width of the image, positioned at the top. The gradient goes from LEFT to RIGHT: solid near-black charcoal (100% opacity) on the left edge, fading smoothly to fully transparent (0% opacity) on the right edge. The gradient bar is approximately 80-90px tall, covering just the headline area.

Line 1 (HEADLINE): "Referrals vs. a System." -- white, approximately 36 point, clean modern geometric sans-serif bold, positioned inside the gradient bar, left-aligned with 40px padding from the left edge, vertically centered within the gradient bar

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: The math, visualized. The left panel is every referral-dependent contractor's reality -- wildly uneven bars, no floor, no way to predict next month. The right panel is what happens when you build a system: consistent bars, a floor at $24K that never drops, an average of $31K trending upward. The contractor sitting at his desk with trade tools around him and a FULL dispatch board behind him is not a marketing guru -- he is a plumber who let the system run while he focused on the work. The $97,500/year badge between the panels is the annual cost of staying referral-dependent. A contractor scrolling LinkedIn looks at the two bar charts and does immediate mental math: "My revenue chart looks like the left one. What would it take to make it look like the right one?"
```

---

### Regeneration Notes

- **If the BEFORE/AFTER panels merge or overlap:** Add "The BEFORE panel and AFTER panel are TWO COMPLETELY SEPARATE floating cards with a clear 4px solid black vertical line between them. They do NOT overlap, blend, or merge. There is visible space between them."
- **If the bar charts inside the panels garble:** Replace bar charts with simple stacked text. BEFORE panel: "High: $52K / Low: $18K / Variance: 2.9x". AFTER panel: "Average: $31K / Floor: $24K / Trend: Up". Remove all bar chart elements.
- **If the $24K floor dashed line does not render:** Remove the line. The "$24K/mo" text below the bars carries the concept.
- **If the dispatch board behind him looks blank or generic:** Add "The whiteboard dispatch board has 5 technician names written in blue marker, each with 3-4 job entries beside them in green, red, and black marker. The board is VISIBLY FULL -- no empty rows."
- **If the headline text renders poorly:** Shorten to "Referrals vs. System." at 38 point.
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.

---
---

## Prompt 3 -- "Referral vs. System Pipeline"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

The system in action concept. A split-composition scene: the left half shows a contractor sitting in his truck cab staring at a quiet phone with no notifications, a single referral contact card floating above -- the dry pipeline. The right half shows the same contractor (or a second contractor) at his desk with a tablet, phone buzzing with notifications, and multiple lead source panels flowing steadily into a pipeline visualization -- Google Ads, GBP, Website, AI Receptionist all feeding leads simultaneously. The split-screen format with an explicit black divider line contrasts the fragile single-source dependency against a robust multi-channel system. This is the hardest concept to render cleanly due to the split composition, but the visual payoff is the strongest pipeline metaphor.

**Visual Impact:** High
**Priority:** 3

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top. This is a SPLIT-SCREEN composition with two distinct halves.

SCENE AND ENVIRONMENT -- LEFT HALF (Referral-Dependent): The left half of the image shows a cinematic, photorealistic scene inside a contractor's work truck cab. Square format, 1:1 aspect ratio. A male plumbing contractor in his mid-40s sits in the driver's seat, looking down at his phone resting on his thigh with a dejected, waiting expression -- jaw clenched, brow heavy, the look of a man who has been checking his phone every ten minutes for a call that is not coming. He wears a faded olive green work t-shirt and a high-visibility yellow safety vest unzipped. His hands are rough with pipe dope residue on his fingers.

The truck cab is authentically lived-in: a clipboard with work orders on the passenger seat (but only ONE order visible -- the rest of the clipboard is empty), a pair of channel-lock pliers with blue handles, a stainless steel travel mug, a crumpled fast food bag. Through the truck windshield, an overcast gray sky -- dull, flat, no energy. The phone screen shows a lock screen with ZERO notifications. No missed calls. No new messages. The home screen is visible and empty.

SCENE AND ENVIRONMENT -- RIGHT HALF (System-Dependent): The right half of the image shows a cinematic, photorealistic scene inside a small plumbing contractor's office. The same or similar-looking male plumbing contractor sits at his desk, leaning forward with energy, one hand on his buzzing smartphone (screen lit up with multiple notification banners stacked on top of each other), the other hand reaching for a pen to write on a job schedule. His expression is focused, productive, slightly smiling -- the look of a man with too many leads to handle, a good problem to have. He wears a clean navy blue company polo.

The desk has a tablet showing a lead dashboard, a pipe wrench sitting on invoices, a roll of Teflon tape, brass fittings. Behind him, a whiteboard dispatch board is COMPLETELY FULL with technician names and job entries in multiple colors. His phone screen is stacked with notification banners -- multiple new lead alerts visible.

A solid black vertical divider line, 4px wide, runs from the top of the image to the bottom of the image, exactly at the center, clearly separating the left and right halves. The divider is crisp and unbroken.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating in the scene, as if viewed through an augmented reality HUD):

IMPORTANT: All UI panels must be LARGE -- each panel should be approximately 20-25% of the image width (sized for split-screen). Use heavy glassmorphism with visible frosted-glass blur behind each panel. Border glow should be prominent and clearly visible -- a 3-4px glowing border.

ELEMENT 1 -- REFERRAL PIPELINE PANEL (floating in the upper portion of the LEFT half):
A dark semi-transparent rounded rectangle panel with a MUTED RED glowing border (3-4px). Inside:
- Header in muted red text, bold: "Lead Pipeline"
- A visual of a NEARLY EMPTY pipeline -- a vertical funnel shape with only a single thin drip coming through
- White text below: "8 leads this month"
- Muted stone gray text: "100% referrals"
- A muted red pill badge: "Dry"
The panel shows a pipeline running on fumes.

ELEMENT 2 -- SYSTEM PIPELINE PANEL (floating in the upper portion of the RIGHT half):
A dark semi-transparent rounded rectangle panel with a bright amber-gold glowing border (3-4px). Inside:
- Header in amber-gold text, bold: "Lead Pipeline"
- A visual of a FULL, overflowing pipeline -- a vertical funnel shape with multiple colored streams flowing in from the top: small labeled arrows in different colors entering the funnel:
  - "Google Ads" in amber-gold
  - "GBP" in deep teal-green
  - "Website" in white
  - "AI Receptionist" in amber-gold
- White text below: "45 leads this month"
- An amber-gold pill badge: "Consistent"
The panel shows a pipeline fed by multiple sources -- robust, redundant, reliable.

ELEMENT 3 -- MONTHLY REVENUE COMPARISON (floating at the bottom center, spanning across the divider line):
A wide pill-shaped badge that spans across both halves. Left side has muted red background with white text: "$6,500/mo". Right side has amber-gold background with near-black charcoal text: "$14,625/mo". A small white "vs." sits at the center where the two colors meet.

CAMERA: Wide 35mm lens equivalent, capturing both halves of the split-screen composition. The camera is positioned straight-on at eye level for both scenes. Both halves have moderate depth of field -- the subjects and their immediate environment are in focus, backgrounds are softly rendered. The solid black divider line is perfectly vertical and crisp. The floating UI panels are rendered sharp on their own focal plane.

LIGHTING: LEFT HALF -- Flat, overcast daylight entering the truck windshield, creating a dull, low-energy atmosphere. The phone screen is dim. The overall left side has a slightly desaturated, cool tone. RIGHT HALF -- Warm overhead office lighting with daylight from a window, creating a productive, energetic atmosphere. The phone screen and tablet glow with warm amber light. The notification banners add pops of bright color. The right side has warmer, more saturated tones. The contrast between the two lighting schemes reinforces the emotional split: dull stagnation on the left, warm productivity on the right.

COLOR PALETTE: LEFT HALF -- desaturated cool gray tones, overcast sky, muted olive work shirt, dull truck interior, muted red from the pipeline panel. RIGHT HALF -- warm amber tones, golden office light, clean navy polo, warm amber-gold from the pipeline panel, deep teal-green and white from the lead source labels, bright notification colors. The split palette tells the story before you read a single word.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

HEADLINE BACKGROUND: A horizontal gradient bar spanning the full width of the image, positioned at the top. The gradient goes from LEFT to RIGHT: solid near-black charcoal (100% opacity) on the left edge, fading smoothly to fully transparent (0% opacity) on the right edge. The gradient bar is approximately 80-90px tall, covering just the headline area. The gradient bar spans ACROSS the divider line.

Line 1 (HEADLINE): "One Source vs. a System." -- white, approximately 36 point, clean modern geometric sans-serif bold, positioned inside the gradient bar, left-aligned with 40px padding from the left edge, vertically centered within the gradient bar

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width, ACROSS the divider line. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: The two realities of the same trade. Left: sitting in a cold truck, checking a quiet phone, waiting for a referral that may not come, living on hope. Right: sitting at a desk with a full dispatch board, phone buzzing with new leads from four different channels, picking which jobs to take. Same skill. Same market. The difference is the pipeline. The referral-dependent contractor has ONE dripping faucet feeding his business -- if it stops, everything stops. The system-dependent contractor has Google Ads, GBP, website conversions, and an AI Receptionist all feeding leads simultaneously. A plumber scrolling LinkedIn sees the left half and feels the pit in his stomach -- "That is my truck. That is my phone." Then he sees the right half and thinks: "That could be my office."
```

---

### Regeneration Notes

- **If the split-screen halves merge into one scene:** Reinforce: "This is a STRICT SPLIT-SCREEN image. The LEFT half and RIGHT half are TWO COMPLETELY SEPARATE scenes separated by a solid black vertical divider line, 4px wide, running from the very top of the image to the very bottom. The left half shows a TRUCK CAB. The right half shows an OFFICE. They do NOT blend or merge."
- **If the pipeline funnel visualization garbles:** Replace with simple text. Left panel: "8 leads / Referrals only / Unpredictable". Right panel: "45 leads / 4 sources / Consistent". Remove all funnel/stream visuals.
- **If the revenue comparison pill at the bottom garbles:** Simplify to just "$6.5K vs. $14.6K" in a single amber-gold pill badge. Remove the two-tone color split.
- **If one half is significantly weaker than the other:** Regenerate and add "Both halves of the split-screen must have EQUAL visual detail, clarity, and compositional balance. Neither half should dominate or appear less detailed than the other."
- **If notification banners on the right-side phone garble:** Simplify to "phone screen glowing bright with a large '5 New Leads' notification banner at the top of the screen."
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.

---
---

## Prompt 4 -- "The Quiet Phone"

### Platform and Model

**Primary:** Google Gemini 3 Pro (gemini-3-pro-image-preview)

The close-up problem scene. A tight shot of a contractor's smartphone lying on the dashboard of a work van, propped against the windshield at a slight angle. The phone screen shows zero missed calls, zero new leads -- a dead home screen. Beside the phone on the dusty dashboard: a sticky note with "Referrals Only" written in the contractor's handwriting, curling at the edges. Floating UI panels hover above the phone revealing the hidden cost of silence: a lead counter stuck at zero, a revenue projection showing the gap between referral-dependent and system-dependent revenue, and a calendar showing empty appointment slots. The van environment -- work gloves, pipe fittings, invoices on the passenger seat -- grounds the image. This is the simplest composition of the four but the most visceral: the quiet phone is every referral-dependent contractor's worst fear made visible.

**Visual Impact:** Medium
**Priority:** 4

---

### Prompt

```
IMPORTANT: This image combines a PHOTOREALISTIC scene with DIGITAL UI OVERLAY elements floating in the scene -- like a cinematic movie still merged with a software interface. The style blends real-world photography with tech dashboard elements layered on top.

SCENE AND ENVIRONMENT: A cinematic, photorealistic close-up scene on the dashboard of a contractor's work van. Square format, 1:1 aspect ratio. The camera is inside the van cab, focused tightly on the dashboard area. A smartphone lies on the dusty dashboard, propped slightly against the lower edge of the windshield at an angle so the screen faces the viewer. The phone screen is clearly visible and LARGE in the frame -- it occupies roughly 25-30% of the image area. The screen shows a lock screen with the time "2:14 PM" and below it: zero notifications, zero missed calls, zero messages. The screen is dim -- not bright with activity, just the low glow of a phone waiting for something that is not coming.

Beside the phone on the dashboard, slightly to the right: a yellow sticky note, edges curling up from sun exposure, with handwritten text in blue ink reading "Referrals Only" -- the contractor's one-line marketing strategy, literally stuck to his dashboard. The sticky note is slightly crumpled, well-worn, as if it has been there for months.

The dashboard is dusty with a fine layer of job-site grime. Nearby on the dashboard: a pair of worn leather work gloves with pipe dope stains, a small brass fitting that rolled out of a pocket, a crumpled receipt from a plumbing supply house. On the passenger seat visible in the background blur: a clipboard with a thin stack of work orders (only 1-2 pages, not a thick stack), a roll of yellow Teflon tape, a pipe wrench, and a half-empty water bottle. Through the van windshield behind the phone, out of focus: a suburban street with houses, midday flat overcast light. The scene feels idle, parked, waiting.

FOCAL POINT ELEMENT: The phone screen and the sticky note are the two co-focal points. The phone shows nothing -- zero activity, the screen equivalent of a dry well. The sticky note explains why -- "Referrals Only" is the entire marketing plan, and today it produced nothing. The contrast between the phone's dead screen and the sticky note's sad optimism is the visual punchline. The dusty dashboard and worn gloves ground the scene in a working tradesman's reality.

FLOATING UI OVERLAY ELEMENTS (rendered as semi-transparent digital panels floating in the scene, as if viewed through an augmented reality HUD):

IMPORTANT: All UI panels must be LARGE -- each panel should be approximately 25-30% of the image width. Use heavy glassmorphism with visible frosted-glass blur behind each panel. Border glow should be prominent and clearly visible -- a 3-4px glowing border.

ELEMENT 1 -- LEAD COUNTER PANEL (floating in the upper-left of the scene, large and prominent):
A large dark semi-transparent rounded rectangle panel (heavy glassmorphism -- visible frosted blur behind the panel) with a BRIGHT, prominent MUTED RED glowing border (3-4px solid glow). Inside, generous padding and spacing:
- Header in muted red text, bold, 18pt equivalent: "Today's Leads"
- A very large white bold number in the center, approximately 60pt equivalent: "0"
- Below the number, muted stone gray text: "Yesterday: 0"
- Below that, muted stone gray text: "This Week: 2"
- A muted red pill badge at the bottom: "Waiting on referrals"
The panel is the data visualization of silence -- a lead count frozen at zero.

ELEMENT 2 -- REVENUE PROJECTION PANEL (floating in the upper-right of the scene):
A large dark semi-transparent rounded rectangle panel (heavy glassmorphism) with a BRIGHT amber-gold glowing border (3-4px). Inside:
- Header in amber-gold text, bold: "With a System"
- White text: "45 leads/month"
- A thin amber-gold horizontal rule
- Large white bold text: "$14,625/mo"
- Below, a deep teal-green pill badge with white text: "Every month"
- Small muted stone gray text at the bottom: "vs. $6,500 on referrals"
The panel shows what could be -- the revenue the phone SHOULD be generating if a system were running.

ELEMENT 3 -- GAP BADGE (floating below both panels, centered):
A pill-shaped badge with muted red background and white bold text: "$8,125/mo left on the table"

A thin amber-gold curved line with small glowing data dots flows from the phone screen upward to both panels, as if the phone's silence is being measured and quantified.

CAMERA: 35mm lens equivalent, shot from the driver's seat position looking at the dashboard. Close-up to medium framing -- the phone and sticky note are the primary subjects, the dashboard details and passenger seat items provide context. Shallow depth of field -- the phone and sticky note are tack-sharp, the passenger seat items are in moderate soft focus, the street through the windshield is heavy bokeh. The floating UI panels are rendered crisp and sharp on their own focal plane.

LIGHTING: Flat midday overcast daylight entering through the van windshield, providing even, low-contrast illumination on the dashboard, phone, and sticky note. No dramatic shadows -- the flat lighting reinforces the monotony and boredom of waiting. The phone screen emits a dim cool glow. The LEAD COUNTER panel on the left emits a muted reddish glow onto the dashboard surface. The REVENUE PROJECTION panel on the right emits a warm amber-gold glow -- the glow of possibility that contrasts with the dull reality. The windshield creates a slight haze of diffused light behind the floating panels.

COLOR PALETTE: Muted, desaturated dashboard tones (gray plastic, dusty surface, faded leather gloves), the yellow of the sticky note providing the only warm color in the physical scene, the blue ink of "Referrals Only" on the sticky note, brass of the small fitting, amber-gold from the revenue projection panel contrasting with the muted red of the lead counter panel. The physical scene is deliberately drab -- all the color and energy lives in the floating UI panels, showing what COULD be versus what IS.

TEXT OVERLAY ELEMENTS RENDERED DIRECTLY ON THE IMAGE:

HEADLINE BACKGROUND: A horizontal gradient bar spanning the full width of the image, positioned at the top. The gradient goes from LEFT to RIGHT: solid near-black charcoal (100% opacity) on the left edge, fading smoothly to fully transparent (0% opacity) on the right edge. The gradient bar is approximately 80-90px tall, covering just the headline area.

Line 1 (HEADLINE): "The Phone Stopped Ringing." -- white, approximately 36 point, clean modern geometric sans-serif bold, positioned inside the gradient bar, left-aligned with 40px padding from the left edge, vertically centered within the gradient bar

BRAND BAR (bottom 12-15% of image): Solid near-black charcoal bar spanning full width. Thin 2-pixel amber-gold accent line at the top edge. LexumSoft logo (attached as image file -- do NOT describe the logo) in bottom-left, approximately 40-50 pixels tall, white. "lexumsoft.com" in muted stone gray, bottom-right, approximately 16 point.

MOOD: The worst sound in a contractor's world is silence. It is 2:14 in the afternoon. The phone has not rung. No missed calls. No texts. No new leads in the queue. Just a quiet phone on a dusty dashboard next to a sticky note that says "Referrals Only" -- and that sticky note is the entire marketing strategy. The floating panels quantify the silence: zero leads today, zero yesterday, two this entire week. And then the amber-gold panel shows what could be -- 45 leads a month, $14,625 in consistent revenue, every month, no guessing. The $8,125/month gap badge is the monthly cost of waiting instead of building. A plumber scrolling LinkedIn sees this image and immediately glances at his own phone, counts his missed calls this week, and thinks: "How many hours did I spend parked somewhere today waiting for a call that never came?"
```

---

### Regeneration Notes

- **If the sticky note text "Referrals Only" garbles:** Simplify to just "REFERRALS" in block letters. If it still fails, remove the sticky note and add a handwritten note on the clipboard on the passenger seat instead.
- **If the phone lock screen time and notification count garble:** Simplify to just a dim, dark phone screen with no text -- the emptiness itself tells the story. Remove the "2:14 PM" detail.
- **If the lead counter "0" does not render large and clear:** Make it the ONLY element in that panel: header "Today's Leads" and the giant "0" in white. Remove "Yesterday: 0" and "This Week: 2" lines.
- **If the dashboard looks too clean:** Add "The dashboard has a visible layer of fine dust, a small crack in the plastic trim near the windshield, and sun-faded spots where items usually rest. This is a WORKING van, not a showroom model."
- **If the headline renders poorly:** Shorten to "The Quiet Phone." at 38 point.
- **If brand bar text fails:** Accept the image. Scene, headline, and UI panels are higher priority.

---
---

## Quick Reference Summary

| # | Concept | Visual Impact | Priority | Key Risk | Logo File |
|---|---------|---------------|----------|----------|-----------|
| 1 | The Revenue Roller Coaster | High | 1 | Revenue line chart inside panel + dual panel separation | logo-white.png |
| 2 | The Predictable Floor | High | 2 | Before/After bar charts inside panels + divider line | logo-white.png |
| 3 | Referral vs. System Pipeline | High | 3 | Split-screen composition + pipeline funnel visualization | logo-white.png |
| 4 | The Quiet Phone | Medium | 4 | Sticky note text + phone screen rendering + close-up framing | logo-white.png |

## Generation Commands

```bash
# Generate the recommended concept (The Revenue Roller Coaster)
python scripts/generate-post-image.py --file linkedin/posts/friday-referrals/image-prompts.md --concept 1 --output linkedin/posts/friday-referrals/images

# Generate The Predictable Floor
python scripts/generate-post-image.py --file linkedin/posts/friday-referrals/image-prompts.md --concept 2 --output linkedin/posts/friday-referrals/images

# Generate Referral vs. System Pipeline
python scripts/generate-post-image.py --file linkedin/posts/friday-referrals/image-prompts.md --concept 3 --output linkedin/posts/friday-referrals/images

# Generate The Quiet Phone
python scripts/generate-post-image.py --file linkedin/posts/friday-referrals/image-prompts.md --concept 4 --output linkedin/posts/friday-referrals/images

# Generate all concepts
python scripts/generate-post-image.py --file linkedin/posts/friday-referrals/image-prompts.md --all --output linkedin/posts/friday-referrals/images

# Generate with 2 variations (pick the best)
python scripts/generate-post-image.py --file linkedin/posts/friday-referrals/image-prompts.md --concept 1 --variations 2 --output linkedin/posts/friday-referrals/images
```
