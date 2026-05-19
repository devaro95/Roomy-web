"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { SectionHeader } from "./how-it-works";

const PEOPLE = [
  { name: "Tú", amount: "11,50 €", color: "bg-roomy-primary", initial: "T", highlight: true },
  { name: "Marta", amount: "9,30 €", color: "bg-roomy-accent", initial: "M" },
  { name: "Javi", amount: "7,80 €", color: "bg-emerald-500", initial: "J" },
  { name: "Ana", amount: "6,20 €", color: "bg-blue-500", initial: "A" },
];

export function Showcase() {
  const { t } = useLocale();

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeader
              eyebrow={t.showcase.eyebrow}
              title={t.showcase.title}
              subtitle={t.showcase.subtitle}
            />
          </div>

          <div className="order-1 lg:order-2 relative">
            {/* Tarjeta de "Resumen final" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto max-w-md rounded-3xl bg-white shadow-card ring-1 ring-roomy-line p-6"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-roomy-muted">
                  Cervecería La Plaza · #B4K2
                </div>
                <div className="rounded-full bg-roomy-success/15 px-2 py-0.5 text-[10px] font-bold text-roomy-success">
                  CERRADA
                </div>
              </div>
              <div className="font-display text-2xl font-bold text-roomy-ink mb-5">
                Resumen final
              </div>

              <ul className="space-y-2">
                {PEOPLE.map((p, i) => (
                  <motion.li
                    key={p.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={`flex items-center justify-between rounded-2xl px-3 py-2.5 ${
                      p.highlight
                        ? "bg-roomy-primary/10 ring-1 ring-roomy-primary/30"
                        : "bg-roomy-bg"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`h-8 w-8 rounded-full ${p.color} flex items-center justify-center text-xs font-bold text-white`}
                      >
                        {p.initial}
                      </div>
                      <span
                        className={`text-sm font-semibold ${
                          p.highlight ? "text-roomy-ink" : "text-roomy-ink/90"
                        }`}
                      >
                        {p.name}
                      </span>
                    </div>
                    <span className="font-display text-lg font-bold text-roomy-ink">
                      {p.amount}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-5 flex items-center justify-between border-t border-roomy-line pt-4">
                <span className="text-sm text-roomy-muted">Total mesa</span>
                <span className="font-display text-xl font-bold text-roomy-ink">
                  34,80 €
                </span>
              </div>
            </motion.div>

            {/* Decoración */}
            <div className="blob bg-roomy-primary/30 -z-10 -top-10 -right-10 h-48 w-48" />
            <div className="blob bg-roomy-accent/30 -z-10 -bottom-10 -left-10 h-48 w-48" />
          </div>
        </div>
      </div>
    </section>
  );
}
