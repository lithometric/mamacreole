import { BUSINESS, HOURS } from "@/lib/business";
import Reveal from "./Reveal";
import { RouteArt } from "./art";

/** Hours + location grid, rendered under the Visit page header. */
export default function Visit() {
  return (
    <section
      id="visit"
      aria-label="Hours and location details"
      className="border-t border-cream/10 bg-cocoa/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Hours */}
          <Reveal>
            <div className="lift h-full rounded-3xl border border-cream/10 bg-espresso p-8 sm:p-10">
              <h2 className="font-display text-2xl font-medium text-cream">
                Opening hours
              </h2>
              <dl className="mt-6 divide-y divide-cream/10">
                {HOURS.map((row) => (
                  <div
                    key={row.day}
                    className="flex items-baseline justify-between gap-4 py-3.5"
                  >
                    <dt className="font-medium text-cream">{row.day}</dt>
                    <dd
                      className={
                        row.closed
                          ? "font-semibold uppercase tracking-wide text-ember"
                          : "text-cream-soft"
                      }
                    >
                      {row.hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* Location */}
          <Reveal delay={150}>
            <div className="lift flex h-full flex-col rounded-3xl border border-cream/10 bg-espresso p-8 sm:p-10">
              <h2 className="font-display text-2xl font-medium text-cream">
                Find us
              </h2>
              <address className="mt-6 not-italic">
                <p className="font-display text-3xl font-medium leading-tight text-cream">
                  {BUSINESS.address.street}
                </p>
                <p className="mt-1 text-xl text-cream-soft">
                  {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
                  {BUSINESS.address.zip}
                </p>
                <p className="mt-4 text-cream-soft">
                  <a
                    href={`tel:${BUSINESS.phone.tel}`}
                    className="font-semibold text-cream underline decoration-mango underline-offset-4 hover:text-mango"
                  >
                    {BUSINESS.phone.display}
                  </a>
                </p>
              </address>

              <RouteArt className="my-8 w-full max-w-sm text-gold" />

              <div className="mt-auto flex flex-wrap gap-4">
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-mango px-6 py-3.5 font-semibold text-espresso transition-transform hover:scale-105"
                >
                  Get Directions ↗
                </a>
                <a
                  href={`tel:${BUSINESS.phone.tel}`}
                  className="rounded-full border border-cream/25 px-6 py-3.5 font-semibold text-cream transition-colors hover:border-cream/60 hover:bg-cream/5"
                >
                  Call to order
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
