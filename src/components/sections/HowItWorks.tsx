"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STEPS } from "@/lib/constants";
import { ClipboardCheck, Cog, PhoneIncoming, ArrowRight } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";

const icons = [ClipboardCheck, Cog, PhoneIncoming];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function HowItWorks() {
  return (
    <>
    <section id="how-it-works" className="section-dark relative py-24 lg:py-32">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-amber/[0.03] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="How It Works"
          title="Your Path to More Leads in 3 Simple Steps"
          subtitle="We handle the heavy lifting so you can focus on what you do best — running your business."
          light
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Connecting dashed line (desktop) */}
          <div className="absolute left-0 right-0 top-[60px] hidden lg:block">
            <div className="mx-auto w-[60%] border-t border-dashed border-amber/15" />
          </div>

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-6">
            {STEPS.map((step, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="group relative text-center"
                >
                  {/* Step circle */}
                  <div className="relative mx-auto mb-6 flex size-[80px] items-center justify-center">
                    {/* Outer pulse ring */}
                    <div className="absolute inset-0 rounded-full border border-amber/10" />
                    {/* Background fill */}
                    <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-amber/15 to-amber/5" />
                    {/* Number + icon */}
                    <div className="relative flex flex-col items-center gap-0.5">
                      <span className="font-heading text-xl font-bold text-amber">{step.number}</span>
                      <Icon className="size-4.5 text-white/50" />
                    </div>
                  </div>

                  {/* Arrow between steps (desktop) */}
                  {i < STEPS.length - 1 && (
                    <div className="absolute right-0 top-[54px] hidden translate-x-1/2 lg:block">
                      <ArrowRight className="size-4 text-amber/25" />
                    </div>
                  )}

                  <h3 className="mb-2.5 font-heading text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mx-auto max-w-[260px] text-sm leading-relaxed text-white/40">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-14 text-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber/20 transition-all hover:bg-amber-hover hover:shadow-xl hover:shadow-amber/25"
            >
              Start Step 1 — Book Your Free Audit
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>

    {/* Curved divider to light Stats section */}
    <SectionDivider from="dark" to="light" />
    </>
  );
}
