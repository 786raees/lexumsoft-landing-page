"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Shield, Check, ArrowRight } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function ROIGuarantee() {
  return (
    <>
    <section className="section-dark relative overflow-hidden py-24 lg:py-32">
      {/* Decorative */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/[0.05] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Shield icon with animated rings */}
          <div className="relative mx-auto mb-8 flex size-24 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-amber/10" />
            <div className="absolute -inset-4 rounded-full border border-amber/5" />
            <div className="absolute -inset-8 rounded-full border border-amber/[0.03]" />
            <div className="relative flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-amber/20 to-amber/5">
              <Shield className="size-8 text-amber" />
            </div>
          </div>

          <h2 className="font-heading text-3xl font-bold sm:text-4xl lg:text-[2.75rem]">
            <span className="text-white">90-Day 100% ROI </span>
            <span className="bg-gradient-to-r from-amber to-orange-400 bg-clip-text text-transparent">Guarantee</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/45">
            If you don&apos;t see a positive return on your investment within 90 days, we&apos;ll
            continue working for free until we deliver.
          </p>

          {/* Guarantee items */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {["No hidden fees", "No long-term contracts", "Cancel anytime"].map((text, i) => (
              <motion.span
                key={text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-5 py-2.5 text-sm text-white/55 backdrop-blur-sm"
              >
                <Check className="size-4 text-emerald-400/70" />
                {text}
              </motion.span>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-amber transition-colors hover:text-amber-hover"
            >
              Claim your guarantee
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>

    {/* Curved divider to light FAQ section */}
    <SectionDivider from="dark" to="light" />
    </>
  );
}
