"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Star, Quote } from "lucide-react";
import type { ProjectTestimonial as TestimonialType } from "@/types";

interface ProjectTestimonialProps {
  testimonial: TestimonialType;
  client: string;
}

export function ProjectTestimonial({ testimonial, client }: ProjectTestimonialProps) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section className="section-dark relative overflow-hidden py-24 lg:py-32">
      {/* Elaborate decorative background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-amber/5 blur-[150px]" />
        {/* Side accents */}
        <div className="absolute -left-20 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-sage/5 blur-[100px]" />
        <div className="absolute -right-20 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-amber/5 blur-[100px]" />
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl"
        >
          {/* Top decorative quote icon */}
          <div className="mb-8 flex justify-center">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-amber/10 shadow-lg shadow-amber/5">
              <Quote className="size-8 text-amber" />
            </div>
          </div>

          {/* Star rating with label */}
          <div className="mb-8 flex flex-col items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, type: "spring", stiffness: 300 }}
                >
                  <Star className="size-5 fill-amber text-amber" />
                </motion.div>
              ))}
            </div>
            <p className="text-xs font-medium uppercase tracking-wider text-white/30">Client Testimonial</p>
          </div>

          {/* Quote text - centered and prominent */}
          <blockquote className="mb-10 text-center font-heading text-xl leading-[1.6] text-white/90 sm:text-2xl lg:text-[1.7rem] lg:leading-[1.6]">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          {/* Decorative divider */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20" />
            <div className="size-1.5 rounded-full bg-amber" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/20" />
          </div>

          {/* Author with enhanced treatment */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-amber to-orange-500 text-base font-bold text-white shadow-xl shadow-amber/20 ring-4 ring-amber/10">
                {initials}
              </div>
            </div>
            <div className="text-center">
              <p className="font-heading text-lg font-bold text-white">{testimonial.name}</p>
              <p className="text-sm text-white/50">{testimonial.role}, {client}</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
