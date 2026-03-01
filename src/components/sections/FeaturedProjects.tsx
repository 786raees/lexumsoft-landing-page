"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

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

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warm-border to-transparent" />

      {/* Subtle dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Our Work"
          title="Featured Client Results"
          subtitle="See how we've helped plumbing and HVAC companies transform their businesses with dramatic before-and-after results."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((project) => (
            <motion.div key={project.slug} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button variant="cta-outline" size="lg" className="rounded-full px-8" asChild>
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
