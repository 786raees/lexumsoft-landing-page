"use client";

import { motion } from "framer-motion";
import type { ProjectMetric } from "@/types";
import { parseImprovementValue } from "@/lib/parse-metric";

interface MetricRadialGaugeProps {
  metric: ProjectMetric;
}

const RADIUS = 48;
const STROKE = 8;
const SIZE = 120;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * Logarithmic scale so values ranging from 22% to 3650% get visual variety.
 * log10(value + 1) / log10(5001) * 100
 */
function improvementToFill(value: number): number {
  return (Math.log10(value + 1) / Math.log10(5001)) * 100;
}

export function MetricRadialGauge({ metric }: MetricRadialGaugeProps) {
  const pct = parseImprovementValue(metric.improvement);
  const isNumericPct = pct !== null;

  const fillPercent = isNumericPct ? improvementToFill(pct) : 75;
  const offset = CIRCUMFERENCE - (fillPercent / 100) * CIRCUMFERENCE;

  // Sage for normal improvements, amber for large (>500%) or non-numeric
  const isLarge = isNumericPct && pct > 500;
  const strokeColor = !isNumericPct || isLarge ? "text-amber" : "text-sage";
  const textColor = !isNumericPct || isLarge ? "text-amber" : "text-sage";

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: SIZE, height: SIZE }}>
        <svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="-rotate-90"
        >
          {/* Background track */}
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="currentColor"
            strokeWidth={STROKE}
            className="text-warm-muted/30"
          />

          {/* Animated fill */}
          <motion.circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="currentColor"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            className={strokeColor}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`font-heading text-sm font-bold ${textColor}`}>
            {metric.improvement}
          </span>
        </div>
      </div>

      <p className="max-w-[120px] text-center text-xs leading-tight text-warm-text-secondary">
        {metric.label}
      </p>
    </div>
  );
}
