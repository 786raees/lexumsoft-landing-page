---
name: linkedin-topics
description: Generate 10 fresh LinkedIn post topic ideas that don't overlap with existing content. Use /linkedin-topics optionally followed by reference file/folder paths.
disable-model-invocation: true
argument-hint: "[file.md] [folder/]"
---

# LinkedIn Topic Generator

Generate 10 fresh, non-overlapping LinkedIn post topic ideas for Lexumsoft's plumbing/HVAC content series.

**Optional reference files:** You can include paths to markdown files or folders to seed topic ideas from custom knowledge (industry reports, new service offerings, case study data, competitor research, etc.).

Usage:
- `/linkedin-topics` -- generate topics from general industry knowledge
- `/linkedin-topics linkedin/research/q2-trends.md` -- generate topics informed by specific research
- `/linkedin-topics docs/new-services/` -- generate topics around new service offerings

**Input:** $ARGUMENTS (optional file/folder paths)

## Step 1: Load Context

Read these files before generating topics:

1. **Content calendar:** `linkedin/calendar.md` -- Get all existing angles, CTA keywords, client names, and stats used
2. **Brand guide:** `.claude/skills/linkedin-post/references/brand-guide.md` -- Understand brand positioning and voice
3. **1-2 existing posts:** Read posts in `linkedin/posts/*/post.md` to understand depth, tone, and angle specificity
4. **Reference files (if provided):** If the user included file paths or folder paths in `$ARGUMENTS`, read all of them now. These contain domain knowledge that should heavily influence the topic ideas -- new services, industry data, competitor gaps, seasonal insights, etc. At least 5 of the 10 topics should be directly informed by this reference material.
5. **Agency bible:** `docs/agency-bible.md` -- Read Section 3 (Pain Points), Section 4 (Services), Section 7 (Results & ROI), and Section 13 (Stats Bank) to identify untapped angles, unused stats, and service areas that haven't been covered yet.

Extract the full avoid-list:
- All CTA keywords already in use
- All client anecdote names and states already used
- All angles already covered
- All stats already cited

## Step 2: Generate 10 Topics

Each topic must include:

| Field | Description |
|-------|-------------|
| **Topic title** | 5-8 words, specific and compelling |
| **Angle** | 1 sentence -- the specific problem or insight this post covers |
| **Suggested CTA keyword** | Must NOT be in the "CTA Keywords in Use" list |
| **Why it's different** | 1 sentence explaining non-overlap with existing posts |
| **Best day** | Any day (Monday-Sunday) -- match to content style in calendar |

### Topic Categories to Draw From

| Category | Example Angles |
|----------|---------------|
| Lead management | Response time, lead routing, follow-up sequences, no-show prevention, lead qualification |
| Revenue operations | Average ticket optimization, upsell systems, seasonal pricing, membership programs |
| Online presence | Reviews strategy, local SEO, social proof, website conversion, citation building |
| Operations | Scheduling efficiency, dispatch optimization, technician utilization, capacity planning |
| Customer experience | Communication automation, job updates, warranty tracking, referral programs, review requests |
| Growth systems | Hiring, training, scaling from owner-operator to team, second truck decisions |
| Industry trends | AI in trades, generational shift, homeowner expectations, smart home integration |
| Seasonal | Summer AC rush, winter emergency calls, spring maintenance pushes, holiday scheduling |
| Competitor gaps | What the "cheap" agencies miss, DIY marketing failures, agency red flags |
| Financial | Cash flow management, financing options for homeowners, pricing psychology |

### Rules

- Every topic must target a DISTINCT system, problem, or insight -- no angle overlap with existing posts
- Every suggested CTA keyword must be unique and unused
- Topics should span at least 4 different categories from the table above
- Mix of "pain point" posts (problems) and "proof" posts (results/case studies)
- At least 2 topics should be seasonal or timely (based on current month)
- Each topic should be specific enough that the post writer could start immediately

## Step 3: Present Results

Output as a table:

```
| # | Topic | CTA Keyword | Angle | Best Day |
|---|-------|-------------|-------|----------|
| 1 | ... | ... | ... | ... |
| 2 | ... | ... | ... | ... |
| ... | ... | ... | ... | ... |
| 10 | ... | ... | ... | ... |
```

Then add a **"Why these 10"** section explaining:
- The strategic mix (how many pain-point vs. proof vs. seasonal)
- Which categories are covered
- How these complement the existing post library
- Suggested order for producing them (which to write first)

## Step 4: User Selection

Ask the user:
- Which topics to keep for the content calendar?
- Any topics to modify or replace?
- Ready to start producing any of these with `/linkedin-post`?
