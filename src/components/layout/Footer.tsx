"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";
import { Phone, Mail, ArrowUpRight, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0f0d0a] pt-12 pb-6 sm:pt-16 md:pt-20 sm:pb-8" role="contentinfo">
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-amber/[0.02] blur-[120px]" />
      </div>

      <Container className="relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Company info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="mb-5 flex items-center gap-2.5">
              <Image
                src="/logo-white.png"
                alt="LexumSoft"
                width={32}
                height={32}
                className="size-8"
              />
              <span className="font-heading text-lg font-bold text-white">LexumSoft</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/35">
              The #1 digital marketing agency exclusively serving plumbing and HVAC companies across
              the United States.
            </p>
            <div className="space-y-2.5 text-sm text-white/40">
              <a
                href={`https://wa.me/${COMPANY.phone.replace(/[^\d]/g, "")}`}
                className="flex items-center gap-2.5 transition-colors hover:text-amber"
              >
                <div className="flex size-7 items-center justify-center rounded-lg bg-white/[0.04]">
                  <Phone className="size-3.5 shrink-0" />
                </div>
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-amber"
              >
                <div className="flex size-7 items-center justify-center rounded-lg bg-white/[0.04]">
                  <Mail className="size-3.5 shrink-0" />
                </div>
                {COMPANY.email}
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-widest text-white/50">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-amber"
                  >
                    {service.title}
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-widest text-white/50">
              Company
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => {
                const isRoute = link.href.startsWith("/") && !link.href.startsWith("/#");
                return (
                  <li key={link.href}>
                    {isRoute ? (
                      <Link href={link.href} className="group flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-amber">
                        {link.label}
                        <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    ) : (
                      <a href={link.href} className="group flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-amber">
                        {link.label}
                        <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    )}
                  </li>
                );
              })}
              <li>
                <a
                  href="/#contact"
                  className="group flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-amber"
                >
                  Contact Us
                  <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-5 text-[11px] font-bold uppercase tracking-widest text-white/50">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
                { label: "Cookie Policy", href: "/cookie-policy" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/40 transition-colors hover:text-amber">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/[0.04]" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-white/20">
              Exclusively serving plumbing & HVAC companies nationwide.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex size-10 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.03] text-white/30 transition-all hover:border-amber/20 hover:text-amber"
              aria-label="Back to top"
            >
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
