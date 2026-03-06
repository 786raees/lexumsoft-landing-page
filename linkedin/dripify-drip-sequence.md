# Dripify Drip Sequence — Post-Connection Outreach

3-message automated sequence for plumbing & HVAC company owners.
Variables: `%%first_name%%`, `%%company%%`, `%%city%%`

---

## Connection Note (under 200 chars)

Use one of these as the connection request note before the drip starts:

**Default:**
```
%%first_name%%, saw %%company%% — looks like you're doing great work in %%city%%. I'm in the contractor marketing space. Made sense to connect.
```

**With mutual connection:**
```
%%first_name%%, saw we both know %%mutual_connection_name%% — I work with plumbing & HVAC companies on lead generation. Made sense to connect.
```

**Direct:**
```
%%first_name%%, found your profile — impressive what you're building at %%company%%. I help plumbing & HVAC owners get more qualified calls. Made sense to connect.
```

---

## Message 1 — Day 0 (Warm Intro)

*Sent immediately when connection is accepted.*
*Goal: be human, open a conversation — no pitch, no CTA.*

```
Hey %%first_name%% — glad to be connected.

I work exclusively with plumbing and HVAC companies across the US — it's the only thing we do at LexumSoft. So when I see someone running a business like %%company%%, I always like to reach out.

No pitch here. Just curious — how's the lead flow been for you lately in %%city%%? Is the phone ringing consistently or is it still pretty hit-or-miss depending on the season?

I ask because that's usually the first thing owners in the trades tell me when we talk — the leads are either feast or famine and they're not sure how to even it out.

Either way, great to be connected.

— Waqar
```

---

## Message 2 — Day 5-7 (Value Drop + Soft Audit Offer)

*Sent regardless of whether they replied. If they replied, pause the sequence and handle manually.*
*Goal: deliver something useful for free, then introduce the audit as a logical next step.*

```
%%first_name%% — wanted to share something that might be useful whether we ever work together or not.

We audited 47 plumbing and HVAC websites last month. The same 5 problems showed up almost every time:

1. Phone number buried (invisible on mobile — where 70% of visitors land)
2. Ads running to the homepage instead of a dedicated landing page
3. No social proof above the fold (your reviews exist — customers just can't see them)
4. Site loading in 5+ seconds on mobile (Google penalises this, customers leave)
5. A service list instead of an actual offer — nothing that gives someone a reason to call YOU over the next guy

Most of these take days to fix, not months. And fixing them moves the needle on calls without spending a dollar more on ads.

If you're curious where %%company%% stands on these, I do free audits for plumbing and HVAC owners — I'll personally look at your website, your Google presence, and your current ad setup and tell you exactly what I'd fix first.

No obligation. Just a straight answer.

Worth it? Happy to get you on the schedule.

— Waqar
```

---

## Message 3 — Day 10-14 (Final Nudge + Close the Loop)

*Last automated touch. After this, move non-responders to a manual follow-up list.*
*Goal: close the loop, one clear ask, light urgency without manufactured pressure.*

```
%%first_name%% — last message from me on this, I promise.

I do free audits for plumbing and HVAC owners — your website, Google Business Profile, and ad setup. You get a real breakdown of what's costing you leads and what to fix first. No sales pitch attached to it.

I typically run 8–10 of these per month so I can actually go deep on each one instead of rushing through them. A couple of spots usually open up at the start of each month.

If %%company%% is a fit, I'm happy to get you on the schedule before they fill up. If the timing isn't right, no pressure at all — I'll be here.

Just reply "audit" and I'll send you the details.

— Waqar
```

---

## Setup Notes

- **If a prospect replies to Message 1 or 2:** Pause the sequence immediately and handle the conversation manually. They are a warm lead.
- **After Message 3:** Tag non-responders in Dripify and re-engage manually in 60-90 days with a new angle (new case study, seasonal angle, relevant stat).
- **Daily volume:** Stay at or below 40-50 automated messages per day total (including connection requests).
- **Dripify audience filters:** Title keywords — "Owner", "Founder", "President", "CEO", "General Manager" + Industry — "Construction", "Utilities" + Location — United States.
- **CTA tracking:** The "audit" reply keyword in Message 3 matches the AUDIT keyword from the pinned post. If you want to distinguish drip leads from post leads, change the drip keyword to "info" or "schedule".
