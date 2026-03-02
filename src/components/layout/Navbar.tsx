"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const SECTION_IDS = ["services", "how-it-works", "results", "pricing", "faq"];

export function Navbar({ light = false }: { light?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);

    // Track active section
    const scrollY = window.scrollY + 200;
    let current = "";
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return activeSection === href.replace("/#", "");
    }
    return false;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        (scrolled || light)
          ? "bg-white/80 shadow-[0_1px_2px_rgba(26,23,20,0.03),0_4px_16px_rgba(26,23,20,0.05)] border-b border-warm-border/30 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-[72px]" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <motion.span
              className="flex items-center gap-2.5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="flex size-9 items-center justify-center rounded-xl transition-all duration-300">
                <Image
                  src={(scrolled || light) ? "/logo.png" : "/logo-white.png"}
                  alt="LexumSoft"
                  width={393}
                  height={373}
                  className="w-9 h-auto transition-all duration-300"
                />
              </div>
              <span
                className={cn(
                  "font-heading text-xl font-bold transition-colors duration-300",
                  (scrolled || light) ? "text-warm-dark" : "text-white"
                )}
              >
                LexumSoft
              </span>
            </motion.span>
          </Link>

          {/* Desktop nav — pill container */}
          <div className={cn(
            "hidden items-center gap-0.5 rounded-full px-1.5 py-1 transition-all duration-500 lg:flex",
            (scrolled || light)
              ? "bg-warm-bg/80 ring-1 ring-warm-border/30"
              : "bg-white/[0.06] ring-1 ring-white/[0.06]"
          )}>
            {NAV_LINKS.map((link) => {
              const isRoute = link.href.startsWith("/") && !link.href.startsWith("/#");
              const active = isActive(link.href);
              const className = cn(
                "relative rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200",
                (scrolled || light)
                  ? active
                    ? "bg-warm-dark/[0.06] text-warm-dark"
                    : "text-warm-text-secondary hover:bg-warm-dark/[0.04] hover:text-warm-dark"
                  : active
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/[0.06] hover:text-white/90"
              );
              return isRoute ? (
                <Link key={link.href} href={link.href} className={className}>
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="nav-active"
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full",
                        scrolled ? "bg-amber" : "bg-amber"
                      )}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className={className}>
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-amber"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`https://wa.me/${COMPANY.phone.replace(/[^\d]/g, "")}`}
              className={cn(
                "flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200",
                (scrolled || light)
                  ? "text-warm-text-secondary hover:bg-warm-dark/5 hover:text-warm-dark"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              )}
            >
              <Phone className="size-3.5" />
              <span className="hidden xl:inline">{COMPANY.phone}</span>
            </a>
            <Button variant="cta" size="default" className="rounded-full px-6 shadow-lg shadow-amber/20 transition-shadow hover:shadow-xl hover:shadow-amber/25" asChild>
              <a href="#contact" className="flex items-center gap-2">
                Get Free Audit
                <ArrowRight className="size-3.5" />
              </a>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "relative z-10 rounded-xl p-2.5 transition-all lg:hidden",
                  (scrolled || light)
                    ? "text-warm-dark hover:bg-warm-dark/5"
                    : "text-white hover:bg-white/10"
                )}
                aria-label="Open menu"
              >
                <Menu className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-l border-white/5 bg-warm-dark p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex h-full flex-col">
                {/* Mobile header */}
                <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src="/logo-white.png"
                      alt="LexumSoft"
                      width={371}
                      height={341}
                      className="w-8 h-auto"
                    />
                    <span className="font-heading text-lg font-bold text-white">LexumSoft</span>
                  </div>
                </div>

                {/* Mobile nav links */}
                <nav className="flex-1 px-4 py-4" aria-label="Mobile navigation">
                  <div className="space-y-0.5">
                    {NAV_LINKS.map((link) => {
                      const isRoute = link.href.startsWith("/") && !link.href.startsWith("/#");
                      const active = isActive(link.href);
                      const className = cn(
                        "flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition-all",
                        active
                          ? "bg-white/5 text-white"
                          : "text-white/60 hover:bg-white/5 hover:text-white"
                      );
                      const inner = (
                        <>
                          <span className="flex items-center gap-3">
                            {active && <span className="size-1.5 rounded-full bg-amber" />}
                            {link.label}
                          </span>
                          <ArrowRight className="size-4 text-white/20" />
                        </>
                      );
                      return isRoute ? (
                        <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={className}>
                          {inner}
                        </Link>
                      ) : (
                        <a key={link.href} href={link.href} onClick={() => setOpen(false)} className={className}>
                          {inner}
                        </a>
                      );
                    })}
                  </div>
                </nav>

                {/* Mobile CTA */}
                <div className="border-t border-white/5 px-6 py-6 space-y-3">
                  <Button variant="cta" size="lg" className="w-full rounded-xl" asChild>
                    <a href="#contact" onClick={() => setOpen(false)}>
                      Get Free Audit
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                  <a
                    href={`https://wa.me/${COMPANY.phone.replace(/[^\d]/g, "")}`}
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm font-medium text-white/50 transition-colors hover:border-white/20 hover:text-white"
                  >
                    <Phone className="size-4" />
                    Call {COMPANY.phone}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </Container>
    </motion.header>
  );
}
