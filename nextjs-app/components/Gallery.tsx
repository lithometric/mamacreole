import Image from "next/image";
import { PHOTOS } from "@/lib/photos";
import Reveal from "./Reveal";

const shots = [
  PHOTOS.friedFish,
  PHOTOS.platter,
  PHOTOS.tostones,
  PHOTOS.diningRoom,
];

/** Photo strip — stills from the business's own footage (see lib/photos.ts). */
export default function Gallery() {
  return (
    <section
      aria-labelledby="gallery-heading"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Straight from our kitchen
        </p>
        <h2
          id="gallery-heading"
          className="font-display mt-3 text-4xl font-semibold tracking-tight text-cream sm:text-5xl"
        >
          Plates worth the trip
        </h2>
      </Reveal>

      <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {shots.map((photo, i) => (
          <Reveal as="li" key={photo.src} delay={i * 100}>
            <figure className="lift group relative aspect-[3/4] overflow-hidden rounded-3xl border border-cream/10">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
