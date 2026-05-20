"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import type { LegalDoc } from "@/lib/legal-content";

/**
 * Layout reutilizable para las páginas legales (privacy + terms). Le pasas el
 * documento (título, intro, secciones) y se encarga de pintarlo con el mismo
 * lenguaje visual del resto de la web.
 */
export function LegalShell({
  doc,
  backLabel,
}: {
  doc: LegalDoc;
  backLabel: string;
}) {
  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Hero compacto para la página legal */}
        <section className="relative overflow-hidden border-b border-roomy-line">
          <div className="blob bg-roomy-primary/30 -top-20 -left-20 h-72 w-72" />
          <div className="blob bg-roomy-accent/30 top-10 right-0 h-60 w-60" />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 pt-12 pb-10">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-roomy-muted hover:text-roomy-ink transition"
            >
              {backLabel}
            </Link>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl font-bold tracking-tight text-roomy-ink">
              {doc.title}
            </h1>
            <p className="mt-3 text-sm text-roomy-muted">{doc.lastUpdated}</p>
            <p className="mt-5 text-base sm:text-lg text-roomy-ink/80 leading-relaxed">
              {doc.intro}
            </p>
          </div>
        </section>

        {/* Cuerpo */}
        <section className="py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="space-y-10">
              {doc.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-roomy-ink tracking-tight">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-roomy-ink/80 leading-relaxed text-[15px]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 border-t border-roomy-line pt-8">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-semibold text-roomy-primary hover:text-roomy-primaryDark transition"
              >
                {backLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
