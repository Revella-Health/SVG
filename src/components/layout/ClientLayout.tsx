"use client";

import { MotionConfig } from "framer-motion";
import TopBar from "@/components/layout/TopBar";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-cream min-h-screen overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:bg-gold focus:text-deep-navy focus:px-4 focus:py-2 focus:rounded focus:font-semibold focus:text-sm"
        >
          Skip to main content
        </a>
        <header>
          <TopBar />
          <Navigation />
        </header>
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
