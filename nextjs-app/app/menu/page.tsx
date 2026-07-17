import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Dishes from "@/components/Dishes";
import CtaBand from "@/components/CtaBand";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Menu",
  description: `Haitian classics at ${BUSINESS.name} in Union, NJ — griot, legume, soup joumou, pikliz and more. Call ${BUSINESS.phone.display} for the full menu and today's specials.`,
};

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="The menu"
        title="What's cooking"
        description="The Haitian classics Mama Creole is known for. Call the restaurant for the full menu, today's specials, and to place a takeout order."
      />
      <Dishes />
      <CtaBand />
    </>
  );
}
