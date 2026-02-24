import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import MembershipPreview from "@/components/sections/MembershipPreview";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <MembershipPreview />
      <CTABanner
        label="Newcomers"
        title="New to Montreal? We're Here to Help."
        description="Resources, community connections, and a warm welcome for every Vincentian arriving in Quebec."
        buttonText="View Resources"
        buttonHref="/resources"
      />
    </>
  );
}
