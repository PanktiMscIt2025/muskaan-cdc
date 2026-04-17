import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProgramsHero from "@/components/sections/programs/ProgramsHero";
import ProgramsGrid from "@/components/sections/programs/ProgramsGrid";
import ProgramsCTA from "@/components/sections/programs/ProgramsCTA";

export const metadata: Metadata = {
  title: "Our Programs | Muskaan Child Development Center",
  description:
    "Explore Muskaan CDC's full range of programs — school readiness, special education, NIOS guidance, vocational skills, ADLs, baking & craft, computer skills, and community outings.",
  openGraph: {
    title: "Our Programs | Muskaan Child Development Center",
    description: "From school readiness to real-life independence — programs designed for every child.",
  },
};

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ProgramsHero />
        <ProgramsGrid />
        <ProgramsCTA />
      </main>
      <Footer />
    </>
  );
}
