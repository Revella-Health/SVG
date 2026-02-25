"use client";

import { motion } from "framer-motion";
import { Home, HeartPulse, GraduationCap, Briefcase, Palmtree, Scale } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { RESOURCES } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const iconMap = {
  newcomer: Home,
  health: HeartPulse,
  education: GraduationCap,
  business: Briefcase,
  heritage: Palmtree,
  legal: Scale,
} as const;

export default function Resources() {
  return (
    <section id="resources" className="bg-sand py-20">
      <Container>
        <SectionHeader label="Resources" />
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal mb-10 leading-tight"
        >
          Community Resources
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {RESOURCES.map((r) => {
            const Icon = iconMap[r.icon];
            return (
              <motion.div
                key={r.title}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 40px rgba(0,43,92,0.1)",
                }}
                className="bg-white rounded-[10px] p-7 border border-border shadow-[0_2px_12px_rgba(0,43,92,0.06)] flex gap-4 items-start"
              >
                <div className="w-11 h-11 rounded-lg bg-navy/[0.07] flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-navy" />
                </div>
                <div>
                  <h4 className="font-display text-[17px] font-semibold text-charcoal mb-1.5">
                    {r.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
