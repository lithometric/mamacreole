import { ImageResponse } from "next/og";
import { BUSINESS } from "@/lib/business";

export const alt = `${BUSINESS.name} — ${BUSINESS.category} in Union, NJ`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Self-generated Open Graph card — no third-party imagery.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#150d09",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(232,80,30,0.45), transparent 55%), radial-gradient(circle at 10% 90%, rgba(233,180,76,0.3), transparent 55%)",
          color: "#f7ecdb",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#e9b44c",
          }}
        >
          {BUSINESS.category}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 110,
            fontWeight: 700,
            lineHeight: 1.05,
          }}
        >
          {BUSINESS.name}
        </div>
        <div style={{ marginTop: 36, fontSize: 34, color: "#d9c8b2" }}>
          {`${BUSINESS.address.full} · ${BUSINESS.phone.display}`}
        </div>
      </div>
    ),
    size,
  );
}
