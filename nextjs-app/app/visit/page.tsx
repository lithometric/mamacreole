import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Visit from "@/components/Visit";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Hours & Location",
  description: `Visit ${BUSINESS.name} at ${BUSINESS.address.full}. Open Tue–Sat 11 AM–10 PM, Sun 11 AM–8 PM, closed Mondays. Call ${BUSINESS.phone.display}.`,
};

export default function VisitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Come hungry"
        title="Hours & location"
        description={`Find us at ${BUSINESS.address.full} — dine-in, takeout and delivery.`}
      />
      <Visit />
    </>
  );
}
