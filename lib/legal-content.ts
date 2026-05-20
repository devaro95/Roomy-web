import type { Locale } from "./i18n";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type LegalDoc = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

/**
 * Contenido de las páginas legales (privacidad y términos), en ES y EN.
 *
 * NOTA LEGAL: estos textos son un borrador razonable para una landing de
 * lanzamiento. Antes de publicarse en stores conviene que un abogado los
 * revise para tu jurisdicción y completar datos concretos (razón social,
 * dirección, autoridad de control, etc.).
 */
export const privacy: Record<Locale, LegalDoc> = {
  es: {
    title: "Política de Privacidad",
    lastUpdated: "Última actualización: 20 de mayo de 2026",
    intro:
      "En Roomy nos tomamos en serio tu privacidad. Esta página describe qué datos recogemos, para qué los usamos y qué derechos tienes sobre ellos. Si algo no te queda claro, escríbenos a hola@roomy.app.",
    sections: [
      {
        heading: "1. Quiénes somos",
        paragraphs: [
          "Roomy es una aplicación móvil que permite dividir la cuenta de un bar o restaurante entre las personas de una mesa. El responsable del tratamiento de tus datos es el equipo de Roomy.",
          "Para cualquier consulta relacionada con privacidad puedes contactarnos en hola@roomy.app.",
        ],
      },
      {
        heading: "2. Qué datos recogemos",
        paragraphs: [
          "Datos de cuenta: cuando te registras con email o con Google, guardamos tu dirección de correo y el nombre que decidas mostrar.",
          "Datos de uso de la app: las salas (Rooms) que creas o a las que te unes, los productos que añades dentro de ellas y el cálculo de la cuenta. Esta información está asociada a tu cuenta para que puedas consultar tu historial.",
          "Datos técnicos mínimos: tipo de dispositivo y versión del sistema operativo, exclusivamente para diagnóstico de errores y mejorar la app.",
        ],
      },
      {
        heading: "3. Para qué usamos tus datos",
        paragraphs: [
          "Para que la app funcione: identificarte, sincronizar las Rooms en tiempo real entre todos los participantes y guardar tu historial.",
          "Para soporte: poder responderte si nos escribes con una incidencia.",
          "Para mejorar Roomy: detectar fallos y entender qué partes de la app se usan más. Nunca vendemos tus datos.",
        ],
      },
      {
        heading: "4. Con quién compartimos tus datos",
        paragraphs: [
          "Solo con los proveedores estrictamente necesarios para operar la app: nuestro proveedor de autenticación y base de datos (Supabase) y, en su caso, los servicios de Google si inicias sesión con tu cuenta de Google.",
          "No compartimos tus datos con anunciantes, brokers de datos ni terceros con fines comerciales.",
        ],
      },
      {
        heading: "5. Tus derechos",
        paragraphs: [
          "Tienes derecho a acceder, rectificar y eliminar tus datos, así como a solicitar una copia de los mismos. Puedes ejercer estos derechos desde dentro de la app (perfil) o escribiéndonos a hola@roomy.app.",
          "Si estás en la Unión Europea, también tienes derecho a presentar una reclamación ante la autoridad de control de tu país (en España, la AEPD).",
        ],
      },
      {
        heading: "6. Conservación de los datos",
        paragraphs: [
          "Guardamos tus datos mientras tengas la cuenta activa. Si solicitas la eliminación de la cuenta, borraremos tus datos personales en un plazo razonable, manteniendo solo aquello que esté obligado por ley.",
        ],
      },
      {
        heading: "7. Menores de edad",
        paragraphs: [
          "Roomy no está dirigido a menores de 14 años. Si detectamos que se ha creado una cuenta por un menor sin consentimiento parental, la eliminaremos.",
        ],
      },
      {
        heading: "8. Cambios en esta política",
        paragraphs: [
          "Si modificamos esta política te avisaremos en la app y/o por email antes de que los cambios entren en vigor.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: May 20, 2026",
    intro:
      "At Roomy we take your privacy seriously. This page describes what data we collect, what we use it for, and what rights you have over it. If anything isn't clear, drop us a line at hola@roomy.app.",
    sections: [
      {
        heading: "1. Who we are",
        paragraphs: [
          "Roomy is a mobile app that lets you split the bill at any bar or restaurant among the people at the table. The data controller is the Roomy team.",
          "For any privacy-related question you can reach us at hola@roomy.app.",
        ],
      },
      {
        heading: "2. What data we collect",
        paragraphs: [
          "Account data: when you sign up with email or Google, we store your email address and the name you choose to display.",
          "App usage data: the Rooms you create or join, the items you add inside them, and the bill calculation. This information is tied to your account so you can review your history.",
          "Minimal technical data: device type and OS version, used only to diagnose errors and improve the app.",
        ],
      },
      {
        heading: "3. What we use your data for",
        paragraphs: [
          "To make the app work: identifying you, syncing Rooms in real time across participants, and storing your history.",
          "For support: so we can reply when you write to us about an issue.",
          "To improve Roomy: detecting bugs and understanding which parts of the app see the most use. We never sell your data.",
        ],
      },
      {
        heading: "4. Who we share your data with",
        paragraphs: [
          "Only with providers strictly needed to operate the app: our authentication and database provider (Supabase) and, where applicable, Google services if you sign in with your Google account.",
          "We do not share your data with advertisers, data brokers, or third parties for commercial purposes.",
        ],
      },
      {
        heading: "5. Your rights",
        paragraphs: [
          "You have the right to access, correct, and delete your data, and to request a copy of it. You can exercise these rights from inside the app (profile) or by writing to hola@roomy.app.",
          "If you are in the European Union, you also have the right to file a complaint with the data protection authority in your country.",
        ],
      },
      {
        heading: "6. Data retention",
        paragraphs: [
          "We keep your data while your account is active. If you request account deletion, we will delete your personal data within a reasonable timeframe, keeping only what we are legally required to retain.",
        ],
      },
      {
        heading: "7. Minors",
        paragraphs: [
          "Roomy is not aimed at children under 14. If we detect that an account has been created by a minor without parental consent, we will delete it.",
        ],
      },
      {
        heading: "8. Changes to this policy",
        paragraphs: [
          "If we change this policy we will notify you in the app and/or by email before the changes take effect.",
        ],
      },
    ],
  },
};

export const terms: Record<Locale, LegalDoc> = {
  es: {
    title: "Términos del Servicio",
    lastUpdated: "Última actualización: 20 de mayo de 2026",
    intro:
      "Estos términos regulan el uso de Roomy. Al usar la app aceptas lo descrito a continuación. Hemos intentado escribirlos de forma clara; si tienes dudas, escríbenos a hola@roomy.app.",
    sections: [
      {
        heading: "1. Qué es Roomy",
        paragraphs: [
          "Roomy es un servicio gratuito que permite a un grupo de personas dividir la cuenta de un bar o restaurante añadiendo los productos consumidos. Roomy NO realiza pagos: solo calcula lo que debe pagar cada participante.",
        ],
      },
      {
        heading: "2. Cuenta de usuario",
        paragraphs: [
          "Para usar Roomy debes crear una cuenta con email y contraseña o iniciar sesión con Google. Eres responsable de mantener la confidencialidad de tu cuenta y de las acciones que se realicen desde ella.",
          "Debes proporcionar información veraz al registrarte y mantener tus datos actualizados.",
        ],
      },
      {
        heading: "3. Uso aceptable",
        paragraphs: [
          "Te comprometes a no usar Roomy para fines ilícitos, fraudulentos o que infrinjan derechos de terceros. En particular, no debes intentar acceder a salas en las que no has sido invitado, manipular cantidades o precios para engañar a otros participantes, o usar la app para acosar a otras personas.",
        ],
      },
      {
        heading: "4. Contenido y responsabilidad",
        paragraphs: [
          "El reparto que muestra la app se basa en los datos introducidos por los participantes (nombres de productos, precios, cantidades). La exactitud de la cuenta depende de la información introducida. Roomy no se hace responsable de errores derivados de datos incorrectos.",
          "La cuenta final sigue siendo una responsabilidad del cliente frente al establecimiento.",
        ],
      },
      {
        heading: "5. Disponibilidad del servicio",
        paragraphs: [
          "Hacemos lo posible por mantener Roomy disponible y funcionando bien, pero no podemos garantizar el 100 % de uptime. Podemos realizar tareas de mantenimiento que afecten temporalmente al servicio.",
        ],
      },
      {
        heading: "6. Modificaciones del servicio",
        paragraphs: [
          "Podemos añadir, modificar o retirar funciones de Roomy en cualquier momento para mejorar la app. Los cambios importantes se comunicarán con antelación razonable.",
        ],
      },
      {
        heading: "7. Propiedad intelectual",
        paragraphs: [
          "La marca Roomy, el logotipo y el diseño de la app son propiedad del equipo de Roomy. No se concede ningún derecho sobre la marca más allá del uso normal de la app.",
        ],
      },
      {
        heading: "8. Limitación de responsabilidad",
        paragraphs: [
          "En la medida que lo permita la legislación aplicable, Roomy no será responsable por daños indirectos, lucro cesante o pérdida de datos derivados del uso o imposibilidad de uso del servicio.",
        ],
      },
      {
        heading: "9. Cancelación",
        paragraphs: [
          "Puedes dejar de usar Roomy y eliminar tu cuenta en cualquier momento desde el perfil. Si incumples estos términos, podemos suspender o cancelar tu cuenta tras avisarte cuando sea razonable.",
        ],
      },
      {
        heading: "10. Ley aplicable",
        paragraphs: [
          "Estos términos se rigen por la legislación española. Para cualquier disputa que no pueda resolverse de forma amistosa, las partes se someten a los juzgados de Madrid, salvo que la ley imponga otro fuero.",
        ],
      },
    ],
  },
  en: {
    title: "Terms of Service",
    lastUpdated: "Last updated: May 20, 2026",
    intro:
      "These terms govern the use of Roomy. By using the app you agree to what's described below. We've tried to write them clearly; if you have questions, drop us a line at hola@roomy.app.",
    sections: [
      {
        heading: "1. What Roomy is",
        paragraphs: [
          "Roomy is a free service that lets a group of people split the bill at a bar or restaurant by adding the items each person ordered. Roomy does NOT process payments: it only calculates what each participant owes.",
        ],
      },
      {
        heading: "2. User account",
        paragraphs: [
          "To use Roomy you need to create an account with email and password or sign in with Google. You're responsible for keeping your account confidential and for any actions taken from it.",
          "You must provide accurate information when registering and keep your data up to date.",
        ],
      },
      {
        heading: "3. Acceptable use",
        paragraphs: [
          "You agree not to use Roomy for unlawful, fraudulent purposes or in ways that infringe on third-party rights. In particular, you must not try to access Rooms you weren't invited to, manipulate quantities or prices to deceive other participants, or use the app to harass others.",
        ],
      },
      {
        heading: "4. Content and responsibility",
        paragraphs: [
          "The split shown in the app is based on the data entered by participants (item names, prices, quantities). The accuracy of the bill depends on the information entered. Roomy is not responsible for errors caused by incorrect data.",
          "The final bill remains the customer's responsibility with the establishment.",
        ],
      },
      {
        heading: "5. Service availability",
        paragraphs: [
          "We do our best to keep Roomy available and running smoothly, but we can't guarantee 100% uptime. We may perform maintenance that temporarily affects the service.",
        ],
      },
      {
        heading: "6. Service changes",
        paragraphs: [
          "We may add, modify, or remove features from Roomy at any time to improve the app. Significant changes will be communicated with reasonable notice.",
        ],
      },
      {
        heading: "7. Intellectual property",
        paragraphs: [
          "The Roomy brand, logo, and app design belong to the Roomy team. No rights over the brand are granted beyond normal use of the app.",
        ],
      },
      {
        heading: "8. Limitation of liability",
        paragraphs: [
          "To the extent permitted by applicable law, Roomy will not be liable for indirect damages, loss of profit, or data loss arising from the use of or inability to use the service.",
        ],
      },
      {
        heading: "9. Termination",
        paragraphs: [
          "You can stop using Roomy and delete your account at any time from your profile. If you breach these terms, we may suspend or terminate your account after notifying you when reasonable.",
        ],
      },
      {
        heading: "10. Governing law",
        paragraphs: [
          "These terms are governed by Spanish law. For any dispute that cannot be resolved amicably, the parties agree to submit to the courts of Madrid, unless the law requires otherwise.",
        ],
      },
    ],
  },
};

export const legalBack: Record<Locale, string> = {
  es: "← Volver al inicio",
  en: "← Back to home",
};
