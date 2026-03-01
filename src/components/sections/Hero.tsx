"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/ui/LeadForm";
import { AIReceptionistWorkflow } from "@/components/ui/AIReceptionistWorkflow";
import {
  Shield,
  Clock,
  TrendingUp,
  Users,
  ArrowRight,
  Phone,
  CheckCircle2,
  Zap,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

const trustBadgeVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.8 },
  },
};

const trustItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function WordReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Mobile stat strip (shown only on mobile in place of dashboard) ── */
function MobileStatStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mt-8 grid grid-cols-3 gap-3 lg:hidden"
    >
      {[
        { label: "More Leads", value: "+458%", icon: TrendingUp },
        { label: "Phone Calls", value: "+312%", icon: Phone },
        { label: "Booked Jobs", value: "+285%", icon: CheckCircle2 },
      ].map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 text-center backdrop-blur-sm"
        >
          <stat.icon className="mx-auto mb-1.5 size-4 text-amber/60" />
          <p className="font-heading text-lg font-bold text-emerald-400">{stat.value}</p>
          <p className="mt-0.5 text-[10px] text-white/35">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative -mt-16 overflow-hidden bg-warm-dark pt-16 lg:-mt-[72px] lg:pt-[72px]">
      {/* Multi-layer background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(194,113,12,0.08),transparent_60%)]" />
        {/* Right-side glow for dashboard area */}
        <div className="absolute -right-20 top-1/4 h-[500px] w-[500px] rounded-full bg-amber/[0.04] blur-[120px]" />
        {/* Left-side subtle glow */}
        <div className="absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-amber/[0.02] blur-[100px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <Container className="relative z-10 py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-16 xl:grid-cols-[1fr_480px]">
          {/* Left column — Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="mb-6 border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-amber"
              >
                <Users className="mr-2 size-3.5" />
                Trusted by 200+ Plumbing & HVAC Companies
              </Badge>
            </motion.div>

            <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
              <WordReveal text="Get More Leads." delay={0.15} />
              <br />
              <WordReveal text="Book More Jobs." delay={0.45} />
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.6 }}
                className="inline-block bg-gradient-to-r from-amber via-orange-400 to-amber bg-clip-text text-transparent"
              >
                <WordReveal text="Dominate Your Market." delay={0.75} />
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-white/50 lg:text-lg"
            >
              The only digital marketing agency built exclusively for plumbing and HVAC companies.
              Websites, Google Ads, SEO, and AI receptionists that deliver real results.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button variant="cta" size="lg" className="rounded-full px-8 shadow-xl shadow-amber/25" asChild>
                <a href="#contact" className="flex items-center gap-2">
                  Get Your Free Audit
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <a
                href={`https://wa.me/${COMPANY.phone.replace(/[^\d]/g, "")}`}
                className="group flex items-center gap-2.5 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white/70 transition-all hover:border-white/20 hover:text-white"
              >
                <Phone className="size-4" />
                {COMPANY.phone}
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={trustBadgeVariants}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/35"
            >
              {[
                { icon: Shield, text: "No contracts" },
                { icon: Clock, text: "Results in 30 days" },
                { icon: TrendingUp, text: "100% ROI Guarantee" },
              ].map(({ icon: Icon, text }) => (
                <motion.span key={text} variants={trustItemVariants} className="flex items-center gap-2">
                  <div className="flex size-6 items-center justify-center rounded-full bg-white/[0.04]">
                    <Icon className="size-3 text-amber/70" />
                  </div>
                  {text}
                </motion.span>
              ))}
            </motion.div>

            {/* Mobile stat strip */}
            <MobileStatStrip />
          </div>

          {/* Right column — Dashboard illustration */}
          <div className="hidden overflow-visible lg:block">
            <AIReceptionistWorkflow />
          </div>
        </div>

        {/* Lead form — full width below on all screens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="relative mx-auto mt-16 max-w-2xl lg:mt-20"
        >
          {/* Pulse glow border on first load */}
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 2.5, delay: 1.2 }}
            className="pointer-events-none absolute -inset-px z-10 rounded-2xl border border-amber/25"
          />
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 shadow-[0_0_40px_rgba(217,119,6,0.06)] backdrop-blur-sm sm:p-8">
            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-amber/40 to-transparent" />

            {/* Form header */}
            <div className="mb-6 text-center">
              <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-full bg-amber/10">
                <Zap className="size-5 text-amber" />
              </div>
              <p className="font-heading text-lg font-bold text-white">Start Your Free Marketing Audit</p>
              <p className="mt-1.5 text-xs text-white/35">Takes 30 seconds. No obligation.</p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                {["Custom growth plan", "Competitor analysis", "ROI projection"].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 text-[11px] text-white/40">
                    <CheckCircle2 className="size-3 text-emerald-400/60" />
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-2.5 text-[10px] text-white/25">
                <span className="font-semibold text-amber/60">200+</span> companies audited this year
              </p>
            </div>
            <LeadForm variant="mini" dark />
          </div>
          {/* Trust strip */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              { icon: Lock, text: "256-bit encrypted" },
              { icon: ShieldCheck, text: "No spam, ever" },
              { icon: Clock, text: "Response in 24hrs" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 text-[10px] text-white/25">
                <Icon className="size-3" />
                {text}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center lg:mt-20"
        >
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20">
            Trusted by leading home service companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {["Johnson Plumbing Co.", "Williams HVAC", "ProFlow Plumbing", "Summit Air Systems", "ClearDrain Pros"].map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 + i * 0.1 }}
                className="font-heading text-sm font-semibold tracking-wide text-white/[0.12] transition-colors duration-300 hover:text-white/25"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/15">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-white/15 to-transparent" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
