"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ProjectMetric } from "@/types";
import { parseMetricValue, formatValue } from "@/lib/parse-metric";

interface MetricBarChartProps {
  metric: ProjectMetric;
}

export function MetricBarChart({ metric }: MetricBarChartProps) {
  const beforeNum = parseMetricValue(metric.before);
  const afterNum = parseMetricValue(metric.after);
  const isNumeric = !isNaN(beforeNum) && !isNaN(afterNum);

  const beforeDisplay = formatValue(metric.before, metric.suffix);
  const afterDisplay = formatValue(metric.after, metric.suffix);

  // Calculate proportional widths
  let beforeWidth = 0;
  let afterWidth = 0;

  if (isNumeric) {
    const max = Math.max(beforeNum, afterNum);
    if (max > 0) {
      beforeWidth = Math.max((beforeNum / max) * 100, beforeNum === 0 ? 2 : 4);
      afterWidth = Math.max((afterNum / max) * 100, afterNum === 0 ? 2 : 4);
    } else {
      // Both are 0
      beforeWidth = 4;
      afterWidth = 4;
    }
  }

  return (
    <div className="card-warm rounded-2xl p-6">
      {/* Header row */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-warm-text-secondary">
          {metric.label}
        </p>
        <span className="shrink-0 rounded-full bg-sage/10 px-3 py-1.5 text-sm font-bold text-sage">
          {metric.improvement}
        </span>
      </div>

      {isNumeric ? (
        <div className="space-y-3">
          {/* Before bar */}
          <div className="flex items-center gap-3">
            <span className="w-12 shrink-0 text-xs text-warm-text-muted">
              Before
            </span>
            <span className="w-16 shrink-0 text-right font-heading text-sm font-bold text-warm-text-muted">
              {beforeDisplay}
            </span>
            <div className="relative h-6 flex-1 overflow-hidden rounded-full bg-warm-muted/30">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-warm-text-muted/25"
                initial={{ width: 0 }}
                whileInView={{ width: `${beforeWidth}%` }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* After bar */}
          <div className="flex items-center gap-3">
            <span className="w-12 shrink-0 text-xs text-sage">After</span>
            <span className="w-16 shrink-0 text-right font-heading text-sm font-bold text-sage">
              {afterDisplay}
            </span>
            <div className="relative h-6 flex-1 overflow-hidden rounded-full bg-sage/10">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-sage"
                initial={{ width: 0 }}
                whileInView={{ width: `${afterWidth}%` }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              />
            </div>
          </div>
        </div>
      ) : (
        /* Text-only fallback for non-numeric values */
        <div className="flex items-center gap-4">
          <div className="text-center">
            <p className="font-heading text-2xl font-bold text-warm-text-muted line-through decoration-red-400 decoration-2">
              {beforeDisplay}
            </p>
            <p className="mt-1 text-xs text-warm-text-muted">Before</p>
          </div>
          <ArrowRight className="size-5 shrink-0 text-amber" />
          <div className="text-center">
            <p className="font-heading text-2xl font-bold text-sage">
              {afterDisplay}
            </p>
            <p className="mt-1 text-xs text-sage">After</p>
          </div>
        </div>
      )}
    </div>
  );
}
