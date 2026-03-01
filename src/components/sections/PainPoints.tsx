"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { PAIN_POINTS } from "@/lib/constants";
import { PhoneOff, Monitor, SearchX, DollarSign, ArrowRight } from "lucide-react";

const iconMap = { PhoneOff, Monitor, SearchX, DollarSign };

/* ── severity levels for each finding (0–1 range) ── */
const SEVERITY_LEVELS = [0.85, 0.75, 0.97, 0.4];

function parseStatNumber(stat: string): { number: number; suffix: string } | null {
  const match = stat.match(/^(\d+)(%.*)/);
  if (match) return { number: parseInt(match[1], 10), suffix: match[2] };
  return null;
}

/* ── animation variants ── */
const panelVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const statusBarVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.3, ease: "easeOut" as const },
  },
};

const findingsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.5 },
  },
};

const findingVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 1.6, ease: "easeOut" as const },
  },
};

/* ── SeverityBar ── */
function SeverityBar({ level, delay }: { level: number; delay: number }) {
  return (
    <div className="mt-3 flex items-center gap-3">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          className="h-full origin-left rounded-full bg-gradient-to-r from-red-500/80 to-red-400"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: level }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] as const }}
        />
      </div>
      <span className="shrink-0 font-mono text-[10px] tracking-wider text-white/25">
        {Math.round(level * 100)}%
      </span>
    </div>
  );
}

/* ── FindingRow ── */
function FindingRow({
  point,
  index,
  delay,
}: {
  point: (typeof PAIN_POINTS)[number];
  index: number;
  delay: number;
}) {
  const Icon = iconMap[point.icon as keyof typeof iconMap];
  const parsed = parseStatNumber(point.stat);
  const severity = SEVERITY_LEVELS[index] ?? 0.5;

  return (
    <motion.div variants={findingVariants} className="group">
      {/* Dashed divider (not on first) */}
      {index > 0 && (
        <div className="mb-5 border-t border-dashed border-white/[0.06]" />
      )}

      <div className="flex gap-4 sm:gap-5">
        {/* Number + Icon column */}
        <div className="flex shrink-0 flex-col items-center gap-2 pt-0.5">
          <span className="font-mono text-2xl font-bold leading-none text-white/[0.12]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex size-9 items-center justify-center rounded-lg bg-red-500/[0.08] ring-1 ring-red-500/[0.12]">
            <Icon className="size-4 text-red-400/80" />
          </div>
        </div>

        {/* Content column */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="font-heading text-[15px] font-bold leading-snug text-white/90">
              {point.title}
            </h3>
            <span className="inline-flex rounded-full bg-red-500/[0.12] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-400">
              Critical
            </span>
          </div>

          {/* Stat */}
          <p className="mt-1.5 text-xl font-extrabold tracking-tight text-red-400">
            {parsed ? (
              <AnimatedCounter value={parsed.number} suffix={parsed.suffix} />
            ) : (
              point.stat
            )}
          </p>

          {/* Description */}
          <p className="mt-1.5 text-[13px] leading-relaxed text-white/40">
            {point.description}
          </p>

          {/* Severity bar */}
          <SeverityBar level={severity} delay={delay} />
        </div>
      </div>
    </motion.div>
  );
}

/* ── BottomSeverityMeter ── */
function BottomSeverityMeter() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 1.3 }}
      className="mt-6 border-t border-white/[0.06] pt-5"
    >
      <div className="flex items-center gap-3">
        <span className="shrink-0 font-mono text-[11px] font-medium uppercase tracking-wider text-white/30">
          Overall Severity
        </span>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
          <motion.div
            className="h-full origin-left rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 0.88 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.4,
              delay: 1.4,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          />
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 2.4 }}
          className="shrink-0 animate-pulse font-mono text-xs font-bold uppercase tracking-widest text-red-400"
        >
          Critical
        </motion.span>
      </div>
    </motion.div>
  );
}

/* ── Main Section ── */
export function PainPoints() {
  return (
    <>
    <section
      id="pain-points"
      className="section-dark relative overflow-hidden bg-warm-dark py-24 lg:py-32"
    >
      {/* Subtle top separator (dark-to-dark from Hero) */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-500/[0.03] blur-[120px]" />
        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-amber/[0.02] blur-[100px]" />
      </div>

      <Container className="relative">
        {/* Warning badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-red-500/20 bg-red-500/[0.08] px-4 py-2 text-sm font-medium text-red-400 backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-red-500" />
            </span>
            Revenue leaks detected
          </div>
        </motion.div>

        <SectionHeading
          eyebrow="Sound Familiar?"
          title="The Problems Costing You Thousands Every Month"
          subtitle="If any of these sound like your business, you're leaving money on the table."
          light
        />

        {/* ── Diagnostic Panel ── */}
        <motion.div
          variants={panelVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-7 lg:p-8"
        >
          {/* Subtle top glow on panel */}
          <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-amber/20 to-transparent" />

          {/* Status bar */}
          <motion.div
            variants={statusBarVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-2.5"
          >
            <span className="inline-flex size-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_6px] shadow-emerald-400/40" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-emerald-400/70">
              Scan Complete
            </span>
            <span className="font-mono text-[11px] text-white/20">·</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-white/30">
              {PAIN_POINTS.length} Critical Issues Found
            </span>
          </motion.div>

          <div className="mb-6 h-px bg-white/[0.06]" />

          {/* Findings */}
          <motion.div
            variants={findingsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-5"
          >
            {PAIN_POINTS.map((point, index) => (
              <FindingRow
                key={point.title}
                point={point}
                index={index}
                delay={0.6 + index * 0.2}
              />
            ))}
          </motion.div>

          {/* Bottom severity meter */}
          <BottomSeverityMeter />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-amber/20 bg-amber/[0.08] px-6 py-3 text-sm font-semibold text-amber transition-all hover:border-amber/40 hover:bg-amber/[0.14] hover:shadow-lg hover:shadow-amber/[0.08]"
          >
            Stop losing money — Get your free audit
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </Container>

    </section>

      {/* Curved divider to white Services section */}
      <SectionDivider from="dark" to="white" />
    </>
  );
}
