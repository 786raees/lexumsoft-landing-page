"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { preload } from "react-dom";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { PROFILE } from "./profile";

if (typeof window !== "undefined") preload("/concepts/noaddedbs/label.jpg", { as: "image", crossOrigin: "anonymous" });

const Scene = dynamic(() => import("./Scene").then((m) => m.Scene), { ssr: false });

const ease = [0.2, 0.7, 0.2, 1] as const;
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});
const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.6, ease, delay },
});

const SHOP_URL = "https://noaddedbs.com/products/all-natural-shampoo-duo";
const SINGLE_URL = "https://noaddedbs.com/products/all-natural-shampoo";
const TIKTOK = "https://www.tiktok.com/@theeloganstowers";

const SHORT = ["Water", "Cocoyl glutamate", "Decyl glucoside", "Glycerin", "L-Arginine", "Argan oil", "Radish ferment", "Plant cellulose", "Vitamin E"];

const INGREDIENTS: { name: string; role: string; does: string; replaces: string }[] = [
  { name: "Water", role: "Base", does: "Carries every other ingredient evenly so each wash is the same strength.", replaces: "Nothing. It is the one thing every shampoo shares." },
  { name: "Disodium cocoyl glutamate", role: "Cleanser", does: "Coconut-derived. Lifts dirt and buildup without stripping the scalp's own oils.", replaces: "Sodium lauryl sulfate, the foaming detergent that dries hair out." },
  { name: "Decyl glucoside", role: "Foam", does: "Made from sugar and coconut. Gives the lather, stays gentle on eyes and sensitive skin.", replaces: "Secondary sulfates that add foam at the cost of irritation." },
  { name: "Glycerin", role: "Moisture", does: "Pulls water into the scalp and strands, so dryness, itch, and breakage go down.", replaces: "Silicones that coat hair to fake softness and build up over time." },
  { name: "L-Arginine", role: "Growth", does: "An amino acid that supports blood flow in the scalp, which is where strong hair starts.", replaces: "The empty 'growth' claims most bottles make with nothing behind them." },
  { name: "Argan oil", role: "Shine", does: "Moisturises dry ends, tames frizz, adds shine, and brings vitamin E with it.", replaces: "Mineral oil and synthetic conditioners." },
  { name: "Radish root ferment", role: "Preservative", does: "A natural ferment that stops microbes so the bottle stays safe for months.", replaces: "Parabens and phenoxyethanol." },
  { name: "Hydroxyethyl cellulose", role: "Texture", does: "A plant-cellulose thickener so the shampoo pours like a shampoo, not like water.", replaces: "Petroleum-based thickeners." },
  { name: "Vitamin E", role: "Repair", does: "An antioxidant that protects hair from everyday damage and supports the scalp.", replaces: "Nothing to replace. It is just good for hair." },
];

const VIDEOS = [
  { id: "7659441194983804182", label: "Month one", note: "Where it started", poster: "/concepts/noaddedbs/poster-m1.webp" },
  { id: "7649111397493656854", label: "Month four", note: "First visible change", poster: "/concepts/noaddedbs/poster-m4.webp" },
  { id: "7662816376440098070", label: "Month ten", note: "The result people ask about", poster: "/concepts/noaddedbs/poster-m10.webp" },
];

const HERO_VIDEO = "7644703844567403798";

// Sample reviews for the layout only. Each card is tagged, and the build replaces them with verified orders.
const REVIEWS: { name: string; when: string; stars: number; text: string }[] = [
  { name: "Maddie R.", when: "Ohio", stars: 5, text: "Three weeks in and my scalp stopped itching. I read the whole label out loud to my mom because there was nothing I had to google." },
  { name: "Derek T.", when: "Texas", stars: 5, text: "Bought it after seeing the month-four video. Less hair in the drain than any shampoo I've used. No smell, which I actually prefer." },
  { name: "Priya S.", when: "New Jersey", stars: 4, text: "Lather is lighter than what I'm used to, took a wash or two to adjust. Hair feels softer without conditioner now. Would like a bigger bottle." },
  { name: "Jon M.", when: "Florida", stars: 5, text: "Colour-treated hair and it hasn't faded. The subscription showing up before I ran out is the part I didn't know I needed." },
  { name: "Alyssa K.", when: "Michigan", stars: 5, text: "Use it on my kids too. No tears, no fragrance, and the bottle is the same one from the videos, which sounds silly but mattered." },
  { name: "Chris B.", when: "Arizona", stars: 5, text: "Scored it on Yuka myself before ordering. 100. Everything else in my shower was in the forties." },
];

function player(id: string, autoplay = false) {
  const p = new URLSearchParams({
    controls: "1",
    progress_bar: "0",
    play_button: autoplay ? "0" : "1",
    volume_control: "1",
    fullscreen_button: "0",
    timestamp: "0",
    loop: "1",
    autoplay: autoplay ? "1" : "0",
    music_info: "0",
    description: "0",
    rel: "0",
    native_context_menu: "0",
    closed_caption: "0",
  });
  return `https://www.tiktok.com/player/v1/${id}?${p.toString()}`;
}

function TikTokFrame({ id, title, poster }: { id: string; title: string; autoplay?: boolean; poster: string }) {
  // The player iframe is only created on click. Nothing from TikTok is requested on page load,
  // so the page never waits on TikTok, and the click starts playback straight away.
  const [started, setStarted] = useState(false);
  return (
    <div className="nab-tt" style={{ backgroundImage: `url(${poster})` }}>
      {!started && (
        <button type="button" className="nab-poster" style={{ backgroundImage: `url(${poster})` }} onClick={() => setStarted(true)} aria-label={`Play ${title}`}>
          <span className="play" aria-hidden="true" />
        </button>
      )}
      <a className="nab-tt-out" href={`${TIKTOK}/video/${id}`} target="_blank" rel="noopener">Open on TikTok</a>
      {started && (
        <iframe src={player(id, true)} title={title} allow="autoplay; encrypted-media" />
      )}
    </div>
  );
}

/* ---------- Ask: answers only from the ingredient list above ---------- */

const STOP = new Set(["the", "and", "for", "with", "that", "this", "does", "have", "has", "what", "why", "how", "can", "is", "it", "my", "in", "on", "of", "to", "a", "an", "are", "you", "your", "use", "shampoo", "hair", "safe"]);
const tokens = (s: string) => s.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w));

const INTENTS: { test: RegExp; answer: string; pick?: number }[] = [
  { test: /colou?r|dye|bleach|highlight/, answer: "Nothing on the label strips colour. There are no sulfates, which are what fade dye fastest. The cleansers are disodium cocoyl glutamate and decyl glucoside, both coconut-derived and mild.", pick: 1 },
  { test: /kid|child|baby|toddler|eye/, answer: "The lather comes from decyl glucoside, which is chosen for staying gentle on eyes and sensitive skin. Nine ingredients, nothing you would need to look up.", pick: 2 },
  { test: /smell|scent|fragran|perfume/, answer: "There is no synthetic fragrance in the ingredient list. This concept can't smell it for you, so that is one for Logan's videos.", pick: 5 },
  { test: /grow|growth|thin|loss|bald/, answer: "L-Arginine is the growth ingredient: an amino acid that supports blood flow in the scalp, which is where strong hair starts. Argan oil and vitamin E look after the strands.", pick: 4 },
  { test: /dry|itch|flak|dandruff|frizz/, answer: "Glycerin pulls water into the scalp and strands, so dryness, itch and breakage go down. Argan oil tames frizz and adds shine.", pick: 3 },
  { test: /sulfate|sulphate|paraben|silicone|phthalate|chemical/, answer: "None of those are in it. No sulfates, no parabens, no silicones, no phthalates, no synthetic fragrance. That is why Yuka scores it 100 out of 100.", pick: 1 },
  { test: /last|long|month|size|oz|ml|big/, answer: "It is a 12 fl oz (350 ml) bottle, and for most people a bottle lasts about a month. The 2-pack covers two months and the subscription sends the next one before you run out." },
  { test: /price|cost|much|cheap|expens|\$/, answer: "One bottle is $21.99 on the live store. This concept proposes a 2-pack and a 15% subscription discount, which is on the call agenda." },
];

function answerFor(q: string): { text: string; pick?: number } {
  const lower = q.toLowerCase();
  for (const it of INTENTS) if (it.test.test(lower)) return { text: it.answer, pick: it.pick };
  const qs = tokens(q);
  let best = -1, score = 0;
  INGREDIENTS.forEach((ing, i) => {
    const hay = new Set(tokens(`${ing.name} ${ing.role} ${ing.does} ${ing.replaces}`));
    const s = qs.reduce((n, w) => n + (hay.has(w) ? 1 : 0), 0) + (lower.includes(ing.name.toLowerCase()) ? 3 : 0);
    if (s > score) { score = s; best = i; }
  });
  if (best >= 0 && score > 0) {
    const ing = INGREDIENTS[best];
    return { text: `${ing.name}: ${ing.does} It stands in for ${ing.replaces.charAt(0).toLowerCase()}${ing.replaces.slice(1)}`, pick: best };
  }
  return { text: "That one is not on the label, so this box will not guess. Ask about any of the nine ingredients, colour-treated hair, kids, scent, growth, dryness, or price." };
}

function Typewriter({ text }: { text: string }) {
  const reduced = useReducedMotion();
  const node = useRef<HTMLSpanElement>(null);
  const caret = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = node.current, ck = caret.current;
    if (!el) return;
    if (reduced) { el.textContent = text; if (ck) ck.hidden = true; return; }
    el.textContent = "";
    if (ck) ck.hidden = false;
    const c = animate(0, text.length, {
      duration: text.length * 0.018,
      ease: "linear",
      onUpdate: (v) => { el.textContent = text.slice(0, Math.round(v)); },
      onComplete: () => { if (ck) ck.hidden = true; },
    });
    return () => c.stop();
  }, [text, reduced]);
  return <p><span ref={node} /><span ref={caret} className="nab-caret" aria-hidden="true" /></p>;
}

const SUGGEST = ["Is it safe for coloured hair?", "Which one helps growth?", "Does it have sulfates?"];

function Ask({ onPick }: { onPick: (i: number) => void }) {
  const [q, setQ] = useState("");
  const [a, setA] = useState<{ q: string; text: string } | null>(null);
  const submit = (text: string) => {
    const t = text.trim();
    if (!t) return;
    const r = answerFor(t);
    setA({ q: t, text: r.text });
    if (r.pick !== undefined) onPick(r.pick);
  };
  return (
    <div className="nab-askwrap">
      <form className="nab-ask" onSubmit={(e) => { e.preventDefault(); submit(q); }}>
        <input type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Ask about the shampoo" aria-label="Ask about the shampoo" />
        <button className="nab-btn primary" type="submit">Ask</button>
      </form>
      <div className="nab-suggest" aria-label="Example questions">
        {SUGGEST.map((s) => (
          <button key={s} type="button" onClick={() => { setQ(s); submit(s); }}>{s}</button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {a && (
          <motion.div key={a.q} className="nab-answer" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, transition: { duration: 0.15 } }} transition={{ duration: 0.25 }} aria-live="polite">
            <Typewriter text={a.text} />
          </motion.div>
        )}
      </AnimatePresence>
      <p className="nab-note">Answers come from the ingredient list on this page, not from the internet.</p>
    </div>
  );
}

/* ---------- Mobile: ingredient names rise from the spout during the stage ---------- */

function RainWord({ p, i, name }: { p: MotionValue<number>; i: number; name: string }) {
  // two columns either side of the bottle, five rows; each word rises 28px into its own slot
  const reduced = useReducedMotion();
  const start = 0.16 + i * 0.03;
  const slot = -30 - Math.floor(i / 2) * 44;
  const opacity = useTransform(p, [start, start + 0.05, 0.44, 0.5], [0, 1, 1, 0]);
  const rise = useTransform(p, [start, start + 0.16], [slot + 28, slot]);
  const y = reduced ? slot : rise;
  return (
    <motion.span className={`nab-rainword ${i % 2 ? "r" : "l"}`} style={{ opacity, y }}>
      {name}
    </motion.span>
  );
}

/* ---------- Timeline: scrubbed track on desktop ---------- */

function Frame({ i, p, children, caption, note, lead }: { i: number; p: MotionValue<number>; children: React.ReactNode; caption: string; note: string; lead?: boolean }) {
  const c = i / 3;
  const rotateY = useTransform(p, [c - 0.4, c, c + 0.4], [16, 0, -16]);
  const scale = useTransform(p, [c - 0.4, c, c + 0.4], [0.94, 1, 0.94]);
  return (
    <motion.figure className={lead ? "nab-lead" : undefined} style={{ rotateY, scale }}>
      <div className={lead ? "frame nab-phone" : "frame"}>{children}</div>
      <figcaption>
        {caption}
        <span>{note}</span>
      </figcaption>
    </motion.figure>
  );
}

function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [wide, setWide] = useState(false);
  useLayoutEffect(() => {
    const measure = () => {
      const w = window.innerWidth >= 900;
      setWide(w);
      const t = trackRef.current;
      if (t && w) setDist(Math.max(0, t.scrollWidth - t.clientWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -dist]);
  const railScrub = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);
  const railStrip = useMotionValue(0);
  const onStrip = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    railStrip.set(Math.max(0, Math.min(1, el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth))));
  };
  const frames = (
    <>
      <Frame i={0} p={scrollYProgress} caption="Today" note="Filmed by Logan, @theeloganstowers" lead>
        <TikTokFrame id={HERO_VIDEO} title="Logan Stowers on TikTok" poster="/concepts/noaddedbs/poster-today.webp" />
      </Frame>
      {VIDEOS.map((v, i) => (
        <Frame key={v.id} i={i + 1} p={scrollYProgress} caption={v.label} note={v.note}>
          <TikTokFrame id={v.id} title={`${v.label}: ${v.note}`} poster={v.poster} />
        </Frame>
      ))}
    </>
  );
  return (
    <section className={`nab-section nab-timeline${wide ? " scrub" : ""}`} id="timeline" ref={ref}>
      <div className="nab-timeline-sticky">
        <div className="nab-wrap">
          <p className="nab-kicker">The timeline</p>
          <h2>Forty weeks, on camera.</h2>
          <p className="lede" style={{ marginTop: 14 }}>
            Logan filmed the whole thing. No stock photo appears on this page.
          </p>
          <div className="nab-rail" aria-hidden="true">
            <span>Today</span>
            <i><motion.b style={{ scaleX: wide ? railScrub : railStrip }} /></i>
            <span>Month ten</span>
          </div>
        </div>
        <div className="nab-wrap nab-trackwrap" ref={trackRef}>
          <motion.div className="nab-videos nab-videos-4" style={wide ? { x } : undefined} onScroll={wide ? undefined : onStrip}>{frames}</motion.div>
        </div>
        <div className="nab-wrap">
          <p className="nab-note">Videos play from Logan&apos;s public TikTok. Captions are placeholders until he picks the three clips.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Proof: the 100 counts up and a ring draws around it ---------- */

const NOS = ["No sulfates", "No parabens", "No phthalates", "No synthetic fragrance", "No silicones", "Nothing you would need to look up"];

function Proof() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const seen = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (reduced) { setN(100); return; }
    if (!seen) return;
    const c = animate(0, 100, { duration: 1.4, ease: [0.2, 0.7, 0.2, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [seen, reduced]);
  return (
    <section className="nab-section nab-proofsec" id="proof">
      <div className="nab-wrap nab-proof" ref={ref}>
        <div>
          <p className="nab-kicker">The score</p>
          <div className="nab-bigwrap">
            <svg className="nab-ring" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="46" />
              <motion.circle cx="50" cy="50" r="46" initial={{ pathLength: 0 }} animate={{ pathLength: seen ? 1 : 0 }} transition={{ duration: 1.4, ease }} />
            </svg>
            <div className="nab-big" aria-hidden="true">{n}</div>
          </div>
          <h2>Out of 100 on Yuka.</h2>
          <p style={{ marginTop: 14, maxWidth: "46ch" }}>
            Yuka scans a product&apos;s ingredient list and scores it for safety. Most shampoos land in the
            forties or fifties. This one scored a perfect 100, because there is nothing on the label that Yuka
            flags. That is the whole point of the name.
          </p>
        </div>
        <ul className="nab-nos">
          {NOS.map((t, i) => (
            <motion.li key={t} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.45, ease, delay: i * 0.08 }}>
              <motion.i initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.45, ease, delay: 0.1 + i * 0.08 }} />
              {t}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Subscribe: a bottle that drains over 30 days as you scroll ---------- */

function bottlePath(): string {
  // silhouette in a 200x400 box: x mirrored around 100, y from the base (380) up; body height 3 -> 300px
  const k = 100;
  const right = PROFILE.map(([r, y]) => `${(100 + r * k).toFixed(1)},${(380 - y * k).toFixed(1)}`);
  const left = [...PROFILE].reverse().map(([r, y]) => `${(100 - r * k).toFixed(1)},${(380 - y * k).toFixed(1)}`);
  return `M${right.join(" L")} L${left.join(" L")} Z`;
}

function Gauge() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 40%"] });
  const level = useTransform(scrollYProgress, [0, 1], [0.96, 0.12]);
  const y = useTransform(level, (l) => 380 - 300 * l);
  const h = useTransform(level, (l) => 300 * l);
  const day = useTransform(level, (l) => Math.round(1 + (1 - (l - 0.12) / 0.84) * 29));
  const [d, setD] = useState(1);
  useMotionValueEvent(day, "change", (v) => setD(Math.max(1, Math.min(30, v))));
  const path = bottlePath();
  return (
    <div className="nab-gauge" ref={ref}>
      <svg viewBox="0 0 200 400" aria-hidden="true">
        <defs>
          <clipPath id="nab-bottle-clip"><path d={path} /></clipPath>
        </defs>
        <path d={path} className="glass" />
        <motion.rect x="0" width="200" y={y} height={h} className="liquid" clipPath="url(#nab-bottle-clip)" />
        <rect x="74" y="42" width="52" height="40" rx="6" className="pump" />
        <rect x="90" y="14" width="20" height="30" rx="4" className="pump" />
        <rect x="52" y="6" width="60" height="16" rx="8" className="pump" />
        <line x1="166" x2="206" y1="329.6" y2="329.6" className="tick" />
        <text x="210" y="334" textAnchor="start" className="ticklabel">day 25</text>
      </svg>
      <div className="nab-gauge-day"><strong>Day {d}</strong><span>{d >= 25 ? "Refill reminder sent" : "of about 30"}</span></div>
    </div>
  );
}

/* ---------- Page ---------- */

export function Concept() {
  const [active, setActive] = useState(4); // L-Arginine first: the growth story
  const [monthly, setMonthly] = useState(true);
  const [ready, setReady] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  const [stageOn, setStageOn] = useState(true);
  const [compact, setCompact] = useState(false);
  const ing = INGREDIENTS[active];
  const reduced = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const spin = useRef(0);
  const focus = useRef(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setCompact(v > 80));
  const { scrollYProgress: stageP } = useScroll({ target: stageRef, offset: ["start start", "end end"] });
  const [stageDone, setStageDone] = useState(false);
  useMotionValueEvent(stageP, "change", (v) => { spin.current = v; setStageDone(v > 0.985); });
  const heroFade = useTransform(stageP, [0, 0.2], [1, 0]);
  useEffect(() => {
    // stop rendering the canvas once the reader is past the 3D stage
    const el = stageRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setStageOn(e.isIntersecting), { rootMargin: "20% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const chipsRef = useRef<HTMLDivElement>(null);
  const pick = (i: number) => { setActive(i); focus.current = i + 1; };
  useEffect(() => {
    const el = chipsRef.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    const chip = el.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (chip) el.scrollTo({ left: chip.offsetLeft - (el.clientWidth - chip.offsetWidth) / 2, behavior: reduced ? "auto" : "smooth" });
  }, [active, reduced]);

  const single = 21.99;
  const duo = 39.99;
  const off = 0.15;
  const price = (n: number) => (monthly ? n * (1 - off) : n).toFixed(2);

  return (
    <>
      <header className={`nab-bar${compact ? " compact" : ""}`}>
        <div className="nab-wrap nab-bar-in">
          <a className="nab-brand" href="#top" aria-label="No Added BS home">
            <span className="mark" aria-hidden="true" />
            No Added BS
          </a>
          <nav aria-label="Sections">
            <a href="#label">The label</a>
            <a href="#timeline">The timeline</a>
            <a href="#buy">Subscribe</a>
          </nav>
          <div className="nab-bar-cta">
            <a className="nab-asklink" href="#label">Ask</a>
            <a className="nab-pill" href={SINGLE_URL}>Shop <span>$21.99</span></a>
          </div>
        </div>
      </header>

      <main id="top">
        <div className="nab-3d" ref={stageRef}>
          <div className="nab-3d-canvas">
            <div className={`nab-boot${ready ? " off" : ""}`} aria-hidden="true">
              <img src="/concepts/noaddedbs/bottle-cut.webp" alt="" width={264} height={900} />
            </div>
            <Scene spin={spin} focus={focus} active={stageOn && !stageDone} onReady={onReady} />
            <div className="nab-rain" aria-hidden="true">
              {INGREDIENTS.map((it, i) => (
                <RainWord key={it.name} p={stageP} i={i} name={SHORT[i]} />
              ))}
            </div>
          </div>
          <div className="nab-3d-content">
            <section className="nab-wrap nab-hero">
              <motion.div className="nab-hero-copy" style={{ opacity: reduced ? 1 : heroFade }}>
                <motion.h1 {...rise(0)}>Nothing to hide.</motion.h1>
                <motion.p className="lede" {...rise(0.12)}>
                  One shampoo. Nine ingredients you can read out loud. A 100 out of 100 on Yuka.
                </motion.p>
                <motion.div className="nab-stamp" title="Score on the Yuka app" {...rise(0.2)}>
                  <strong>100/100</strong> Yuka rating, Excellent
                </motion.div>
                <motion.div className="nab-actions" {...rise(0.28)}>
                  <motion.a className="nab-btn primary" href={SHOP_URL} whileTap={{ scale: 0.98 }}>
                    Shop the 2-pack
                  </motion.a>
                  <motion.a className="nab-btn ghost" href="#label" whileTap={{ scale: 0.98 }}>
                    Turn the bottle
                  </motion.a>
                </motion.div>
                <motion.p className="nab-note" {...rise(0.4)}>Scroll to turn the bottle and read the label.</motion.p>
              </motion.div>
            </section>

            <section className="nab-wrap nab-labelsec" id="label">
              <motion.div
                className="nab-labelcard"
                initial={{ opacity: 0, y: reduced ? 0 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease }}
              >
                <p className="nab-kicker">The label</p>
                <h2>Read the label. Tap anything.</h2>
                <p className="lede" style={{ marginTop: 10 }}>
                  Every ingredient, what it does, and what it replaces.
                </p>
                <div className="nab-chips" role="group" aria-label="Ingredients" ref={chipsRef}>
                  {INGREDIENTS.map((it, i) => (
                    <button
                      key={it.name}
                      type="button"
                      className="nab-chip"
                      aria-pressed={i === active}
                      onClick={() => pick(i)}
                    >
                      {it.name}
                    </button>
                  ))}
                </div>
                <div className="nab-panel" aria-live="polite">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={ing.name}
                      initial={{ opacity: 0, x: reduced ? 0 : 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: reduced ? 0 : -14 }}
                      transition={{ duration: 0.25, ease }}
                    >
                      <h3>{ing.name}</h3>
                      <dl>
                        <dt>Job</dt>
                        <dd>{ing.role}</dd>
                        <dt>What it does</dt>
                        <dd>{ing.does}</dd>
                        <dt>Instead of</dt>
                        <dd>{ing.replaces}</dd>
                      </dl>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <Ask onPick={pick} />
              </motion.div>
            </section>
          </div>
        </div>

        <Timeline />

        <Proof />

        <section className="nab-section" id="buy">
          <div className="nab-wrap nab-buy">
            <Gauge />
            <div>
              <p className="nab-kicker">Subscribe</p>
              <motion.h2 {...inView(0)}>A bottle lasts about a month.</motion.h2>
              <motion.p className="lede" style={{ marginTop: 14 }} {...inView(0.08)}>
                Get the next one before you run out, at 15% off.
              </motion.p>
              <div className="nab-toggle" role="group" aria-label="Purchase type" style={{ marginTop: 22 }}>
                {([false, true] as const).map((m) => (
                  <button key={String(m)} type="button" aria-pressed={monthly === m} onClick={() => setMonthly(m)}>
                    {monthly === m && <motion.i className="nab-toggle-pill" layoutId="nab-toggle-pill" transition={{ type: "spring", stiffness: 500, damping: 40 }} />}
                    <span>{m ? "Every 30 days" : "One time"}</span>
                  </button>
                ))}
              </div>
              <div className="nab-plans">
                <motion.a className="nab-plan" href={SINGLE_URL} whileTap={{ scale: 0.985 }}>
                  <div>
                    All-natural shampoo, 12 oz
                    <small>{monthly ? "Ships every 30 days. Skip or cancel any time." : "One bottle, one order."}</small>
                  </div>
                  <div className="price">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span key={String(monthly)} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
                        {monthly && <span className="was">${single.toFixed(2)}</span>}${price(single)}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </motion.a>
                <motion.a className="nab-plan pick" href={SHOP_URL} whileTap={{ scale: 0.985 }}>
                  <div>
                    The 2-pack
                    <small>{monthly ? "Two months of hair, every 60 days." : "Most people start here."}</small>
                  </div>
                  <div className="price">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span key={String(monthly)} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
                        {monthly && <span className="was">${duo.toFixed(2)}</span>}${price(duo)}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </motion.a>
              </div>
              <p className="nab-note">
                Concept pricing. The single is $21.99 on the live store; the 2-pack and subscription discount are
                proposals for the call.
              </p>
            </div>
          </div>
        </section>

        <section className="nab-section" id="reviews">
          <div className="nab-wrap">
            <p className="nab-kicker">Reviews</p>
            <h2>What people say after a month.</h2>
            <p className="lede" style={{ marginTop: 10 }}>
              Verified buyers only, pulled from the store&apos;s review app.
            </p>
            <div className="nab-reviews">
              {REVIEWS.map((r, i) => (
                <motion.figure key={r.name} className="nab-review" {...inView(i * 0.06)}>
                  <div className="nab-review-top">
                    <span className="stars" aria-label={`${r.stars} out of 5 stars`}>
                      {[1, 2, 3, 4, 5].map((n) => <i key={n} data-on={n <= r.stars} />)}
                    </span>
                    <span className="nab-sample">Sample</span>
                  </div>
                  <blockquote>{r.text}</blockquote>
                  <figcaption>
                    <strong>{r.name}</strong>
                    <span>Verified buyer, {r.when}</span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
            <p className="nab-note">
              These are sample reviews to show the layout. The build pulls real ones from Judge.me or Okendo,
              which sync to Shopify and TikTok Shop, and shows nothing that is not from a real order.
            </p>
          </div>
        </section>

        <section className="nab-section" id="refill">
          <motion.div className="nab-wrap nab-capture" {...inView(0)}>
            <div>
              <p className="nab-kicker light">Refill</p>
              <h2>Get the refill reminder.</h2>
              <p style={{ marginTop: 10 }}>
                One email at day 25, with a discount on the next bottle. Nothing else unless you ask.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@email.com" aria-label="Email address" />
              <button className="nab-btn" type="submit">Remind me</button>
            </form>
          </motion.div>
          <div className="nab-wrap">
            <p className="nab-note">
              In the build this is the Klaviyo entry point: welcome, abandoned cart, post-purchase, and the day-25 refill flow.
            </p>
          </div>
        </section>
      </main>

      <footer className="nab-wrap nab-foot">
        <p>
          No Added BS, 17677 Cradler-Turner Road, Marysville OH 43040. <a href={TIKTOK}>@theeloganstowers on TikTok</a>
        </p>
        <p>
          Homepage concept by <a href="https://lexumsoft.com">Lexumsoft</a>, built from No Added BS&apos;s public content.
          Not the live store. Taken down on request.
        </p>
      </footer>
    </>
  );
}
