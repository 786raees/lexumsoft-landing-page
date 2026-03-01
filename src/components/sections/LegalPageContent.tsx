"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import type { LegalPage } from "@/lib/legal";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function LegalPageContent({ page }: { page: LegalPage }) {
  return (
    <section className="relative bg-warm-bg py-32 lg:py-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          {/* Header */}
          <div className="mb-12 border-b border-warm-border/50 pb-8">
            <h1 className="font-heading text-3xl font-bold text-warm-dark sm:text-4xl">
              {page.title}
            </h1>
            <p className="mt-3 text-sm text-warm-text-muted">
              Last updated: {page.lastUpdated}
            </p>
          </div>

          {/* Sections */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            {page.sections.map((section, i) => (
              <motion.div key={i} variants={fadeUp}>
                <h2 className="mb-4 font-heading text-xl font-bold text-warm-dark">
                  {section.heading}
                </h2>
                <div className="space-y-4 text-[15px] leading-relaxed text-warm-text-secondary">
                  {section.content.split("\n\n").map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
