"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { StoreBadges } from "../store-badges";

export function CtaDownload() {
  const { t } = useLocale();

  return (
    <section id="download" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-4xl bg-roomy-ink p-10 sm:p-14 text-center"
        >
          {/* Decoración */}
          <div className="blob bg-roomy-primary/50 -top-16 -left-16 h-72 w-72" />
          <div className="blob bg-roomy-accent/50 -bottom-16 -right-16 h-72 w-72" />

          <div className="relative">
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
              {t.cta.title}
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
            <div className="mt-8 flex justify-center">
              <StoreBadges size="lg" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
