"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectThumbnail } from "@/components/ui/ProjectThumbnail";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Link href={`/portfolio/${project.slug}`} className="group block h-full">
        <div className="card-warm h-full overflow-hidden rounded-2xl">
          <ProjectThumbnail project={project} />

          {/* Content */}
          <div className="p-6">
            <h3 className="mb-1 font-heading text-lg font-bold text-warm-dark group-hover:text-amber transition-colors">
              {project.title}
            </h3>
            <p className="mb-3 text-sm text-warm-text-secondary">{project.client}</p>
            <p className="mb-4 text-sm leading-relaxed text-warm-text-secondary line-clamp-2">{project.summary}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.services.slice(0, 3).map((service) => (
                <span
                  key={service}
                  className="rounded-full bg-warm-bg px-2.5 py-1 text-xs font-medium text-warm-text-secondary"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
