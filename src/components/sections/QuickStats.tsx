"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import type { ProjectMetric } from "@/types";
import { parseMetricValue, parseImprovementValue, formatValue } from "@/lib/parse-metric";
import { Container } from "@/components/ui/Container";
import { TrendingUp, TrendingDown } from "lucide-react";

interface QuickStatsProps {
  metrics: ProjectMetric[];
}

function StatCard({ metric, delay }: { metric: ProjectMetric; delay: number }) {
  const afterDisplay = formatValue(metric.after, metric.suffix);
  const isPositive = !metric.improvement.startsWith("-");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-xl border border-warm-border bg-white p-4 shadow-lg shadow-warm-dark/5 transition-all hover:shadow-xl hover:shadow-warm-dark/8 sm:p-5"
    >
      {/* Subtle top gradient accent */}
      <div className={`absolute inset-x-0 top-0 h-0.5 ${
        isPositive ? "bg-gradient-to-r from-sage to-emerald-400" : "bg-gradient-to-r from-amber to-orange-400"
      }`} />

      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-warm-text-muted line-clamp-1">
        {metric.label}
      </p>
      <p className="font-heading text-2xl font-extrabold text-warm-dark sm:text-[1.75rem]">
        {afterDisplay}
      </p>
      <div className="mt-2 flex items-center gap-1.5">
        {isPositive ? (
          <TrendingUp className="size-3.5 text-sage" />
        ) : (
          <TrendingDown className="size-3.5 text-sage" />
        )}
        <span className="text-xs font-bold text-sage">{metric.improvement}</span>
        <span className="text-[10px] text-warm-text-muted">vs before</span>
      </div>
    </motion.div>
  );
}

export function QuickStats({ metrics }: QuickStatsProps) {
  // Pick top 4 metrics with best numeric improvements
  const ranked = metrics
    .map((m) => ({ metric: m, pct: parseImprovementValue(m.improvement) }))
    .filter((m) => m.pct !== null)
    .sort((a, b) => (b.pct ?? 0) - (a.pct ?? 0))
    .slice(0, 4);

  if (ranked.length === 0) return null;

  return (
    <section className="relative z-20 -mt-12 pb-4 lg:-mt-14">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {ranked.map(({ metric }, i) => (
              <StatCard key={metric.label} metric={metric} delay={0.3 + i * 0.1} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
