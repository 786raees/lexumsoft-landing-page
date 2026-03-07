# Google Business Profile Post -- Image Prompts (Final Output, No Post-Production)

**Post:** "You're paying for Google Ads. But your free Google listing is sitting there half-empty..."
**Topic:** Google Business Profile optimization for plumbing & HVAC companies -- the Map Pack, 5 quick wins, 73% call increase case study
**Image dimensions:** 1200 x 1200 px (1:1 square)
**CTA keyword:** PROFILE

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

## Prompt 1 -- "The Invisible Storefront"

### Platform and Model

**Primary:** Midjourney v6.1
**Fallback:** DALL-E 3

Midjourney is the ideal engine for this concept because it demands mastery of reflection, glass transparency, light diffusion, and noir-grade atmospheric depth. The core of the image is a glass reflection -- light bouncing off a dark surface, a glowing object rendered as a mirror image, wet pavement catching colored spill. These are material-rendering and lighting challenges, and Midjourney v6.1 at moderate-to-high stylization handles reflections and wet-surface caustics better than any competing model. The single subject (storefront), contained environment (sidewalk at night), and dominant single accent color (amber-gold) all play directly to Midjourney's strengths. The text elements are confined to a solid opaque bar, the highest-reliability configuration for AI text rendering.

---

### Prompt (copy-paste ready for Midjourney)

```
Photorealistic night photograph of a small local plumbing company storefront on a quiet urban side street. Square format, 1:1 aspect ratio. The shop occupies a single-story brick building with a large plate-glass window spanning most of the facade. The brick is dark, weathered, a deep charcoal brown with mortar lines visible in the texture. Above the window, a faded unlit sign reads the name of a generic plumbing business, barely legible in the darkness. The shop is clearly closed -- the interior behind the glass is pitch black, a void. No lights on inside. No merchandise visible. The glass window functions as a near-perfect dark mirror reflecting the street behind the viewer.

In the reflection on the glass, perfectly mirrored and hovering at eye level as if floating in the street behind us, is a massive three-dimensional Google Maps location pin. The pin is approximately four feet tall in reflected scale, rendered in polished amber-gold metal with a luminous quality, glowing from within as if heated. The pin shape is the classic inverted teardrop with a circular cutout at the center. The circular cutout glows with intense warm amber-gold light, like a miniature sun trapped inside the pin. The reflected pin casts a warm amber-gold light spill onto the reflected pavement visible in the glass, creating a pool of golden illumination on the ground behind us that exists only in the mirror world of the reflection. The pin is the brightest element in the entire image.

The sidewalk in front of the storefront is wet from recent rain. The concrete is dark charcoal gray, glistening. The wet surface catches and stretches the amber-gold light from the reflected pin into long horizontal streaks and soft caustic ripples across the pavement toward the viewer. Tiny puddles between the sidewalk cracks reflect pinpoints of the amber glow. The wet pavement is the critical connective element -- it bridges the dark physical storefront with the luminous reflected pin, pulling the golden light out of the reflection and into the real world at the viewer's feet.

To the left of the storefront, a dark iron drainpipe runs vertically down the brick wall, its surface catching a thin amber edge-light from the reflection. To the right, the sidewalk extends into darkness, with the faint cold blue-white glow of a distant streetlight providing minimal fill. A single crumpled business card lies on the wet sidewalk near the shop door, face down, its white paper catching a small amber highlight. No people. No cars. The street is empty and silent.

Camera: straight-on at eye level, standing approximately eight feet from the storefront window, as if the viewer has stopped on the sidewalk and is staring into the dark glass. Equivalent to a 35mm prime lens at f/2.0. Sharp focus on the glass surface and the reflected pin within it. The brick edges of the building fall into soft focus at the frame margins. The depth of field isolates the glass reflection as the primary plane of focus, making the reflected amber pin feel impossibly sharp and present.

Lighting: the reflected Google Maps pin is the dominant light source in the scene, casting all the warm amber-gold illumination. A secondary cold blue-white distant streetlight provides dim fill on the right edge of the frame, creating color temperature contrast. The brick facade is lit only by spill from the pin reflection and ambient city sky glow. Color temperature split: warm amber-gold from the pin dominates the center and left of the frame, cold blue-white from the streetlight barely touches the right edge. High contrast ratio between the luminous pin reflection and the surrounding darkness. The mood is cinematic noir with a single supernatural warm accent.

Color palette: dominant near-black charcoal and dark espresso brown in the brick and pavement. Amber-gold as the sole warm accent, concentrated in the pin reflection and the wet pavement streaks. Cold blue-white as a distant minor accent on the right margin. White only in the small business card highlight on the ground. No bright greens, reds, or saturated colors outside the amber spectrum.

Mood: haunting, melancholic, revelatory. The feeling of standing in front of a business that exists physically but is invisible digitally. The Google Maps pin glows in the reflection like a ghost, like an opportunity that is right there, hovering, waiting to be claimed, but the shop owner has not turned it on. Cinematic noir meets magical realism. Inspired by the nocturnal urban photography of Todd Hido, the rain-slicked cityscapes of Liam Wong, and the atmospheric tension of Edward Hopper's Nighthawks reimagined as a single dark storefront.

TEXT AND BRAND ELEMENTS RENDERED DIRECTLY ON THE IMAGE: At the bottom of the image, a solid opaque horizontal bar spans the full width of the frame across the bottom 16 percent. The bar is filled with near-black charcoal, completely solid, no transparency. A thin 2-pixel amber-gold horizontal accent line runs across the full width at the very top edge of this bar. Inside the bar, centered horizontally and positioned in the upper half of the bar, large bold clean modern sans-serif white text reads exactly: "Your listing is invisible." The text is approximately 54 point relative to the 1200 pixel canvas, using a geometric sans-serif similar to DM Sans, weight 700 bold. Below the headline, with 12 pixels of vertical spacing, smaller clean sans-serif muted stone-gray text reads: "lexumsoft.com" at approximately 20 point size, centered horizontally.

Post-processing: deep rich blacks with preserved shadow detail, amber highlights that glow with soft halation, subtle lens flare streak from the pin's circular cutout, fine film grain, cinematic color grading pushed heavily toward warm amber in highlights and cold blue in shadows. Gentle vignette darkening the corners. Wet surface reflections should shimmer, not blur. --ar 1:1 --s 350 --v 6.1 --q 2 --style raw --no watermark, signature, border, frame, cartoon, anime, illustration, 3d render, clipart, daytime, sunny, bright, people, cars, vehicles
```

---

### Recommended Parameters

| Parameter | Value | Reason |
|-----------|-------|--------|
| `--ar` | `1:1` | LinkedIn square post format |
| `--s` | `350` | Moderate-high stylization. Pushes the glass reflection and wet pavement caustics into cinematic territory while keeping architectural textures grounded. |
| `--v` | `6.1` | Best current Midjourney version for reflective surfaces, wet materials, and nighttime urban scenes. |
| `--q` | `2` | Maximum quality. The glass reflection, wet pavement caustics, and brick mortar detail all demand the extra rendering budget. |
| `--style` | `raw` | Prevents Midjourney from softening the noir mood into something prettified. Keeps the dark shop truly dark and the amber pin truly luminous. |
| `--no` | (see prompt) | Excludes daytime, sunny, bright, people, cars to enforce the empty, dark, solitary mood. Does NOT exclude "text" or "words" because the text bar is intentional. |

---

### Why This Works

1. **Reflection as metaphor** -- The Google Maps pin exists only as a reflection, not as a physical object in the scene. This is a visual metaphor Midjourney can execute cleanly: render one object reflected in glass. The model does not have to composite two unrelated things; it just has to render a reflection, which it understands natively.
2. **Single dominant light source** -- Every photon of amber-gold in the scene traces back to the reflected pin. Midjourney excels when light has a clear, motivated origin. No competing light sources means the model can calculate shadow falloff and spill consistently.
3. **Wet pavement as light transport** -- The rain-soaked sidewalk is not decorative; it is structural. It catches the amber-gold and physically extends the light from the glass surface to the viewer's feet, creating a visual throughline. Midjourney v6.1 renders wet surface reflections and stretched light caustics extremely well.
4. **Noir artist references** -- Todd Hido, Liam Wong, Edward Hopper triangulate a very specific aesthetic: quiet, isolated, cinematic, warm-on-cold color contrast, urban night. These references prevent Midjourney from defaulting to generic "city at night" stock photo aesthetics.
5. **Text on solid opaque bar** -- The headline and brand text sit on a near-black charcoal rectangle with zero transparency. This is the highest-reliability configuration for AI text rendering. The bar provides a clean, uniform background free from scene clutter, and the white text at 54pt is large enough for the renderer to produce clean letterforms.
6. **Minimal text count** -- Only two text elements: "Your listing is invisible." and "lexumsoft.com". Two elements is well within the safe zone. The headline is the priority; the URL is secondary and expendable if rendering struggles.

---

### Regeneration Tips

**What to look for in a GOOD output:**
- The storefront is clearly a closed, dark shop with a large glass window
- The glass window shows a reflected Google Maps pin shape, glowing amber-gold
- The reflected pin is the brightest element in the image
- The sidewalk is wet, with amber-gold light streaks and reflections
- The overall color palette is dark charcoal with amber-gold as the sole warm accent
- The mood feels lonely, cinematic, noir
- The bottom bar is solid, opaque, full-width, near-black
- "Your listing is invisible." is readable and correctly spelled in white on the bar
- "lexumsoft.com" is present in the bar area
- The thin amber accent line is visible at the top of the bar

**What to REJECT:**
- Daytime scene or brightly lit storefront
- The Google Maps pin is a physical object on the sidewalk rather than a reflection in the glass
- No recognizable glass reflection effect
- The amber-gold light is absent or replaced by generic white/blue lighting
- People, cars, or busy street activity in the scene
- The bottom bar is missing, transparent, or does not span the full width
- The headline text is garbled, misspelled, or unreadable
- The scene looks like a cartoon, illustration, or 3D render instead of a photograph

**Iteration strategy for text issues:** If the headline garbles after 2 batches, shorten to "Invisible online." (two words, highest reliability). If "lexumsoft.com" fails, remove it entirely and keep only the headline -- one text element on a solid bar is nearly bulletproof. If the reflection concept itself is not rendering (no pin in the glass), add "clear visible reflection of a glowing amber map pin in the dark window glass, mirror-like reflection" to reinforce the instruction. If the pin keeps appearing as a physical object instead of a reflection, add "the map pin exists only as a reflection in the glass, it is not physically present on the street" to the scene description.

---
---

## Prompt 2 -- "The Map Pack Throne"

### Platform and Model

**Primary:** Midjourney v6.1
**Fallback:** DALL-E 3

The aerial god's-eye perspective, miniature-effect rendering, and precise lighting control across a neighborhood scene are quintessential Midjourney territory. This prompt requires the model to render multiple houses from directly above, apply selective warm lighting to exactly three of them while keeping everything else dark, and include a recognizable plumber's van in one driveway. Midjourney v6.1 handles tilt-shift miniature aesthetics and selective lighting zones well at higher stylization values. The text is placed on a solid bottom bar, keeping text rendering separate from the complex aerial scene. DALL-E 3 is the fallback because it interprets spatial instructions more literally, which could help with the "exactly three glowing houses" requirement if Midjourney over-generalizes.

---

### Prompt (copy-paste ready for Midjourney)

```
Aerial god's-eye-view photograph looking straight down at a suburban residential neighborhood at night. Square format, 1:1 aspect ratio. Approximately twenty single-story and two-story houses arranged along two parallel residential streets with cul-de-sacs, interconnected driveways, front lawns, backyard fences, a few scattered mature trees with dark canopies visible from above. The houses have gray and charcoal-toned shingled rooftops, some with subtle variations in dark brown and slate. The streets are dark asphalt with faded white lane markings. Parked cars sit in driveways and along curbs.

The critical visual element: exactly three houses, clustered together on the same block, glow with intense warm amber-gold light. These three houses radiate warmth from every window, their rooftops bathed in the upward spill of amber interior light, their front lawns illuminated by warm porch lights and golden window glow that spills across the grass. Each of the three glowing houses has a bright, clearly defined amber-gold aura around it, creating pools of warm golden light on the surrounding pavement and lawn. These three houses are the Map Pack -- the local three-pack of Google search results, the only businesses that get seen. They burn like three campfires in a field of darkness.

Every other house in the neighborhood is dark. Windows are black or reflect cold blue moonlight. No porch lights. No interior glow. The rooftops are lit only by cold pale blue-white moonlight from above, creating a stark color temperature contrast with the three amber houses. The dark houses are not invisible -- their forms are readable, their rooftops and lawns subtly illuminated by ambient moonlight -- but they are inert, cold, clearly not chosen.

In the driveway of the center glowing house, a white commercial plumber's work van is parked, its roof visible from above. The van has a compact ladder rack on the roof and the rear cargo doors are slightly ajar, revealing a warm amber interior light inside the cargo area. The van's white roof catches the amber glow from the house and the porch light, making it the most recognizable vehicle in the scene. A small amber-gold halo of light surrounds the van from the nearby house illumination.

Camera: directly overhead, 90-degree bird's-eye angle, equivalent to a drone at approximately 200 feet altitude using a 35mm equivalent lens. Tilt-shift miniature effect applied so the houses and streets look like a detailed architectural model or tabletop diorama. Sharp focus band across the center of the frame where the three glowing houses sit. The edges of the frame fall into soft creamy bokeh. The tilt-shift effect compresses depth and makes rooftops, trees, and lawns look slightly like model railroad scenery while maintaining photorealistic textures and materials.

Lighting: the three amber houses generate the primary warm light in the scene, radiating outward and downward, their golden window spill and porch lights casting warm amber pools on surrounding pavement. The remaining houses are lit by cold blue-white moonlight falling evenly from above. The color temperature contrast between the amber houses and the blue-lit neighborhood is extreme and deliberate. No streetlights. No other artificial light sources besides the three houses and the van cargo light. The night sky above provides a thin ambient blue-white fill.

Color palette: near-black asphalt streets, dark charcoal and slate rooftops, cold blue-white moonlight tones across the dark neighborhood, rich warm amber-gold concentrated exclusively on the three chosen houses, warm green-gold on the three illuminated lawns versus dark charcoal-green on every other lawn. White only on the plumber's van roof. No bright reds, pinks, or saturated colors outside the amber spectrum.

Mood: revelatory and slightly ominous. The god's-eye perspective creates the feeling of looking at a game board where only three players are lit up and everyone else sits in darkness. The visual hierarchy is absolute -- the eye goes immediately to the three glowing houses, then registers the sea of dark ones surrounding them. The metaphor is visceral: most businesses are invisible in local search, and only three get the spotlight. Inspired by the aerial night photography of Vincent Laforet's "Air" series, the controlled-lighting diorama work of architectural miniature photographers, and the selective-illumination compositions of James Turrell.

TEXT AND BRAND ELEMENTS RENDERED DIRECTLY ON THE IMAGE: At the bottom of the image, a solid opaque horizontal bar spans the full width of the frame across the bottom 17 percent. The bar is filled with near-black charcoal, completely solid, no transparency. A thin 2-pixel amber-gold horizontal accent line runs across the full width at the very top edge of this bar. Inside the bar, centered horizontally and positioned in the upper portion of the bar, large bold clean modern sans-serif white text reads exactly: "Only 3 get seen." The text is approximately 56 point relative to the 1200 pixel canvas, using a geometric sans-serif similar to DM Sans, weight 700 bold. Below the headline, with 12 pixels of vertical spacing, smaller clean sans-serif muted stone-gray text reads: "lexumsoft.com" at approximately 20 point size, centered horizontally.

Post-processing: tilt-shift blur gradient from sharp center to soft edges, high micro-contrast on architectural detail and rooftop textures, slight film grain, cinematic color grading emphasizing the amber-versus-blue-moonlight contrast. Gentle vignette on corners. Desaturated midtones with richly saturated amber highlights. The three glowing houses should feel almost supernaturally bright against the cold dark neighborhood. --ar 1:1 --s 400 --v 6.1 --q 2 --style raw --no watermark, signature, border, frame, cartoon, anime, illustration, 3d render, ground level, eye level, portrait, interior, daytime, sunset
```

---

### Recommended Parameters

| Parameter | Value | Reason |
|-----------|-------|--------|
| `--ar` | `1:1` | LinkedIn square post format |
| `--s` | `400` | Higher stylization to push the selective amber glow into dramatic, almost supernatural territory. The contrast between warm and cold needs to feel extraordinary, not subtle. |
| `--v` | `6.1` | Best version for aerial architectural photography and tilt-shift miniature effects. |
| `--q` | `2` | Maximum quality. The miniature diorama effect depends on tiny textural details being crisp -- rooftop shingles, lawn grass blades, van ladder rack, driveway cracks. |
| `--style` | `raw` | Keeps the aerial perspective honest and prevents Midjourney from romanticizing the scene into a fantasy village illustration. |
| `--no` | (see prompt) | "ground level, eye level, portrait, interior, daytime, sunset" aggressively prevents perspective and time-of-day drift. No "text" exclusion. |

---

### Why This Works

1. **"Exactly three" is a concrete number** -- Midjourney handles "three of X are different from all others" better than vague instructions like "some" or "a few." The number 3 maps directly to the Map Pack concept and gives the model a clear rendering target.
2. **Color temperature as the sole differentiator** -- The three special houses differ from all others in exactly one dimension: light color temperature (warm amber vs. cold blue-white). This is simpler for the model than trying to make houses differ in size, style, or architecture, and it creates a more powerful visual metaphor.
3. **The van as a specificity anchor** -- Including the plumber's van with its ladder rack and ajar cargo doors gives the scene a concrete trade-specific detail that connects the abstract "three glowing houses" metaphor back to the plumbing business context of the LinkedIn post.
4. **Tilt-shift miniature framing** -- The diorama effect serves two purposes: it makes the aerial perspective feel intentional and premium rather than Google Earth-like, and it creates a natural depth-of-field gradient that pushes the viewer's focus toward the sharp-focus center where the three glowing houses sit.
5. **Artist references ground the aesthetic** -- Vincent Laforet's aerial night photography is the exact visual language this prompt targets. Citing it prevents Midjourney from defaulting to satellite-photo flatness or video-game overhead views.
6. **Text on solid bar, minimal count** -- Two text elements on a solid near-black charcoal bar, completely isolated from the aerial scene above. The bar acts as a clean lower boundary that also frames the image professionally.

---

### Regeneration Tips

**What to look for in a GOOD output:**
- The perspective is truly top-down, bird's-eye, 90-degree aerial (you see rooftops, not walls)
- Exactly three houses (or close to three -- two or four is acceptable if the composition is strong) glow with warm amber-gold light
- All other houses are dark and lit only by cold blue-white moonlight
- The color temperature contrast between amber houses and cold neighborhood is dramatic
- A white van is recognizable in one of the glowing house driveways
- The tilt-shift miniature/diorama effect is present (soft edges, sharp center)
- The bottom bar is solid, opaque, full-width, near-black
- "Only 3 get seen." is readable and correctly spelled in white on the bar
- "lexumsoft.com" is present below the headline
- The thin amber accent line is visible at the top of the bar
- The overall image feels like premium aerial photography, not a map screenshot or cartoon

**What to REJECT:**
- Ground-level or eye-level perspective
- All houses glowing uniformly (no differentiation)
- No amber-gold light on any houses (all cold blue)
- More than five or six glowing houses (defeats the "only 3" concept)
- The scene is daytime or sunset instead of full night
- The bottom bar is missing or transparent
- The headline text is garbled or unreadable
- The scene looks like a cartoon, video game, or illustration

**Iteration strategy:** If the "exactly three glowing" concept is not rendering cleanly:
1. Add "three houses and ONLY three houses glow with amber light, all others are dark and cold" as reinforcement
2. If the number keeps varying, accept any output where 2-4 houses glow and the rest are dark -- the visual metaphor still works
3. If the aerial perspective keeps defaulting to 45-degree angle instead of top-down, add "satellite view, directly overhead, plan view, zenith angle" to the camera paragraph
4. If the van is missing after 2 batches, remove the van requirement and keep the focus on the three-vs-all contrast -- the van is secondary to the core metaphor
5. For text: "Only 3 get seen." is a short, high-reliability headline. If it still garbles, try "Only 3." (two words). If "lexumsoft.com" fails, drop it.

---
---

## Prompt 3 -- "The Unlocked Phone"

### Platform and Model

**Primary:** Ideogram v3 (Design mode)
**Fallback:** Midjourney v6.1

Ideogram Design mode is the strongest choice for this concept because the image centers on a smartphone screen displaying specific UI elements (a search results list with three business listings). Ideogram v3 excels at rendering screen-like content, card layouts, and text within defined UI-like regions. The phone screen is essentially a graphic design element embedded in a photographic scene -- exactly the hybrid that Design mode was built to handle. The text elements here are a headline above the phone and the brand bar below, both on dark solid backgrounds where Ideogram's text engine performs best. Midjourney is the fallback because its material rendering (glass phone screen, light spill on dark surface) would be stronger, though it would likely struggle with the screen UI content.

---

### Prompt (copy-paste ready for Ideogram)

```
Dramatic close-up photograph of a modern smartphone lying face-up on a dark surface. Square format, 1:1 aspect ratio. The phone is positioned in the center of the frame, angled at approximately 15 degrees from vertical alignment, tilted slightly clockwise, creating a dynamic composition. The phone has thin dark bezels and rounded screen corners, a premium flagship design.

The phone rests on a surface made of dark matte charcoal-colored material with a subtle brushed texture, like a slate desktop or dark stone countertop. The surface extends to all edges of the frame with no other objects visible -- the phone is the sole subject against the dark expanse.

The phone screen is fully illuminated and displays a simplified Google Maps local search result interface. The screen shows a small map area at the top of the screen with a cluster of three amber-gold location pins on muted gray-green map terrain. Below the map, three business listing cards are stacked vertically. Each card shows a business name in clean sans-serif text, a row of small amber-gold star icons indicating a rating, and a phone number. The topmost listing card is highlighted with a glowing amber-gold left border bar and has a slightly brighter background than the other two, indicating it is the selected or featured result. The two lower listing cards have dimmer, neutral styling. The overall screen content reads as a clean, professional search results interface dominated by amber-gold accents.

The phone screen is the sole light source in the image. Its bright display casts a soft, warm amber-gold glow onto the dark surface surrounding the phone. The light spill creates a gradient: brightest immediately around the phone edges, fading to near-black at the frame margins. The light pool on the surface has a slightly rectangular shape matching the screen dimensions, with soft diffused edges. The amber-gold screen glow reflects subtly on the glossy dark bezels of the phone, creating thin highlight lines along the device edges.

Camera: shooting from approximately 30 degrees above the phone, looking down at a shallow angle so the screen content is clearly readable. Equivalent to a 50mm macro lens at f/2.8. Sharp focus on the phone screen and the immediately surrounding surface. The far edges of the dark surface fall into soft focus. Extremely shallow depth of field so the viewer's attention is locked onto the screen. The phone fills approximately 55 percent of the frame height.

Lighting: the phone screen is the only light source. No overhead lights, no ambient fill, no secondary sources. The entire scene is lit by the screen glow. This creates a dramatic chiaroscuro effect where the phone is a luminous island in a sea of darkness. The color temperature of the screen light is warm amber-gold, slightly warmer than a typical phone screen would naturally appear, emphasizing the brand accent color. The shadows are deep near-black with no detail, falling off rapidly from the screen glow.

Color palette: near-black charcoal surface covering 70 percent of the image. Warm amber-gold from the screen glow and the highlighted UI elements. White and light gray in the screen text and listing cards. The only color in the image comes from the phone screen -- everything else is dark monochrome. No blue, no green, no red outside the screen content.

Mood: intimate, powerful, revelatory. The feeling of holding the answer to a business problem in the palm of your hand. The phone screen as a window into where customers actually find you. Dramatic, cinematic, commercial advertising quality. The dark surrounding void focuses every ounce of attention onto the screen content. Inspired by dramatic product photography for Apple and Samsung campaigns, the chiaroscuro lighting of Caravaggio, and the intimate object photography of still-life specialists.

TEXT AND BRAND ELEMENTS RENDERED DIRECTLY ON THE IMAGE: At the top of the image, in the upper 14 percent, centered horizontally against the dark charcoal surface, bold clean modern sans-serif white text reads exactly: "This is where they find you." The text is approximately 48 point relative to the 1200 pixel canvas, using a geometric sans-serif similar to DM Sans, weight 700 bold. The dark surface behind the text provides natural high contrast. At the very bottom of the image, a solid opaque horizontal bar spans the full width across the bottom 10 percent. The bar is filled with near-black charcoal, slightly darker than the surface above it, with a thin 2-pixel amber-gold accent line at the top edge. Inside the bar, centered, small clean sans-serif muted stone-gray text reads: "lexumsoft.com" at approximately 18 point size.
```

---

### Ideogram Settings

| Setting | Value | Reason |
|---------|-------|--------|
| **Style** | Design | Best for rendering screen UI content, card layouts, and embedded typography alongside photographic elements |
| **Aspect Ratio** | 1:1 (Square) | LinkedIn post format |
| **Magic Prompt** | OFF | Prevents Ideogram from rewriting the precise screen content instructions and text specifications |
| **Model** | v3 (latest) | Best text rendering and UI-like content generation |

---

### Why This Works

1. **Phone-as-sole-light-source is visually arresting** -- The screen glow illuminating the surrounding darkness creates an immediately eye-catching composition that works even as a tiny LinkedIn feed thumbnail. The amber-gold light pool draws the eye to center frame.
2. **Screen content is UI-like, not photographic** -- Ideogram Design mode renders card layouts, star ratings, and structured list items much more reliably than photographic content. The search results screen is essentially a design mockup embedded in a photo, which is Design mode's sweet spot.
3. **Amber-gold UI accents unify brand and content** -- The highlighted listing's amber-gold border bar, the amber star ratings, and the amber map pins all use the LexumSoft brand accent color, creating visual coherence between the phone content and the brand bar below.
4. **Minimal text count in optimal positions** -- Two text elements: "This is where they find you." in white on the dark top area (high contrast, clean background), and "lexumsoft.com" in stone gray on the bottom bar. Both sit on solid dark surfaces with no competing visual detail.
5. **Single subject, zero clutter** -- The phone is the only object. The dark surface is featureless. This gives both the scene renderer and the text renderer maximum room to operate without interference.
6. **The headline speaks directly to the viewer** -- "This is where they find you." with the arrow pointing down toward the phone screen creates an implicit visual connection between the text and the screen content below it.

---

### Regeneration Tips

**What to look for in a GOOD output:**
- A smartphone lying on a dark surface, screen face-up and clearly illuminated
- The screen shows something resembling a map with location pins and a list of business results
- The screen glow casts warm amber-gold light onto the surrounding dark surface
- The image is overwhelmingly dark except for the phone and its light pool
- No other objects, hands, or elements compete with the phone
- "This is where they find you." is readable in white text at the top of the image
- "lexumsoft.com" is present in the bottom bar area
- The overall quality feels like premium product photography

**What to REJECT:**
- Bright, well-lit scene instead of the dark chiaroscuro effect
- The phone screen is blank, off, or showing unrelated content (social media, home screen)
- Multiple phones or additional objects clutter the scene
- The amber-gold light spill is absent (phone looks pasted onto the surface)
- The headline text is garbled or missing
- The screen content is realistic enough to show actual readable text that is misspelled (this is worse than abstract UI shapes)

**Iteration strategy:**
1. If the screen content looks garbled or wrong, add "simplified, stylized, minimal user interface mockup" to the screen description -- this gives Ideogram permission to abstract the UI rather than attempting photorealistic screen capture
2. If the phone is rendering with hands holding it, add "no hands, phone lying flat on surface, unmanned" to the scene description
3. If the dark surface is too bright, add "extremely dark environment, near-black, minimal ambient light" to reinforce the darkness
4. For text: "This is where they find you." is seven words -- moderate difficulty. If it garbles after 2 batches, shorten to "They find you here." (four words). If "lexumsoft.com" fails, drop it entirely.
5. If Ideogram Design mode is not producing the photographic quality desired, switch to Midjourney v6.1 with `--ar 1:1 --s 300 --q 2 --style raw` and accept that the screen content will be less precise (more abstract glowing shapes than readable UI)

---
---

## Prompt 4 -- "The Gold Mine"

### Platform and Model

**Primary:** Midjourney v6.1
**Fallback:** DALL-E 3

This is a surreal, fine-art concept with a single oversized symbolic object in an atmospheric landscape. This is the exact category of image where Midjourney v6.1 dominates every other model. The polished metallic material rendering (amber-gold chrome), the volumetric light seeping through ground cracks, the shallow depth of field on a dramatic close-up composition, and the overall "impossible object in a real environment" aesthetic are all peak Midjourney strengths. The higher stylization value will push the light effects and material sheen into cinematic territory. The text elements are placed on a solid bottom bar, fully isolated from the surreal scene above.

---

### Prompt (copy-paste ready for Midjourney)

```
Hyper-cinematic close-up photograph of an oversized three-dimensional Google Maps location pin planted vertically in cracked dark earth, like a golden stake driven into the ground. Square format, 1:1 aspect ratio. The pin is the classic inverted teardrop shape with a circular hole at the center, approximately three feet tall, standing upright with the pointed tip buried six inches into the soil. The pin is made of polished amber-gold metal with a mirror-finish surface that catches and reflects the environment. The metal has the warm luster of polished brass or gold-plated steel, with subtle surface reflections of the dark sky and surrounding ground visible in the curved surfaces.

The ground around the base of the pin is dark, dry, cracked earth -- the kind of parched, sun-baked soil you see in the Arizona desert. Deep fissure cracks radiate outward from the point where the pin enters the ground, forming a web of fracture lines in the dirt. From within these cracks, an intense warm amber-gold light glows upward, as if a molten golden vein runs beneath the surface. The light seeps through every crack and fissure, illuminating the edges of each broken earth chunk from below, creating dramatic rim lighting on every shard of soil. The amber light from the cracks is voluminous and atmospheric, pushing upward like steam or smoke, creating soft volumetric light beams that catch dust particles in the air immediately above the ground. The visual effect is unmistakable: there is gold beneath this earth, and the pin has found it.

Leaning against the right side of the pin at a casual 20-degree angle, a heavy chrome-finished plumber's pipe wrench rests with its jaw touching the ground and its handle propped against the smooth metallic surface of the pin. The wrench is approximately eighteen inches long, made of dark matte gunmetal steel with a slightly oily sheen. It is the tool that could extract this wealth, the trade instrument of the plumber who owns this digital territory. The wrench catches amber reflections from the glowing ground cracks along its lower surfaces.

The background is a simple dark horizon. The sky is deep near-black charcoal fading to dark espresso brown near the horizon line, with no stars, no clouds, no sunset colors. The horizon sits at approximately the upper third of the frame, giving the ground and the pin dominance. The sky is a void, pushing all attention downward to the pin and the glowing earth.

Camera: low angle, approximately 8 inches above ground level, shooting slightly upward at the pin. Equivalent to a 24mm wide-angle lens at f/2.0. The pin fills approximately 60 percent of the frame height. Sharp focus on the pin and the wrench. The ground cracks are in focus in the immediate foreground but fall into soft bokeh toward the frame edges. The wide-angle lens creates a slight perspective distortion that makes the pin feel monumental, towering above the viewer. The low camera position puts the viewer at the level of the glowing cracks, immersed in the golden light.

Lighting: the amber-gold light from the ground cracks is the dominant light source, illuminating everything from below. This creates an unconventional, almost supernatural lighting setup where the underside of every surface catches warm golden light while the tops fade into shadow. The pin itself reflects the golden ground light in its polished surface, creating amber caustics and reflections across the curved metal. A subtle cool ambient fill from the dark sky provides just enough light to define the pin's upper silhouette against the darkness. No sun, no artificial lights. The only warmth in the scene comes from below, from the ground, from the untapped gold mine.

Color palette: near-black charcoal sky, dark espresso brown at the horizon, dark cracked earth in raw umber and burnt sienna tones, rich saturated amber-gold in the pin and the ground-crack light, dark gunmetal steel on the wrench. The amber-gold is the only saturated color in the entire image -- everything else is dark, muted, neutral. The amber tones should feel precious, metallic, warm, alive against the dead neutral dark surroundings.

Mood: mythic, powerful, borderline sacred. The feeling of discovering buried treasure, of standing over a vein of gold that everyone else has walked past. The Google Maps pin is reframed as something ancient, something elemental -- not a digital icon but a physical golden stake marking the spot. The plumber's wrench grounds the metaphor in blue-collar reality. Surreal advertising meets Western mythography. Inspired by the surreal product photography of Erik Johansson, the desert landscapes of Richard Misrach, and the material grandeur of Jeff Koons's metallic sculptures.

TEXT AND BRAND ELEMENTS RENDERED DIRECTLY ON THE IMAGE: At the bottom of the image, a solid opaque horizontal bar spans the full width of the frame across the bottom 17 percent. The bar is filled with near-black charcoal, completely solid, no transparency. A thin 2-pixel amber-gold horizontal accent line runs across the full width at the very top edge of this bar. Inside the bar, centered horizontally and positioned in the upper portion of the bar, large bold clean modern sans-serif white text reads exactly: "There's gold under your feet." The text is approximately 52 point relative to the 1200 pixel canvas, using a geometric sans-serif similar to DM Sans, weight 700 bold. Below the headline, with 12 pixels of vertical spacing, smaller clean sans-serif muted stone-gray text reads: "lexumsoft.com" at approximately 20 point size, centered horizontally.

Post-processing: rich deep blacks, amber highlights with soft halation glow, subtle volumetric haze in the ground-crack light beams, extremely fine film grain, cinematic color grading with amber pushed to maximum saturation while all non-amber tones stay desaturated and muted. Gentle vignette on the top and side edges. The polished gold metal of the pin should gleam with specular highlights. The ground-crack light should feel alive and pulsing. --ar 1:1 --s 500 --v 6.1 --q 2 --style raw --no watermark, signature, border, frame, cartoon, anime, illustration, bright sky, blue sky, clouds, sunset, sunrise, green grass, vegetation, flowers, people, hands
```

---

### Recommended Parameters

| Parameter | Value | Reason |
|-----------|-------|--------|
| `--ar` | `1:1` | LinkedIn square post format |
| `--s` | `500` | High stylization to push the surreal metallic luster and volumetric ground-crack light into cinematic fine-art territory. The polished gold pin needs to gleam impossibly. |
| `--v` | `6.1` | Best version for metallic material rendering, volumetric light, and surreal-yet-photographic compositing. |
| `--q` | `2` | Maximum quality. The polished metal reflections, cracked earth textures, volumetric light beams, and dust particles all demand the extra rendering budget. |
| `--style` | `raw` | Even at high stylization, raw prevents the image from tipping into fantasy illustration. The combination of `--s 500` and `--style raw` produces "impossible object rendered photorealistically" -- exactly the sweet spot for surreal advertising photography. |
| `--no` | (see prompt) | Excludes bright sky, vegetation, people to maintain the stark, mythic, isolated desert composition. No "text" exclusion. |

---

### Why This Works

1. **Single oversized symbolic object** -- One pin, one wrench, cracked earth, dark sky. Midjourney produces its strongest surreal work when there is one impossible focal object in a simple environment. No competing subjects.
2. **Material specificity drives photorealism** -- "polished amber-gold metal with mirror-finish surface," "dark matte gunmetal steel with slightly oily sheen," "sun-baked cracked earth" -- every surface has a concrete material description. Midjourney builds photorealism from material textures, not from abstract mood words.
3. **Volumetric light from below is visually unique** -- Bottom-lit scenes are inherently attention-grabbing because they violate our expectation of overhead light. The amber glow seeping through cracked earth creates an otherworldly, almost volcanic atmosphere that stops the scroll.
4. **The wrench grounds the metaphor** -- Without the wrench, this could be any brand's "treasure" image. The plumber's pipe wrench immediately connects the golden pin to the trades, to HVAC and plumbing, to the specific audience of the LinkedIn post. It is a small detail that carries enormous contextual weight.
5. **Artist references triangulate the aesthetic precisely** -- Erik Johansson (surreal compositing), Richard Misrach (desert landscape), Jeff Koons (metallic surface grandeur). These three references prevent Midjourney from defaulting to generic "gold treasure" fantasy art.
6. **Text on solid bar with minimal count** -- Two elements: "There's gold under your feet." and "lexumsoft.com" on a near-black charcoal bar. The headline is seven words, moderate difficulty. The bar is completely isolated from the surreal scene above, giving the text renderer a clean surface.

---

### Regeneration Tips

**What to look for in a GOOD output:**
- The Google Maps pin shape is clearly recognizable (inverted teardrop with circle cutout)
- The pin appears to be made of polished gold or amber-gold metal, reflective and gleaming
- The pin is planted in cracked dark earth, not floating or hovering
- Amber-gold light glows upward from cracks in the ground around the pin's base
- The pipe wrench is visible leaning against the pin
- The background is simple dark sky or horizon, not cluttered
- The bottom bar is solid, opaque, full-width, near-black
- "There's gold under your feet." is readable and correctly spelled in white on the bar
- "lexumsoft.com" is present below the headline
- The thin amber accent line is visible at the top of the bar
- The overall mood feels mythic and powerful, not cartoonish or kitschy

**What to REJECT:**
- The pin is a flat 2D icon pasted onto the scene instead of a three-dimensional metallic object
- Bright blue sky, green grass, or sunny daytime environment
- The ground cracks do not glow (no amber light from below)
- The pin is made of red material (Google's default red pin color) instead of amber-gold
- Multiple pins instead of one
- No wrench present (acceptable if everything else is strong -- wrench is secondary)
- The text is garbled or missing
- The scene looks like a cartoon, illustration, or video game screenshot

**Iteration strategy:**
1. If the pin keeps rendering as a flat 2D icon, add "three-dimensional solid metal sculpture, physical object with depth and weight, cast metal, not a flat graphic or sticker" to the pin description
2. If the pin renders in Google's default red instead of amber-gold, add "the pin is NOT red, the pin is made entirely of polished gold-colored metal, warm amber-gold brass finish" as reinforcement
3. If the ground-crack light is too subtle, add "extremely bright amber-gold light pouring from the cracks like lava, volumetric, visible light rays, god rays from below"
4. If the wrench keeps disappearing, try "a large steel pipe wrench leans prominently against the base of the pin on the right side" -- sometimes repositioning the description makes it stick
5. For text: "There's gold under your feet." is a seven-word headline. If it garbles, shorten to "Gold under your feet." (four words). If "lexumsoft.com" fails, drop it. If all text fails after 3 batches, switch to DALL-E 3 for text-rendering strength and accept slightly less cinematic scene quality.

---
---

## Generation Priority Order

If time is limited, generate in this order:

1. **Prompt 3: "The Unlocked Phone"** -- Highest probability of a clean first-batch result. Single subject (phone) on a dark surface, minimal complexity, Ideogram Design mode handles the screen content and text reliably. The image concept is immediately legible even at small LinkedIn thumbnail size.
2. **Prompt 4: "The Gold Mine"** -- Midjourney's sweet spot: one surreal metallic object in an atmospheric environment with dramatic lighting. High stylization plus raw mode produces exactly this type of cinematic fine-art imagery. May need 2 batches for the ground-crack light to render volumetrically.
3. **Prompt 1: "The Invisible Storefront"** -- Cinematic noir mood piece. The glass reflection concept is achievable but more complex than a single object -- Midjourney needs to render both the physical storefront AND the reflected pin simultaneously. Budget 2 batches. The wet pavement light streaks may need iteration.
4. **Prompt 2: "The Map Pack Throne"** -- Most complex of the four. Aerial perspective with approximately twenty houses, selective amber lighting on exactly three, a recognizable van, and tilt-shift effect. Multiple variables that all need to land correctly. Budget 3 batches minimum. Be prepared to accept "close enough" on the exact number of glowing houses.

---

## Quick Reference -- Before Generating

- [ ] Midjourney Discord or web app logged in, `/imagine` ready (Prompts 1, 2, 4)
- [ ] Ideogram v3 open in a browser tab, Design mode selected (Prompt 3)
- [ ] DALL-E 3 accessible as fallback for any prompt
- [ ] This document open for reference during regeneration and evaluation
- [ ] Brand color names memorized: near-black charcoal, amber-gold, white, muted stone gray, dark espresso brown
- [ ] Key text elements to verify per prompt:
  - Prompt 1: "Your listing is invisible." + "lexumsoft.com"
  - Prompt 2: "Only 3 get seen." + "lexumsoft.com"
  - Prompt 3: "This is where they find you." + "lexumsoft.com"
  - Prompt 4: "There's gold under your feet." + "lexumsoft.com"
