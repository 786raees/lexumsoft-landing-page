---
name: upwork-proposal
description: Generate a tailored Upwork proposal for a specific job post. Orchestrates the full pipeline from job analysis to final proposal text. Use /upwork-proposal followed by the job URL or pasted job description.
disable-model-invocation: true
argument-hint: "[job post URL or pasted description]"
---

# Upwork Proposal Pipeline

Generate a tailored Upwork proposal for a plumbing/HVAC related job post.

**Job Post:** $ARGUMENTS

This pipeline produces a complete proposal ready to paste into Upwork, saved to `freelancing/upwork/proposals/sent/<slug>.md`.

Usage: `/upwork-proposal "paste the job description here"`

## Step 0: Load Context

Read these files before doing anything else:

1. **Agency bible:** `docs/agency-bible.md` -- Comprehensive business reference
2. **Pricing strategy:** `freelancing/shared/pricing/pricing-strategy.md` -- Current rates and milestone structure
3. **Proposals log:** `freelancing/upwork/tracking/proposals-log.md` -- Check for similar past proposals
4. **Case studies:** Read the index at `freelancing/shared/case-studies/README.md` to know which case studies are available
5. **Proposal guide:** `${CLAUDE_SKILL_DIR}/references/proposal-guide.md` -- Upwork proposal best practices

## Step 1: Analyze Job Post

Parse the job post text from "$ARGUMENTS" and extract:

1. **Service category**: Website design, SEO/GBP, Google Ads, AI receptionist, or full-service
2. **Budget range**: Stated budget or inferred from job scope
3. **Client size signals**: Number of trucks, employees, revenue mentions, markets served
4. **Location**: Where the client operates
5. **Urgency**: Timeline expectations, seasonal pressure
6. **Specific requirements**: Technical details, scope items, must-haves
7. **Pain indicators**: Map to agency bible Section 3 (the 4 critical pain points)
8. **Niche match**: Is this actually a plumbing/HVAC company? If not, flag it.

Present your analysis to the user:
- Service category match
- Estimated budget alignment with our pricing
- Recommended case study to feature
- Recommended proposal template to use
- Any red flags or concerns

**Wait for user approval before proceeding.**

## Step 2: Proposal Strategy

Based on the analysis, propose:

1. **Template**: Which proposal template from `freelancing/upwork/proposals/templates/` to base on
2. **Case study**: Which case study from `freelancing/shared/case-studies/` to feature
3. **Pricing approach**: Fixed-price ($700) or custom quote, with milestone breakdown
4. **Cover letter length**: Short (150 words) or medium (300 words)
5. **Key selling point**: The single most compelling angle for THIS specific client
6. **Objection preemption**: Which objection from agency bible Section 11 to address proactively

Present the strategy and **wait for user approval.**

## Step 3: Write Proposal

Delegate to the **freelancing-proposal-writer** agent. In your delegation, include:

- The full job post text
- The approved strategy (template, case study, pricing, selling point)
- The service category and relevant agency bible sections to read
- The pricing from `freelancing/shared/pricing/pricing-strategy.md`
- Tell the agent to follow the proposal structure from the approved template
- Tell the agent to read the relevant case study file for exact numbers

The agent will produce the complete proposal with cover letter and follow-up message.

## Step 4: User Review

Present the complete proposal to the user. Show:
- The full proposal text (ready to paste into Upwork)
- Word count
- Recommended cover letter version
- Follow-up message (to send after 3 days)
- Internal notes (case study used, key selling point, risk factors)

Ask the user:
- Does the opening hook grab attention?
- Is the case study relevant to this job?
- Is the pricing right?
- Any edits needed?

Apply any requested edits.

**Wait for user approval before finalizing.**

## Step 5: Finalize

1. **Save the proposal** to `freelancing/upwork/proposals/sent/<slug>.md` where slug is derived from the job title (e.g., `plumber-website-redesign-march-2026`)
2. **Update the proposals log** at `freelancing/upwork/tracking/proposals-log.md` with:
   - Date
   - Job title
   - Client (if identifiable)
   - Service type
   - Proposed price
   - Status: "Sent"
   - Notes: Key selling point used
3. **Present the final proposal** text one more time for easy copy-paste
4. **Remind the user** to set a calendar reminder to follow up in 3 days if no response
