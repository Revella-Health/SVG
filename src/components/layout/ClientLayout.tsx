"use client";

import TopBar from "@/components/layout/TopBar";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-cream min-h-screen overflow-x-hidden">
      <TopBar />
      <Navigation />
      {children}
      <Footer />
    </main>
  );
}
