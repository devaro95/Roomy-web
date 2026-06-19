"use client";

import { useLocale } from "@/lib/locale-context";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.devaro.roomy";

export function StoreBadges({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const { t } = useLocale();

  const sizes = {
    sm: "min-h-[56px] px-4 gap-2.5",
    md: "min-h-[60px] px-5 gap-3",
    lg: "min-h-[68px] px-6 gap-3.5",
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <StoreButton
        store="apple"
        label={t.cta.appStore}
        sub={t.cta.comingSoon}
        sizeClass={sizes[size]}
        disabled
      />
      <StoreButton
        store="google"
        label="Disponible en Android"
        sub="Descargar en"
        sizeClass={sizes[size]}
        href={PLAY_STORE_URL}
        disabled={false}
      />
    </div>
  );
}

function StoreButton({
  store,
  label,
  sub,
  sizeClass,
  href,
  disabled = true,
}: {
  store: "apple" | "google";
  label: string;
  sub: string;
  sizeClass: string;
  href?: string;
  disabled?: boolean;
}) {
  const inner = (
    <>
      {store === "apple" ? <AppleIcon /> : <GoogleIcon />}
      <span className="flex flex-col items-start text-left leading-none">
        <span className="text-[10px] font-medium opacity-70 mb-1 whitespace-nowrap">
          {sub}
        </span>
        <span className="text-[14px] font-semibold leading-tight whitespace-nowrap">
          {label}
        </span>
      </span>
    </>
  );

  const baseClass = `group inline-flex items-center justify-start rounded-2xl bg-roomy-ink py-2.5 text-white shadow-soft transition ${sizeClass}`;

  if (href && !disabled) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} hover:bg-black`}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled
      aria-disabled
      className={`${baseClass} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {inner}
    </button>
  );
}

function AppleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 shrink-0 fill-current"
      aria-hidden
    >
      <path d="M16.365 1.43c0 1.14-.467 2.27-1.213 3.08-.81.89-2.13 1.58-3.18 1.48-.13-1.11.43-2.27 1.16-3.05.81-.86 2.21-1.5 3.23-1.51zM20.69 17.07c-.55 1.27-1.21 2.52-2.27 3.55-.91.88-1.81 1.76-3.16 1.78-1.32.02-1.74-.78-3.25-.78-1.51 0-1.98.76-3.22.8-1.31.05-2.31-.95-3.22-1.83C3.7 18.86 2.04 15.05 3.83 12.5c.88-1.25 2.46-2.05 4.17-2.08 1.28-.02 2.49.86 3.27.86.78 0 2.25-1.06 3.79-.91.64.03 2.45.26 3.61 1.97-3.05 1.66-2.55 5.83.02 6.73z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden>
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
