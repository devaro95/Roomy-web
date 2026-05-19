"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { DoorOpen, Plus, Wallet } from "lucide-react";

const ICONS = [DoorOpen, Plus, Wallet];

export function HowItWorks() {
  const { t } = useLocale();

  return (
    <section id="how" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow={t.how.eyebrow}
          title={t.how.title}
          subtitle={t.how.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.how.steps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-3xl bg-white p-6 shadow-soft ring-1 ring-roomy-line"
              >
                <div className="absolute -top-3 -left-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-roomy-ink text-white text-sm font-bold shadow-soft">
                  {i + 1}
                </div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-roomy-primary/10 text-roomy-primary">
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-xl font-bold text-roomy-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-roomy-muted leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex items-center rounded-full bg-roomy-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-roomy-primary">
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-roomy-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-roomy-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
