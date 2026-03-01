"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative overflow-hidden bg-[#0f0d0a] text-center text-sm text-white"
        >
          {/* Animated shimmer */}
          <motion.div
            className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-[-20deg]"
            animate={{ left: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          />

          {/* Top accent line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/40 to-transparent" />
          {/* Bottom separator */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/[0.04]" />

          <div className="relative flex items-center justify-center gap-2 px-4 py-2.5 sm:gap-3 sm:px-10">
            {/* Live pulse dot */}
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>

            <p className="flex items-center gap-1.5 text-xs sm:gap-2 sm:text-sm">
              <span className="font-semibold text-amber">3 spots left</span>
              <span className="text-white/20">—</span>
              <span className="hidden text-white/50 sm:inline">We only onboard 5 new clients per month</span>
              <span className="hidden mx-1 text-white/20 sm:inline">|</span>
              <a
                href="#contact"
                className="group inline-flex items-center gap-1 font-semibold text-white transition-colors hover:text-amber"
              >
                <span className="hidden sm:inline">Check Availability</span>
                <span className="sm:hidden">Book Now</span>
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
              </a>
            </p>
          </div>

          <button
            onClick={() => setVisible(false)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2.5 text-white/20 transition-colors hover:bg-white/5 hover:text-white/50 sm:right-3"
            aria-label="Dismiss announcement"
          >
            <X className="size-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
