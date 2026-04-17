import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import AboutSection from "@/components/sections/AboutSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import ApproachSection from "@/components/sections/ApproachSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <AboutSection />
        <ProgramsSection />
        <ApproachSection />
        <TestimonialsSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
