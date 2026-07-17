import { BUSINESS, HOURS } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-espresso">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold text-cream">
            Mama<span className="text-mango"> Creole</span>
          </p>
          <p className="mt-3 max-w-xs text-cream-soft">{BUSINESS.category}</p>
          <address className="mt-4 not-italic leading-relaxed text-cream-soft">
            {BUSINESS.address.street}
            <br />
            {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
            {BUSINESS.address.zip}
          </address>
          <p className="mt-3">
            <a
              href={`tel:${BUSINESS.phone.tel}`}
              className="font-semibold text-cream hover:text-mango"
            >
              {BUSINESS.phone.display}
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Hours
          </h2>
          <ul className="mt-4 space-y-1.5 text-cream-soft">
            {HOURS.map((row) => (
              <li key={row.day} className="flex justify-between gap-6">
                <span>{row.day}</span>
                <span className={row.closed ? "text-ember" : ""}>
                  {row.hours}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Visit
          </h2>
          <ul className="mt-4 space-y-2 text-cream-soft">
            <li>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream"
              >
                Find us on Google Maps ↗
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-cream">
                From the kitchen
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-cream">
                Guest reviews
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-cream-soft/70 sm:px-8">
          © {new Date().getFullYear()} {BUSINESS.name} ·{" "}
          {BUSINESS.address.full} · {BUSINESS.phone.display}
        </p>
      </div>
    </footer>
  );
}
