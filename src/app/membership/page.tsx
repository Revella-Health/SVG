import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import JoinPlans from "@/components/sections/JoinPlans";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Membership | SVG Association of Montreal",
  description:
    "Join the SVG Association of Montreal. Explore membership plans for individuals, families, and seniors, and become part of our Vincentian community.",
};

export default function MembershipPage() {
  return (
    <>
      <PageHero
        label="Membership"
        title="Join Our Growing Community"
        description="Your membership helps fund events, programs, and community support for Vincentians in Montreal."
      />
      <JoinPlans />
      <CTABanner
        title="Find Your Community. Get Involved."
        description="Whether volunteering, attending events, or joining as a member, there's a place for you."
        buttonText="Contact Us"
        buttonHref="/contact"
        bg="linear-gradient(135deg, #009739, #00B84D)"
      />
    </>
  );
}
