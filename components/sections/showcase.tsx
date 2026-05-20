"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { SectionHeader } from "./how-it-works";

/**
 * La card del Showcase imita la pantalla de "Resumen de la cuenta"
 * (SummaryScreen) tras el reskin de la app: cada participante en su propia
 * card con avatar circular de color determinista, la tarjeta del usuario
 * actual con borde naranja, y el Total mesa en una card oscura al final.
 */

const PEOPLE = [
  { name: "Tú", amount: "11,50 €", colorKey: "me", highlight: true },
  { name: "Marta", amount: "9,30 €", colorKey: "Marta" },
  { name: "Javi", amount: "7,80 €", colorKey: "Javi" },
  { name: "Ana", amount: "6,20 €", colorKey: "Ana" },
];

// Misma paleta + hash que la app y que phone-mockup.tsx
const AVATAR_PALETTE = [
  "#FF6B35", "#FFB627", "#16A34A", "#3B82F6", "#8B5CF6",
  "#EC4899", "#14B8A6", "#EF4444", "#6366F1", "#F97316",
];
function colorForKey(key: string): string {
  if (!key) return AVATAR_PALETTE[0];
  let hash = 0;
  for (let i = 0; i < key.length; i++) hash = hash * 31 + key.charCodeAt(i);
  return AVATAR_PALETTE[Math.abs(hash) % AVATAR_PALETTE.length];
}
function initialOf(name: string): string {
  const t = name.trim();
  return t.length > 0 ? t[0].toUpperCase() : "?";
}

function Avatar({
  name,
  colorKey,
  size,
}: {
  name: string;
  colorKey: string;
  size: number;
}) {
  return (
    <div
      className="rounded-full flex items-center justify-center text-white font-bold shrink-0"
      style={{
        width: size,
        height: size,
        backgroundColor: colorForKey(colorKey),
        fontSize: size * 0.45,
      }}
    >
      {initialOf(name)}
    </div>
  );
}

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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto max-w-md rounded-3xl bg-white shadow-card ring-1 ring-roomy-line p-6"
            >
              {/* Cabecera */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="font-display text-3xl font-bold text-roomy-ink leading-none tracking-tight">
                    Resumen
                  </div>
                  <div className="font-display text-3xl font-bold text-roomy-primary leading-none tracking-tight">
                    de la cuenta
                  </div>
                </div>
                <div className="rounded-full bg-roomy-success/15 px-2.5 py-1">
                  <span className="text-[10px] font-bold tracking-wider text-roomy-success">
                    CERRADA
                  </span>
                </div>
              </div>

              {/* Card destacada del usuario actual ("Tú") con borde naranja */}
              {PEOPLE.filter((p) => p.highlight).map((p) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl bg-white ring-[1.5px] ring-roomy-primary px-4 py-4 mb-3"
                >
                  <div className="flex items-center gap-3">
                    <Avatar name={p.name} colorKey={p.colorKey} size={40} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-roomy-ink">
                          {p.name}
                        </span>
                        <span className="rounded-full bg-roomy-primary px-2 py-0.5 text-[9px] font-bold text-white tracking-wider">
                          TÚ
                        </span>
                      </div>
                      <div className="text-[10px] text-roomy-muted">tu parte</div>
                    </div>
                    <span className="font-display text-xl font-bold text-roomy-primary tracking-tight">
                      {p.amount}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Resto de participantes — cards compactas */}
              <div className="text-[10px] font-bold tracking-wider text-roomy-muted mb-2 pl-1">
                RESTO DE PARTICIPANTES
              </div>
              <ul className="space-y-2">
                {PEOPLE.filter((p) => !p.highlight).map((p, i) => (
                  <motion.li
                    key={p.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center justify-between rounded-2xl bg-white ring-1 ring-roomy-line px-3 py-2.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <Avatar name={p.name} colorKey={p.colorKey} size={32} />
                      <span className="text-sm font-bold text-roomy-ink">
                        {p.name}
                      </span>
                    </div>
                    <span className="font-display text-base font-bold text-roomy-primary tracking-tight">
                      {p.amount}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Total mesa: card oscura, mismo lenguaje que en SummaryScreen */}
              <div className="mt-4 rounded-2xl bg-roomy-ink px-4 py-3.5 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wide text-white/70">
                  Total mesa
                </span>
                <span className="font-display text-xl font-bold text-white tracking-tight">
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
