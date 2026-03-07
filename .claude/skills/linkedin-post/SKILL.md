---
name: linkedin-post
description: Create a complete LinkedIn post for Lexumsoft -- orchestrates the full pipeline from writing copy to generating images. Use /linkedin-post followed by the topic or angle.
disable-model-invocation: true
argument-hint: "[topic or angle for the post]"
---

# LinkedIn Post Pipeline

Create a complete LinkedIn post for Lexumsoft's plumbing/HVAC content series.

**Topic/Angle:** $ARGUMENTS

This pipeline produces a self-contained post directory at `linkedin/posts/<slug>/` with:
- `post.md` -- Complete post with copy, first comment, and deployment notes
- `image-prompts.md` -- 4 AI image generation prompts
- `images/` -- Generated images

**Optional reference files:** You can include paths to markdown files or folders after the topic. These will be read and used as source material for the post. Useful for topics the AI doesn't know about (new products, specific case studies, industry data, etc.).

Usage: `/linkedin-post "topic" [file.md] [folder/]`

Examples:
- `/linkedin-post "ServiceTitan integration benefits" linkedin/research/servicetitan-notes.md`
- `/linkedin-post "new drain camera technology" docs/drain-cameras/`
- `/linkedin-post "Q1 case study results" linkedin/research/q1-results.md linkedin/research/client-data.md`

## Step 0: Load Context

Read these files before doing anything else:

1. **Content calendar:** `linkedin/calendar.md` --Check used CTA keywords, client names, angles
2. **Brand guide:** `${CLAUDE_SKILL_DIR}/references/brand-guide.md` --Brand constants and rules
3. **Post template:** `${CLAUDE_SKILL_DIR}/references/post-template.md` --Post structure
4. **Image prompt template:** `${CLAUDE_SKILL_DIR}/references/image-prompt-template.md` --Image prompt structure
5. Read 1-2 existing posts in `linkedin/posts/*/post.md` to understand the established voice
6. **Reference files (if provided):** If the user included file paths or folder paths after the topic in `$ARGUMENTS`, read all of them now. These contain domain knowledge the AI doesn't have -- product specs, case study data, industry reports, technical details, etc. Extract the key facts, stats, and angles from these files. This extracted knowledge will be passed to both sub-agents.
7. **Agency bible:** `docs/agency-bible.md` -- Comprehensive business reference with ICP, services, pricing, case studies, stats bank, objection handling, and competitive advantages. Use this for deeper business context when writing the post.

## Step 1: Pre-Check and Proposal

Based on the topic "$ARGUMENTS" and the content calendar:

1. **Choose a CTA keyword** that is NOT in the calendar's "CTA Keywords in Use" section
2. **Choose a posting day** (any day, Monday through Sunday) that needs content next -- see the calendar's Content Style column for day-appropriate suggestions
3. **Choose a directory slug** (e.g., `monday-ad-waste`, `thursday-reviews`, `saturday-trends`) -- prefix with the day name for sorting
4. **Draft an angle summary** (2-3 sentences on the specific problem/solution this post covers)
5. **Identify potential conflicts** with existing posts (angle overlap, stat reuse)

Present your proposal to the user:
- Proposed CTA keyword
- Proposed posting day and time
- Proposed angle summary
- Any conflicts found and how they'll be avoided
- Proposed client anecdote approach (name, state, company type --all must be unused)

**Wait for user approval before proceeding.**

## Step 2: Write Post Copy

Delegate to the **linkedin-post-writer** sub-agent. In your delegation, include:

- The approved topic/angle
- The approved CTA keyword and posting day
- The avoid-list from the calendar (used keywords, names, states, angles)
- Tell the agent to read the brand guide and post template from `${CLAUDE_SKILL_DIR}/references/`
- Tell the agent to save the post to `linkedin/posts/<slug>/post.md`

If reference files were provided, include a summary of the key facts, stats, and talking points extracted from those files. Tell the agent which claims come from the reference material vs. general industry knowledge.

The agent should also read `docs/agency-bible.md` for deep business context -- case studies, stats, pricing, ICP details, and competitive advantages that can inform the post's anecdote, math section, and solution bridge.

The sub-agent will write the complete post file following the established format.

## Step 3: Validate Post

Run the validation script:

```bash
python scripts/validate-post.py linkedin/posts/<slug>/post.md
```

Check the JSON output for failures:
- **character_count:** Must be under 3,000
- **sections:** All 4 required sections must be present
- **cta_keyword:** Must be present and formatted
- **hashtag_count:** Should be 8-12
- **first_comment_footer:** Should include "200+ contractors served"

If validation fails, fix the issues (trim character count, add missing sections, etc.) and re-validate.

## Step 4: CHECKPOINT --User Reviews Post Copy

Present the complete post copy to the user. Show:
- The full post body (from the code block)
- Character count
- CTA keyword
- First comment text

Ask the user:
- Does the copy read well?
- Any edits needed?
- Is the client anecdote believable?
- Is the CTA keyword good?

Apply any requested edits. Re-run validation after edits.

**Wait for user approval before proceeding to images.**

## Step 5: Create Image Prompts

Delegate to the **linkedin-image-prompter** sub-agent. In your delegation, include:

- The post topic and headline (first 2-3 lines of the post body)
- The CTA keyword
- 2-3 key stats from the post
- The client anecdote scenario
- Tell the agent to read the brand guide and image prompt template from `${CLAUDE_SKILL_DIR}/references/`
- Tell the agent to save prompts to `linkedin/posts/<slug>/image-prompts.md`

If reference files contained visual details (product photos, diagrams, specific equipment), mention these to help the agent ground the images in reality.

The sub-agent will create 4 image prompts following the established format.

## Step 6: CHECKPOINT --User Reviews Image Concepts

Present the 4 image concepts as a summary table:

| # | Concept | Difficulty | Description |
|---|---------|------------|-------------|

Ask the user:
- Which concepts to generate (and in what priority order)?
- Any adjustments to visual direction?
- Are the scenes grounded enough in the trades?

**Wait for user approval before generating images.**

## Step 7: Generate Images

For each approved concept, in the user's priority order:

```bash
python scripts/generate-post-image.py --file linkedin/posts/<slug>/image-prompts.md --concept N --variations 2 --output linkedin/posts/<slug>/images
```

After each concept generates, present the images to the user. Ask:
- Keep this image?
- Regenerate this concept?
- Skip to the next concept?

Continue until the user has at least 1 approved image.

## Step 8: Generate Alt Text

For each approved image, generate SEO-optimized alt text:
- Describe what the image shows (scene, key elements, text overlays)
- Include the post topic keywords naturally
- Keep under 200 characters
- Present all alt texts to the user

## Step 9: Finalize

1. **Update the quick reference table** in `linkedin/posts/<slug>/post.md` with the final 4 concept names, difficulties, and descriptions
2. **Update `linkedin/calendar.md`** with the new post entry:
   - Add a row to the Posts table
   - Add the CTA keyword to "CTA Keywords in Use"
   - Add client name/state to "Client Anecdote Names Used"
   - Add the angle to "Angles Covered"
   - Add stats to "Stats Used"
3. **Present the final summary:**
   - Post file: `linkedin/posts/<slug>/post.md`
   - Image prompts: `linkedin/posts/<slug>/image-prompts.md`
   - Generated images: list paths
   - Character count
   - CTA keyword
   - Recommended posting time
   - Alt text for each image
