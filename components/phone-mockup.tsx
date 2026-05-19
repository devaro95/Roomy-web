"use client";

import { motion } from "framer-motion";

/**
 * Mockup de móvil con una pantalla "Room" de Roomy:
 * - cabecera con código de sala
 * - lista de items (algunos compartidos)
 * - total acumulado para el usuario actual
 *
 * Está dibujado a mano en JSX/Tailwind dentro de un marco tipo iPhone
 * para evitar dependencias de imágenes reales.
 */
export function PhoneMockup({
  variant = "hero",
}: {
  variant?: "hero" | "compact";
}) {
  const isHero = variant === "hero";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative mx-auto ${isHero ? "w-[280px] sm:w-[320px]" : "w-[240px]"}`}
    >
      {/* Sombra ambiental */}
      <div
        aria-hidden
        className="absolute -inset-x-4 -bottom-6 h-12 rounded-full bg-roomy-ink/10 blur-2xl"
      />

      {/* Marco del móvil */}
      <div className="relative rounded-[44px] bg-roomy-ink p-2 shadow-card">
        <div className="relative overflow-hidden rounded-[36px] bg-roomy-bg">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-roomy-ink" />

          <div className="px-4 pt-9 pb-5">
            {/* Header de Room */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-roomy-muted">
                  Room
                </div>
                <div className="font-display text-lg font-bold text-roomy-ink leading-tight">
                  Cervecería La Plaza
                </div>
              </div>
              <div className="rounded-full bg-roomy-primary/10 px-2.5 py-1">
                <span className="text-[10px] font-bold text-roomy-primary">
                  #B4K2
                </span>
              </div>
            </div>

            {/* Avatares de participantes */}
            <div className="flex items-center gap-2 mb-4">
              <Avatars />
              <span className="text-[10px] text-roomy-muted">
                4 en la mesa
              </span>
            </div>

            {/* Lista de items */}
            <div className="space-y-2 mb-4">
              <ItemRow name="Caña" by="Tú" price="2,50 €" />
              <ItemRow
                name="Nachos con queso"
                by="Compartido · 3 personas"
                price="9,00 €"
                shared
              />
              <ItemRow name="Cocacola" by="Tú" price="2,80 €" />
              <ItemRow name="Croquetas" by="Marta" price="6,50 €" muted />
              <ItemRow
                name="Vermut"
                by="Tú"
                price="3,20 €"
                highlight
              />
            </div>

            {/* Total del usuario */}
            <div className="rounded-2xl bg-roomy-ink p-3 text-white">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider opacity-70">
                    Tu cuenta
                  </div>
                  <div className="font-display text-2xl font-bold leading-tight">
                    11,50 €
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-roomy-primary px-3 py-1.5 text-[11px] font-semibold"
                >
                  Cerrar cuenta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Avatars() {
  const people = [
    { bg: "bg-roomy-primary", initial: "T" },
    { bg: "bg-roomy-accent", initial: "M" },
    { bg: "bg-emerald-500", initial: "J" },
    { bg: "bg-blue-500", initial: "A" },
  ];
  return (
    <div className="flex -space-x-1.5">
      {people.map((p, i) => (
        <div
          key={i}
          className={`h-6 w-6 rounded-full ${p.bg} ring-2 ring-roomy-bg flex items-center justify-center text-[10px] font-bold text-white`}
        >
          {p.initial}
        </div>
      ))}
    </div>
  );
}

function ItemRow({
  name,
  by,
  price,
  shared,
  muted,
  highlight,
}: {
  name: string;
  by: string;
  price: string;
  shared?: boolean;
  muted?: boolean;
  highlight?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className={`flex items-center justify-between rounded-xl px-3 py-2 ${
        highlight
          ? "bg-roomy-primary/10 ring-1 ring-roomy-primary/30"
          : "bg-white shadow-soft"
      }`}
    >
      <div className="flex items-center gap-2">
        {shared ? (
          <div className="h-7 w-7 rounded-lg bg-roomy-accent/20 flex items-center justify-center">
            <span className="text-[10px]">🍽️</span>
          </div>
        ) : (
          <div className="h-7 w-7 rounded-lg bg-roomy-primary/10 flex items-center justify-center">
            <span className="text-[10px]">🥤</span>
          </div>
        )}
        <div>
          <div
            className={`text-xs font-semibold ${
              muted ? "text-roomy-muted" : "text-roomy-ink"
            }`}
          >
            {name}
          </div>
          <div className="text-[10px] text-roomy-muted">{by}</div>
        </div>
      </div>
      <div
        className={`text-xs font-bold ${
          muted ? "text-roomy-muted" : "text-roomy-ink"
        }`}
      >
        {price}
      </div>
    </motion.div>
  );
}
