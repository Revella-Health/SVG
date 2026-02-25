"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import DiamondPattern from "@/components/ui/DiamondPattern";

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.3 + i * 0.15, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #001631 0%, #002B5C 50%, #0052A5 100%)",
      }}
    >
      {/* Background diamond pattern */}
      <DiamondPattern id="hero-diamonds" />

      {/* Gold accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-1 z-[2]"
        style={{
          background: "linear-gradient(90deg, #009739, #FCD116, #009739)",
        }}
      />

      {/* Right-side hero image */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block overflow-hidden"
        style={{
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <Image
          src="/hero-community.jpeg"
          alt="Beach in St. Vincent and the Grenadines"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(0,43,92,0.45), rgba(0,82,165,0.3))",
          }}
        />
      </div>

      <Container className="relative z-[3] pt-36 pb-20">
        <div className="max-w-[560px]">
          <motion.div
            custom={0}
            variants={fadeUpItem}
            initial="hidden"
            animate="visible"
          >
            <SectionHeader label="St. Vincent & the Grenadines" labelColor="#FCD116" />
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUpItem}
            initial="hidden"
            animate="visible"
            className="font-display text-[clamp(32px,5.5vw,56px)] font-extrabold text-white leading-[1.12] mb-5"
          >
            Helping Montreal&apos;s Vincentian community{" "}
            <span className="text-gold italic">thrive together</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUpItem}
            initial="hidden"
            animate="visible"
            className="text-[17px] text-white/[0.65] leading-relaxed mb-9 font-light"
          >
            Our mission is to connect, celebrate, and support the Vincentian
            community through cultural events, advocacy, and mutual aid. Join us
            in building a stronger future while preserving the heritage we love.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUpItem}
            initial="hidden"
            animate="visible"
            className="flex gap-3 flex-wrap"
          >
            <Button href="/events" variant="primary" arrow>
              View Our Events
            </Button>
            <Button href="/membership" variant="secondary">
              Become a Member
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
