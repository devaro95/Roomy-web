"use client";

import { useLocale } from "@/lib/locale-context";
import { RoomyLogo } from "../roomy-logo";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-roomy-line bg-roomy-bg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2">
            <RoomyLogo />
            <p className="mt-3 max-w-sm text-sm text-roomy-muted">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-roomy-muted">
              {t.footer.product}
            </div>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#how" className="text-sm text-roomy-ink hover:text-roomy-primary transition">
                  {t.nav.howItWorks}
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-roomy-ink hover:text-roomy-primary transition">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-roomy-ink hover:text-roomy-primary transition">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-roomy-muted">
              {t.footer.legal}
            </div>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="/privacy" className="text-sm text-roomy-ink hover:text-roomy-primary transition">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-roomy-ink hover:text-roomy-primary transition">
                  {t.footer.terms}
                </a>
              </li>
              <li>
                <a href="mailto:hola@roomy.app" className="text-sm text-roomy-ink hover:text-roomy-primary transition">
                  {t.footer.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-roomy-line pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-roomy-muted">
            © {year} Roomy. {t.footer.rights}
          </p>
          <p className="text-xs text-roomy-muted">
            Made with 🍻 in Madrid
          </p>
        </div>
      </div>
    </footer>
  );
}
