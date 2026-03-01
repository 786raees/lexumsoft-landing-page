"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BarChart3, TrendingUp, Crown } from "lucide-react";
import type { ProjectMetric } from "@/types";
import { parseMetricValue, parseImprovementValue, formatValue } from "@/lib/parse-metric";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

interface ProjectMetricsProps {
  metrics: ProjectMetric[];
}

/* ── Single metric card ── */
function MetricCard({ metric, isBest }: { metric: ProjectMetric; isBest: boolean }) {
  const beforeNum = parseMetricValue(metric.before);
  const afterNum = parseMetricValue(metric.after);
  const isNumeric = !isNaN(beforeNum) && !isNaN(afterNum);
  const improvementPct = parseImprovementValue(metric.improvement);
  const isPositive = !metric.improvement.startsWith("-");

  const beforeDisplay = formatValue(metric.before, metric.suffix);
  const afterDisplay = formatValue(metric.after, metric.suffix);

  // Bar widths
  let beforeWidth = 0;
  let afterWidth = 0;
  if (isNumeric) {
    const max = Math.max(beforeNum, afterNum);
    if (max > 0) {
      beforeWidth = Math.max((beforeNum / max) * 100, beforeNum === 0 ? 3 : 8);
      afterWidth = Math.max((afterNum / max) * 100, afterNum === 0 ? 3 : 8);
    }
  }

  return (
    <motion.div
      variants={itemVariants}
      className={`group relative overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-md ${
        isBest
          ? "border-sage/30 bg-gradient-to-br from-sage/5 to-white ring-1 ring-sage/10"
          : "border-warm-border bg-white"
      }`}
    >
      {/* Top accent stripe */}
      <div className={`h-1 ${isPositive ? "bg-gradient-to-r from-sage to-emerald-400" : "bg-gradient-to-r from-amber to-orange-400"}`} />

      {/* Best metric crown */}
      {isBest && (
        <div className="absolute right-4 top-3">
          <div className="flex items-center gap-1 rounded-full bg-sage/10 px-2 py-0.5">
            <Crown className="size-3 text-sage" />
            <span className="text-[10px] font-bold text-sage">Best</span>
          </div>
        </div>
      )}

      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="mb-5 flex items-start justify-between gap-3">
          <p className="text-sm font-semibold text-warm-dark">{metric.label}</p>
          <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
            isPositive ? "bg-sage/10 text-sage" : "bg-amber/10 text-amber"
          }`}>
            {metric.improvement}
          </span>
        </div>

        {isNumeric ? (
          <>
            {/* Big numbers */}
            <div className="mb-5 flex items-end gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-warm-text-muted">Before</p>
                <p className="font-heading text-xl font-bold text-warm-text-muted line-through decoration-red-300/50 decoration-2 sm:text-2xl">
                  {beforeDisplay}
                </p>
              </div>
              <div className="pb-0.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-sage">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-sage">After</p>
                <p className={`font-heading text-xl font-bold sm:text-2xl ${isBest ? "text-sage" : "text-sage"}`}>
                  {afterDisplay}
                </p>
              </div>
            </div>

            {/* Progress bars */}
            <div className="space-y-2">
              <div className="relative h-2.5 overflow-hidden rounded-full bg-warm-border-light">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-warm-text-muted/15"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${beforeWidth}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <div className="relative h-2.5 overflow-hidden rounded-full bg-sage/10">
                <motion.div
                  className={`absolute inset-y-0 left-0 rounded-full ${
                    isBest ? "bg-gradient-to-r from-sage via-emerald-400 to-sage" : "bg-gradient-to-r from-sage to-emerald-400"
                  }`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${afterWidth}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-warm-text-muted">Before</p>
              <p className="font-heading text-xl font-bold text-warm-text-muted line-through decoration-red-300/50 decoration-2">
                {beforeDisplay}
              </p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 text-sage">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-sage">After</p>
              <p className="font-heading text-xl font-bold text-sage">{afterDisplay}</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  // Determine the "best" metric (highest improvement %)
  let bestIndex = 0;
  let bestPct = 0;
  metrics.forEach((m, i) => {
    const pct = parseImprovementValue(m.improvement);
    if (pct !== null && pct > bestPct) {
      bestPct = pct;
      bestIndex = i;
    }
  });

  return (
    <section className="section-light relative py-20 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-sage/5 blur-[100px]" />
        <div className="absolute -left-20 bottom-20 h-60 w-60 rounded-full bg-amber/5 blur-[80px]" />
      </div>

      <Container className="relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sage/10 shadow-sm">
              <BarChart3 className="size-6 text-sage" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-sage">Performance Data</p>
              <h2 className="font-heading text-2xl font-bold text-warm-dark sm:text-3xl lg:text-4xl">
                By the Numbers
              </h2>
            </div>
          </div>
          <p className="ml-16 max-w-md text-sm text-warm-text-secondary">
            Real metrics from this engagement showing measurable business impact
          </p>
        </motion.div>

        {/* Metric cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto grid max-w-5xl gap-3 sm:gap-5 sm:grid-cols-2"
        >
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} isBest={i === bestIndex} />
          ))}
        </motion.div>

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-10 flex max-w-5xl items-center justify-center gap-2 rounded-2xl border border-sage/15 bg-white/80 px-6 py-4 shadow-sm backdrop-blur-sm"
        >
          <TrendingUp className="size-5 text-sage" />
          <p className="text-sm font-medium text-warm-text-secondary">
            <span className="font-bold text-sage">{metrics.length} key metrics</span> tracked and improved across this engagement
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
