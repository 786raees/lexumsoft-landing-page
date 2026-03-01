"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";
import { generateFAQSchema } from "@/lib/schema";
import { HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function FAQ() {
  const faqSchema = generateFAQSchema();

  return (
    <>
    <section id="faq" className="relative bg-warm-bg py-24 lg:py-32">
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warm-border to-transparent" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with LexumSoft."
        />

        <div className="mx-auto max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <AccordionItem
                    value={`faq-${i}`}
                    className="overflow-hidden rounded-xl border border-warm-border/50 bg-white px-5 transition-all duration-200 data-[state=open]:border-amber/25 data-[state=open]:shadow-md data-[state=open]:shadow-amber/[0.04]"
                  >
                    <AccordionTrigger className="gap-3 text-left font-heading text-[15px] font-semibold text-warm-dark hover:text-amber hover:no-underline py-4.5 [&>svg]:text-warm-text-muted [&>svg]:size-4">
                      <span className="flex items-center gap-3">
                        <HelpCircle className="size-4 shrink-0 text-amber/50" />
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 pl-7 text-sm leading-relaxed text-warm-text-secondary">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Still have questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-warm-border/30 bg-white/60 p-6 text-center backdrop-blur-sm"
          >
            <div className="flex size-10 items-center justify-center rounded-full bg-amber/8">
              <MessageCircle className="size-5 text-amber" />
            </div>
            <p className="text-sm text-warm-text-secondary">
              Still have questions? We&apos;d love to help.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-amber transition-colors hover:text-amber-hover"
            >
              Get in touch
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>

    {/* Curved divider to dark FinalCTA section */}
    <SectionDivider from="light" to="dark" />
    </>
  );
}
