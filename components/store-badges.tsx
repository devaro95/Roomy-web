"use client";

import { useLocale } from "@/lib/locale-context";

export function StoreBadges({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const { t } = useLocale();

  const sizes = {
    sm: "h-12 px-4 text-sm gap-2",
    md: "h-14 px-5 text-base gap-3",
    lg: "h-16 px-6 text-lg gap-3",
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <StoreButton
        store="apple"
        label={t.cta.appStore}
        sub={t.cta.comingSoon}
        sizeClass={sizes[size]}
      />
      <StoreButton
        store="google"
        label={t.cta.playStore}
        sub={t.cta.comingSoon}
        sizeClass={sizes[size]}
      />
    </div>
  );
}

function StoreButton({
  store,
  label,
  sub,
  sizeClass,
}: {
  store: "apple" | "google";
  label: string;
  sub: string;
  sizeClass: string;
}) {
  return (
    <button
      type="button"
      disabled
      aria-disabled
      className={`group inline-flex items-center justify-center rounded-2xl bg-roomy-ink text-white shadow-soft hover:bg-black transition disabled:cursor-not-allowed disabled:opacity-95 ${sizeClass}`}
    >
      {store === "apple" ? <AppleIcon /> : <GoogleIcon />}
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] opacity-75">{sub}</span>
        <span className="font-semibold">{label}</span>
      </span>
    </button>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
      <path d="M16.365 1.43c0 1.14-.467 2.27-1.213 3.08-.81.89-2.13 1.58-3.18 1.48-.13-1.11.43-2.27 1.16-3.05.81-.86 2.21-1.5 3.23-1.51zM20.69 17.07c-.55 1.27-1.21 2.52-2.27 3.55-.91.88-1.81 1.76-3.16 1.78-1.32.02-1.74-.78-3.25-.78-1.51 0-1.98.76-3.22.8-1.31.05-2.31-.95-3.22-1.83C3.7 18.86 2.04 15.05 3.83 12.5c.88-1.25 2.46-2.05 4.17-2.08 1.28-.02 2.49.86 3.27.86.78 0 2.25-1.06 3.79-.91.64.03 2.45.26 3.61 1.97-3.05 1.66-2.55 5.83.02 6.73z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
      <path
        d="M3.6 2.7l9.8 9.3-9.8 9.3c-.4-.3-.6-.8-.6-1.4V4.1c0-.6.2-1.1.6-1.4z"
        fill="#FF6B35"
      />
      <path
        d="M16.9 8.6l-3.5 3.4 3.5 3.4 4.1-2.3c.6-.4 1-1 1-1.7s-.4-1.3-1-1.7l-4.1-3.1z"
        fill="#FFB627"
      />
      <path d="M13.4 12L3.6 2.7c.2-.2.5-.2.8-.2.3 0 .6.1.9.3l8.1 9.2z" fill="#fff" />
      <path d="M13.4 12l-8.1 9.2c-.3.2-.6.3-.9.3-.3 0-.6 0-.8-.2L13.4 12z" fill="#E5552A" />
    </svg>
  );
}
