import { DISHES } from "@/lib/business";
import Reveal from "./Reveal";

const plateGradients = [
  "from-ember/60 to-gold/30",
  "from-gold/50 to-mango/25",
  "from-mango/55 to-ember/30",
];

export default function Dishes() {
  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="border-y border-cream/10 bg-cocoa/60"
    >
      <div className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            From the kitchen
          </p>
          <h2
            id="menu-heading"
            className="font-display mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-cream sm:text-5xl"
          >
            Haitian classics, served daily.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-cream-soft">
            A taste of what Mama Creole is known for — call the restaurant for
            the full menu and today&apos;s specials.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DISHES.map((dish, i) => (
            <Reveal as="li" key={dish.name} delay={(i % 3) * 100}>
              <article className="group h-full rounded-3xl border border-cream/10 bg-espresso p-7 transition-colors duration-300 hover:border-mango/40">
                <div
                  aria-hidden="true"
                  className={`mb-6 h-14 w-14 rounded-full bg-gradient-to-br ${
                    plateGradients[i % plateGradients.length]
                  } ring-1 ring-inset ring-cream/15 transition-transform duration-300 group-hover:scale-110`}
                />
                <h3 className="font-display text-2xl font-medium text-cream">
                  {dish.name}
                </h3>
                <p className="mt-3 leading-relaxed text-cream-soft">
                  {dish.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
