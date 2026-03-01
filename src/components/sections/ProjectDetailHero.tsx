"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Clock, ArrowUpRight, Sparkles } from "lucide-react";
import type { Project } from "@/types";
import { PROJECT_CATEGORIES } from "@/lib/projects";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const CATEGORY_ACCENTS: Record<string, {
  gradient: string;
  glow: string;
  glowSecondary: string;
  badge: string;
  statBg: string;
  statBorder: string;
}> = {
  "google-ads": {
    gradient: "from-amber-900/40 via-orange-900/20 to-transparent",
    glow: "bg-amber-500/10",
    glowSecondary: "bg-orange-500/8",
    badge: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    statBg: "from-amber-400 to-orange-500",
    statBorder: "border-amber-400/20",
  },
  seo: {
    gradient: "from-emerald-900/40 via-teal-900/20 to-transparent",
    glow: "bg-emerald-500/10",
    glowSecondary: "bg-teal-500/8",
    badge: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    statBg: "from-emerald-400 to-teal-500",
    statBorder: "border-emerald-400/20",
  },
  "website-design": {
    gradient: "from-blue-900/40 via-indigo-900/20 to-transparent",
    glow: "bg-blue-500/10",
    glowSecondary: "bg-indigo-500/8",
    badge: "border-blue-400/30 bg-blue-400/10 text-blue-300",
    statBg: "from-blue-400 to-indigo-500",
    statBorder: "border-blue-400/20",
  },
  "ai-receptionist": {
    gradient: "from-violet-900/40 via-purple-900/20 to-transparent",
    glow: "bg-violet-500/10",
    glowSecondary: "bg-purple-500/8",
    badge: "border-violet-400/30 bg-violet-400/10 text-violet-300",
    statBg: "from-violet-400 to-purple-500",
    statBorder: "border-violet-400/20",
  },
  "full-service": {
    gradient: "from-amber-900/30 via-emerald-900/20 to-transparent",
    glow: "bg-amber-500/10",
    glowSecondary: "bg-emerald-500/8",
    badge: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    statBg: "from-amber-400 to-emerald-500",
    statBorder: "border-amber-400/20",
  },
};

interface ProjectDetailHeroProps {
  project: Project;
}

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  const categoryInfo = PROJECT_CATEGORIES.find((c) => c.value === project.category);
  const accent = CATEGORY_ACCENTS[project.category] ?? CATEGORY_ACCENTS["google-ads"];

  return (
    <section className="section-dark relative -mt-16 overflow-hidden pb-28 pt-36 lg:-mt-20 lg:pb-36 lg:pt-48">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Category-colored gradient wash */}
        <div className={`absolute inset-0 bg-gradient-to-br ${accent.gradient}`} />
        {/* Primary glow */}
        <div className={`absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full ${accent.glow} blur-[140px]`} />
        {/* Secondary glow */}
        <div className={`absolute -bottom-32 left-1/4 h-[400px] w-[400px] rounded-full ${accent.glowSecondary} blur-[120px]`} />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Breadcrumbs */}
          <motion.nav variants={itemVariants} className="mb-8 flex items-center gap-2 text-sm text-white/40">
            <Link href="/" className="transition-colors hover:text-white/70">Home</Link>
            <ChevronRight className="size-3.5" />
            <Link href="/portfolio" className="transition-colors hover:text-white/70">Portfolio</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-white/60">{project.client}</span>
          </motion.nav>

          <div className="grid items-start gap-10 lg:grid-cols-[1fr_300px] lg:gap-16">
            {/* Left content column */}
            <div>
              {/* Category badge */}
              <motion.div variants={itemVariants}>
                <Badge className={`mb-5 rounded-full ${accent.badge} border px-3.5 py-1.5 text-xs font-semibold`}>
                  {categoryInfo?.label}
                </Badge>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={itemVariants}
                className="font-heading text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
              >
                {project.title}
              </motion.h1>

              {/* Summary */}
              <motion.p
                variants={itemVariants}
                className="mt-5 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg"
              >
                {project.summary}
              </motion.p>

              {/* Client info */}
              <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-white/10 to-white/5 text-xs font-bold text-white">
                    {project.client.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{project.client}</p>
                    <p className="text-xs text-white/40">{project.industry}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/5 px-4 py-2.5 text-sm text-white/60 backdrop-blur-sm">
                  <Clock className="size-4 text-white/30" />
                  {project.timeline}
                </div>
              </motion.div>

              {/* Service tags */}
              <motion.div variants={itemVariants} className="mt-5 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-white/6 bg-white/[0.03] px-3 py-1 text-xs text-white/40"
                  >
                    {service}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right stat card */}
            <motion.div variants={itemVariants} className="relative lg:mt-10">
              <div className={`relative overflow-hidden rounded-2xl border ${accent.statBorder} bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 backdrop-blur-xl`}>
                {/* Card glow */}
                <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${accent.statBg} opacity-15 blur-[50px]`} />
                <div className="relative">
                  <div className="mb-3 flex items-center gap-2">
                    <Sparkles className="size-4 text-amber-400" />
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-white/35">Key Result</span>
                  </div>
                  <p className={`bg-gradient-to-r ${accent.statBg} bg-clip-text font-heading text-3xl font-extrabold leading-tight text-transparent sm:text-4xl`}>
                    {project.heroStat}
                  </p>
                  <div className="mt-5 flex items-center gap-2 border-t border-white/8 pt-4 text-sm text-white/40">
                    <ArrowUpRight className="size-4" />
                    <span>Achieved in {project.timeline}</span>
                  </div>
                </div>
              </div>
              {/* Border glow */}
              <div className={`absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br ${accent.statBg} opacity-15 blur-sm`} />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
