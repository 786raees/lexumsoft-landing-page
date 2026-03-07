---
name: linkedin-respond
description: Draft a personalized DM response when someone comments a CTA keyword on a LinkedIn post. Use /linkedin-respond followed by the keyword and the person's name.
disable-model-invocation: true
argument-hint: "<CTA-keyword> <person-name>"
---

# LinkedIn CTA Response Generator

Draft a personalized DM for someone who commented a CTA keyword on a Lexumsoft LinkedIn post.

**Input:** $ARGUMENTS (format: `<KEYWORD> <Person Name>`)

## Step 1: Find the Post

1. Read `linkedin/calendar.md`
2. Find which post directory uses the CTA keyword `$ARGUMENTS[0]`
3. Read that post's `post.md` file --specifically the **Deployment Notes** section
4. Read `docs/agency-bible.md` -- specifically Section 5 (Problem → Solution Matrix), Section 6 (Pricing), Section 8 (Case Studies), and Section 11 (Objection Handling). These give you the context to write informed, specific DMs that reference real results and handle objections naturally.

## Step 2: Extract the Response Template

From the Deployment Notes, find the **"When someone comments {KEYWORD}"** section. This contains the response template with:
- The opening line
- The qualifying question
- What to deliver

## Step 3: Draft the Personalized DM

Using the template and the person's name (`$ARGUMENTS[1]`), write a ready-to-send DM.

### DM Structure

```
Hey {Name} --appreciate you commenting. {Personalized opening based on the post angle.}

{Qualifying question from the template --asks about their specific situation.}

{What you'll deliver based on their answer --audit, breakdown, analysis, etc.}

No pitch attached. Just want to make sure what I send actually applies to your setup.
```

### Response Style by Keyword

**SPEED** --Ask about their lead flow sources (form submissions, calls, Google LSA, or a mix), then deliver a response time audit showing where money is lost between form submission and booked job.

**CALLS** --Ask about their average ticket amount, then do ROI math with their real numbers. Show them exactly how much after-hours revenue they're leaving on the table.

**PROFILE** --Open with "pulled up your GBP --here's what I'm seeing..." then give 2-3 specific observations about their actual listing (check categories, photo count, last post date, review response rate). Make it feel like a personalized audit.

**AUDIT** --Ask about their current lead sources and biggest bottleneck, then schedule an audit call. Mention 1-2 quick wins you can spot from their website.

**GROWTH** --Ask about their growth challenges and current team size. Share a relevant angle from Tony's case study that matches their situation.

## Step 4: Present the DM

Output the ready-to-send DM message. The user will copy it to LinkedIn.

Also remind:
- **Timing:** Send within 5-10 minutes of the comment (speed matters for engagement)
- **Follow-up:** If they reply, continue the conversation manually --track in `linkedin/outreach/active-conversations.md`
- **Tone:** Warm, specific, zero sales pressure. You're offering value, not pitching.
