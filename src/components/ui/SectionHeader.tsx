"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionHeaderProps {
  label: string;
  labelColor?: string;
}

export default function SectionHeader({ label, labelColor }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="text-xs font-bold tracking-[3px] uppercase mb-3"
      style={{ color: labelColor || "#009739" }}
    >
      {label}
    </motion.div>
  );
}
