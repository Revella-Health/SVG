"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import { STATS } from "@/lib/constants";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="font-display text-[32px] font-bold text-navy">
      {count}
      {suffix}
    </div>
  );
}

export default function StatsBar() {
  return (
    <div className="bg-white border-b border-border py-8">
      <Container className="flex justify-center gap-16 flex-wrap">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center min-w-[120px]"
          >
            <CountUp
              target={s.value}
              suffix={s.num.includes("+") ? "+" : ""}
            />
            <div className="text-xs text-muted tracking-[1.5px] uppercase mt-1">
              {s.label}
            </div>
          </motion.div>
        ))}
      </Container>
    </div>
  );
}
