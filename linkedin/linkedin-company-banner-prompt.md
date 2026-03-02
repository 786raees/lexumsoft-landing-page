# LinkedIn Company Page Banner -- LexumSoft

Production-ready AI image generation prompts and design guide for the LexumSoft LinkedIn Company Page banner.

---

## 1. Banner Specifications and Safe Zones

### Dimensions
- **Required size:** 1128 x 191 pixels
- **Aspect ratio:** approximately 5.9:1 (extremely wide and short)
- **File format:** PNG or JPG, under 8 MB
- **Resolution:** Create at 2x (2256 x 382 px) for retina sharpness, then export at 1128 x 191

### Safe Zones -- What Gets Covered

```
|<-- ~200px -->|<------------ SAFE PRIMARY ZONE (~730px) ------------>|<-- ~200px -->|
|  LOGO AREA   |  This is where your key visuals and text should go   |  MAY CROP    |
|  (partially  |                                                      |  ON MOBILE   |
|   covered    |                                                      |              |
|   by round   |                                                      |              |
|   company    |                                                      |              |
|   logo)      |                                                      |              |
```

- **Left ~200px:** The round company logo (your origami bird mark) overlaps this area on desktop. Do NOT place critical text or visuals here. Use it for ambient background texture only.
- **Right ~200px:** May crop on narrow mobile screens. Keep it decorative, not informational.
- **Center ~730px:** This is the hero zone. All key text, stats, and focal visuals must live here.
- **Vertical safe area:** Keep critical content within the middle ~140px vertically. The top and bottom ~25px may get clipped by rounded corners on some views.
- **Mobile behavior:** The banner crops from the sides on mobile. Center-weight everything important.

---

## 2. Primary AI Image Generation Prompt

This is the main prompt, optimized for generating the background image. Text and stats will be overlaid afterward in Figma or Canva (see Section 5 below).

### For Midjourney (v6+)

```
Wide panoramic abstract background for a premium digital marketing agency banner, dark warm charcoal base color #1A1714, smooth gradient transitioning from deep warm black on the left to slightly lighter charcoal #2A2520 on the right, subtle geometric low-poly faceted planes in the background suggesting origami paper folds, angular triangular mesh pattern faintly embossed into the dark surface, thin amber gold #C2710C accent lines tracing select geometric edges creating a constellation-like network effect, soft diffused amber glow emanating from the center-right area, faint warm bokeh circles in deep amber and burnt orange scattered sparsely in the upper portion, no text no letters no words no logos, ultra-clean negative space in the center-left for text overlay, professional premium atmosphere, matte finish, subtle grain texture, cinematic color grading --ar 1128:191 --s 180 --c 8 --no text letters words numbers logo pipes wrenches tools people faces hands bright white neon blue green purple red stock photo generic --q 2 --v 6.1
```

### For DALL-E 3

```
Generate a wide panoramic background image at a 6:1 aspect ratio for a premium company banner. The design should be abstract and atmospheric with NO text, NO letters, NO numbers, and NO logos anywhere in the image.

The base is a deep warm charcoal-black color (#1A1714), not pure black -- it should feel warm and premium, like polished dark wood or obsidian. A subtle gradient shifts from darker on the far left to a slightly lighter charcoal (#2A2520) on the right side.

In the background, embed a very subtle geometric pattern of low-poly triangular facets, as if the dark surface has been folded like origami paper. These facets should be barely visible -- just enough to add texture and depth without being distracting.

Along some of the geometric edges, add thin lines in amber-gold (#C2710C) that glow softly, creating a minimal constellation or network effect. These amber lines should be concentrated in the center-right area and fade out toward the edges.

Add a soft, diffused amber glow in the center-right portion of the image -- not a spotlight, but a warm atmospheric radiance. Scatter a few very subtle bokeh circles in deep amber and burnt orange in the upper area.

The left-center area should be relatively clean with ample negative space, as text will be overlaid there. The overall feel should be premium, sophisticated, and warm -- like a luxury brand, not a generic corporate background. Subtle film grain texture throughout. Matte finish, not glossy.
```

### For Stable Diffusion / Flux

```
premium dark abstract panoramic banner background, warm charcoal black base, low-poly geometric origami faceted surface, subtle triangular mesh pattern, thin amber gold accent lines on select edges, soft amber glow center-right, faint warm bokeh, deep warm tones, matte finish, film grain, cinematic color grading, ultrawide aspect ratio, negative space on left for text overlay, luxury brand aesthetic, (masterpiece, best quality, highly detailed, 8k)

Negative prompt: text, letters, words, numbers, logo, watermark, signature, pipes, wrenches, tools, people, faces, hands, bright colors, neon, blue, green, purple, red, stock photo, generic corporate, glossy, shiny, lens flare, cartoon, anime, illustration, low quality, blurry, noisy
```

**Recommended settings for SD:** CFG 7-8, Steps 30-40, Sampler DPM++ 2M Karras, Resolution 2256 x 382 (2x for quality)

---

## 3. Alternative Prompt Variations

### Variation A -- Ultra-Minimal (Clean Gradient)

A stripped-back option with maximum text readability. Best if you plan to feature a lot of overlay text.

**Midjourney:**
```
Ultra-minimal wide panoramic dark background for a professional company banner, rich warm charcoal-black #1A1714 base with a smooth gradient to warm dark brown #2A2520, very subtle directional light from upper right casting an extremely soft amber #C2710C warmth across the surface, barely perceptible noise grain texture, completely clean and uncluttered, massive negative space for text overlay, no patterns no shapes no elements, premium matte finish, the visual equivalent of an expensive business card printed on thick dark stock --ar 1128:191 --s 80 --c 2 --no text letters words numbers logo patterns shapes lines dots circles bright neon --q 2 --v 6.1
```

### Variation B -- Bold Geometric (Statement Piece)

More visually aggressive with stronger geometric elements. Works if you plan fewer text elements on top.

**Midjourney:**
```
Wide panoramic abstract geometric background for a premium agency banner, deep warm dark charcoal #1A1714 base, bold angular low-poly faceted surface with distinct origami-fold triangular planes in varying shades of warm dark tones #1A1714 #2A2520 #3A3530, prominent amber gold #C2710C accent lines tracing a network of geometric edges across the composition creating an angular constellation effect, concentrated cluster of illuminated amber edges in the center creating a focal point, ambient warm glow diffusing outward from the geometric cluster, sharp angular shadows between facets creating dramatic depth, a few scattered bright amber vertices glowing like nodes in a network, cinematic dramatic lighting, premium editorial feel --ar 1128:191 --s 250 --c 15 --no text letters words numbers logo pipes wrenches people faces hands blue green purple red stock photo cute cartoon --q 2 --v 6.1
```

### Variation C -- Textured Dark Surface with Amber Edge Lighting

Inspired by product photography lighting on dark surfaces. Feels tangible and luxurious.

**Midjourney:**
```
Wide panoramic close-up of a premium dark brushed metal surface viewed at a shallow angle, warm charcoal-black tone #1A1714, fine directional brushed texture running horizontally, rim lighting along the far right edge in amber gold #C2710C creating a thin luminous edge highlight, soft gradient of warm amber light reflecting subtly on the brushed surface from the right, left two-thirds fading into deep rich shadow with clean negative space, extremely shallow depth of field, macro photography aesthetic, premium product shot atmosphere, matte metallic finish, cinematic warm color grading --ar 1128:191 --s 200 --c 10 --no text letters words numbers logo pipes wrenches people faces blue green purple neon --q 2 --v 6.1
```

---

## 3B. Text-Included Prompt (Ideogram / Recraft / Text-Capable Generators)

If you are using a generator that renders text accurately (Ideogram, Recraft, etc.), use these prompts to generate the **complete banner with text baked in** — no Figma/Canva step needed.

### Option 1 -- Headline + 2 Stats

```
Wide panoramic LinkedIn company page banner for a premium digital marketing agency, 1128x191 pixel ratio, dark warm charcoal-black background #1A1714 with subtle low-poly geometric faceted texture and thin amber-gold #C2710C accent lines forming a minimal constellation pattern on the right side, soft diffused amber glow in the center-right area.

Left side has clean empty space where LinkedIn places the company logo.

Center-left text in clean white bold sans-serif font reads "The Only Agency Built Exclusively" on the first line and "for Plumbing & HVAC Companies" on the second line, where the words "Plumbing & HVAC" are in amber-gold #C2710C color.

Below the headline in small muted gray text: "lexumsoft.com"

Right side has two stat blocks separated by a thin vertical divider line: the number "847%" in large bold amber-gold #C2710C with small white label "Average ROI" underneath, and the number "200+" in large bold amber-gold with small white label "Companies Served" underneath.

Premium matte finish, subtle film grain, cinematic warm color grading, professional and sophisticated, no pipes no wrenches no tools no people no clip art.
```

### Option 2 -- Headline + 3 Stats

```
Wide panoramic LinkedIn company banner, ultra-wide 6:1 aspect ratio, dark warm background #1A1714 with subtle geometric angular facets embossed into the surface and thin glowing amber-gold #C2710C lines tracing select edges.

Center-left: bold white sans-serif text reading "The Only Agency Built Exclusively" first line, "for Plumbing & HVAC Companies" second line. The words "Plumbing & HVAC" are amber-gold #C2710C. Small muted text below: "lexumsoft.com"

Right side: three stat columns separated by thin vertical lines. First stat: "847%" in large amber-gold bold text with "Average ROI" in small white text below. Second stat: "200+" in large amber-gold bold with "Companies Served" below. Third stat: "$2.5M+" in large amber-gold bold with "Revenue Generated" below.

Premium dark luxury aesthetic, matte finish, subtle grain texture, warm cinematic tones, no plumbing imagery, no stock photo elements, no people.
```

### Option 3 -- Minimal with Single Tagline

```
Wide panoramic LinkedIn banner, 1128x191 ratio, deep warm charcoal-black #1A1714 background with smooth gradient to slightly lighter #2A2520 on the right, soft ambient amber-gold #C2710C glow from the right edge, premium brushed dark surface texture.

Center text in clean bold white sans-serif font: "The Only Agency Built Exclusively for Plumbing & HVAC Companies" — with "Plumbing & HVAC" in amber-gold #C2710C.

Far right: "847% Avg ROI" in amber-gold text, small and understated.

Small muted text under the headline: "lexumsoft.com"

Ultra-clean, minimal, luxury brand feel, matte finish, no clutter, no illustrations, no people, no tools, no pipes.
```

> **Tip:** After generation, check that the left ~200px is mostly empty — LinkedIn's round company logo sits there and will cover anything in that zone.

---

## 4. Text and Stat Overlay Strategy (For Background-Only Prompts)

If you used the background-only prompts from Section 2 or 3, all text must be added in a design tool (Figma, Canva, or Photoshop) on top of the generated background.

### Recommended Text Layout

```
|  [logo     |   "The Only Agency Built Exclusively"   |  847%  |  200+  |      |
|   overlap   |   "for Plumbing & HVAC Companies"       |  AVG   | CLIENTS|      |
|   area --   |                                          |  ROI   | SERVED |      |
|   keep      |   lexumsoft.com                          |        |        |      |
|   empty]    |                                          |        |        |      |
```

### Primary Text Block (Center-Left)

**Line 1 (headline):**
"The Only Agency Built Exclusively"
- Font: Plus Jakarta Sans Bold (matches website heading font)
- Size: 22-26px at 1128 wide (scale to ~44-52px if designing at 2x)
- Color: White #FFFFFF
- Letter-spacing: -0.02em (slightly tight, premium feel)

**Line 2 (headline continued):**
"for Plumbing & HVAC Companies"
- Same font and size as line 1
- Color: Amber gold #C2710C for the words "Plumbing & HVAC" to create emphasis
- Remaining words in white #FFFFFF

**Line 3 (URL, optional):**
"lexumsoft.com"
- Font: DM Sans Regular (matches website body font)
- Size: 12-14px at 1128 wide
- Color: Muted warm #A39E99
- Add subtle letter-spacing: 0.05em

### Stat Blocks (Right Side)

Place 2-3 stat blocks to the right of the headline. Do not overcrowd -- pick the most impactful.

**Recommended stat selection (pick 2-3):**

| Stat | Label |
|------|-------|
| 847% | Average ROI |
| 200+ | Companies Served |
| $2.5M+ | Revenue Generated |
| 458% | More Qualified Leads |
| 4.9/5 | Client Satisfaction |

**Stat formatting:**
- Number: Plus Jakarta Sans Bold, 24-28px at 1128 wide, Amber gold #C2710C
- Label: DM Sans Regular, 10-12px at 1128 wide, Muted warm #A39E99
- Stack vertically: number on top, label beneath
- Separate each stat block with a thin vertical divider line (1px, #3A3530, 60% opacity)

### Alternative Layout -- Headline + Single Power Stat

If the three-stat layout feels cluttered at this narrow height, simplify:

```
|  [logo     |   "The Only Agency Built Exclusively"       |   "847% Avg ROI"   |       |
|   area]    |   "for Plumbing & HVAC Companies"            |   "200+ Clients"   |       |
|            |                                               |                    |       |
```

Use only the two highest-impact stats in a compact column.

---

## 5. Brand Color and Font Reference

### Colors

| Role | Hex | Usage |
|------|-----|-------|
| Background (primary dark) | `#1A1714` | Banner base, dark sections |
| Surface dark | `#2A2520` | Slightly lighter dark panels |
| Amber / Accent | `#C2710C` | CTA highlights, stat numbers, emphasis text |
| Amber hover | `#A85D0A` | Darker amber for variation |
| Amber light | `#FFF8F0` | Light amber tint (not for dark backgrounds) |
| White | `#FFFFFF` | Primary text on dark |
| Muted text | `#A39E99` | Secondary labels, URLs |
| Subtle border | `#3A3530` | Dividers and separators on dark backgrounds |

### Fonts

| Font | Weight | Usage |
|------|--------|-------|
| **Plus Jakarta Sans** | Bold (700) | Headlines, stat numbers, headings |
| **Plus Jakarta Sans** | SemiBold (600) | Sub-headlines |
| **DM Sans** | Regular (400) | Body text, labels, URL |
| **DM Sans** | Medium (500) | Slightly emphasized body text |

Both fonts are Google Fonts and available in Figma and Canva.

### Logo Usage

- Use the white logo (`logo-white.png` / `logo-white.svg`) if placing the logo explicitly in the banner
- The origami bird mark is geometric with angular faceted planes -- this is why the background prompts incorporate low-poly geometry, creating visual cohesion between the logo and the banner aesthetic
- Note: LinkedIn will display your round company logo overlapping the bottom-left of the banner. You do NOT need to place the logo in the banner image itself. The geometric background pattern will complement the logo icon that LinkedIn overlays automatically.

---

## 6. Pre-Upload Review Checklist

Run through every item before uploading to LinkedIn.

### Dimensions and Technical

- [ ] Final export is exactly 1128 x 191 pixels
- [ ] File size is under 8 MB
- [ ] Exported as PNG (preferred for text sharpness) or high-quality JPG (90%+)
- [ ] Image looks sharp, not blurry or pixelated
- [ ] No compression artifacts around text edges

### Safe Zone Compliance

- [ ] No critical text or visuals in the left 200px (logo overlap zone)
- [ ] No critical text or visuals in the right 200px (mobile crop zone)
- [ ] All key content is vertically centered within the middle ~140px
- [ ] Preview on both desktop and mobile -- crop simulation looks good

### Text Readability

- [ ] Headline text is legible at actual LinkedIn display size (banner renders small)
- [ ] Stat numbers are readable without squinting
- [ ] Sufficient contrast between text and background (WCAG AA minimum)
- [ ] Amber (#C2710C) text elements are on dark background only (not on mid-tones)
- [ ] No text is smaller than 10px at final 1128px width

### Brand Alignment

- [ ] Dark warm palette matches the LexumSoft website (not cold gray, not pure black)
- [ ] Amber accent is #C2710C, not orange, not yellow, not generic gold
- [ ] Fonts match the website: Plus Jakarta Sans for headings, DM Sans for body
- [ ] Overall vibe is premium and authoritative, not generic or template-looking
- [ ] Geometric/origami aesthetic aligns with the company logo style

### Content Accuracy

- [ ] Stats quoted are accurate per current data (847% ROI, 200+ clients, $2.5M+, 458%, 4.9/5)
- [ ] Company name is spelled correctly: "LexumSoft" (capital L, capital S)
- [ ] URL is correct: "lexumsoft.com" (lowercase)
- [ ] No typos anywhere in the overlay text

### Final Gut Check

- [ ] Does this look like it belongs to a specialist agency, or could it be any company?
- [ ] Would a plumbing/HVAC company owner see this and immediately understand who this agency serves?
- [ ] Does the banner reinforce authority and results, not just aesthetics?
- [ ] Would you be proud to have this represent the company on every profile visit?

---

## 7. Production Workflow Summary

1. **Generate the background** using the Primary Prompt (Section 2) in your preferred AI tool
2. **Generate 2-3 options** -- try the primary prompt plus one or two variations from Section 3
3. **Select the strongest background** that has clean negative space in the text overlay zone
4. **Import into Figma or Canva** at 2256 x 382 (2x resolution)
5. **Add text overlays** following the layout and typography specs from Section 4
6. **Add stat blocks** with amber numbers and muted labels, separated by thin dividers
7. **Preview at actual LinkedIn size** -- shrink your browser or view at 50% to simulate
8. **Run the review checklist** from Section 6
9. **Export at 1128 x 191** as PNG
10. **Upload to LinkedIn** Company Page > Edit > Cover Image
