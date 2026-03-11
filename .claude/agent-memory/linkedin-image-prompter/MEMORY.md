# LinkedIn Image Prompter -- Agent Memory

## Established Format Patterns
- Always read `brand-guide.md`, `image-prompt-template.md`, and 1 existing example before writing
- The monday-ad-waste post is the current gold standard reference (friday-speed files were deleted from old linkedin/ path)
- Some posts live under `social_media/linkedin/posts/`, others under `linkedin/posts/` -- check both paths
- Brand guide section is copied verbatim into every image-prompts.md file
- Generation commands section at the bottom uses the script at `scripts/generate-post-image.py`

## Gemini 3 Pro Prompt Patterns
- Split-screen compositions need explicit "solid black vertical divider line, 4px wide" between panels
- Use "clean modern geometric sans-serif" not specific font names
- Use color NAMES never hex codes in prompt body
- Keep phone/panel text to 2-3 elements max for reliable rendering
- Floating UI panels work best with: dark semi-transparent bg + amber-gold border glow
- Red glow for "before/problem" panels, amber-gold for "after/solution" panels -- effective visual shorthand
- Overhead desk shots need explicit "bird's eye view, camera looking STRAIGHT DOWN" reinforcement

## Trade-Authentic Details That Work
- Pipe wrench on invoices, brass fittings scattered, Teflon tape rolls, channel-lock pliers (blue handles)
- Coffee ring stains, pipe dope residue on hands, worn leather gloves, hi-vis vest
- Truck cab: clipboard with work orders, van keys, travel mug, fittings on passenger seat
- Office: whiteboard with schedules, framed plumbing license, work boots by desk
- HVAC-specific: refrigerant gauge manifold hoses (red/blue), digital clamp meter, replacement capacitors, fin combs, copper refrigerant lines, flare fittings, recovery tanks, air filter packages
- HVAC outdoor: AC condenser units (beige/gray), electrical disconnect boxes, copper line sets
- Dispatch board storytelling: empty board = famine/problem, full board = success/solution -- effective visual contrast

## Concept Diversity Approach
- Problem Scene: cold/red tones, moody lighting, frustration expression
- Solution Scene: warm/amber tones, relief expression, golden lighting
- System in Action: person + device + floating panels showing live output
- Data Story: overhead or close-up, before/after comparison panels, numbers as hero

## Posts Completed
- monday-ad-waste: Google Ads waste / tire-kicker angle (4 concepts, Priority: 1-2-3-4)
- sunday-spring-maintenance: Feast-or-famine / recurring revenue angle (4 concepts: Feast-or-Famine Dashboard, Nathan's Transformation, Spring Campaign Launch, Before/After Revenue Comparison)
- wednesday-reviews: Google reviews competitive gap / automated review generation (4 concepts: The Review Gap, The Text That Builds Empires, Before/After Review Profile, The Homeowner's Decision)
- thursday-agency-switch: Generic agency vs. specialist / $30K waste angle (4 concepts: The $30K Receipt, Same Budget Different Results, Generic vs. Specialist Dashboard, The Yoga Studio Playbook)
- friday-referrals: Referral-dependency vs. marketing system / revenue predictability (4 concepts: The Revenue Roller Coaster, The Predictable Floor, Referral vs. System Pipeline, The Quiet Phone)

## Concept Patterns by Post Type
- Review/reputation posts: homeowner perspective is a strong 4th concept -- reframes the problem from the customer's decision-making POV
- "System in Action" works well when shown from the CUSTOMER's side (homeowner receiving auto-text) not just contractor's dashboard
- Nighttime cold-house emergency scenario is effective for urgency -- space heater glow + laptop screen creates strong chiaroscuro
- Side-by-side comparison panels (your listing vs. competitor) work for any competitive gap topic (ads, reviews, GBP)
- Agency/vendor comparison posts: comedic absurdity angle works well as a 4th concept (yoga studio playbook in a plumber's basement = visual irony)
- Late-night kitchen table invoice review is a universally recognizable contractor scene -- pendant light spotlight effect works well
- Dispatch board (filled vs. empty) is strong secondary storytelling element in office scenes -- communicates business health without text
- "Same budget" anchor pills on both sides of a before/after comparison reinforce that only the agency changed, not the spend
- Revenue volatility posts: jagged line chart inside a panel is an effective visual shorthand for instability -- label the peaks/valleys with dollar amounts
- "Quiet phone" close-up on a van dashboard is a visceral single-element composition -- the sticky note with "Referrals Only" adds storytelling context
- Split-screen "same person, two realities" (truck cab vs. office) is effective for dependency vs. system posts -- use desaturated tones left, warm tones right
- Referral posts: the phone-as-lifeline metaphor (face-down, silent, zero notifications) is universally relatable for contractors
- Bar chart panels: use wildly uneven bar heights for "before" and consistent even heights for "after" -- floor line (dashed) at the minimum revenue is a strong visual element

## Headline Style Update
- User prefers horizontal gradient bars for headlines: solid near-black charcoal on the left (100% opacity) fading to transparent on the right (0% opacity), ~80-90px tall
- This replaces the older "semi-transparent dark gradient overlay" centered approach from earlier posts
- Headline text is left-aligned with 40px left padding, positioned inside the gradient bar
