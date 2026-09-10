"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { preload } from "react-dom";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";

if (typeof window !== "undefined") preload("/concepts/noaddedbs/label.jpg", { as: "image" });

const Scene = dynamic(() => import("./Scene").then((m) => m.Scene), { ssr: false });

const ease = [0.2, 0.7, 0.2, 1] as const;
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});

const SHOP_URL = "https://noaddedbs.com/products/all-natural-shampoo-duo";
const SINGLE_URL = "https://noaddedbs.com/products/all-natural-shampoo";
const TIKTOK = "https://www.tiktok.com/@theeloganstowers";

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
  { id: "7659441194983804182", label: "Month one", note: "Where it started", poster: "/concepts/noaddedbs/lifestyle-2.jpg" },
  { id: "7649111397493656854", label: "Month four", note: "First visible change", poster: "/concepts/noaddedbs/bottle.png" },
  { id: "7662816376440098070", label: "Month ten", note: "The result people ask about", poster: "/concepts/noaddedbs/duo.png" },
];

const HERO_VIDEO = "7644703844567403798";

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

function TikTokFrame({ id, title, autoplay = false, poster }: { id: string; title: string; autoplay?: boolean; poster: string }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const onMsg = (e: MessageEvent) => { if (e.origin === "https://www.tiktok.com") setLoaded(true); };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);
  return (
    <div className="nab-tt" style={{ backgroundImage: `url(${poster})` }}>
      <a
        className="nab-poster"
        href={`${TIKTOK}/video/${id}`}
        target="_blank"
        rel="noopener"
        hidden={loaded}
        style={{ backgroundImage: `url(${poster})` }}
        aria-label={`${title}. Opens on TikTok`}
      >
        <span className="play" aria-hidden="true" />
        <span className="hint">Play on TikTok</span>
      </a>
      <iframe
        src={player(id, autoplay)}
        title={title}
        allow={autoplay ? "autoplay; encrypted-media" : "encrypted-media"}
        loading={autoplay ? "eager" : "lazy"}
      />
    </div>
  );
}

export function Concept() {
  const [active, setActive] = useState(4); // L-Arginine first: the growth story
  const [monthly, setMonthly] = useState(true);
  const [ready, setReady] = useState(false);
  const [stageOn, setStageOn] = useState(true);
  const ing = INGREDIENTS[active];
  const reduced = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const spin = useRef(0);
  const focus = useRef(0);
  const { scrollYProgress: stageP } = useScroll({ target: stageRef, offset: ["start start", "end end"] });
  useMotionValueEvent(stageP, "change", (v) => { spin.current = v; });
  const heroFade = useTransform(stageP, [0, 0.2], [1, 0]);
  useEffect(() => {
    // stop rendering the canvas once the reader is past the 3D stage
    const el = stageRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setStageOn(e.isIntersecting), { rootMargin: "20% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const proofRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: proofRef, offset: ["start end", "center center"] });
  const bigScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [0.6, 1]);
  const bigY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [60, 0]);

  const single = 21.99;
  const duo = 39.99;
  const off = 0.15;
  const price = (n: number) => (monthly ? n * (1 - off) : n).toFixed(2);

  return (
    <>
      <header className="nab-wrap nab-bar">
        <a className="nab-brand" href="#top" aria-label="No Added BS home">
          <span className="mark" aria-hidden="true" />
          No Added BS
        </a>
        <nav aria-label="Sections">
          <a href="#label">The label</a>
          <a href="#timeline">The timeline</a>
          <a href="#buy">Subscribe</a>
        </nav>
      </header>

      <main id="top">
        <div className="nab-3d" ref={stageRef}>
          <div className="nab-3d-canvas">
            <div className={`nab-boot${ready ? " off" : ""}`} aria-hidden="true">
              <img src="/concepts/noaddedbs/bottle-cut.webp" alt="" width={264} height={900} />
            </div>
            <Scene spin={spin} focus={focus} active={stageOn} onReady={() => setReady(true)} />
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
                <h2>Read the label. Tap anything.</h2>
                <p className="lede" style={{ marginTop: 10 }}>
                  Every ingredient, what it does, and what it replaces.
                </p>
                <div className="nab-chips" role="group" aria-label="Ingredients">
                  {INGREDIENTS.map((it, i) => (
                    <button
                      key={it.name}
                      type="button"
                      className="nab-chip"
                      aria-pressed={i === active}
                      onClick={() => { setActive(i); focus.current = i + 1; }}
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
                <form className="nab-ask" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Ask about the shampoo, for example: is it safe for coloured hair?" aria-label="Ask about the shampoo" />
                  <button className="nab-btn primary" type="submit">Ask</button>
                </form>
                <p className="nab-note">
                  Concept only. In the build, this answers from the ingredient list above, not from the internet.
                </p>
              </motion.div>
            </section>
          </div>
        </div>

        <section className="nab-section" id="timeline">
          <div className="nab-wrap">
            <h2>Forty weeks, on camera.</h2>
            <p className="lede" style={{ marginTop: 14 }}>
              Logan filmed the whole thing. No stock photo appears on this page.
            </p>
            <div className="nab-videos nab-videos-4">
              <figure className="nab-lead">
                <div className="frame nab-phone">
                  <TikTokFrame id={HERO_VIDEO} title="Logan Stowers on TikTok" autoplay poster="/concepts/noaddedbs/lifestyle-1.jpg" />
                </div>
                <figcaption>
                  Today
                  <span>Filmed by Logan, @theeloganstowers</span>
                </figcaption>
              </figure>
              {VIDEOS.map((v) => (
                <figure key={v.id}>
                  <div className="frame">
                    <TikTokFrame id={v.id} title={`${v.label}: ${v.note}`} poster={v.poster} />
                  </div>
                  <figcaption>
                    {v.label}
                    <span>{v.note}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="nab-note">
              Videos play from Logan&apos;s public TikTok. Captions are placeholders until he picks the three clips.
            </p>
          </div>
        </section>

        <section className="nab-section" id="proof">
          <div className="nab-wrap nab-proof" ref={proofRef}>
            <div>
              <motion.div className="nab-big" aria-hidden="true" style={{ scale: bigScale, y: bigY, transformOrigin: "left bottom" }}>100</motion.div>
              <h2>Out of 100 on Yuka.</h2>
              <p style={{ marginTop: 14, maxWidth: "46ch" }}>
                Yuka scans a product&apos;s ingredient list and scores it for safety. Most shampoos land in the
                forties or fifties. This one scored a perfect 100, because there is nothing on the label that Yuka
                flags. That is the whole point of the name.
              </p>
            </div>
            <ul className="nab-nos">
              <li>No sulfates</li>
              <li>No parabens</li>
              <li>No phthalates</li>
              <li>No synthetic fragrance</li>
              <li>No silicones</li>
              <li>Nothing you would need to look up</li>
            </ul>
          </div>
        </section>

        <section className="nab-section" id="buy">
          <div className="nab-wrap nab-buy">
            <img src="/concepts/noaddedbs/duo.png" alt="Two bottles of No Added BS shampoo" width={1024} height={1024} />
            <div>
              <h2>A bottle lasts about a month.</h2>
              <p className="lede" style={{ marginTop: 14 }}>
                Get the next one before you run out, at 15% off.
              </p>
              <div className="nab-toggle" role="group" aria-label="Purchase type" style={{ marginTop: 22 }}>
                <button type="button" aria-pressed={!monthly} onClick={() => setMonthly(false)}>One time</button>
                <button type="button" aria-pressed={monthly} onClick={() => setMonthly(true)}>Every 30 days</button>
              </div>
              <div className="nab-plans">
                <a className="nab-plan" href={SINGLE_URL}>
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
                </a>
                <a className="nab-plan pick" href={SHOP_URL}>
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
                </a>
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
            <h2>Your verified reviews go here.</h2>
            <div className="nab-reviews">
              <div className="stars" aria-hidden="true"><i /><i /><i /><i /><i /></div>
              <p style={{ marginTop: 14 }}>
                This block pulls verified-buyer reviews from the store&apos;s review app (Judge.me or Okendo, both
                sync to Shopify and TikTok Shop). It is empty on purpose: it shows real reviews from real orders, and
                nothing else.
              </p>
            </div>
          </div>
        </section>

        <section className="nab-section" id="refill">
          <div className="nab-wrap nab-capture">
            <div>
              <h2>Get the refill reminder.</h2>
              <p style={{ marginTop: 10 }}>
                One email at day 25, with a discount on the next bottle. Nothing else unless you ask.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@email.com" aria-label="Email address" />
              <button className="nab-btn" type="submit">Remind me</button>
            </form>
          </div>
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
