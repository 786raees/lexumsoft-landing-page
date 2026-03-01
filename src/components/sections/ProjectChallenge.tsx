"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AlertTriangle, X } from "lucide-react";

interface ProjectChallengeProps {
  challenge: string;
}

export function ProjectChallenge({ challenge }: ProjectChallengeProps) {
  // Split challenge text into sentences for visual variety
  const sentences = challenge.split(/(?<=\.)\s+/).filter(Boolean);
  const firstPart = sentences.slice(0, Math.ceil(sentences.length / 2)).join(" ");
  const secondPart = sentences.slice(Math.ceil(sentences.length / 2)).join(" ");

  return (
    <section className="section-light relative py-16 lg:py-24">
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
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-red-100 shadow-sm">
              <AlertTriangle className="size-6 text-red-500" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-red-400">Step 1</p>
              <h2 className="font-heading text-2xl font-bold text-warm-dark sm:text-3xl">
                The Challenge
              </h2>
            </div>
          </motion.div>

          {/* Content with visual treatment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative ml-6 border-l-2 border-red-100 pl-8 lg:ml-6 lg:pl-10"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[7px] top-0 size-3 rounded-full border-2 border-red-300 bg-white" />

            <div className="space-y-4">
              {firstPart && (
                <p className="text-base leading-[1.8] text-warm-text-secondary sm:text-lg">
                  {firstPart}
                </p>
              )}
              {secondPart && (
                <div className="flex gap-3 rounded-xl border border-red-100 bg-red-50/50 p-4">
                  <X className="mt-0.5 size-5 shrink-0 text-red-400" />
                  <p className="text-sm leading-relaxed text-red-800/70 sm:text-base">
                    {secondPart}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom timeline connector */}
            <div className="absolute -bottom-1 -left-[7px] size-3 rounded-full border-2 border-red-200 bg-warm-bg" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
