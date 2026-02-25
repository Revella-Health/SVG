"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "dark" | "green";
type Size = "sm" | "default";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  arrow?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
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

const sizeStyles: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[13px]",
  default: "px-7 py-3.5 text-sm",
};

export default function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  className = "",
  arrow = false,
  type,
  onClick,
  disabled,
}: ButtonProps) {
  const baseClass = `inline-flex items-center gap-2 rounded-md tracking-wide transition-all duration-200 cursor-pointer no-underline ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (!href || type) {
    return (
      <motion.button
        type={type ?? "button"}
        whileTap={{ scale: 0.97 }}
        className={baseClass}
        onClick={onClick}
        disabled={disabled}
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
