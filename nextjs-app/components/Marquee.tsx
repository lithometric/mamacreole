import { DISHES } from "@/lib/business";

/** Decorative scrolling strip of dish names between hero and about. */
export default function Marquee() {
  const items = DISHES.map((d) => d.name);
  // Duplicate the sequence so the -50% translate loops seamlessly.
  const track = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-cream/10 bg-cocoa py-5"
    >
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {track.map((name, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-2xl font-medium text-cream-soft/70"
          >
            {name}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
