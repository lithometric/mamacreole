import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HomeIntro from "@/components/HomeIntro";
import Dishes from "@/components/Dishes";
import Reviews from "@/components/Reviews";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <HomeIntro />
      <Dishes limit={3} showAllLink />
      <Reviews />
      <CtaBand />
    </>
  );
}
