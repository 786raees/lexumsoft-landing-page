"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LeadForm } from "@/components/ui/LeadForm";
import { Shield, Clock, Users, Zap } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="section-dark relative overflow-hidden py-24 lg:py-32">
      {/* Decorative */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-amber/[0.06] blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-amber/10">
              <Zap className="size-6 text-amber" />
            </div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-amber">
              Get Started Today
            </p>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem]">
              Ready to Grow Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-white/45">
              Fill out the form and a specialist will reach out within 24 hours to schedule your free audit.
            </p>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8"
          >
            {/* Top accent */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber/50 to-transparent" />

            {/* Urgency strip */}
            <div className="mb-6 flex items-center justify-center gap-2 rounded-lg bg-amber/[0.06] py-2 text-xs text-amber/80">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
              </span>
              Only 3 spots remaining this month
            </div>

            <LeadForm variant="full" dark />
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
          >
            {[
              { icon: Shield, text: "100% ROI Guarantee" },
              { icon: Clock, text: "Response in 24 hrs" },
              { icon: Users, text: "200+ happy clients" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex flex-col items-center gap-2 rounded-xl border border-white/[0.04] bg-white/[0.02] p-3 text-center">
                <Icon className="size-4 text-amber/50" />
                <span className="text-[11px] font-medium leading-tight text-white/35">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
