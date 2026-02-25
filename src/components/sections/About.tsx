"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { BOARD_MEMBERS } from "@/lib/constants";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

const values = [
  { icon: "🎭", label: "Cultural Events" },
  { icon: "🤝", label: "Community Aid" },
  { icon: "📢", label: "Advocacy" },
  { icon: "🎓", label: "Youth Programs" },
];

export default function About() {
  return (
    <section id="story" className="bg-white py-20 scroll-mt-[100px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionHeader label="About Us" />
            <h2 className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal mb-5 leading-tight">
              Dedicated to Our Community
            </h2>
            <p className="text-base text-slate leading-loose mb-4">
              The St. Vincent &amp; the Grenadines Association of Montreal is a
              community organization representing and supporting Vincentians
              across the greater Montreal area. Founded by diaspora members who
              made Quebec their home, we&apos;ve grown into a vibrant hub for
              cultural preservation, advocacy, and mutual support.
            </p>
            <p id="mission" className="text-base text-slate leading-loose mb-7 scroll-mt-[100px]">
              Through events, outreach, and collaboration with local
              organizations, we work to enrich the lives of Vincentians and
              share our culture with the broader Montreal community.
            </p>
            <Button href="/about" variant="outline" arrow>
              Learn More About Us
            </Button>
          </motion.div>

          {/* Right: Image placeholder + value cards */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="rounded-xl overflow-hidden min-h-[240px] mb-5 relative">
              <Image
                src="/community-speaker.jpeg"
                alt="Community leader speaking at an SVG Association event"
                width={600}
                height={400}
                className="object-cover w-full h-[280px] rounded-xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {values.map((v) => (
                <motion.div
                  key={v.label}
                  whileHover={{ scale: 1.03 }}
                  className="bg-sand rounded-lg px-3.5 py-4 flex items-center gap-2.5"
                >
                  <span className="text-xl">{v.icon}</span>
                  <span className="text-[13px] font-semibold text-charcoal">
                    {v.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Leadership */}
        <div id="leadership" className="mt-[72px] border-t border-border pt-14 scroll-mt-[100px]">
          <SectionHeader label="Leadership" />
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-[28px] font-bold text-charcoal mb-8"
          >
            Meet the Board
          </motion.h3>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden mb-8"
          >
            <Image
              src="/leadership-gala.jpeg"
              alt="SVG Association board members at a formal gala dinner"
              width={1200}
              height={500}
              className="object-cover w-full h-[340px] rounded-xl"
            />
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5"
          >
            {BOARD_MEMBERS.map((m) => (
              <motion.div
                key={m.role}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="text-center"
              >
                <div
                  className="w-[88px] h-[88px] rounded-full mx-auto mb-3 flex items-center justify-center text-3xl text-white font-display font-bold"
                  style={{
                    background: "linear-gradient(135deg, #002B5C, #0052A5)",
                  }}
                >
                  {m.name.charAt(0)}
                </div>
                <div className="font-semibold text-sm text-charcoal">
                  {m.name}
                </div>
                <div className="text-xs text-green font-medium">{m.role}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
