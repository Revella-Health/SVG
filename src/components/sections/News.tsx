"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { NEWS_ARTICLES } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function News() {
  return (
    <section id="news" className="bg-white py-20">
      <Container>
        <div className="flex justify-between items-end flex-wrap gap-4 mb-10">
          <div>
            <SectionHeader label="Latest Updates" />
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal leading-tight"
            >
              News &amp; Blog
            </motion.h2>
          </div>
          <Link
            href="/news"
            className="text-sm text-navy font-semibold no-underline flex items-center gap-1 hover:gap-2 transition-all"
          >
            Visit Newsroom <ArrowRight size={14} />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {NEWS_ARTICLES.map((a) => (
            <motion.div
              key={a.title}
              variants={fadeUp}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 40px rgba(0,43,92,0.1)",
              }}
              className="rounded-[10px] border border-border overflow-hidden bg-white shadow-[0_2px_12px_rgba(0,43,92,0.06)]"
            >
              {/* Image placeholder */}
              <div className="h-40 bg-gradient-to-br from-navy/[0.06] to-green/[0.04] flex items-center justify-center border-b border-border">
                <div className="opacity-25 text-4xl">📰</div>
              </div>
              <div className="p-5 pb-6">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[11px] font-bold text-green tracking-wide">
                    {a.tag}
                  </span>
                  <span className="text-[11px] text-muted">&bull;</span>
                  <span className="text-[11px] text-muted">{a.date}</span>
                </div>
                <h4 className="font-display text-[17px] font-semibold text-charcoal mb-2 leading-snug">
                  {a.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {a.excerpt}
                </p>
                {/* TODO: Link to individual article pages once they exist */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
