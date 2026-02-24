"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { NAV_ITEMS } from "@/lib/constants";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed left-0 right-0 z-[1000] backdrop-blur-2xl transition-all duration-350"
      style={{
        top: scrolled ? 0 : 33,
        background: scrolled ? "rgba(255,253,247,0.97)" : "rgba(0,22,49,0.85)",
        borderBottom: scrolled
          ? "1px solid #E8E6E1"
          : "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Container className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image
            src="/logo.jpg"
            alt="SVGAM Logo"
            width={44}
            height={44}
            className="object-contain"
            priority
          />
          <div>
            <div
              className="font-display font-bold text-[15px] leading-tight transition-colors duration-300"
              style={{ color: scrolled ? "#002B5C" : "#FFFFFF" }}
            >
              SVG Association
            </div>
            <div
              className="text-[10px] tracking-[2px] uppercase transition-colors duration-300"
              style={{ color: scrolled ? "#009739" : "#FCD116" }}
            >
              Montreal
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 h-full">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative h-full flex items-center"
              onMouseEnter={() =>
                "sub" in item && item.sub && setOpenDropdown(item.id)
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3.5 py-2 rounded text-[13px] font-medium no-underline transition-all duration-200 hover:opacity-80"
                style={{
                  color: isActive(item.href)
                    ? scrolled
                      ? "#002B5C"
                      : "#FCD116"
                    : scrolled
                    ? "#1C1C28"
                    : "rgba(255,255,255,0.85)",
                }}
              >
                {item.label}
                {"sub" in item && item.sub && (
                  <ChevronDown
                    size={12}
                    className="transition-transform duration-200"
                    style={{
                      color: scrolled ? "#8A8A9A" : "rgba(255,255,255,0.5)",
                      transform:
                        openDropdown === item.id
                          ? "rotate(180deg)"
                          : "rotate(0)",
                    }}
                  />
                )}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {"sub" in item &&
                  item.sub &&
                  openDropdown === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-white rounded-lg shadow-[0_12px_40px_rgba(0,0,0,0.12)] py-2 min-w-[200px] border border-border"
                    >
                      {item.sub.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-5 py-2.5 text-[13px] text-charcoal no-underline hover:bg-sand transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
              </AnimatePresence>
            </div>
          ))}
          <Button
            href="/membership"
            variant="primary"
            className="ml-3 !px-5 !py-2.5 !text-[13px]"
          >
            Join Us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex lg:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 z-10"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-[22px] h-0.5 rounded-full"
              style={{
                background: scrolled || mobileOpen ? "#1C1C28" : "#FFFFFF",
              }}
              animate={
                mobileOpen
                  ? i === 0
                    ? { rotate: 45, y: 7 }
                    : i === 1
                    ? { scaleX: 0 }
                    : { rotate: -45, y: -7 }
                  : { rotate: 0, y: 0, scaleX: 1 }
              }
              transition={{ duration: 0.3 }}
            />
          ))}
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white border-t border-border overflow-hidden lg:hidden"
          >
            <div className="px-6 py-4 pb-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-[15px] no-underline border-b border-border"
                  style={{
                    color: isActive(item.href) ? "#002B5C" : "#1C1C28",
                    fontWeight: isActive(item.href) ? 600 : 400,
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4">
                <Button href="/membership" variant="primary" className="w-full justify-center">
                  Join Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
