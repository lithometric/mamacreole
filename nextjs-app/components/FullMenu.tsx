import { MENU, type MenuSection } from "@/lib/menu";
import { BUSINESS } from "@/lib/business";
import Reveal from "./Reveal";

function Section({ section }: { section: MenuSection }) {
  return (
    <section
      aria-label={section.title}
      className="rounded-3xl border border-cream/10 bg-espresso p-7 sm:p-8"
    >
      <h2 className="font-display text-3xl font-medium tracking-tight text-cream">
        {section.title}
      </h2>
      {section.subtitle ? (
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {section.subtitle}
        </p>
      ) : null}
      {section.note ? (
        <p className="mt-3 text-sm italic text-cream-soft">{section.note}</p>
      ) : null}

      <ul className="mt-6 space-y-3.5">
        {section.items.map((item, i) => (
          <li
            key={`${item.name}-${i}`}
            className="flex items-baseline gap-3 leading-snug"
          >
            <span className="text-cream">
              {item.code ? (
                <span className="mr-2 text-xs font-semibold text-gold/80">
                  {item.code}
                </span>
              ) : null}
              {item.name}
              {item.note ? (
                <span className="text-sm text-cream-soft"> · {item.note}</span>
              ) : null}
            </span>
            <span
              aria-hidden="true"
              className="min-w-4 flex-1 border-b border-dotted border-cream/25"
            />
            <span className="whitespace-nowrap font-semibold text-gold">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function FullMenu() {
  return (
    <section
      aria-label="Full menu"
      className="border-y border-cream/10 bg-cocoa/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="columns-1 gap-5 lg:columns-2">
          {MENU.map((section, i) => (
            <Reveal
              key={section.title}
              delay={(i % 2) * 100}
              className="mb-5 break-inside-avoid"
            >
              <Section section={section} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-12 max-w-2xl text-cream-soft">
            Prices and dishes can change with the season — call{" "}
            <a
              href={`tel:${BUSINESS.phone.tel}`}
              className="font-semibold text-mango hover:underline"
            >
              {BUSINESS.phone.display}
            </a>{" "}
            for today&apos;s specials. Also available on UberEats, DoorDash, and
            Grubhub.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
