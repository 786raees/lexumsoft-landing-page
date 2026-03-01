import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobilePhoneCTA } from "@/components/layout/MobilePhoneCTA";
import { ServicePageContent } from "@/components/sections/ServicePageContent";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} for Plumbing & HVAC | LexumSoft`,
    description: service.subheadline,
    openGraph: {
      title: `${service.title} | LexumSoft`,
      description: service.subheadline,
      url: `https://www.lexumsoft.com/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        <ServicePageContent service={service} />
      </main>

      <Footer />
      <MobilePhoneCTA />
    </>
  );
}
