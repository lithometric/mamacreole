import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import CtaBand from "@/components/CtaBand";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "About",
  description: `${BUSINESS.name} is a ${BUSINESS.category.toLowerCase()} at ${BUSINESS.address.full}, serving authentic Haitian cooking for dine-in, takeout and delivery.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our kitchen"
        title="About Mama Creole"
        description="Authentic Haitian & Caribbean cooking on Stuyvesant Avenue in Union, New Jersey."
      />
      <About />
      <Reviews />
      <CtaBand />
    </>
  );
}
