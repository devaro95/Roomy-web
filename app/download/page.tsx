import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Descarga Roomy — Divide la cuenta sin dramas",
  description:
    "Descarga Roomy gratis en Android. Próximamente disponible en iOS.",
};

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 bg-roomy-bg overflow-hidden">
        {/* Glow de fondo */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(255,107,53,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Encabezado */}
        <div className="text-center mb-14 max-w-lg">
          <span
            className="inline-block mb-4 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
            style={{ background: "linear-gradient(90deg,#FF6B35,#FFB627)" }}
          >
            Descarga gratis
          </span>
          <h1
            className="font-display font-extrabold text-4xl sm:text-5xl text-roomy-ink leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Disponible en tu móvil
          </h1>
          <p className="text-roomy-muted text-lg">
            Sin suscripciones. Sin anuncios. Solo divide la cuenta y listo.
          </p>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-none sm:justify-center">
          {/* Android */}
          <a
            href="https://play.google.com/store/apps/details?id=com.devaro.roomy"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl px-6 py-4 text-white transition-transform hover:scale-105 active:scale-100"
            style={{ background: "linear-gradient(135deg,#FF6B35,#FFB627)" }}
          >
            <AndroidIcon />
            <div className="text-left">
              <p className="text-xs font-semibold opacity-80 uppercase tracking-wide">
                Disponible en
              </p>
              <p className="text-lg font-bold leading-tight">Google Play</p>
            </div>
          </a>

          {/* iOS — próximamente */}
          <div className="relative flex items-center gap-4 rounded-2xl px-6 py-4 bg-roomy-ink/5 border-2 border-dashed border-roomy-line cursor-not-allowed select-none">
            <AppleIcon className="opacity-30" />
            <div className="text-left">
              <p className="text-xs font-semibold text-roomy-muted uppercase tracking-wide">
                Próximamente
              </p>
              <p className="text-lg font-bold text-roomy-ink/40 leading-tight">
                App Store
              </p>
            </div>
            <span className="absolute -top-2.5 -right-2.5 rounded-full bg-roomy-ink px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">
              Soon
            </span>
          </div>
        </div>

        {/* Nota */}
        <p className="mt-10 text-sm text-roomy-muted text-center">
          Roomy es gratuito y siempre lo será durante su lanzamiento.
        </p>
      </main>
      <Footer />
    </>
  );
}

function AndroidIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
      <path
        d="M17.523 15.3414C17.523 15.3414 16.4291 14.8878 15.9978 14.7154C15.5892 14.5521 15.1599 14.4575 14.7253 14.4575C14.1452 14.4575 13.7432 14.6741 13.3879 14.9747C12.9006 15.3834 12.4973 15.7 11.7991 15.7C11.145 15.7 10.6302 15.3701 10.1841 14.9747C9.82238 14.6608 9.40758 14.4378 8.8201 14.4378C8.37386 14.4378 7.93601 14.5306 7.52068 14.6967L5.9965 15.3414V8.13316C5.9965 7.06 6.87367 6.18 7.94683 6.18H16.0532C17.1263 6.18 18.0035 7.06 18.0035 8.13316V15.3414H17.523ZM7.5 4.5L6.5 2.5M16.5 4.5L17.5 2.5M9 18.5V20.5C9 21.0523 9.44772 21.5 10 21.5H14C14.5523 21.5 15 21.0523 15 20.5V18.5M9 18.5H15M9 18.5C7.89543 18.5 7 17.6046 7 16.5V15.5M15 18.5C16.1046 18.5 17 17.6046 17 16.5V15.5M10 10H10.01M14 10H14.01"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function AppleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      className={className}
      fill="#0F172A"
    >
      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.77997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
    </svg>
  );
}
