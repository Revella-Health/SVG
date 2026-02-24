import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Resources from "@/components/sections/Resources";

export const metadata: Metadata = {
  title: "Resources | SVG Association of Montreal",
  description:
    "Community resources for newcomers, health & social services, education, business, heritage, and legal support for Vincentians in Montreal.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        label="Resources"
        title="Community Resources"
        description="Helpful resources for newcomers, families, and long-time community members alike."
      />
      <Resources />
    </>
  );
}
