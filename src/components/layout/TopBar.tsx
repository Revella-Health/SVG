"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -33, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-deep-navy py-2 border-b border-white/[0.08]"
    >
      <Container className="flex justify-between items-center flex-wrap gap-2">
        <div className="flex gap-5 items-center">
          <a
            href="tel:5140000000"
            className="flex items-center gap-1.5 text-xs text-white/60 no-underline hover:text-white/80 transition-colors"
          >
            <Phone size={11} />
            (514) 000-0000
          </a>
          <a
            href="mailto:info@svgmontreal.ca"
            className="flex items-center gap-1.5 text-xs text-white/60 no-underline hover:text-white/80 transition-colors"
          >
            <Mail size={11} />
            info@svgmontreal.ca
          </a>
        </div>
        <div className="flex gap-4 items-center">
          {["Facebook", "Instagram"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-[11px] text-white/50 no-underline tracking-wide uppercase hover:text-white/80 transition-colors"
            >
              {s}
            </a>
          ))}
          <Link
            href="/contact"
            className="text-[11px] text-gold no-underline font-semibold tracking-wide uppercase hover:text-gold-dark transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </motion.div>
  );
}
