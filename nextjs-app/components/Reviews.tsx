import { REVIEWS, BUSINESS } from "@/lib/business";
import Reveal from "./Reveal";

export default function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Word of mouth
        </p>
        <h2
          id="reviews-heading"
          className="font-display mt-3 text-4xl font-semibold tracking-tight text-cream sm:text-5xl"
        >
          What guests are saying
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {REVIEWS.map((review, i) => (
          <Reveal as="figure" key={i} delay={i * 120}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-cream/10 bg-gradient-to-b from-cocoa to-espresso p-8 sm:p-10">
              <blockquote>
                <span
                  aria-hidden="true"
                  className="font-display block text-6xl leading-none text-mango"
                >
                  &ldquo;
                </span>
                <p className="font-display mt-2 text-2xl font-medium leading-snug text-cream sm:text-3xl">
                  {review.quote}
                </p>
              </blockquote>
              <figcaption className="mt-8 text-sm font-medium uppercase tracking-wider text-cream-soft/80">
                — {review.source}
              </figcaption>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mt-10 text-cream-soft">
          Read more reviews on{" "}
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cream underline decoration-mango underline-offset-4 hover:text-mango"
          >
            Google Maps ↗
          </a>
        </p>
      </Reveal>
    </section>
  );
}
