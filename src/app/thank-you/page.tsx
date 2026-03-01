"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import { Check } from "lucide-react";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return (
    <>
      {/* Header */}
      <section className="section-dark py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-sage">
            <Check className="size-8 text-white" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {name ? `You're all set, ${name}!` : "You're all set!"}
          </h1>
          <p className="mt-3 text-base text-white/70 sm:text-lg">
            Your request has been received. Book your free 30-minute audit call
            below so we can dive into your marketing together.
          </p>
        </div>
      </section>

      {/* Calendly Embed */}
      <section className="section-light py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/waqar-lexumsoft-q5i/30min"
            style={{ minWidth: "100%", height: 700 }}
          />
        </div>
      </section>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <section className="section-dark py-16 text-center">
          <div className="mx-auto max-w-2xl px-4">
            <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-sage">
              <Check className="size-8 text-white" />
            </div>
            <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              You&apos;re all set!
            </h1>
          </div>
        </section>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
