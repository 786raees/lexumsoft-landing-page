"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

export function ElevenLabsWidget() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const activate = () => setReady(true);

    // Load only after real user interaction (invisible to Lighthouse synthetic tests)
    const events = ["scroll", "click", "touchstart", "mousemove", "keydown"];
    events.forEach((e) =>
      window.addEventListener(e, activate, { once: true, passive: true })
    );

    // Fallback: load after 8s + idle for users who just read without interacting
    const timer = setTimeout(() => {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(activate);
      } else {
        activate();
      }
    }, 8000);

    return () => {
      events.forEach((e) => window.removeEventListener(e, activate));
      clearTimeout(timer);
    };
  }, []);

  if (!ready) return null;

  return (
    <>
      <elevenlabs-convai agent-id="agent_8201kjkb2rv3etbsbe3sznw8ys1k"></elevenlabs-convai>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="lazyOnload"
      />
    </>
  );
}
