"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { deepLinkFor, joinContent } from "@/lib/join-content";
import { RoomyMark } from "@/components/roomy-logo";

/**
 * Componente cliente de la página de invitación. Aquí está toda la lógica
 * de intentar el deeplink y, si no funciona, mostrar fallback con las stores.
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
  const [opening, setOpening] = useState(true);

  // Intento automático de abrir la app. Si la página sigue visible después
  // de un par de segundos, asumimos que la app no está instalada y mostramos
  // los CTAs de descarga.
  useEffect(() => {
    if (!code) {
      setOpening(false);
      return;
    }
    // Disparamos la apertura del deeplink al cargar. iOS y Android lo
    // capturan si la app está instalada; si no, no pasa nada y se mantiene
    // esta página.
    const start = Date.now();
    const url = deepLinkFor(code);

    // Usamos location.replace para evitar dejar una entrada en el history
    // que rompa el botón "atrás" del navegador.
    try {
      window.location.replace(url);
    } catch {
      /* algunos browsers tiran si no hay handler; ignoramos */
    }

    // Si tras 2.5s seguimos aquí (la app no ha capturado el deeplink),
    // dejamos de mostrar el spinner y revelamos los CTAs.
    const timeout = window.setTimeout(() => {
      // Si el documento sigue visible (no nos hemos ido a la app), mostramos
      // el fallback. Si nos hemos ido, el setTimeout no llegará a ejecutarse
      // o el estado no se actualizará (la página ya no es visible).
      if (Date.now() - start >= 2000 && document.visibilityState === "visible") {
        setOpening(false);
      }
    }, 2500);

    return () => window.clearTimeout(timeout);
  }, [code]);

  const retry = () => {
    if (!code) return;
    setOpening(true);
    window.location.assign(deepLinkFor(code));
    window.setTimeout(() => setOpening(false), 2500);
  };

  // Código no válido: enlace mal formado o roto.
  if (!code) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 bg-roomy-bg">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6">
            <RoomyMark size={64} />
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

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-roomy-bg">
      <div className="max-w-md w-full text-center">
        {/* Decoración suave de fondo */}
        <div className="blob bg-roomy-primary/30 -z-10 top-10 -left-20 h-72 w-72" />
        <div className="blob bg-roomy-accent/30 -z-10 top-40 -right-20 h-60 w-60" />

        <div className="mx-auto mb-6">
          <RoomyMark size={72} />
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

        {opening ? (
          <div className="mt-8 flex items-center justify-center gap-3 text-roomy-ink/80">
            <Spinner />
            <span className="text-sm font-medium">{t.opening}</span>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            <button
              type="button"
              onClick={retry}
              className="inline-flex items-center justify-center rounded-2xl bg-roomy-ink px-5 py-3 text-sm font-semibold text-white hover:bg-black transition"
            >
              {t.retry}
            </button>

            <div>
              <p className="text-sm text-roomy-muted mb-3">{t.installCta}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <StoreButton store="apple" label={t.appStore} sub={t.comingSoon} />
                <StoreButton store="google" label={t.playStore} sub={t.comingSoon} />
              </div>
            </div>

            <p className="text-xs text-roomy-muted/80 leading-relaxed pt-4 max-w-sm mx-auto">
              {t.manualHelp}
            </p>
          </div>
        )}

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

function Spinner() {
  return (
    <svg
      className="animate-spin h-5 w-5 text-roomy-primary"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        className="opacity-25"
      />
      <path
        d="M4 12a8 8 0 0 1 8-8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StoreButton({
  store,
  label,
  sub,
}: {
  store: "apple" | "google";
  label: string;
  sub: string;
}) {
  return (
    <button
      type="button"
      disabled
      aria-disabled
      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-roomy-ink py-2.5 px-4 text-white shadow-soft transition disabled:cursor-not-allowed disabled:opacity-95 min-h-[56px]"
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
