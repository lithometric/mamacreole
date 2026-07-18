import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FullMenu from "@/components/FullMenu";
import CtaBand from "@/components/CtaBand";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Menu",
  description: `The full ${BUSINESS.name} menu in Union, NJ — appetizers, small bites, arozé bowls, dinners, sides, beverages, and desserts. Call ${BUSINESS.phone.display} for today's specials.`,
};

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="The menu"
        title="The full menu"
        description="Every plate from the Mama Creole kitchen — appetizers, small bites, arozé bowls, dinners, sides, and desserts. Call ahead for today's specials or to place a takeout order."
      />
      <FullMenu />
      <CtaBand />
    </>
  );
}
