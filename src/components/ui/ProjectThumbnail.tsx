"use client";

import { motion } from "framer-motion";
import { parseMetricValue, parseImprovementValue } from "@/lib/parse-metric";
import type { Project, ProjectCategory, ProjectMetric } from "@/types";

// ── Helpers ──

function hashString(s: string): number {
  let h = 5381;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function extractBarHeights(metrics: ProjectMetric[]): number[] {
  const raw = metrics.map((m) => {
    const v = parseMetricValue(m.after);
    return isNaN(v) ? null : v;
  });
  const nums = raw.filter((v): v is number => v !== null);
  if (nums.length === 0) {
    return metrics.map((m) => 0.15 + ((m.label.length % 8) / 8) * 0.85);
  }
  const max = Math.max(...nums);
  return raw.map((v, i) => {
    if (v === null) return 0.15 + ((metrics[i].label.length % 8) / 8) * 0.85;
    return Math.max(0.15, v / (max || 1));
  });
}

// ── Palettes ──

interface Palette {
  bg: string;
  primary: string;
  primaryLight: string;
  light: string;
  muted: string;
  glow: string;
}

const PALETTES: Record<ProjectCategory, Palette> = {
  "google-ads": {
    bg: "from-amber-100 via-orange-50 to-yellow-50",
    primary: "#D97706",
    primaryLight: "#F59E0B",
    light: "#FDE68A",
    muted: "#FEF3C7",
    glow: "#FBBF24",
  },
  seo: {
    bg: "from-emerald-100 via-teal-50 to-cyan-50",
    primary: "#059669",
    primaryLight: "#10B981",
    light: "#A7F3D0",
    muted: "#D1FAE5",
    glow: "#34D399",
  },
  "website-design": {
    bg: "from-blue-100 via-indigo-50 to-sky-50",
    primary: "#2563EB",
    primaryLight: "#3B82F6",
    light: "#BFDBFE",
    muted: "#DBEAFE",
    glow: "#60A5FA",
  },
  "ai-receptionist": {
    bg: "from-purple-100 via-violet-50 to-fuchsia-50",
    primary: "#7C3AED",
    primaryLight: "#8B5CF6",
    light: "#DDD6FE",
    muted: "#EDE9FE",
    glow: "#A78BFA",
  },
  "full-service": {
    bg: "from-amber-100 via-emerald-50 to-blue-50",
    primary: "#D97706",
    primaryLight: "#F59E0B",
    light: "#FDE68A",
    muted: "#D1FAE5",
    glow: "#FBBF24",
  },
};

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  "google-ads": "Google Ads & PPC",
  seo: "SEO & Online Presence",
  "website-design": "Website Design",
  "ai-receptionist": "AI Receptionist",
  "full-service": "Full-Service",
};

// Shared CSS shadow styles for SVG groups
const panelShadow: React.CSSProperties = { filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.07)) drop-shadow(0 1px 3px rgba(0,0,0,0.05))" };
const floatShadow: React.CSSProperties = { filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.06))" };

interface SceneProps {
  project: Project;
  palette: Palette;
}

// ── 1. Google Ads — Analytics Dashboard ──

function GoogleAdsScene({ project, palette }: SceneProps) {
  const id = project.slug;
  const heights = extractBarHeights(project.metrics);
  const barCount = Math.min(heights.length, 4);
  const variant = hashString(id) % 3;

  const barWidth = 30;
  const gap = 10;
  const chartLeft = 44;
  const chartBottom = 142;
  const maxBarH = 86;

  const barData = heights.slice(0, barCount).map((frac, i) => ({
    x: chartLeft + i * (barWidth + gap),
    h: frac * maxBarH,
  }));

  const linePoints = barData.map((d, i) => {
    let yOff = 0;
    if (variant === 0) yOff = (barCount - 1 - i) * 5;
    if (variant === 1) yOff = i === 1 ? 12 : 0;
    if (variant === 2) yOff = i < 2 ? 10 : 0;
    return `${d.x + barWidth / 2},${chartBottom - d.h + yOff}`;
  });

  return (
    <svg viewBox="0 0 400 192" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`bg1-${id}`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={palette.primary} />
          <stop offset="100%" stopColor={palette.primaryLight} />
        </linearGradient>
        <linearGradient id={`bg2-${id}`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={palette.light} />
          <stop offset="100%" stopColor={palette.glow} />
        </linearGradient>
        <linearGradient id={`ring-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette.primaryLight} />
          <stop offset="100%" stopColor={palette.primary} />
        </linearGradient>
      </defs>

      {/* Decorative background blobs */}
      <circle cx="340" cy="15" r="95" fill={palette.glow} opacity="0.18" />
      <circle cx="40" cy="175" r="70" fill={palette.light} opacity="0.35" />
      <circle cx="220" cy="-25" r="55" fill={palette.primaryLight} opacity="0.12" />

      {/* Main dashboard panel */}
      <g style={panelShadow} className="transition-transform duration-500 group-hover:-translate-y-0.5">
        <rect x="20" y="8" width="236" height="158" rx="14" fill="white" fillOpacity="0.94" />
      </g>

      {/* Title bar */}
      <circle cx="36" cy="22" r="3.5" fill="#F87171" />
      <circle cx="48" cy="22" r="3.5" fill="#FBBF24" />
      <circle cx="60" cy="22" r="3.5" fill="#34D399" />
      <rect x="76" y="18" width="56" height="8" rx="4" fill={palette.muted} />
      <rect x="76" y="29" width="36" height="5" rx="2.5" fill={palette.light} opacity="0.6" />
      <line x1="30" y1="40" x2="246" y2="40" stroke={palette.muted} strokeWidth="0.8" />

      {/* Bars */}
      {barData.map((d, i) => (
        <motion.rect
          key={i}
          x={d.x}
          y={chartBottom}
          width={barWidth}
          rx={6}
          fill={`url(#${i % 2 === 0 ? "bg1" : "bg2"}-${id})`}
          initial={{ height: 0, y: chartBottom }}
          whileInView={{ height: d.h, y: chartBottom - d.h }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.08 * i, ease: "easeOut" }}
        />
      ))}

      {/* X-axis */}
      <line x1="34" y1={chartBottom + 3} x2="216" y2={chartBottom + 3} stroke={palette.muted} strokeWidth="1" />
      {barData.map((d, i) => (
        <rect key={`l${i}`} x={d.x + 6} y={chartBottom + 8} width={barWidth - 12} height="3" rx="1.5" fill={palette.muted} />
      ))}

      {/* Trend line */}
      {barData.length > 1 && (
        <motion.polyline
          points={linePoints.join(" ")}
          fill="none"
          stroke={palette.primary}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.55"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.35 }}
        />
      )}

      {/* Donut ring card */}
      <g style={panelShadow}>
        <rect x="274" y="8" width="112" height="104" rx="14" fill="white" fillOpacity="0.94" />
      </g>
      <circle cx="330" cy="52" r="30" fill="none" stroke={palette.muted} strokeWidth="8" />
      <motion.circle
        cx="330" cy="52" r="30"
        fill="none"
        stroke={`url(#ring-${id})`}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={`${heights[0] * 188} 188`}
        transform="rotate(-90 330 52)"
        initial={{ strokeDasharray: "0 188" }}
        whileInView={{ strokeDasharray: `${heights[0] * 188} 188` }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />
      <text x="330" y="49" textAnchor="middle" fontSize="14" fontWeight="800" fill={palette.primary}>
        {Math.round(heights[0] * 100)}%
      </text>
      <rect x="313" y="63" width="34" height="4" rx="2" fill={palette.muted} />
      <rect x="296" y="94" width="68" height="5" rx="2.5" fill={palette.light} opacity="0.6" />
      <rect x="304" y="101" width="52" height="4" rx="2" fill={palette.muted} opacity="0.5" />

      {/* Floating metric card */}
      <g style={floatShadow}>
        <rect x="278" y="122" width="104" height="44" rx="10" fill="white" fillOpacity="0.94" />
      </g>
      {/* Mini sparkline */}
      <polyline
        points="292,152 302,146 312,150 322,140 332,142 342,134 352,138 362,130"
        fill="none"
        stroke={palette.glow}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="290" y="130" width="32" height="5" rx="2.5" fill={palette.primary} opacity="0.5" />
      <circle cx="368" cy="135" r="6" fill={palette.muted} />
      <text x="368" y="138" textAnchor="middle" fontSize="7" fontWeight="700" fill={palette.primary}>+</text>
    </svg>
  );
}

// ── 2. SEO — Search Results Page ──

function SeoScene({ project, palette }: SceneProps) {
  const id = project.slug;
  const hasRank = project.heroStat.includes("#");

  return (
    <svg viewBox="0 0 400 192" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`badge-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette.primaryLight} />
          <stop offset="100%" stopColor={palette.primary} />
        </linearGradient>
      </defs>

      {/* Decorative blobs */}
      <circle cx="370" cy="160" r="100" fill={palette.glow} opacity="0.15" />
      <circle cx="30" cy="20" r="65" fill={palette.light} opacity="0.3" />
      <circle cx="200" cy="-40" r="45" fill={palette.primaryLight} opacity="0.1" />

      {/* Browser frame */}
      <g style={panelShadow} className="transition-transform duration-500 group-hover:-translate-y-0.5">
        <rect x="30" y="6" width="290" height="174" rx="14" fill="white" fillOpacity="0.94" />
      </g>

      {/* Chrome */}
      <circle cx="48" cy="20" r="3.5" fill="#F87171" />
      <circle cx="60" cy="20" r="3.5" fill="#FBBF24" />
      <circle cx="72" cy="20" r="3.5" fill="#34D399" />

      {/* URL bar */}
      <rect x="86" y="13" width="220" height="16" rx="8" fill={palette.muted} opacity="0.7" />
      <rect x="93" y="17" width="8" height="8" rx="2" fill={palette.primary} opacity="0.35" />
      <rect x="106" y="18" width="80" height="6" rx="3" fill={palette.light} opacity="0.6" />

      <line x1="38" y1="34" x2="312" y2="34" stroke={palette.muted} strokeWidth="0.6" />

      {/* Search bar */}
      <rect x="52" y="42" width="244" height="22" rx="11" fill={palette.muted} opacity="0.5" />
      <circle cx="68" cy="53" r="5.5" stroke={palette.primary} strokeWidth="1.8" fill="none" opacity="0.5" />
      <line x1="72" y1="57" x2="76" y2="61" stroke={palette.primary} strokeWidth="1.8" opacity="0.5" />
      <rect x="82" y="49" width="100" height="7" rx="3.5" fill={palette.light} opacity="0.7" />

      {/* Result 1 — highlighted */}
      <motion.g
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.35, delay: 0.15 }}
      >
        <rect x="52" y="72" width="244" height="36" rx="8" fill={palette.muted} opacity="0.5" />
        <rect x="52" y="72" width="5" height="36" rx="2.5" fill={palette.primary} />
        <circle cx="70" cy="82" r="5" fill={palette.light} />
        <rect x="80" y="78" width="120" height="7" rx="3.5" fill={palette.primary} opacity="0.6" />
        <rect x="80" y="89" width="180" height="5" rx="2.5" fill={palette.light} opacity="0.8" />
        <rect x="80" y="98" width="140" height="4" rx="2" fill={palette.muted} />
        {/* Stars */}
        {[0, 1, 2, 3, 4].map((s) => (
          <rect key={s} x={210 + s * 10} y="78" width="7" height="7" rx="1" fill={palette.glow} opacity="0.7" />
        ))}
      </motion.g>

      {/* Result 2 */}
      <motion.g
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.35, delay: 0.3 }}
      >
        <rect x="52" y="114" width="244" height="28" rx="7" fill="white" opacity="0.6" />
        <circle cx="70" cy="122" r="4" fill={palette.muted} />
        <rect x="80" y="118" width="100" height="6" rx="3" fill={palette.muted} />
        <rect x="80" y="128" width="160" height="5" rx="2.5" fill={palette.muted} opacity="0.6" />
      </motion.g>

      {/* Result 3 */}
      <motion.g
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.35, delay: 0.45 }}
      >
        <rect x="52" y="148" width="244" height="24" rx="7" fill="white" opacity="0.4" />
        <circle cx="70" cy="157" r="3.5" fill={palette.muted} opacity="0.6" />
        <rect x="80" y="153" width="90" height="5" rx="2.5" fill={palette.muted} opacity="0.5" />
        <rect x="80" y="162" width="130" height="4" rx="2" fill={palette.muted} opacity="0.35" />
      </motion.g>

      {/* Floating rank badge */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.55 }}
        style={{ transformOrigin: "354px 78px" }}
      >
        {/* Glow ring */}
        <circle cx="354" cy="78" r="26" fill={palette.glow} opacity="0.2" />
        <g style={floatShadow}>
          <circle cx="354" cy="78" r="20" fill={`url(#badge-${id})`} />
        </g>
        {hasRank ? (
          <text x="354" y="83" textAnchor="middle" fill="white" fontSize="14" fontWeight="800">#1</text>
        ) : (
          <path d="M354 70 L358 80 L354 76 L350 80 Z" fill="white" />
        )}
      </motion.g>
    </svg>
  );
}

// ── 3. Website Design — Browser Mockup ──

function WebDesignScene({ project, palette }: SceneProps) {
  const id = project.slug;
  const variant = hashString(id) % 4;

  return (
    <svg viewBox="0 0 400 192" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`hero-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette.primaryLight} />
          <stop offset="100%" stopColor={palette.primary} />
        </linearGradient>
        <linearGradient id={`cta-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={palette.primary} />
          <stop offset="100%" stopColor={palette.primaryLight} />
        </linearGradient>
      </defs>

      {/* Decorative blobs */}
      <circle cx="365" cy="150" r="85" fill={palette.glow} opacity="0.15" />
      <circle cx="20" cy="30" r="60" fill={palette.light} opacity="0.3" />

      {/* Back browser (depth layer) */}
      <g style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.04))" }} opacity="0.4">
        <rect x="68" y="16" width="290" height="168" rx="12" fill="white" />
        <circle cx="84" cy="28" r="2.5" fill="#FCA5A5" />
        <circle cx="94" cy="28" r="2.5" fill="#FDE68A" />
        <circle cx="104" cy="28" r="2.5" fill="#86EFAC" />
      </g>

      {/* Front browser */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
      >
        <g style={panelShadow} className="transition-transform duration-500 group-hover:-translate-y-0.5">
          <rect x="26" y="4" width="296" height="178" rx="14" fill="white" fillOpacity="0.96" />
        </g>

        {/* Chrome */}
        <circle cx="44" cy="19" r="3.5" fill="#F87171" />
        <circle cx="56" cy="19" r="3.5" fill="#FBBF24" />
        <circle cx="68" cy="19" r="3.5" fill="#34D399" />
        <rect x="82" y="13" width="72" height="12" rx="4" fill={palette.muted} opacity="0.6" />
        <rect x="160" y="15" width="40" height="8" rx="4" fill={palette.muted} opacity="0.3" />

        {/* Nav */}
        <line x1="36" y1="32" x2="312" y2="32" stroke={palette.muted} strokeWidth="0.6" />
        <rect x="44" y="37" width="32" height="7" rx="2" fill={`url(#hero-${id})`} opacity="0.7" />
        <rect x="230" y="38" width="22" height="5" rx="2.5" fill={palette.muted} />
        <rect x="258" y="38" width="22" height="5" rx="2.5" fill={palette.muted} />
        <rect x="286" y="38" width="22" height="5" rx="2.5" fill={palette.muted} />

        <line x1="36" y1="50" x2="312" y2="50" stroke={palette.muted} strokeWidth="0.3" />

        {/* Hero section — layout varies */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.25 }}
        >
          {(variant === 0 || variant === 3) && (
            <>
              {/* Text left + image right */}
              <rect x="44" y="58" width="130" height="10" rx="3" fill={palette.primary} opacity="0.55" />
              <rect x="44" y="72" width="110" height="6" rx="3" fill={palette.muted} />
              <rect x="44" y="82" width="95" height="5" rx="2.5" fill={palette.muted} opacity="0.6" />
              <rect x="44" y="94" width="56" height="16" rx="8" fill={`url(#cta-${id})`} />
              <rect x="44" y="96" width="56" height="12" rx="6" fill="white" fillOpacity="0" />
              <rect x="190" y="56" width="122" height="58" rx="8" fill={palette.muted} opacity="0.6" />
              <rect x="200" y="66" width="102" height="38" rx="4" fill={palette.light} opacity="0.5" />
              {variant === 3 && (
                <polygon points="244,78 244,92 258,85" fill="white" opacity="0.7" />
              )}
            </>
          )}
          {variant === 1 && (
            <>
              {/* Centered */}
              <rect x="108" y="58" width="132" height="10" rx="3" fill={palette.primary} opacity="0.55" />
              <rect x="120" y="72" width="108" height="5" rx="2.5" fill={palette.muted} />
              <rect x="148" y="84" width="52" height="14" rx="7" fill={`url(#cta-${id})`} />
              <rect x="60" y="106" width="228" height="3" rx="1.5" fill={palette.muted} opacity="0.3" />
            </>
          )}
          {variant === 2 && (
            <>
              {/* Image left + text right */}
              <rect x="44" y="56" width="130" height="58" rx="8" fill={palette.muted} opacity="0.6" />
              <rect x="54" y="66" width="110" height="38" rx="4" fill={palette.light} opacity="0.5" />
              <rect x="190" y="58" width="120" height="10" rx="3" fill={palette.primary} opacity="0.55" />
              <rect x="190" y="72" width="100" height="5" rx="2.5" fill={palette.muted} />
              <rect x="190" y="82" width="80" height="5" rx="2.5" fill={palette.muted} opacity="0.6" />
              <rect x="190" y="94" width="56" height="16" rx="8" fill={`url(#cta-${id})`} />
            </>
          )}
        </motion.g>

        {/* 3-column content cards */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.45 }}
        >
          {[0, 1, 2].map((i) => {
            const cx = 80 + i * 80;
            return (
              <g key={i}>
                <rect x={cx - 30} y="120" width="64" height="54" rx="6" fill={palette.muted} opacity="0.3" />
                <circle cx={cx + 2} cy="134" r="7" fill={palette.light} opacity="0.8" />
                <rect x={cx - 14} y="146" width="32" height="4" rx="2" fill={palette.muted} opacity="0.7" />
                <rect x={cx - 10} y="153" width="24" height="3" rx="1.5" fill={palette.muted} opacity="0.4" />
                <rect x={cx - 12} y="159" width="28" height="3" rx="1.5" fill={palette.muted} opacity="0.3" />
              </g>
            );
          })}
        </motion.g>
      </motion.g>
    </svg>
  );
}

// ── 4. AI Receptionist — Phone Chat ──

function AiReceptionistScene({ project, palette }: SceneProps) {
  const id = project.slug;
  const bubbleCount = 2 + (hashString(id) % 2);

  return (
    <svg viewBox="0 0 400 192" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`ai-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette.primaryLight} />
          <stop offset="100%" stopColor={palette.primary} />
        </linearGradient>
        <linearGradient id={`bubble-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={palette.light} />
          <stop offset="100%" stopColor={palette.muted} />
        </linearGradient>
      </defs>

      {/* Decorative blobs */}
      <circle cx="55" cy="96" r="110" fill={palette.glow} opacity="0.12" />
      <circle cx="370" cy="30" r="75" fill={palette.light} opacity="0.25" />
      <circle cx="350" cy="170" r="50" fill={palette.primaryLight} opacity="0.08" />

      {/* Signal wave arcs */}
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M ${98 - i * 20} ${50 + i * 6} Q ${78 - i * 20} 96 ${98 - i * 20} ${142 - i * 6}`}
          fill="none"
          stroke={palette.glow}
          strokeWidth={2.5 - i * 0.5}
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 + (2 - i) * 0.12 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 1.5,
            delay: 0.3 + i * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Phone body */}
      <g style={panelShadow} className="transition-transform duration-500 group-hover:-translate-y-0.5">
        <rect x="112" y="2" width="176" height="188" rx="22" fill="white" fillOpacity="0.96" />
      </g>
      <rect x="112" y="2" width="176" height="188" rx="22" fill="none" stroke={palette.muted} strokeWidth="1" opacity="0.5" />

      {/* Status bar */}
      <rect x="174" y="10" width="52" height="5" rx="2.5" fill={palette.muted} opacity="0.5" />
      {/* Notch */}
      <rect x="184" y="8" width="32" height="3" rx="1.5" fill={palette.muted} opacity="0.3" />

      {/* Chat header */}
      <g style={floatShadow}>
        <circle cx="148" cy="32" r="11" fill={`url(#ai-${id})`} />
      </g>
      <text x="148" y="36" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">AI</text>
      <rect x="166" y="27" width="54" height="6" rx="3" fill={palette.primary} opacity="0.4" />
      <rect x="166" y="36" width="36" height="4" rx="2" fill={palette.muted} />
      <line x1="126" y1="50" x2="274" y2="50" stroke={palette.muted} strokeWidth="0.5" />

      {/* Chat bubbles */}
      {Array.from({ length: bubbleCount }).map((_, i) => {
        const isAi = i % 2 === 0;
        const bx = isAi ? 130 : 192;
        const bw = isAi ? 108 : 78;
        const by = 58 + i * 34;
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.25, delay: 0.2 + 0.25 * i }}
          >
            <rect x={bx} y={by} width={bw} height={24} rx={12}
              fill={isAi ? `url(#bubble-${id})` : palette.muted}
              opacity={isAi ? 1 : 0.6}
            />
            <rect x={bx + 12} y={by + 7} width={bw - 24} height={4} rx={2}
              fill={palette.primary} opacity={isAi ? 0.35 : 0.18}
            />
            <rect x={bx + 12} y={by + 14} width={bw - 36} height={3} rx={1.5}
              fill={palette.primary} opacity={isAi ? 0.2 : 0.1}
            />
          </motion.g>
        );
      })}

      {/* Typing indicator */}
      <g transform={`translate(130, ${58 + bubbleCount * 34})`}>
        <rect x="0" y="0" width="56" height="22" rx="11" fill={`url(#bubble-${id})`} />
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={15 + i * 13}
            cy={11}
            r={3.5}
            fill={palette.primary}
            opacity={0.35}
            animate={{ y: [-2, 2, -2] }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </g>

      {/* Input bar */}
      <rect x="126" y="162" width="148" height="18" rx="9" fill={palette.muted} opacity="0.5" />
      <rect x="136" y="168" width="60" height="5" rx="2.5" fill={palette.muted} />
      <g style={floatShadow}>
        <circle cx="262" cy="171" r="7" fill={`url(#ai-${id})`} opacity="0.7" />
      </g>

      {/* Floating AI badge on right */}
      <motion.g
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 250, damping: 15, delay: 0.6 }}
        style={{ transformOrigin: "340px 50px" }}
      >
        <circle cx="340" cy="50" r="18" fill={palette.glow} opacity="0.2" />
        <g style={floatShadow}>
          <circle cx="340" cy="50" r="13" fill={`url(#ai-${id})`} />
        </g>
        <text x="340" y="53" textAnchor="middle" fontSize="7" fontWeight="700" fill="white" letterSpacing="0.5">24/7</text>
      </motion.g>
    </svg>
  );
}

// ── 5. Full-Service — Composite Dashboard ──

function FullServiceScene({ project, palette }: SceneProps) {
  const id = project.slug;
  const heights = extractBarHeights(project.metrics);
  const firstImprovement = project.metrics[0]
    ? parseImprovementValue(project.metrics[0].improvement)
    : null;
  const gaugeAngle = Math.min(((firstImprovement ?? 50) / 500) * 180, 180);

  return (
    <svg viewBox="0 0 400 192" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`fs-amber-${id}`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id={`fs-emerald-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id={`fs-violet-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DDD6FE" />
          <stop offset="100%" stopColor="#EDE9FE" />
        </linearGradient>
      </defs>

      {/* Decorative blobs */}
      <circle cx="60" cy="170" r="65" fill="#FBBF24" opacity="0.15" />
      <circle cx="340" cy="20" r="70" fill="#34D399" opacity="0.12" />
      <circle cx="200" cy="180" r="50" fill="#60A5FA" opacity="0.1" />

      {/* Dashboard frame */}
      <g style={panelShadow} className="transition-transform duration-500 group-hover:-translate-y-0.5">
        <rect x="30" y="4" width="340" height="180" rx="14" fill="white" fillOpacity="0.94" />
      </g>

      {/* Title bar */}
      <circle cx="48" cy="18" r="3.5" fill="#F87171" />
      <circle cx="60" cy="18" r="3.5" fill="#FBBF24" />
      <circle cx="72" cy="18" r="3.5" fill="#34D399" />
      <rect x="88" y="14" width="50" height="8" rx="4" fill={palette.muted} />
      <line x1="40" y1="30" x2="360" y2="30" stroke={palette.muted} strokeWidth="0.5" />

      {/* Top-left: Bar chart (amber) */}
      <motion.g
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.1 }}
      >
        <rect x="42" y="36" width="152" height="66" rx="8" fill="#FEF3C7" fillOpacity="0.45" />
        <rect x="50" y="42" width="30" height="5" rx="2.5" fill="#D97706" opacity="0.4" />
        {heights.slice(0, 4).map((frac, i) => {
          const bh = frac * 38;
          return (
            <motion.rect
              key={i}
              x={56 + i * 32}
              y={90}
              width={20}
              rx={4}
              fill={`url(#fs-amber-${id})`}
              opacity={i % 2 === 0 ? 1 : 0.6}
              initial={{ height: 0, y: 90 }}
              whileInView={{ height: bh, y: 90 - bh }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.12 * i }}
            />
          );
        })}
        <line x1="50" y1="92" x2="184" y2="92" stroke="#FDE68A" strokeWidth="0.8" />
      </motion.g>

      {/* Top-right: Gauge (emerald) */}
      <motion.g
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.2 }}
      >
        <rect x="202" y="36" width="160" height="66" rx="8" fill="#D1FAE5" fillOpacity="0.4" />
        <rect x="210" y="42" width="30" height="5" rx="2.5" fill="#059669" opacity="0.4" />
        <circle cx="282" cy="76" r="24" fill="none" stroke="#A7F3D0" strokeWidth="6" />
        <motion.path
          d={describeArc(282, 76, 24, 180, 180 + gaugeAngle)}
          fill="none"
          stroke={`url(#fs-emerald-${id})`}
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.35 }}
        />
        <text x="282" y="80" textAnchor="middle" fontSize="10" fontWeight="700" fill="#059669">
          {Math.round(gaugeAngle / 1.8)}%
        </text>
      </motion.g>

      {/* Bottom-left: Chat (violet) */}
      <motion.g
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.3 }}
      >
        <rect x="42" y="108" width="152" height="68" rx="8" fill="#EDE9FE" fillOpacity="0.4" />
        <rect x="50" y="114" width="30" height="5" rx="2.5" fill="#7C3AED" opacity="0.4" />
        <rect x="54" y="126" width="64" height="14" rx="7" fill={`url(#fs-violet-${id})`} />
        <rect x="82" y="144" width="52" height="12" rx="6" fill="#EDE9FE" stroke="#DDD6FE" strokeWidth="0.5" />
        <rect x="54" y="160" width="44" height="10" rx="5" fill={`url(#fs-violet-${id})`} />
      </motion.g>

      {/* Bottom-right: Browser (blue) */}
      <motion.g
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.4 }}
      >
        <rect x="202" y="108" width="160" height="68" rx="8" fill="#DBEAFE" fillOpacity="0.4" />
        <circle cx="216" cy="118" r="2.5" fill="#FCA5A5" />
        <circle cx="224" cy="118" r="2.5" fill="#FDE68A" />
        <circle cx="232" cy="118" r="2.5" fill="#86EFAC" />
        <rect x="242" y="115" width="60" height="6" rx="3" fill="#BFDBFE" opacity="0.6" />
        <line x1="210" y1="126" x2="354" y2="126" stroke="#BFDBFE" strokeWidth="0.5" />
        <rect x="212" y="130" width="60" height="20" rx="4" fill="#BFDBFE" opacity="0.5" />
        <rect x="278" y="130" width="76" height="20" rx="4" fill="#DBEAFE" opacity="0.7" />
        <rect x="212" y="130" width="60" height="8" rx="3" fill="#2563EB" opacity="0.15" />
        <rect x="212" y="154" width="140" height="3" rx="1.5" fill="#BFDBFE" opacity="0.4" />
        <rect x="212" y="160" width="110" height="3" rx="1.5" fill="#BFDBFE" opacity="0.3" />
        <rect x="212" y="166" width="80" height="3" rx="1.5" fill="#BFDBFE" opacity="0.2" />
      </motion.g>
    </svg>
  );
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
  const rad = (a: number) => ((a - 90) * Math.PI) / 180;
  const sx = cx + r * Math.cos(rad(startAngle));
  const sy = cy + r * Math.sin(rad(startAngle));
  const ex = cx + r * Math.cos(rad(endAngle));
  const ey = cy + r * Math.sin(rad(endAngle));
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${sx} ${sy} A ${r} ${r} 0 ${large} 1 ${ex} ${ey}`;
}

// ── Scene selector ──

const SCENES: Record<ProjectCategory, React.ComponentType<SceneProps>> = {
  "google-ads": GoogleAdsScene,
  seo: SeoScene,
  "website-design": WebDesignScene,
  "ai-receptionist": AiReceptionistScene,
  "full-service": FullServiceScene,
};

// ── Main Export ──

export function ProjectThumbnail({ project }: { project: Project }) {
  const palette = PALETTES[project.category];
  const Scene = SCENES[project.category];

  return (
    <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${palette.bg}`}>
      <Scene project={project} palette={palette} />

      {/* Bottom overlay for text readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/80 via-white/50 to-transparent" />

      {/* Category badge */}
      <div className="absolute top-3 left-3">
        <span className="rounded-full border border-white/40 bg-white/90 px-3 py-1 text-[11px] font-semibold text-warm-dark shadow-sm backdrop-blur-sm">
          {CATEGORY_LABELS[project.category]}
        </span>
      </div>

      {/* Hero stat */}
      <p className="absolute bottom-2.5 left-4 font-heading text-base font-extrabold text-warm-dark line-clamp-1 sm:text-lg drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
        {project.heroStat}
      </p>

      {/* Arrow on hover */}
      <div className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
        <svg className="size-4 text-warm-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
    </div>
  );
}
