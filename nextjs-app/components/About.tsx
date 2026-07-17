import { BUSINESS, SERVICES } from "@/lib/business";
import Reveal from "./Reveal";
import { SunMark } from "./art";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <SunMark className="mb-6 h-10 w-10 text-gold" />
          <h2
            id="about-heading"
            className="font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl"
          >
            Creole cooking,
            <br />
            made the way it should be.
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-cream-soft">
            {BUSINESS.name} brings the flavors of Haiti to Union, New Jersey —
            a neighborhood spot for authentic Haitian &amp; Caribbean food,
            from slow-simmered stews to crispy griot. Guests praise the food as
            amazing, delicious and genuinely authentic.
          </p>
          <p className="mt-4 max-w-prose text-lg leading-relaxed text-cream-soft">
            Stop by the restaurant on Stuyvesant Avenue, order takeout for the
            family, or get it delivered to your door.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <ul className="grid gap-4" aria-label="Ways to enjoy Mama Creole">
            {SERVICES.map((service, i) => (
              <li
                key={service}
                className="flex items-center justify-between rounded-2xl border border-cream/10 bg-cocoa px-6 py-5"
              >
                <span className="font-display text-2xl font-medium text-cream">
                  {service}
                </span>
                <span
                  aria-hidden="true"
                  className={`h-3 w-3 rounded-full ${
                    ["bg-mango", "bg-gold", "bg-ember"][i % 3]
                  }`}
                />
              </li>
            ))}
            <li className="rounded-2xl border border-mango/30 bg-gradient-to-br from-ember/20 to-gold/10 px-6 py-5 text-cream-soft">
              Questions about today&apos;s menu? Call{" "}
              <a
                href={`tel:${BUSINESS.phone.tel}`}
                className="font-semibold text-cream underline decoration-mango underline-offset-4 hover:text-mango"
              >
                {BUSINESS.phone.display}
              </a>
              .
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
