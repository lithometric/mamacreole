import { Hibiscus } from "./art";

/** Shared hero header for interior pages, with staggered entrance. */
export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section
      aria-label={title}
      className="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-44"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-1/2 left-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(232,80,30,0.3), transparent 70%)",
          }}
        />
        <Hibiscus className="spin-slow absolute -right-28 -top-16 h-[340px] w-[340px] text-gold/20" />
      </div>

      <div className="stagger relative mx-auto w-full max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-soft sm:text-xl">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
