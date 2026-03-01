"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArrowRight, Phone, Rocket, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import type { Project } from "@/types";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface ProjectCTAProps {
  relatedProjects: Project[];
}

const VALUE_PROPS = [
  "Free comprehensive marketing audit",
  "Custom strategy for your business",
  "No obligation, no pressure",
];

export function ProjectCTA({ relatedProjects }: ProjectCTAProps) {
  return (
    <section className="section-dark relative overflow-hidden py-24 lg:py-32">
      {/* Elaborate decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-amber/8 blur-[120px]" />
        <div className="absolute -left-20 bottom-0 h-[200px] w-[200px] rounded-full bg-sage/5 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container className="relative">
        {/* Premium CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-2xl"
        >
          <div className="text-center">
            {/* Icon */}
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber to-orange-500 shadow-lg shadow-amber/20">
              <Rocket className="size-8 text-white" />
            </div>

            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Ready for Results Like This?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-white/60 sm:text-lg">
              Book your free marketing audit and see how we can transform your plumbing or HVAC business.
            </p>

            {/* Value props */}
            <div className="mx-auto mt-6 flex max-w-sm flex-col gap-2">
              {VALUE_PROPS.map((prop) => (
                <div key={prop} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 shrink-0 text-sage" />
                  <span className="text-sm text-white/70">{prop}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button variant="cta" size="lg" asChild>
                <a href="/#contact">
                  Get Your Free Audit
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button variant="cta-outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
                <a href={`https://wa.me/${COMPANY.phone.replace(/[^\d]/g, "")}`}>
                  <Phone className="size-4" />
                  Call {COMPANY.phone}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Related projects */}
        {relatedProjects.length > 0 && (
          <>
            <div className="my-8 h-px bg-white/8" />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 flex items-center gap-4"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              <div className="text-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/30">Related</p>
                <h3 className="font-heading text-xl font-bold text-white">More Success Stories</h3>
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent" />
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {relatedProjects.map((project) => (
                <motion.div key={project.slug} variants={itemVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 text-center"
            >
              <Button variant="cta-outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="/portfolio">
                  View All Projects
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </motion.div>
          </>
        )}
      </Container>
    </section>
  );
}
