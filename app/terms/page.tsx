"use client";

import { useLocale } from "@/lib/locale-context";
import { terms, legalBack } from "@/lib/legal-content";
import { LegalShell } from "@/components/legal-shell";

export default function TermsPage() {
  const { locale } = useLocale();
  const doc = terms[locale];
  return <LegalShell doc={doc} backLabel={legalBack[locale]} />;
}
