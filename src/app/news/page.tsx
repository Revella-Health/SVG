import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import News from "@/components/sections/News";
import NewsletterBanner from "@/components/sections/NewsletterBanner";

export const metadata: Metadata = {
  title: "News & Blog | SVG Association of Montreal",
  description:
    "The latest news, announcements, and stories from the SVG Association of Montreal and the Vincentian community.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        label="Latest Updates"
        title="News & Blog"
        description="Stay informed with the latest news, announcements, and stories from our community."
      />
      <News />
      <NewsletterBanner />
    </>
  );
}
