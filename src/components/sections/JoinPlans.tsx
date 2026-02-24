"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { MEMBERSHIP_PLANS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function JoinPlans() {
  return (
    <section id="why-join" className="bg-white py-20 scroll-mt-[100px]">
      <Container>
        <div className="text-center mb-12">
          <SectionHeader label="Become a Member" />
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal mb-3"
          >
            Membership Plans
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base text-muted max-w-[500px] mx-auto"
          >
            Join the Vincentian community in Montreal. Your membership helps fund
            events, programs, and community support.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="plans"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 scroll-mt-[100px]"
        >
          {MEMBERSHIP_PLANS.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              whileHover={{
                y: -6,
                boxShadow: p.featured
                  ? "0 16px 48px rgba(252,209,22,0.2)"
                  : "0 12px 40px rgba(0,43,92,0.1)",
              }}
              className="rounded-xl overflow-hidden relative bg-white"
              style={{
                border: p.featured
                  ? "2px solid #FCD116"
                  : "1px solid #E8E6E1",
                boxShadow: p.featured
                  ? "0 8px 32px rgba(252,209,22,0.15)"
                  : "0 2px 12px rgba(0,43,92,0.06)",
              }}
            >
              {p.featured && (
                <div className="bg-gold py-1.5 text-center text-[11px] font-bold tracking-[2px] uppercase text-deep-navy">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <div
                  className="text-[13px] font-semibold tracking-wider uppercase mb-2"
                  style={{ color: p.color }}
                >
                  {p.name}
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display text-[44px] font-bold text-charcoal">
                    {p.price}
                  </span>
                  <span className="text-sm text-muted">/{p.period}</span>
                </div>
                <div className="border-t border-border pt-5">
                  {p.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2.5 py-2 text-sm text-slate"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="8"
                          fill={`${p.color}15`}
                        />
                        <path
                          d="M5 8l2 2 4-4"
                          stroke={p.color}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
                <button
                  className="w-full mt-6 py-3.5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 active:scale-[0.97]"
                  style={{
                    background: p.featured ? "#FCD116" : "transparent",
                    color: p.featured ? "#001631" : p.color,
                    border: p.featured ? "none" : `2px solid ${p.color}`,
                  }}
                >
                  Join as {p.name}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
