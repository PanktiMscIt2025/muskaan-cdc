import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import MissionVision from "@/components/sections/about/MissionVision";
import TeamSection from "@/components/sections/about/TeamSection";
import ValuesSection from "@/components/sections/about/ValuesSection";
import JourneySection from "@/components/sections/about/JourneySection";
import AboutCTA from "@/components/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | Muskaan Child Development Center",
  description:
    "Learn about Muskaan Child Development Center — our mission, vision, values, and the compassionate team dedicated to helping every child grow with confidence and independence.",
  openGraph: {
    title: "About Us | Muskaan Child Development Center",
    description: "Our mission is to help every child grow into an independent, confident, and respected adult.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AboutHero />
        <MissionVision />
        <ValuesSection />
        <TeamSection />
        <JourneySection />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
