import { generateServiceSchemas } from "@/lib/schema";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobilePhoneCTA } from "@/components/layout/MobilePhoneCTA";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Pricing } from "@/components/sections/Pricing";
import { ROIGuarantee } from "@/components/sections/ROIGuarantee";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  const serviceSchemas = generateServiceSchemas();

  return (
    <>
      {/* Service JSON-LD schemas */}
      {serviceSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <AnnouncementBar />
      <Navbar />

      <main>
        <Hero />
        <PainPoints />
        <Services />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <FeaturedProjects />
        <Pricing />
        <ROIGuarantee />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <MobilePhoneCTA />
    </>
  );
}
