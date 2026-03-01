import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobilePhoneCTA } from "@/components/layout/MobilePhoneCTA";
import { ProjectDetailHero } from "@/components/sections/ProjectDetailHero";
import { QuickStats } from "@/components/sections/QuickStats";
import { CaseStudyNav } from "@/components/sections/CaseStudyNav";
import { ScrollProgress } from "@/components/sections/ScrollProgress";
import { ProjectChallenge } from "@/components/sections/ProjectChallenge";
import { ProjectSolution } from "@/components/sections/ProjectSolution";
import { ProjectMetrics } from "@/components/sections/ProjectMetrics";
import { ProjectResults } from "@/components/sections/ProjectResults";
import { ProjectTestimonial } from "@/components/sections/ProjectTestimonial";
import { ProjectCTA } from "@/components/sections/ProjectCTA";
import { getProjectBySlug, getAllSlugs, getProjectsByCategory, PROJECTS } from "@/lib/projects";
import { generateCaseStudySchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | LexumSoft Portfolio`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | LexumSoft Portfolio`,
      description: project.summary,
      url: `https://www.lexumsoft.com/portfolio/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Get up to 3 related projects from same category (excluding current)
  const related = getProjectsByCategory(project.category)
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  // Fall back to other projects if not enough in same category
  const relatedProjects = related.length >= 3
    ? related
    : [
        ...related,
        ...PROJECTS.filter(
          (p) => p.slug !== project.slug && !related.find((r) => r.slug === p.slug)
        ).slice(0, 3 - related.length),
      ];

  const schema = generateCaseStudySchema(project);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ScrollProgress />
      <AnnouncementBar />
      <Navbar />
      <CaseStudyNav />

      <main>
        <ProjectDetailHero project={project} />
        <QuickStats metrics={project.metrics} />
        <div id="challenge">
          <ProjectChallenge challenge={project.challenge} />
        </div>
        <div id="solution">
          <ProjectSolution
            solution={project.solution}
            services={project.services}
            timeline={project.timeline}
          />
        </div>
        <div id="metrics">
          <ProjectMetrics metrics={project.metrics} />
        </div>
        <div id="results">
          <ProjectResults results={project.results} />
        </div>
        <div id="testimonial">
          <ProjectTestimonial testimonial={project.testimonial} client={project.client} />
        </div>
        <ProjectCTA relatedProjects={relatedProjects} />
      </main>

      <Footer />
      <MobilePhoneCTA />
    </>
  );
}
