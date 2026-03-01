"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "challenge", label: "Challenge", color: "bg-red-400" },
  { id: "solution", label: "Solution", color: "bg-amber" },
  { id: "metrics", label: "Metrics", color: "bg-sage" },
  { id: "results", label: "Results", color: "bg-sage" },
  { id: "testimonial", label: "Testimonial", color: "bg-amber" },
];

export function CaseStudyNav() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 500);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <div className="flex flex-col items-end gap-3 rounded-2xl border border-warm-border bg-white/90 px-3 py-4 shadow-lg backdrop-blur-lg">
        {SECTIONS.map(({ id, label, color }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className="group flex items-center gap-2"
            >
              <span
                className={`text-[11px] font-semibold transition-all ${
                  isActive ? "text-warm-dark" : "text-transparent group-hover:text-warm-text-muted"
                }`}
              >
                {label}
              </span>
              <span
                className={`block size-2 rounded-full transition-all ${
                  isActive
                    ? `${color} scale-125 shadow-sm`
                    : "bg-warm-text-muted/20 group-hover:bg-warm-text-muted/50"
                }`}
              />
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
