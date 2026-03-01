"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/projects";
import type { ProjectCategory } from "@/types";
import { SectionDivider } from "@/components/ui/SectionDivider";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");

  const filtered = activeFilter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <>
    <section className="section-light py-24 lg:py-32">
      <Container>
        {/* Filter pills */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveFilter("all")}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              activeFilter === "all"
                ? "bg-amber text-white shadow-md"
                : "border border-warm-border bg-white text-warm-text-secondary hover:border-amber/40 hover:text-amber"
            }`}
          >
            All ({PROJECTS.length})
          </button>
          {PROJECT_CATEGORIES.map((cat) => {
            const count = PROJECTS.filter((p) => p.category === cat.value).length;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  activeFilter === cat.value
                    ? "bg-amber text-white shadow-md"
                    : "border border-warm-border bg-white text-warm-text-secondary hover:border-amber/40 hover:text-amber"
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>

    {/* Curved divider to dark FinalCTA section */}
    <SectionDivider from="light" to="dark" />
    </>
  );
}
