"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "dark" | "green";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
  arrow?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gold text-deep-navy font-bold hover:bg-gold-dark",
  secondary:
    "bg-transparent text-white border-2 border-white/30 font-semibold hover:border-white/60",
  outline:
    "bg-transparent text-navy border-2 border-navy font-semibold hover:bg-navy hover:text-white",
  dark:
    "bg-navy text-white font-semibold hover:bg-deep-navy",
  green:
    "bg-green text-white font-semibold hover:brightness-110",
};

export default function Button({
  children,
  variant = "primary",
  href = "#",
  className = "",
  arrow = false,
  type,
  onClick,
}: ButtonProps) {
  const baseClass = `inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm tracking-wide transition-all duration-250 cursor-pointer no-underline ${variantStyles[variant]} ${className}`;

  if (type) {
    return (
      <motion.button
        type={type}
        whileTap={{ scale: 0.97 }}
        className={baseClass}
        onClick={onClick}
      >
        {children}
        {arrow && <ArrowRight size={16} />}
      </motion.button>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={baseClass}>
        {children}
        {arrow && <ArrowRight size={16} />}
      </Link>
    );
  }

  return (
    <motion.a
      href={href}
      whileTap={{ scale: 0.97 }}
      className={baseClass}
    >
      {children}
      {arrow && <ArrowRight size={16} />}
    </motion.a>
  );
}
