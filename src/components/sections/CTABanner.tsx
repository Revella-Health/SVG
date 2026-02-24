"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";

interface CTABannerProps {
  label?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  bg?: string;
}

export default function CTABanner({
  label,
  title,
  description,
  buttonText,
  buttonHref,
  bg,
}: CTABannerProps) {
  return (
    <section className="py-16" style={{ background: bg || "#002B5C" }}>
      <Container className="flex items-center justify-between gap-8 flex-wrap">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 min-w-[280px]"
        >
          {label && <SectionHeader label={label} labelColor="#FCD116" />}
          <h3 className="font-display text-[clamp(22px,3vw,30px)] font-bold text-white mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-[15px] text-white/60 leading-relaxed">
            {description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <Button href={buttonHref} variant="primary" arrow>
            {buttonText}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
