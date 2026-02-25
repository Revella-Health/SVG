"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeUp } from "@/lib/animations";

// TODO: Replace with your real Formspree form ID for newsletter signups
const FORMSPREE_URL = "https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to subscribe");

      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      className="py-16"
      style={{
        background: "linear-gradient(135deg, #001631, #002B5C)",
      }}
    >
      <Container className="text-center">
        <SectionHeader label="Stay Connected" labelColor="#FCD116" />
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-[clamp(24px,3.5vw,32px)] font-bold text-white mb-3"
        >
          Stay Informed
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[15px] text-white/[0.55] mb-7 max-w-[440px] mx-auto"
        >
          Sign up for our newsletter to stay up to date on events, news, and
          everything happening in the Vincentian community.
        </motion.p>

        {subscribed ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-gold font-semibold text-lg"
          >
            ✓ You&apos;re subscribed! Welcome aboard.
          </motion.div>
        ) : (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex gap-2.5 max-w-[480px] mx-auto flex-wrap justify-center"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 min-w-[200px] py-3.5 px-[18px] rounded-md border border-white/15 bg-white/[0.07] text-white text-sm outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all placeholder:text-white/30"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                disabled={sending}
                className="bg-gold text-deep-navy font-bold text-sm py-3.5 px-7 rounded-md border-none cursor-pointer hover:bg-gold-dark transition-colors active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
            {error && (
              <p className="text-sm text-red-400 mt-2">{error}</p>
            )}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
