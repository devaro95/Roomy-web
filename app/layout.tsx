import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roomy — Divide la cuenta sin discusiones",
  description:
    "Roomy es la app para repartir la cuenta del bar o restaurante entre amigos. Cada uno añade lo que pide, la app calcula lo que debe pagar cada uno.",
  metadataBase: new URL("https://roomy.app"),
  openGraph: {
    title: "Roomy — Divide la cuenta sin discusiones",
    description:
      "Reparte la cuenta del bar o restaurante en segundos. Sin sumas mentales, sin peleas.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roomy — Divide la cuenta sin discusiones",
    description:
      "Reparte la cuenta del bar o restaurante en segundos. Sin sumas mentales, sin peleas.",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F9FA",
  width: "device-width",
  initialScale: 1,
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Roomy",
  operatingSystem: "Android",
  applicationCategory: "UtilitiesApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  description:
    "Divide la cuenta del bar o restaurante entre amigos en segundos. Cada uno añade lo que pide y Roomy calcula automáticamente cuánto debe pagar cada persona.",
  url: "https://roomy.app",
  downloadUrl:
    "https://play.google.com/store/apps/details?id=com.devaro.roomy",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${display.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
