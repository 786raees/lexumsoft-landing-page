/**
 * Utilities for extracting numeric values from formatted metric strings.
 */

const MULTIPLIERS: Record<string, number> = { K: 1_000, M: 1_000_000 };

/**
 * Strips formatting ($, commas, +/- signs) and parses the leading number.
 * Handles K/M suffixes. Returns NaN for text-only values.
 *
 * "$180" -> 180, "$28K" -> 28000, "2.1%" -> 2.1, "1,128/mo" -> 1128
 * "Seasonal" -> NaN, "N/A" -> NaN, "#1" -> NaN, "Not Listed" -> NaN
 */
export function parseMetricValue(value: string): number {
  // Strip currency, commas, and leading +/-
  const cleaned = value.replace(/[$,]/g, "").replace(/^[+-]/, "");

  const match = cleaned.match(/^(\d+(?:\.\d+)?)\s*([KkMm])?/);
  if (!match) return NaN;

  const num = parseFloat(match[1]);
  const mul = match[2] ? MULTIPLIERS[match[2].toUpperCase()] ?? 1 : 1;

  return num * mul;
}

/**
 * Extracts percentage number from improvement strings.
 * Returns null for non-percentage values.
 *
 * "+458%" -> 458, "-81%" -> 81, "New Channel" -> null, "15x" -> null
 */
export function parseImprovementValue(improvement: string): number | null {
  const match = improvement.match(/[+-]?(\d+(?:\.\d+)?)%/);
  return match ? parseFloat(match[1]) : null;
}

/**
 * Appends suffix to value if not already present.
 */
export function formatValue(value: string, suffix?: string): string {
  if (!suffix || value.endsWith(suffix)) return value;
  return `${value}${suffix}`;
}
