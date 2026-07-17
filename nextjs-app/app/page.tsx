import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Dishes from "@/components/Dishes";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cream focus:px-5 focus:py-3 focus:font-semibold focus:text-espresso"
      >
        Skip to content
      </a>
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Dishes />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
