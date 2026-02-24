import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact | SVG Association of Montreal",
  description:
    "Get in touch with the SVG Association of Montreal. Send us a message, find our office, or reach us by phone or email.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Contact Us"
        description="Have a question or want to get involved? We'd love to hear from you."
      />
      <Contact />
    </>
  );
}
