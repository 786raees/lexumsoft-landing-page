"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function MobilePhoneCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
      className="fixed inset-x-0 bottom-0 z-50 lg:hidden"
    >
      <a
        href={`https://wa.me/${COMPANY.phone.replace(/[^\d]/g, "")}`}
        className="flex items-center justify-center gap-2 bg-amber px-4 py-3.5 text-base font-semibold text-white shadow-[0_-4px_12px_rgba(0,0,0,0.15)] transition-colors hover:bg-amber-hover"
      >
        <motion.span
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center"
        >
          <Phone className="size-5" />
        </motion.span>
        Call Now {COMPANY.phone}
      </a>
    </motion.div>
  );
}
