"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { SectionHeader } from "./how-it-works";
import {
  LockKeyhole,
  UsersRound,
  Calculator,
  Zap,
  LogIn,
  Receipt,
} from "lucide-react";

const ICONS = [LockKeyhole, UsersRound, Calculator, Zap, LogIn, Receipt];

export function Features() {
  const { t } = useLocale();

  return (
    <section id="features" className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow={t.features.eyebrow}
          title={t.features.title}
          subtitle={t.features.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.features.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                className="group rounded-3xl bg-roomy-bg p-6 ring-1 ring-roomy-line hover:shadow-card hover:-translate-y-0.5 transition"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-roomy-ink text-white group-hover:bg-roomy-primary transition">
                  <Icon size={20} strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-lg font-bold text-roomy-ink mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-roomy-muted leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
