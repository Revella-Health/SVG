import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Lora } from "next/font/google";
import ClientLayout from "@/components/layout/ClientLayout";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "SVG Association of Montreal | St. Vincent & the Grenadines Community",
  description:
    "Connecting, celebrating, and supporting the Vincentian community in Montreal through cultural events, advocacy, and mutual aid.",
  keywords: [
    "SVG",
    "St. Vincent",
    "Grenadines",
    "Montreal",
    "Caribbean",
    "community",
    "association",
    "Vincentian",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${lora.variable} antialiased`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
