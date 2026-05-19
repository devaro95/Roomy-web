"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { PhoneMockup } from "@/components/phone-mockup";
import { StoreBadges } from "@/components/store-badges";
import { Check } from "lucide-react";

export function Hero() {
  const { t } = useLocale();

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Blobs decorativos */}
      <div className="blob bg-roomy-primary/40 -top-20 -left-20 h-80 w-80" />
      <div className="blob bg-roomy-accent/40 top-32 right-0 h-72 w-72" />

      <div className="absolute inset-0 bg-grain opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-12 sm:pt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Columna izquierda — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1.5 text-xs font-semibold text-roomy-ink ring-1 ring-roomy-line shadow-soft"
            >
              <span className="h-2 w-2 rounded-full bg-roomy-primary animate-pulse" />
              {t.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight text-roomy-ink"
            >
              {t.hero.title1}{" "}
              <span className="bg-gradient-to-r from-roomy-primary to-roomy-accent bg-clip-text text-transparent">
                {t.hero.title2}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 max-w-xl text-lg text-roomy-muted leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8"
            >
              <StoreBadges />
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              {t.hero.proofPoints.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2 text-sm text-roomy-ink/80"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-roomy-success/15 text-roomy-success">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Columna derecha — mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
