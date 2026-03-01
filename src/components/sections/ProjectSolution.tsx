"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Lightbulb, Clock, CheckCircle2, ArrowDown } from "lucide-react";

interface ProjectSolutionProps {
  solution: string;
  services: string[];
  timeline: string;
}

export function ProjectSolution({ solution, services, timeline }: ProjectSolutionProps) {
  return (
    <section className="section-white relative py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Section header with timeline connector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-4"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-amber-light shadow-sm">
              <Lightbulb className="size-6 text-amber" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-amber">Step 2</p>
              <h2 className="font-heading text-2xl font-bold text-warm-dark sm:text-3xl">
                Our Solution
              </h2>
            </div>
          </motion.div>

          {/* Content with timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative ml-6 border-l-2 border-amber/20 pl-8 lg:ml-6 lg:pl-10"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[7px] top-0 size-3 rounded-full border-2 border-amber bg-white" />

            <p className="text-base leading-[1.8] text-warm-text-secondary sm:text-lg">
              {solution}
            </p>

            {/* Services grid */}
            <div className="mt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-warm-text-muted">
                What We Delivered
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-2.5 rounded-xl border border-warm-border bg-warm-bg/50 px-4 py-3 transition-colors hover:border-amber/20 hover:bg-amber-light/30"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-sage" />
                    <span className="text-sm font-medium text-warm-dark">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-warm-border bg-white px-4 py-2 shadow-sm">
              <Clock className="size-4 text-amber" />
              <span className="text-sm font-semibold text-warm-dark">Completed in {timeline}</span>
            </div>

            {/* Bottom connector */}
            <div className="absolute -bottom-1 -left-[7px] size-3 rounded-full border-2 border-amber/30 bg-white" />
          </motion.div>

          {/* Transition arrow to results */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex justify-center"
          >
            <div className="flex size-10 items-center justify-center rounded-full border border-sage/20 bg-sage/5">
              <ArrowDown className="size-4 text-sage" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
