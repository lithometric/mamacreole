import { BUSINESS } from "@/lib/business";
import Reveal from "./Reveal";

/** Closing call-to-action band with hours summary and NAP-consistent details. */
export default function CtaBand() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden border-t border-cream/10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 120% at 50% 100%, rgba(232,80,30,0.28), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 text-center sm:px-8 sm:py-28">
        <Reveal>
          <h2
            id="cta-heading"
            className="font-display mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-cream sm:text-5xl"
          >
            Dinner&apos;s on the stove.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream-soft">
            {BUSINESS.address.full} · Tue–Sat 11 AM–10 PM · Sun 11 AM–8 PM ·
            Closed Mondays
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS.phone.tel}`}
              className="rounded-full bg-mango px-7 py-4 font-semibold text-espresso shadow-[0_8px_30px_rgba(255,138,61,0.35)] transition-transform hover:scale-105"
            >
              Call {BUSINESS.phone.display}
            </a>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/25 px-7 py-4 font-semibold text-cream transition-colors hover:border-cream/60 hover:bg-cream/5"
            >
              Get Directions ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
