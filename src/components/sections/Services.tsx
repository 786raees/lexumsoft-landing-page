"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";
import { Globe, Search, BarChart3, PhoneCall, Bot, Check, ArrowUpRight } from "lucide-react";
import { SectionDivider } from "@/components/ui/SectionDivider";

const iconMap = { Globe, Search, BarChart3, PhoneCall, Bot };

const CARD_ACCENTS = [
  { bg: "bg-blue-50", iconBg: "bg-blue-100", iconColor: "text-blue-600", hoverBorder: "hover:border-blue-200/60" },
  { bg: "bg-emerald-50", iconBg: "bg-emerald-100", iconColor: "text-emerald-600", hoverBorder: "hover:border-emerald-200/60" },
  { bg: "bg-amber-50", iconBg: "bg-amber-100", iconColor: "text-amber-600", hoverBorder: "hover:border-amber-200/60" },
  { bg: "bg-violet-50", iconBg: "bg-violet-100", iconColor: "text-violet-600", hoverBorder: "hover:border-violet-200/60" },
  { bg: "bg-rose-50", iconBg: "bg-rose-100", iconColor: "text-rose-600", hoverBorder: "hover:border-rose-200/60" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Services() {
  return (
    <>
    <section id="services" className="relative bg-white py-24 lg:py-32">
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warm-border to-transparent" />

      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Everything You Need to Grow Your Business"
          subtitle="Purpose-built marketing solutions for plumbing and HVAC companies. No generic strategies — just what works in your industry."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
            return (
              <motion.article
                key={service.title}
                variants={itemVariants}
                className="group relative"
              >
                <Link href={`/services/${service.slug}`} className="block h-full">
                <div className={`relative h-full overflow-hidden rounded-2xl border border-warm-border/50 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:shadow-warm-dark/[0.05] hover:-translate-y-1 ${accent.hoverBorder}`}>
                  {/* Top accent stripe */}
                  <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl ${accent.iconBg} opacity-60 transition-opacity duration-300 group-hover:opacity-100`} />

                  {/* Service number watermark */}
                  <div className="absolute -right-2 -top-3 font-heading text-[5rem] font-black leading-none text-warm-dark/[0.02]">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Icon + title row */}
                  <div className="relative mb-4 flex items-start gap-4">
                    <div className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${accent.iconBg} transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                      <Icon className={`size-5 ${accent.iconColor}`} />
                    </div>
                    <div className="min-w-0 pt-1">
                      <h3 className="font-heading text-lg font-bold leading-tight text-warm-dark">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mb-5 text-sm leading-relaxed text-warm-text-secondary">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature.text}
                        className="flex items-start gap-2.5 text-[13px] text-warm-dark/75"
                      >
                        <div className={`mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full ${accent.bg}`}>
                          <Check className={`size-2.5 ${accent.iconColor}`} />
                        </div>
                        {feature.text}
                      </li>
                    ))}
                  </ul>

                  {/* Learn more hint */}
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-warm-text-muted transition-colors group-hover:text-amber">
                    <span>Learn more</span>
                    <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>

    {/* Curved divider to dark HowItWorks section */}
    <SectionDivider from="white" to="dark" />
    </>
  );
}
