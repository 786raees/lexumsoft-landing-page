"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionDivider } from "@/components/ui/SectionDivider";
import {
  Globe, Search, BarChart3, PhoneCall, Bot, Smartphone, Shield, Zap,
  Layout, MapPin, Clock, Users, Star, Target, TrendingUp, Eye, Code,
  Palette, Gauge, FileText, ArrowRight, ChevronRight, Check, AlertTriangle,
  ChevronDown,
} from "lucide-react";
import type { ServiceDetail } from "@/types";
import { useState } from "react";

/* ── Icon map ── */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe, Search, BarChart3, PhoneCall, Bot, Smartphone, Shield, Zap,
  Layout, MapPin, Clock, Users, Star, Target, TrendingUp, Eye, Code,
  Palette, Gauge, FileText,
};

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerContainerSlow = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ── FAQ Accordion Item ── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-warm-border/60">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 font-heading text-[15px] font-semibold text-warm-dark sm:text-base">
          {question}
        </span>
        <ChevronDown
          className={`size-5 shrink-0 text-warm-text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-warm-text-secondary">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Main Component ── */
export function ServicePageContent({ service }: { service: ServiceDetail }) {
  const HeroIcon = iconMap[service.icon] ?? Globe;

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════ */}
      <section className="section-dark relative -mt-16 overflow-hidden bg-warm-dark pt-32 pb-20 lg:-mt-[72px] lg:pt-40 lg:pb-24">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-amber/[0.04] blur-[120px]" />
          <div className="absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-amber/[0.03] blur-[100px]" />
        </div>

        <Container className="relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl text-center"
          >
            {/* Breadcrumb */}
            <motion.nav variants={fadeUp} className="mb-8 flex items-center justify-center gap-1.5 text-sm text-white/40">
              <Link href="/" className="transition-colors hover:text-white/60">Home</Link>
              <ChevronRight className="size-3.5" />
              <Link href="/#services" className="transition-colors hover:text-white/60">Services</Link>
              <ChevronRight className="size-3.5" />
              <span className="text-amber">{service.title}</span>
            </motion.nav>

            {/* Icon */}
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-amber/[0.1] ring-1 ring-amber/20">
                <HeroIcon className="size-7 text-amber" />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {service.headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="mt-5 text-base leading-relaxed text-white/50 sm:text-lg lg:text-xl"
            >
              {service.subheadline}
            </motion.p>

            {/* Hero stats */}
            <motion.div
              variants={fadeUp}
              className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
            >
              {service.heroStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-4">
                  <p className="font-heading text-2xl font-bold text-amber sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-white/40 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-amber-hover hover:shadow-lg hover:shadow-amber/20"
              >
                Get Your Free Audit
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white/70 transition-all hover:border-white/20 hover:text-white"
              >
                See How It Works
              </a>
            </motion.div>
          </motion.div>
        </Container>

      </section>

      {/* Curved divider: dark hero → light pain points */}
      <SectionDivider from="dark" to="light" />

      {/* ═══════════════════════════════════════
          PAIN POINTS
          ═══════════════════════════════════════ */}
      <section className="relative bg-warm-bg py-20 lg:py-24">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeUp} className="mb-8 flex items-center gap-2.5">
              <AlertTriangle className="size-5 text-red-500" />
              <span className="text-sm font-bold uppercase tracking-wider text-red-500">
                Does This Sound Like You?
              </span>
            </motion.div>

            <div className="space-y-4">
              {service.painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex gap-4 rounded-xl border border-red-200/40 bg-white p-4 shadow-sm"
                >
                  <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-500">
                    {i + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-warm-text-secondary">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════
          SOLUTION OVERVIEW
          ═══════════════════════════════════════ */}
      <section className="relative bg-white py-20 lg:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warm-border to-transparent" />

        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.p variants={fadeUp} className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-amber">
              Our Solution
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-bold tracking-tight text-warm-dark sm:text-4xl"
            >
              {service.solutionTitle}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-base leading-relaxed text-warm-text-secondary lg:text-lg"
            >
              {service.solutionDescription}
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════
          FEATURES GRID
          ═══════════════════════════════════════ */}
      <section className="relative bg-warm-bg py-20 lg:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warm-border/30 to-transparent" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-amber">What You Get</p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-warm-dark sm:text-4xl">
              Everything Included
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {service.features.map((feature) => {
              const FeatureIcon = iconMap[feature.icon] ?? Globe;
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-2xl border border-warm-border/60 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-warm-dark/[0.05]"
                >
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-amber-light">
                    <FeatureIcon className="size-5 text-amber" />
                  </div>
                  <h3 className="mb-2 font-heading text-[15px] font-bold text-warm-dark">{feature.title}</h3>
                  <p className="text-[13px] leading-relaxed text-warm-text-secondary">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS / HOW IT WORKS
          ═══════════════════════════════════════ */}
      <section id="how-it-works" className="section-dark relative bg-warm-dark py-20 lg:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/[0.03] blur-[120px]" />
        </div>

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-amber">How It Works</p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From Kickoff to Leads in 4 Steps
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mx-auto max-w-3xl space-y-6"
          >
            {service.process.map((step, i) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="flex gap-3 sm:gap-5"
              >
                {/* Step number */}
                <div className="flex flex-col items-center">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-amber/[0.12] font-heading text-sm font-bold text-amber ring-1 ring-amber/20">
                    {i + 1}
                  </div>
                  {i < service.process.length - 1 && (
                    <div className="mt-2 h-full w-px bg-gradient-to-b from-amber/20 to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-6">
                  <h3 className="font-heading text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/45">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>

      </section>

      {/* Curved divider: dark process → white benefits */}
      <SectionDivider from="dark" to="white" />

      {/* ═══════════════════════════════════════
          BENEFITS
          ═══════════════════════════════════════ */}
      <section className="relative bg-white py-20 lg:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-amber">The Results</p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-warm-dark sm:text-4xl">
              What You Walk Away With
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mx-auto max-w-2xl space-y-3"
          >
            {service.benefits.map((benefit) => (
              <motion.div
                key={benefit}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl border border-warm-border/40 bg-warm-bg/50 px-5 py-4"
              >
                <Check className="mt-0.5 size-5 shrink-0 text-sage" />
                <p className="text-sm leading-relaxed text-warm-dark">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section className="relative bg-warm-bg py-20 lg:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warm-border/30 to-transparent" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-amber">FAQ</p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-warm-dark sm:text-4xl">
              Common Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl rounded-2xl border border-warm-border/60 bg-white px-6"
          >
            {service.faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════
          CTA
          ═══════════════════════════════════════ */}
      <section className="section-dark relative bg-warm-dark py-20 lg:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/[0.04] blur-[100px]" />
        </div>

        <Container className="relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              {service.ctaTitle}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-base leading-relaxed text-white/50 lg:text-lg"
            >
              {service.ctaDescription}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-amber-hover hover:shadow-lg hover:shadow-amber/20"
              >
                Get Your Free Audit
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white/70 transition-all hover:border-white/20 hover:text-white"
              >
                View Pricing
              </Link>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 text-xs text-white/30">
              No contracts. Month-to-month. 90-day ROI guarantee.
            </motion.p>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
