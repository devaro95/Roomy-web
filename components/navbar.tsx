"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/lib/locale-context";
import { RoomyLogo } from "./roomy-logo";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { t, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const anchor = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const links = [
    { href: anchor("how"), label: t.nav.howItWorks },
    { href: anchor("features"), label: t.nav.features },
    { href: anchor("faq"), label: t.nav.faq },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-roomy-bg/85 backdrop-blur-md border-b border-roomy-line"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-4">
        <Link href="/" aria-label="Roomy" className="shrink-0">
          <RoomyLogo />
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-roomy-ink/80 hover:text-roomy-ink transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangSwitch locale={locale} setLocale={setLocale} />
          <Link
            href="/download"
            className="hidden sm:inline-flex items-center rounded-full bg-roomy-ink px-4 py-2 text-sm font-semibold text-white hover:bg-black transition"
          >
            {t.nav.download}
          </Link>
          <button
            type="button"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-soft"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-roomy-line bg-roomy-bg/95 backdrop-blur">
          <ul className="mx-auto max-w-6xl px-6 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-medium text-roomy-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/download"
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-full bg-roomy-ink px-4 py-2 text-sm font-semibold text-white"
              >
                {t.nav.download}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function LangSwitch({
  locale,
  setLocale,
}: {
  locale: "es" | "en";
  setLocale: (l: "es" | "en") => void;
}) {
  return (
    <div className="flex items-center rounded-full bg-white p-0.5 shadow-soft ring-1 ring-roomy-line">
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          className={`px-2.5 py-1 text-xs font-bold uppercase rounded-full transition ${
            locale === l
              ? "bg-roomy-ink text-white"
              : "text-roomy-muted hover:text-roomy-ink"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
