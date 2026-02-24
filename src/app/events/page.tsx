import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Events from "@/components/sections/Events";

export const metadata: Metadata = {
  title: "Events | SVG Association of Montreal",
  description:
    "Stay up to date with upcoming events, cultural celebrations, and community gatherings hosted by the SVG Association of Montreal.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        label="What's Happening"
        title="Upcoming Events"
        description="Cultural celebrations, community gatherings, and more — find out what's happening next."
      />
      <Events />
    </>
  );
}
