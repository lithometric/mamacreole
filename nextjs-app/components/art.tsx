/**
 * Original decorative SVG art, generated for this site.
 * All imagery is self-made vector work — no third-party photos are used.
 */

/** Stylized hibiscus bloom used as an ambient hero ornament. */
export function Hibiscus({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        {[0, 72, 144, 216, 288].map((deg) => (
          <path
            key={deg}
            transform={`rotate(${deg} 100 100)`}
            d="M100 100 C 78 72, 82 34, 100 18 C 118 34, 122 72, 100 100 Z"
          />
        ))}
        <circle cx="100" cy="100" r="7" fill="currentColor" stroke="none" />
        {[30, 102, 174, 246, 318].map((deg) => (
          <path
            key={deg}
            transform={`rotate(${deg} 100 100)`}
            d="M100 100 C 92 82, 94 60, 100 50"
            strokeDasharray="2 5"
          />
        ))}
      </g>
    </svg>
  );
}

/** Radiating sun mark used on section headers and cards. */
export function SunMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="24" cy="24" r="8" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i * Math.PI) / 6;
          const x1 = 24 + Math.cos(a) * 13;
          const y1 = 24 + Math.sin(a) * 13;
          const x2 = 24 + Math.cos(a) * 19;
          const y2 = 24 + Math.sin(a) * 19;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
    </svg>
  );
}

/** Abstract wayfinding illustration for the location card (not a real map). */
export function RouteArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 220"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" opacity="0.18" strokeWidth="1">
        {[40, 90, 140, 190].map((y) => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} />
        ))}
        {[60, 130, 200, 270].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="220" />
        ))}
      </g>
      <path
        d="M20 190 C 90 190, 100 120, 160 110 S 260 80, 272 52"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="1 10"
        opacity="0.85"
      />
      <circle cx="20" cy="190" r="6" fill="currentColor" opacity="0.5" />
      <g transform="translate(272 34)">
        <path
          d="M0 34 C -12 20, -14 12, -14 4 a14 14 0 1 1 28 0 c0 8 -2 16 -14 30 Z"
          fill="currentColor"
        />
        <circle cx="0" cy="3" r="5.5" fill="#150d09" />
      </g>
    </svg>
  );
}
