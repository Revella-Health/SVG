"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import DiamondPattern from "@/components/ui/DiamondPattern";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section
      className="relative pt-36 pb-16 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #001631 0%, #002B5C 50%, #0052A5 100%)",
      }}
    >
      {/* Diamond pattern */}
      <DiamondPattern id="page-hero-diamonds" />

      {/* Gold accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-1 z-[2]"
        style={{
          background: "linear-gradient(90deg, #009739, #FCD116, #009739)",
        }}
      />

      <Container className="relative z-[3]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-[640px]"
        >
          <div className="text-[11px] font-semibold tracking-[3px] uppercase text-gold mb-4">
            {label}
          </div>
          <h1 className="font-display text-[clamp(32px,5vw,48px)] font-bold text-white leading-[1.15] mb-4">
            {title}
          </h1>
          <p className="text-[17px] text-white/[0.6] leading-relaxed font-light">
            {description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
