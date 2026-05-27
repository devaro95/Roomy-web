import type { Metadata } from "next";
import { JoinClient } from "./client";
import { normalizeRoomCode } from "@/lib/join-content";

/**
 * Página intermedia que se abre cuando alguien escanea el QR de invitación.
 *
 * La URL está hardcodeada en la app móvil (JoinLink.BASE_URL + /join/CODE).
 * Cuando alguien la abre desde el QR:
 *  1. Intentamos abrir el deeplink `roomy://join/CODE` desde
 *     el cliente. Si la app está instalada, iOS/Android lo capturan y
 *     abren la pantalla de unirse.
 *  2. Si no se instala / no se abre, tras un timeout corto el usuario
 *     sigue viendo esta página con CTAs a las stores y el código visible
 *     para introducir a mano cuando descargue la app.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const { code: raw } = await params;
  const code = normalizeRoomCode(raw);
  return {
    title: code ? `Unirse a la sala ${code} · Roomy` : "Invitación · Roomy",
    description:
      "Te han invitado a dividir la cuenta con Roomy. Únete a la sala desde la app.",
  };
}

export default async function JoinPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code: raw } = await params;
  const code = normalizeRoomCode(raw);
  return <JoinClient code={code} rawCode={raw} />;
}
