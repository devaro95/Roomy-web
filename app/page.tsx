import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { Showcase } from "@/components/sections/showcase";
import { Faq } from "@/components/sections/faq";
import { CtaDownload } from "@/components/sections/cta-download";
import { Footer } from "@/components/sections/footer";
import { JoinClient } from "./join/[code]/client";
import { normalizeRoomCode } from "@/lib/join-content";

/**
 * Landing principal.
 *
 * Si la URL trae `?join=CODE` o `?code=CODE`, en lugar de mostrar la landing
 * renderizamos directamente la pantalla de unirse a la sala (`JoinClient`).
 * Es lo que reciben los QR de invitación: `https://roomy-web.vercel.app/?join=AB12XY`.
 *
 * Esto evita tener que confiar en que la ruta dinámica `/join/[code]` se
 * resuelva bien en hosting; el query siempre llega al root.
 */
export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ join?: string; code?: string }>;
}) {
  const { join, code } = await searchParams;
  const raw = join ?? code;

  // Si viene un parámetro de invitación, lo procesamos como /join/[code].
  if (raw) {
    const normalized = normalizeRoomCode(raw);
    return <JoinClient code={normalized} rawCode={raw} />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Showcase />
        <Faq />
        <CtaDownload />
      </main>
      <Footer />
    </>
  );
}
