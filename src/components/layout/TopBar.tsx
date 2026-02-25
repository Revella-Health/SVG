"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { SOCIAL_LINKS, CONTACT_INFO, TOPBAR_HEIGHT } from "@/lib/constants";

const phone = CONTACT_INFO.find((c) => c.icon === "phone")?.lines[0] ?? "";
const email = CONTACT_INFO.find((c) => c.icon === "email")?.lines[0] ?? "";

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -TOPBAR_HEIGHT, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-deep-navy py-2 border-b border-white/[0.08]"
    >
      <Container className="flex justify-between items-center flex-wrap gap-2">
        <div className="flex gap-5 items-center">
          <a
            href={`tel:${phone.replace(/[^+\d]/g, "")}`}
            className="flex items-center gap-1.5 text-xs text-white/60 no-underline hover:text-white/80 transition-colors"
          >
            <Phone size={11} />
            {phone}
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-1.5 text-xs text-white/60 no-underline hover:text-white/80 transition-colors"
          >
            <Mail size={11} />
            {email}
          </a>
        </div>
        <div className="flex gap-4 items-center">
          {(["facebook", "instagram"] as const).map((key) => (
            <a
              key={key}
              href={SOCIAL_LINKS[key]}
              className="text-[11px] text-white/50 no-underline tracking-wide uppercase hover:text-white/80 transition-colors"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
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
