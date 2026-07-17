import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { BUSINESS, HOURS_SCHEMA } from "@/lib/business";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const description = `${BUSINESS.name} is a ${BUSINESS.category.toLowerCase()} at ${BUSINESS.address.full}. Authentic Haitian cooking — griot, legume, soup joumou and more. Dine-in, takeout & delivery. Call ${BUSINESS.phone.display}.`;

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : undefined,
  title: {
    default: `${BUSINESS.name} — ${BUSINESS.category} in Union, NJ`,
    template: `%s · ${BUSINESS.name}`,
  },
  description,
  openGraph: {
    title: `${BUSINESS.name} — ${BUSINESS.category}`,
    description,
    type: "website",
    locale: "en_US",
    siteName: BUSINESS.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} — ${BUSINESS.category}`,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: BUSINESS.name,
  servesCuisine: ["Haitian", "Caribbean"],
  telephone: BUSINESS.phone.tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
  hasMap: BUSINESS.mapsUrl,
  openingHoursSpecification: HOURS_SCHEMA,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cream focus:px-5 focus:py-3 focus:font-semibold focus:text-espresso"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
