"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { CONTACT_INFO } from "@/lib/constants";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";

const iconMap = {
  location: MapPin,
  phone: Phone,
  email: Mail,
} as const;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const inputClass =
    "w-full py-3 px-3.5 rounded-md border-[1.5px] border-border text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/10";

  return (
    <section id="contact" className="bg-sand py-20">
      <Container>
        <SectionHeader label="Get in Touch" />
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-[clamp(26px,4vw,38px)] font-bold text-charcoal mb-10 leading-tight"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl p-9 border border-border shadow-[0_2px_12px_rgba(0,43,92,0.06)]"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-center py-12"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display text-[22px] text-charcoal mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    {[
                      {
                        key: "name" as const,
                        label: "Full Name",
                        type: "text",
                      },
                      {
                        key: "email" as const,
                        label: "Email Address",
                        type: "email",
                      },
                      {
                        key: "subject" as const,
                        label: "Subject",
                        type: "text",
                      },
                    ].map((f) => (
                      <div key={f.key}>
                        <label className="text-xs font-semibold text-charcoal tracking-wide block mb-1.5">
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          required
                          value={form[f.key]}
                          onChange={(e) =>
                            setForm({ ...form, [f.key]: e.target.value })
                          }
                          className={inputClass}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="text-xs font-semibold text-charcoal tracking-wide block mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className={`${inputClass} resize-y`}
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-navy text-white font-semibold text-sm py-3.5 px-7 rounded-md border-none cursor-pointer mt-1 hover:bg-deep-navy transition-colors active:scale-[0.97]"
                    >
                      Send Message
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {CONTACT_INFO.map((c) => {
              const Icon = iconMap[c.icon];
              return (
                <div
                  key={c.title}
                  className="bg-white rounded-[10px] p-5 flex gap-4 items-start border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-navy/[0.07] flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-navy" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-charcoal mb-1">
                      {c.title}
                    </div>
                    {c.lines.map((l) => (
                      <div
                        key={l}
                        className="text-sm text-muted leading-relaxed"
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Map placeholder */}
            <div className="flex-1 min-h-[180px] rounded-[10px] bg-gradient-to-br from-navy/[0.05] to-green/[0.03] border border-dashed border-border flex items-center justify-center">
              <div className="text-center opacity-40">
                <div className="text-4xl">🗺️</div>
                <div className="text-xs text-muted mt-2">Google Map Embed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
