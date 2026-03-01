"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS } from "@/lib/constants";
import { Check, Sparkles, ArrowRight, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionDivider } from "@/components/ui/SectionDivider";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Pricing() {
  return (
    <>
    <section id="pricing" className="relative bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that fits your business. No hidden fees, no long-term contracts."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-5xl items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PRICING_TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              className={cn(
                "group relative",
                tier.popular && "sm:-mt-2 sm:mb-[-8px] lg:-mt-4 lg:mb-[-16px]"
              )}
            >
              {/* Popular card glow */}
              {tier.popular && (
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-amber via-amber/50 to-amber/20 opacity-70 blur-[1px]" />
              )}

              <div
                className={cn(
                  "relative h-full overflow-hidden rounded-2xl p-6 pt-7 transition-all duration-300",
                  tier.popular
                    ? "bg-gradient-to-b from-amber-50/50 to-white shadow-xl shadow-amber/10 ring-1 ring-amber/30"
                    : "border border-warm-border/50 bg-white hover:border-warm-border hover:shadow-xl hover:shadow-warm-dark/[0.04] hover:-translate-y-1"
                )}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute -top-px inset-x-0 flex justify-center">
                    <div className="flex items-center gap-1.5 rounded-b-lg bg-gradient-to-r from-amber to-orange-500 px-5 py-1.5 shadow-lg shadow-amber/30">
                      <Sparkles className="size-3 text-white" />
                      <span className="text-[11px] font-bold text-white">Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Best Value label for Dominator */}
                {i === 2 && (
                  <div className="mb-3 inline-flex items-center rounded-full bg-warm-dark/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-warm-dark/50">
                    Best Value
                  </div>
                )}

                <div className="flex h-full flex-col">
                  <h3 className="font-heading text-lg font-bold text-warm-dark">{tier.name}</h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className={cn(
                      "font-heading text-4xl font-bold",
                      tier.popular ? "text-amber" : "text-warm-dark"
                    )}>
                      {tier.price}
                    </span>
                    <span className="text-sm text-warm-text-muted">{tier.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-warm-text-secondary">{tier.description}</p>

                  <div className="my-5 h-px bg-warm-border/30" />

                  <ul className="mb-7 flex-1 space-y-3.5">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-[13px] text-warm-dark/75"
                      >
                        <div className={cn(
                          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                          tier.popular ? "bg-amber/12" : "bg-warm-bg"
                        )}>
                          <Check className={cn(
                            "size-3",
                            tier.popular ? "text-amber" : "text-warm-text-muted"
                          )} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={tier.popular ? "cta" : "cta-outline"}
                    size="lg"
                    className={cn(
                      "w-full rounded-xl",
                      tier.popular && "shadow-lg shadow-amber/25"
                    )}
                    asChild
                  >
                    <a href="#contact" className="flex items-center justify-center gap-2">
                      {tier.cta}
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-2 text-sm text-warm-text-muted"
        >
          <Shield className="size-4 text-amber/60" />
          <span>All plans include our <strong className="text-warm-dark/70">90-day ROI guarantee</strong>. No long-term contracts.</span>
        </motion.div>
      </Container>
    </section>

    {/* Curved divider to dark ROIGuarantee section */}
    <SectionDivider from="white" to="dark" />
    </>
  );
}
