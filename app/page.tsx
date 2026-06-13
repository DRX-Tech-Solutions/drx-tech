import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Credibility from "@/components/sections/Credibility";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Differentials from "@/components/sections/Differentials";
import Pricing from "@/components/sections/Pricing";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Technologies from "@/components/sections/Technologies";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Credibility />
        <Services />
        <Technologies />
        <Process />
        <Portfolio />
        <Differentials />
        <Pricing />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
