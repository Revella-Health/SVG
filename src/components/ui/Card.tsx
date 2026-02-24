"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface CardProps {
  children: ReactNode;
  className?: string;
  custom?: number;
}

export default function Card({ children, className = "", custom = 0 }: CardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={custom}
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,43,92,0.1)" }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-[10px] border border-border shadow-[0_2px_12px_rgba(0,43,92,0.06)] transition-all cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
}
