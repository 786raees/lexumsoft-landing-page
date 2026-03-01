"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote, BadgeCheck, TrendingUp } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-warm-bg py-24 lg:py-32">
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warm-border to-transparent" />
      {/* Bottom separator */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-warm-border to-transparent" />

      {/* Decorative */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-amber/[0.02] blur-[100px]" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="Real Results from Real Clients"
          subtitle="Don't just take our word for it — hear from the plumbing and HVAC companies we've helped grow."
        />

        {/* Desktop grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden gap-5 md:grid md:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              className="group relative"
            >
              <TestimonialCard testimonial={t} featured={i === 0} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile scroll */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-hide pb-4 md:hidden">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="w-[85vw] max-w-sm shrink-0 snap-center">
              <TestimonialCard testimonial={t} featured={i === 0} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  featured,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  featured: boolean;
}) {
  return (
    <div className={`relative h-full overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
      featured
        ? "border-amber/25 bg-white shadow-xl shadow-amber/[0.06]"
        : "border-warm-border/50 bg-white hover:border-amber/15 hover:shadow-lg hover:shadow-amber/[0.04] hover:-translate-y-1"
    }`}>
      {/* Top accent */}
      {featured && (
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber via-orange-400 to-amber" />
      )}

      <div className="flex h-full flex-col">
        {/* Quote icon + Stars row */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex size-9 items-center justify-center rounded-xl bg-amber/8">
            <Quote className="size-4 text-amber" />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-amber text-amber" />
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="mb-5 flex-1">
          <p className="text-[13.5px] leading-relaxed text-warm-dark/70">{testimonial.quote}</p>
        </blockquote>

        {/* Result badge */}
        <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-200/60 bg-emerald-50/80 px-3 py-1.5 text-xs font-semibold text-emerald-700">
          <TrendingUp className="size-3" />
          {testimonial.result}
        </div>

        {/* Separator */}
        <div className="mb-4 h-px bg-warm-border/30" />

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-warm-dark to-warm-dark/80 text-xs font-bold text-white ring-2 ring-warm-dark/10">
            {testimonial.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <p className="text-sm font-semibold text-warm-dark">{testimonial.name}</p>
              <BadgeCheck className="size-3.5 shrink-0 text-blue-500" />
            </div>
            <p className="text-xs text-warm-text-muted">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
