"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { deepLinkFor, joinContent } from "@/lib/join-content";
import { RoomyMark } from "@/components/roomy-logo";

/**
 * Página de invitación: muestra el código de la sala y un botón para abrir
 * la app nativa vía custom scheme `com.accountshare://join/CODE`.
 *
 * Decisión clave: el deeplink SOLO se dispara cuando el usuario pulsa el
 * botón, no automáticamente al cargar. Esto es porque Safari (y Chrome iOS)
 * tratan `window.location = "esquema-no-http"` como una descarga sospechosa
 * si no viene de una interacción directa del usuario — antes el usuario
 * veía "¿Descargar archivo .app?" en vez de abrir Roomy.
 *
 * Renderizando el deeplink como `<a href>` y dejando que el usuario lo pulse,
 * iOS lo acepta y abre la app si está instalada. Si no, no pasa nada y los
 * CTAs de las stores siguen ahí para descargarla.
 */
export function JoinClient({
  code,
  rawCode,
}: {
  code: string | null;
  rawCode: string;
}) {
  const { locale } = useLocale();
  const t = joinContent[locale];

  // Detectamos plataforma para destacar la store relevante (solo es info
  // visual: ambos botones siguen visibles).
  const [platform, setPlatform] = useState<"ios" | "android" | "other">(
    "other",
  );
  useEffect(() => {
    const ua = navigator.userAgent || "";
    if (/iPhone|iPad|iPod/i.test(ua)) setPlatform("ios");
    else if (/Android/i.test(ua)) setPlatform("android");
  }, []);

  // Código no válido: enlace mal formado o roto.
  if (!code) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 bg-roomy-bg">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex justify-center">
            <RoomyMark className="h-16 w-16" />
          </div>
          <h1 className="font-display text-3xl font-bold text-roomy-ink tracking-tight">
            {t.invalidTitle}
          </h1>
          <p className="mt-3 text-roomy-muted">{t.invalidSubtitle}</p>
          {rawCode && (
            <p className="mt-4 text-xs text-roomy-muted/70">
              <code className="bg-roomy-line/50 px-2 py-0.5 rounded">
                {rawCode}
              </code>
            </p>
          )}
          <Link
            href="/"
            className="mt-8 inline-flex items-center text-sm font-semibold text-roomy-primary hover:text-roomy-primaryDark transition"
          >
            {t.backHome}
          </Link>
        </div>
      </main>
    );
  }

  const deepLink = deepLinkFor(code);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-roomy-bg">
      <div className="relative max-w-md w-full text-center">
        {/* Decoración suave de fondo */}
        <div className="blob bg-roomy-primary/30 -z-10 top-10 -left-20 h-72 w-72" />
        <div className="blob bg-roomy-accent/30 -z-10 top-40 -right-20 h-60 w-60" />

        <div className="mx-auto mb-6 flex justify-center">
          <RoomyMark className="h-[72px] w-[72px]" />
        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1.5 text-xs font-semibold text-roomy-ink ring-1 ring-roomy-line shadow-soft">
          <span className="h-2 w-2 rounded-full bg-roomy-primary animate-pulse" />
          {t.badge}
        </div>

        <h1 className="mt-5 font-display text-4xl sm:text-5xl font-bold text-roomy-ink tracking-tight">
          {t.title}
        </h1>

        {/* Código grande, copiable */}
        <div className="mt-6 inline-block rounded-2xl bg-roomy-ink px-6 py-3 shadow-card">
          <span className="font-mono text-3xl font-bold text-white tracking-[0.3em]">
            {code}
          </span>
        </div>

        <p className="mt-5 text-roomy-muted leading-relaxed">{t.subtitle}</p>

        {/*
          Botón principal: dispara el deeplink únicamente al hacer click.
          Es un <a> con href custom scheme (no usamos onClick + JS) porque es
          el patrón que mejor toleran Safari, Chrome iOS y Firefox móvil para
          esquemas no-http: la navegación viene de una interacción del
          usuario y no se interpreta como descarga.
        */}
        <div className="mt-8">
          <a
            href={deepLink}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-roomy-primary hover:bg-roomy-primaryDark active:scale-[0.98] transition px-7 py-4 text-base font-semibold text-white shadow-card"
          >
            <OpenIcon />
            {t.openApp}
          </a>
          <p className="mt-3 text-xs text-roomy-muted">{t.openAppHint}</p>
        </div>

        <div className="mt-10 pt-8 border-t border-roomy-line">
          <p className="text-sm text-roomy-muted mb-4">{t.installCta}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <StoreButton
              store="apple"
              label={t.appStore}
              sub={t.comingSoon}
              highlighted={platform === "ios"}
            />
            <StoreButton
              store="google"
              label={t.playStore}
              sub={t.comingSoon}
              highlighted={platform === "android"}
            />
          </div>

          <p className="text-xs text-roomy-muted/80 leading-relaxed pt-6 max-w-sm mx-auto">
            {t.manualHelp}
          </p>
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center text-sm font-medium text-roomy-muted hover:text-roomy-ink transition"
        >
          {t.backHome}
        </Link>
      </div>
    </main>
  );
}

function OpenIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function StoreButton({
  store,
  label,
  sub,
  highlighted,
}: {
  store: "apple" | "google";
  label: string;
  sub: string;
  highlighted?: boolean;
}) {
  return (
    <button
      type="button"
      disabled
      aria-disabled
      className={`inline-flex items-center justify-center gap-2 rounded-2xl py-2.5 px-4 text-white shadow-soft transition disabled:cursor-not-allowed disabled:opacity-95 min-h-[56px] ${
        highlighted
          ? "bg-roomy-ink ring-2 ring-roomy-primary"
          : "bg-roomy-ink"
      }`}
    >
      {store === "apple" ? <AppleIcon /> : <GoogleIcon />}
      <span className="flex flex-col items-start text-left leading-none">
        <span className="text-[10px] font-medium opacity-70 mb-1 whitespace-nowrap">
          {sub}
        </span>
        <span className="text-[13px] font-semibold whitespace-nowrap">
          {label}
        </span>
      </span>
    </button>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current shrink-0" aria-hidden>
      <path d="M16.365 1.43c0 1.14-.467 2.27-1.213 3.08-.81.89-2.13 1.58-3.18 1.48-.13-1.11.43-2.27 1.16-3.05.81-.86 2.21-1.5 3.23-1.51zM20.69 17.07c-.55 1.27-1.21 2.52-2.27 3.55-.91.88-1.81 1.76-3.16 1.78-1.32.02-1.74-.78-3.25-.78-1.51 0-1.98.76-3.22.8-1.31.05-2.31-.95-3.22-1.83C3.7 18.86 2.04 15.05 3.83 12.5c.88-1.25 2.46-2.05 4.17-2.08 1.28-.02 2.49.86 3.27.86.78 0 2.25-1.06 3.79-.91.64.03 2.45.26 3.61 1.97-3.05 1.66-2.55 5.83.02 6.73z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden>
      <path
        d="M3.609 1.814 13.792 12 3.61 22.186a1.49 1.49 0 0 1-.61-1.205V3.018c0-.484.222-.916.61-1.204z"
        fill="#00D1B2"
      />
      <path
        d="M16.793 9 6.05 2.852 14.54 11.343 16.793 9z"
        fill="#FFC107"
      />
      <path
        d="M6.05 21.15 16.793 15l-2.253-2.343L6.05 21.15z"
        fill="#EF4444"
      />
      <path
        d="m20.16 10.81-3.018-1.74-2.604 2.93 2.604 2.93 3.07-1.77a1.4 1.4 0 0 0 .708-1.16 1.4 1.4 0 0 0-.76-1.19z"
        fill="#3B82F6"
      />
    </svg>
  );
}
