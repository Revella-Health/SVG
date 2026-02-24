"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { FOOTER_LINKS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="bg-deep-navy pt-16 pb-8">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.jpg"
                alt="SVGAM Logo"
                width={36}
                height={36}
                className="object-contain"
              />
              <div className="font-display font-bold text-[15px] text-white">
                SVG Association
              </div>
            </div>
            <p className="text-[13px] text-white/40 leading-relaxed mb-5">
              Connecting and supporting the Vincentian community in Montreal
              through culture, advocacy, and mutual aid.
            </p>
            <div className="flex gap-2.5">
              {["Facebook", "Instagram", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[11px] text-white/35 no-underline py-1.5 px-2.5 rounded border border-white/10 hover:text-white/70 hover:border-white/25 transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <motion.div key={col.title} variants={fadeUp}>
              <div className="text-xs font-bold tracking-[2px] uppercase text-gold mb-4">
                {col.title}
              </div>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-[13px] text-white/45 no-underline py-[5px] hover:text-white/80 transition-colors group"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              ))}
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <div className="text-xs font-bold tracking-[2px] uppercase text-gold mb-4">
              Contact
            </div>
            <div className="text-[13px] text-white/45 space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={12} /> (514) 000-0000
              </div>
              <div className="flex items-center gap-2">
                <Mail size={12} /> info@svgmontreal.ca
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={12} /> Montreal, QC
              </div>
              <div className="flex items-center gap-2">
                <Clock size={12} /> Sat 10am - 2pm
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex justify-between items-center flex-wrap gap-3">
          <div className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} St. Vincent &amp; the Grenadines
            Association of Montreal. All Rights Reserved.
          </div>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-white/25 no-underline hover:text-white/50 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
