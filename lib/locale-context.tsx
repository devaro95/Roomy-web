"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { defaultLocale, dict, type Dict, type Locale } from "./i18n";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const LocaleContext = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // Initial detection: localStorage > navigator > default
  useEffect(() => {
    const saved = typeof window !== "undefined"
      ? (window.localStorage.getItem("roomy-locale") as Locale | null)
      : null;
    if (saved === "es" || saved === "en") {
      setLocaleState(saved);
      return;
    }
    if (typeof navigator !== "undefined") {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("en")) setLocaleState("en");
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("roomy-locale", l);
      document.documentElement.lang = l;
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const value = useMemo<Ctx>(
    () => ({ locale, setLocale, t: dict[locale] }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
