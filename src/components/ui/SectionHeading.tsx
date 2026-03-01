"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn("mb-12 lg:mb-14", centered && "mx-auto max-w-2xl text-center", className)}
    >
      {eyebrow && (
        <motion.p
          variants={itemVariants}
          className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-amber"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={itemVariants}
        className={cn(
          "font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-warm-dark"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className={cn(
            "mt-4 text-base leading-relaxed lg:text-lg",
            light ? "text-white/55" : "text-warm-text-secondary"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
