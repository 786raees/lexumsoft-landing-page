"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/badge";
import { SectionDivider } from "@/components/ui/SectionDivider";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function PortfolioHero() {
  return (
    <>
    <section className="section-dark -mt-16 pb-24 pt-40 lg:-mt-20 lg:pb-32 lg:pt-52">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge className="mb-6 rounded-full border-amber/30 bg-amber/10 px-4 py-1.5 text-sm font-medium text-amber hover:bg-amber/10">
              50+ Success Stories
            </Badge>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Our <span className="text-amber">Portfolio</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/70"
          >
            Real results from real plumbing and HVAC companies. Browse our case studies to see the
            dramatic before-and-after transformations we deliver.
          </motion.p>
        </motion.div>
      </Container>
    </section>

    {/* Curved divider to light PortfolioGrid section */}
    <SectionDivider from="dark" to="light" />
    </>
  );
}
