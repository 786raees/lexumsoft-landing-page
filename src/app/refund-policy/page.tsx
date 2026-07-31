import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobilePhoneCTA } from "@/components/layout/MobilePhoneCTA";
import { LegalPageContent } from "@/components/sections/LegalPageContent";
import { REFUND_POLICY } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Refund Policy | LexumSoft",
  description:
    "Learn how LexumSoft handles refunds, cancellations, and our 90-Day ROI Guarantee for digital marketing services.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar light />
      <main>
        <LegalPageContent page={REFUND_POLICY} />
      </main>
      <Footer />
      <MobilePhoneCTA />
    </>
  );
}
