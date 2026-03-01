"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";
import { Users, DollarSign, TrendingUp, Star } from "lucide-react";

const icons = [Users, DollarSign, TrendingUp, Star];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Stats() {
  return (
    <section id="results" className="relative overflow-hidden bg-warm-bg py-20 lg:py-24">
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warm-border to-transparent" />
      {/* Bottom separator */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-warm-border to-transparent" />

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6"
        >
          {STATS.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl border border-warm-border/50 bg-white p-6 text-center transition-all duration-300 hover:border-amber/25 hover:shadow-xl hover:shadow-amber/[0.06] hover:-translate-y-1"
              >
                {/* Top accent */}
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-amber/0 via-amber/40 to-amber/0 opacity-0 transition-opacity group-hover:opacity-100" />

                {/* Background watermark */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <Icon className="size-20 text-amber/[0.03]" />
                </div>

                <div className="relative">
                  <div className="mx-auto mb-3 flex size-11 items-center justify-center rounded-xl bg-amber/8 transition-all duration-300 group-hover:bg-amber/12 group-hover:scale-110">
                    <Icon className="size-5 text-amber" />
                  </div>
                  <p className="font-heading text-4xl font-bold text-warm-dark sm:text-[2.75rem]">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-warm-text-muted">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
