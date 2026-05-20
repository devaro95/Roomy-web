import type { Locale } from "./i18n";

/**
 * Copy de la página intermedia /join/[code]. Vive aparte del diccionario
 * principal porque solo se usa en este flujo.
 */
export type JoinDoc = {
  badge: string;
  title: string;
  subtitle: string;
  openApp: string;
  openAppHint: string;
  installCta: string;
  appStore: string;
  playStore: string;
  comingSoon: string;
  manualHelp: string;
  invalidTitle: string;
  invalidSubtitle: string;
  backHome: string;
};

export const joinContent: Record<Locale, JoinDoc> = {
  es: {
    badge: "Invitación a una Room",
    title: "Únete a la sala",
    subtitle:
      "Te han invitado a dividir la cuenta con Roomy. Pulsa el botón para abrir la app y entrar a la sala con este código.",
    openApp: "Abrir en la app",
    openAppHint: "Si tienes Roomy instalada, se abrirá automáticamente.",
    installCta: "¿Aún no tienes Roomy?",
    appStore: "App Store",
    playStore: "Google Play",
    comingSoon: "Próximamente",
    manualHelp:
      "Cuando tengas la app, abre Roomy y elige \"Unirme con código\". Introduce el código que ves arriba para entrar.",
    invalidTitle: "Enlace no válido",
    invalidSubtitle:
      "Este enlace de invitación no parece correcto. Comprueba que el código de la sala esté bien escrito.",
    backHome: "← Volver al inicio",
  },
  en: {
    badge: "Room invitation",
    title: "Join the room",
    subtitle:
      "You've been invited to split the bill with Roomy. Tap the button to open the app and join the room with this code.",
    openApp: "Open in the app",
    openAppHint: "If you have Roomy installed, it'll open automatically.",
    installCta: "Don't have Roomy yet?",
    appStore: "App Store",
    playStore: "Google Play",
    comingSoon: "Coming soon",
    manualHelp:
      "Once you have the app, open Roomy and choose \"Join with code\". Enter the code shown above to join.",
    invalidTitle: "Invalid link",
    invalidSubtitle:
      "This invitation link doesn't look right. Double-check that the room code is correct.",
    backHome: "← Back to home",
  },
};

/**
 * Valida que el código cumple el formato esperado por la app: alfanumérico,
 * mayúsculas, longitud razonable. Cualquier cosa que no encaje devuelve `null`
 * para que la página muestre el estado de "enlace no válido".
 */
export function normalizeRoomCode(raw: string | undefined): string | null {
  if (!raw) return null;
  const trimmed = raw.trim().toUpperCase();
  if (!/^[A-Z0-9]{3,12}$/.test(trimmed)) return null;
  return trimmed;
}

/**
 * Construye el deeplink nativo de la app. Tiene que coincidir EXACTAMENTE
 * con el intent-filter del AndroidManifest y el CFBundleURLSchemes del
 * Info.plist (com.accountshare).
 */
export function deepLinkFor(code: string): string {
  return `com.accountshare://join/${code}`;
}
