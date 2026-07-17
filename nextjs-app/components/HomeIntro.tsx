import Link from "next/link";
import Reveal from "./Reveal";
import { SunMark } from "./art";

/** Short home-page introduction that hands off to the full About page. */
export default function HomeIntro() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr]">
        <Reveal>
          <SunMark className="h-16 w-16 text-gold sm:h-24 sm:w-24" />
        </Reveal>
        <Reveal delay={120}>
          <h2
            id="intro-heading"
            className="font-display max-w-3xl text-3xl font-medium leading-snug tracking-tight text-cream sm:text-4xl"
          >
            A neighborhood spot for authentic Haitian &amp; Caribbean cooking —
            slow-simmered stews, crispy griot and the flavors of the island
            table.
          </h2>
          <Link
            href="/about"
            className="mt-8 inline-block font-semibold text-mango underline decoration-mango/40 underline-offset-8 transition-colors hover:text-gold hover:decoration-gold/40"
          >
            More about Mama Creole →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
