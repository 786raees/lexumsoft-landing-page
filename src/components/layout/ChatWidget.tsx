"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 z-40 lg:bottom-6">
      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-3 w-80 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
          >
            <div className="bg-warm-dark px-5 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading font-semibold text-white">LexumSoft</p>
                  <p className="text-xs text-white/60">Usually replies in minutes</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 text-white/60 transition-colors hover:text-white"
                  aria-label="Close chat"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>
            <div className="p-5">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="mb-4 rounded-lg bg-amber-light p-3"
              >
                <p className="text-sm text-warm-dark">
                  Hi! Need help growing your plumbing or HVAC business? Leave us a message and
                  we&apos;ll get back to you ASAP!
                </p>
              </motion.div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="h-10 flex-1 rounded-lg border border-warm-border px-3 text-sm outline-none focus:border-amber focus:ring-1 focus:ring-amber"
                />
                <Button variant="cta" size="icon" className="size-10 shrink-0">
                  <Send className="size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "flex size-14 items-center justify-center rounded-full shadow-lg transition-colors duration-200",
          isOpen ? "bg-warm-dark text-white" : "bg-amber text-white"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="size-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="size-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
