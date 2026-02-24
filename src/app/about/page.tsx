import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About Us | SVG Association of Montreal",
  description:
    "Learn about the St. Vincent & the Grenadines Association of Montreal — our story, leadership, and mission to support the Vincentian community.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Dedicated to Our Community"
        description="Learn about the people, mission, and story behind the SVG Association of Montreal."
      />
      <About />
    </>
  );
}
