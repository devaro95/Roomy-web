"use client";

import { motion } from "framer-motion";

/**
 * Mockup de móvil que reproduce la pantalla "Room" (ItemListScreen) tal y
 * como queda tras el reskin de la app:
 *  - Header con avatar circular de la sala (la inicial), código y chip de
 *    estado "Abierta".
 *  - Lista de items en cards individuales con borde fino, contador +/- a la
 *    derecha y desglose por persona usando mini-avatares de colores con la
 *    inicial en blanco (mismo helper que UserAvatar de Compose).
 *  - MyRunningTotalCard oscuro abajo, con el total del usuario actual en
 *    naranja.
 *
 * Todo SVG/JSX inline para que no dependa de capturas reales y se vea nítido
 * a cualquier resolución.
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

          <div className="px-3 pt-9 pb-3">
            {/* Header de la sala — mismo patrón que RoomHeader en Compose */}
            <div className="bg-white rounded-2xl px-3 py-3 mb-3">
              <div className="flex items-center gap-2.5">
                <Avatar name="Cervecería La Plaza" colorKey="B4K2" size={36} />
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-bold text-roomy-ink leading-tight truncate">
                    Cervecería La Plaza
                  </div>
                  <div className="text-[9px] font-semibold tracking-wider text-roomy-muted">
                    #B4K2
                  </div>
                </div>
                {/* Pill QR */}
                <div className="rounded-full bg-roomy-primary px-2 py-0.5">
                  <span className="text-[9px] font-bold tracking-wider text-white">
                    QR
                  </span>
                </div>
                {/* Status chip Abierta */}
                <div className="rounded-full bg-roomy-success/15 px-2 py-0.5">
                  <span className="text-[8px] font-bold tracking-wider text-roomy-success">
                    ABIERTA
                  </span>
                </div>
              </div>
              <div className="mt-1.5 text-[9px] text-roomy-muted">
                4 participantes
              </div>
            </div>

            {/* Lista de items en cards */}
            <div className="space-y-1.5 mb-2">
              <ItemCard
                name="Caña"
                price="2,50 €"
                myQty={1}
                people={[{ name: "Tú", colorKey: "me", isMe: true }]}
              />
              <ItemCard
                name="Nachos con queso"
                price="9,00 €"
                shared
                quantity={1}
                people={[
                  { name: "Tú", colorKey: "me", isMe: true },
                  { name: "Marta", colorKey: "Marta" },
                  { name: "Javi", colorKey: "Javi" },
                ]}
              />
              <ItemCard
                name="Vermut"
                price="3,20 €"
                myQty={1}
                people={[{ name: "Tú", colorKey: "me", isMe: true }]}
              />
            </div>

            {/* MyRunningTotalCard — mismo diseño que en ItemListScreen */}
            <div className="rounded-2xl bg-roomy-ink px-3 py-2.5 mb-2 flex items-center justify-between">
              <div>
                <div className="text-[8px] font-semibold tracking-wider text-white/70">
                  TU CUENTA
                </div>
                <div className="text-[10px] font-medium text-white">Tú</div>
              </div>
              <div className="text-[20px] font-bold text-roomy-primary leading-none tracking-tight">
                8,70 €
              </div>
            </div>

            {/* ActionBar: FAB + botón Cerrar cuenta */}
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-roomy-primary flex items-center justify-center shrink-0">
                <span className="text-white text-lg font-bold leading-none">
                  +
                </span>
              </div>
              <div className="flex-1 h-9 rounded-2xl bg-roomy-primary flex items-center justify-center">
                <span className="text-white text-[11px] font-semibold">
                  Cerrar cuenta
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Avatar helper — misma lógica que ui.theme.Avatar en la app:
// paleta fija + hash determinista del colorKey + inicial del nombre.
// ─────────────────────────────────────────────────────────────────────────────

const AVATAR_PALETTE = [
  "#FF6B35", // naranja brand
  "#FFB627", // amarillo accent
  "#16A34A", // verde
  "#3B82F6", // azul
  "#8B5CF6", // morado
  "#EC4899", // rosa
  "#14B8A6", // teal
  "#EF4444", // rojo
  "#6366F1", // índigo
  "#F97316", // naranja oscuro
];

function colorForKey(key: string): string {
  if (!key) return AVATAR_PALETTE[0];
  let hash = 0;
  for (let i = 0; i < key.length; i++) hash = hash * 31 + key.charCodeAt(i);
  return AVATAR_PALETTE[Math.abs(hash) % AVATAR_PALETTE.length];
}

function initialOf(name: string): string {
  const trimmed = name.trim();
  return trimmed.length > 0 ? trimmed[0].toUpperCase() : "?";
}

function Avatar({
  name,
  colorKey,
  size = 22,
}: {
  name: string;
  colorKey: string;
  size?: number;
}) {
  const bg = colorForKey(colorKey);
  return (
    <div
      className="rounded-full flex items-center justify-center text-white font-bold shrink-0"
      style={{
        width: size,
        height: size,
        backgroundColor: bg,
        fontSize: size * 0.45,
      }}
    >
      {initialOf(name)}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ItemCard — mismo lenguaje visual que ItemCard en la app.
// ─────────────────────────────────────────────────────────────────────────────

function ItemCard({
  name,
  price,
  shared,
  quantity = 1,
  myQty,
  people,
}: {
  name: string;
  price: string;
  shared?: boolean;
  quantity?: number;
  myQty?: number;
  people: { name: string; colorKey: string; isMe?: boolean }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className="rounded-2xl bg-white ring-1 ring-roomy-line px-3 py-2"
    >
      <div className="flex items-center gap-2">
        <div className="flex-1 min-w-0">
          <div className="text-[11px] font-bold text-roomy-ink leading-tight truncate">
            {name}
          </div>
          {shared && (
            <div className="text-[9px] font-medium text-roomy-muted leading-tight">
              Compartido entre {people.length}
            </div>
          )}
        </div>
        {/* Contador +/- */}
        <div className="flex items-center gap-1">
          <CounterBtn label="−" />
          <span className="text-[11px] font-bold text-roomy-ink min-w-[14px] text-center">
            {shared ? `×${quantity}` : myQty}
          </span>
          <CounterBtn label="+" />
        </div>
      </div>
      <div className="mt-1 text-[13px] font-bold text-roomy-primary tracking-tight leading-none">
        {price}
      </div>
      {/* Desglose */}
      <div className="mt-1.5 pt-1.5 border-t border-roomy-line space-y-0.5">
        {people.map((p, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <Avatar name={p.name} colorKey={p.colorKey} size={14} />
            <span
              className={`text-[9px] ${
                p.isMe
                  ? "text-roomy-ink font-bold"
                  : "text-roomy-muted font-medium"
              }`}
            >
              {p.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function CounterBtn({ label }: { label: string }) {
  return (
    <div className="h-5 w-5 rounded-full bg-roomy-bg ring-1 ring-roomy-line flex items-center justify-center">
      <span className="text-[11px] font-semibold text-roomy-ink leading-none">
        {label}
      </span>
    </div>
  );
}
