"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function MembershipPreview() {
  return (
    <section className="bg-sand py-20">
      <Container>
        <SectionHeader label="Membership" />
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal mb-12 leading-tight"
        >
          Join Our Growing Community
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Individual */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,43,92,0.1)" }}
            className="bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,43,92,0.06)] border border-border"
          >
            <div
              className="h-[180px] flex items-center justify-center relative"
              style={{ background: "linear-gradient(135deg, #002B5C, #0052A5)" }}
            >
              <div className="text-center">
                <div className="text-5xl mb-2 opacity-50">👤</div>
                <div className="text-[11px] text-white/50 tracking-[2px] uppercase">
                  Photo Placeholder
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-[22px] text-charcoal mb-2">
                For Individuals &amp; Families
              </h3>
              <p className="text-[15px] text-slate leading-relaxed mb-5">
                Join as an individual or family member and get access to all
                community events, newsletters, voting rights, and a network of
                fellow Vincentians in Montreal.
              </p>
              <Button href="/membership" variant="dark" arrow>
                View Benefits
              </Button>
            </div>
          </motion.div>

          {/* Community Partners */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,43,92,0.1)" }}
            className="bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,43,92,0.06)] border border-border"
          >
            <div
              className="h-[180px] flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #009739, #00B84D)" }}
            >
              <div className="text-center">
                <div className="text-5xl mb-2 opacity-50">🤝</div>
                <div className="text-[11px] text-white/50 tracking-[2px] uppercase">
                  Photo Placeholder
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-[22px] text-charcoal mb-2">
                For Businesses &amp; Partners
              </h3>
              <p className="text-[15px] text-slate leading-relaxed mb-5">
                Support the Vincentian community while building lasting business
                connections and targeted visibility among our members and their
                networks.
              </p>
              <Button href="/membership" variant="green" arrow>
                View Benefits
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
