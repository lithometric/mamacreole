import Image from "next/image";
import Link from "next/link";
import { DISHES } from "@/lib/business";
import { PHOTOS, type Photo } from "@/lib/photos";
import Reveal from "./Reveal";

const plateGradients = [
  "from-ember/60 to-gold/30",
  "from-gold/50 to-mango/25",
  "from-mango/55 to-ember/30",
];

// Real photos from the business's own footage, where we have one for the dish.
const dishPhotos: Record<string, Photo> = {
  Griot: PHOTOS.griot,
  Legume: PHOTOS.legume,
};

export default function Dishes({
  limit,
  showAllLink = false,
}: {
  limit?: number;
  showAllLink?: boolean;
}) {
  const dishes = limit ? DISHES.slice(0, limit) : DISHES;

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
          {dishes.map((dish, i) => (
            <Reveal as="li" key={dish.name} delay={(i % 3) * 100}>
              <article className="lift group h-full overflow-hidden rounded-3xl border border-cream/10 bg-espresso hover:border-mango/40">
                {dishPhotos[dish.name] ? (
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={dishPhotos[dish.name].src}
                      alt={dishPhotos[dish.name].alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
                  </div>
                ) : null}
                <div className="p-7">
                  {!dishPhotos[dish.name] ? (
                    <div
                      aria-hidden="true"
                      className={`mb-6 h-14 w-14 rounded-full bg-gradient-to-br ${
                        plateGradients[i % plateGradients.length]
                      } ring-1 ring-inset ring-cream/15 transition-transform duration-300 group-hover:scale-110`}
                    />
                  ) : null}
                  <h3 className="font-display text-2xl font-medium text-cream">
                    {dish.name}
                  </h3>
                  <p className="mt-3 leading-relaxed text-cream-soft">
                    {dish.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        {showAllLink ? (
          <Reveal delay={200}>
            <div className="mt-12">
              <Link
                href="/menu"
                className="inline-block rounded-full border border-cream/25 px-7 py-4 font-semibold text-cream transition-colors hover:border-mango/60 hover:bg-cream/5 hover:text-mango"
              >
                See what&apos;s cooking →
              </Link>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
