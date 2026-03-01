"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Trophy, Zap, ArrowUpRight } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";

interface ProjectResultsProps {
  results: string;
}

export function ProjectResults({ results }: ProjectResultsProps) {
  // Split results into sentences for better visual treatment
  const sentences = results.split(/(?<=\.)\s+/).filter(Boolean);

  return (
    <>
    <section className="section-white relative overflow-hidden py-20 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-sage/5 blur-[100px]" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          {/* Section header */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sage/10 shadow-sm">
              <Trophy className="size-6 text-sage" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-sage">Step 3</p>
              <h2 className="font-heading text-2xl font-bold text-warm-dark sm:text-3xl">
                The Results
              </h2>
            </div>
          </div>

          {/* Results content - visual timeline continuation */}
          <div className="relative ml-6 border-l-2 border-sage/20 pl-8 lg:ml-6 lg:pl-10">
            {/* Timeline dot */}
            <div className="absolute -left-[7px] top-0 size-3 rounded-full border-2 border-sage bg-white" />

            {/* Results card with emphasis */}
            <div className="rounded-2xl border border-sage/10 bg-gradient-to-br from-sage/5 via-transparent to-transparent p-6 sm:p-8">
              {sentences.length > 1 ? (
                <div className="space-y-4">
                  {sentences.map((sentence, i) => (
                    <div key={i} className="flex gap-3">
                      {i === 0 ? (
                        <Zap className="mt-1 size-5 shrink-0 text-sage" />
                      ) : (
                        <ArrowUpRight className="mt-1 size-5 shrink-0 text-sage/60" />
                      )}
                      <p className={`text-base leading-[1.8] sm:text-lg ${
                        i === 0 ? "font-medium text-warm-dark" : "text-warm-text-secondary"
                      }`}>
                        {sentence}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex gap-3">
                  <Zap className="mt-1 size-5 shrink-0 text-sage" />
                  <p className="text-base leading-[1.8] text-warm-text-secondary sm:text-lg">
                    {results}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom connector */}
            <div className="absolute -bottom-1 -left-[7px] size-3 rounded-full border-2 border-sage/30 bg-white" />
          </div>
        </motion.div>
      </Container>
    </section>

    {/* Curved divider to dark ProjectTestimonial section */}
    <SectionDivider from="white" to="dark" />
    </>
  );
}
