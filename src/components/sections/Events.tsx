"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { EVENTS, TAG_COLORS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Events() {
  return (
    <section id="events" className="bg-sand py-20">
      <Container>
        <SectionHeader label="What's Happening" />
        <div className="flex justify-between items-end flex-wrap gap-4 mb-10">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal leading-tight"
          >
            Upcoming Events
          </motion.h2>
          <a
            href="/events"
            className="text-sm text-navy font-semibold no-underline flex items-center gap-1 hover:gap-2 transition-all"
          >
            View Full Calendar <ArrowRight size={14} />
          </a>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4"
        >
          {EVENTS.map((e, i) => {
            const tc = TAG_COLORS[e.tag];
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{
                  y: -2,
                  boxShadow: "0 12px 40px rgba(0,43,92,0.1)",
                }}
                className="bg-white rounded-[10px] p-6 sm:p-7 grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_auto] gap-5 sm:gap-6 items-center border border-border shadow-[0_2px_12px_rgba(0,43,92,0.06)] cursor-pointer"
              >
                {/* Date Block */}
                <div className="w-[68px] h-[68px] rounded-[10px] bg-navy flex flex-col items-center justify-center flex-shrink-0">
                  <div className="text-[10px] font-bold tracking-[2px] text-gold uppercase">
                    {e.month}
                  </div>
                  <div className="font-display text-[26px] font-bold text-white leading-none">
                    {e.day}
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h4 className="font-display text-lg font-semibold text-charcoal mb-1">
                    {e.title}
                  </h4>
                  <p className="text-[13px] text-muted mb-1 flex items-center gap-1">
                    <MapPin size={12} /> {e.location}
                  </p>
                  <p className="text-sm text-slate leading-relaxed hidden sm:block">
                    {e.desc}
                  </p>
                </div>

                {/* Tag */}
                <span
                  className="text-[11px] font-bold py-1.5 px-3.5 rounded-full tracking-wide self-start hidden sm:inline-block"
                  style={{ background: tc.bg, color: tc.text }}
                >
                  {e.tag}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
