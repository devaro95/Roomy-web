"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { privacy, legalBack } from "@/lib/legal-content";
import { LegalShell } from "@/components/legal-shell";

export default function PrivacyPage() {
  const { locale } = useLocale();
  const doc = privacy[locale];
  return <LegalShell doc={doc} backLabel={legalBack[locale]} />;
}
