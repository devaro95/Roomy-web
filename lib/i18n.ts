export type Locale = "es" | "en";

export const defaultLocale: Locale = "es";
export const locales: Locale[] = ["es", "en"];

export type Dict = {
  nav: {
    howItWorks: string;
    features: string;
    faq: string;
    download: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    proofPoints: string[];
  };
  how: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  showcase: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    appStore: string;
    playStore: string;
    comingSoon: string;
  };
  footer: {
    tagline: string;
    product: string;
    legal: string;
    privacy: string;
    terms: string;
    contact: string;
    rights: string;
  };
};

export const dict: Record<Locale, Dict> = {
  es: {
    nav: {
      howItWorks: "Cómo funciona",
      features: "Funciones",
      faq: "FAQ",
      download: "Descargar",
    },
    hero: {
      badge: "Próximamente en App Store y Google Play",
      title1: "Divide la cuenta",
      title2: "sin discusiones.",
      subtitle:
        "Roomy es la app para repartir la cuenta del bar o restaurante. Cada uno añade lo que pide, la app calcula lo que debe pagar cada uno. Así de simple.",
      ctaPrimary: "Descargar Roomy",
      ctaSecondary: "Ver cómo funciona",
      proofPoints: ["Sin sumas mentales", "Listo en 30 segundos", "Gratis"],
    },
    how: {
      eyebrow: "Cómo funciona",
      title: "Tres pasos. Cero peleas.",
      subtitle:
        "Pensado para esos momentos en los que llega la cuenta y nadie sabe quién pidió qué.",
      steps: [
        {
          title: "Crea o únete a la Room",
          desc: "Una persona crea la sala y comparte el código con la mesa. El resto entra en segundos.",
        },
        {
          title: "Añade lo que pides",
          desc: "Tu cocacola, los nachos compartidos entre tres, esa ronda que pagaste tú… todo dentro de la Room.",
        },
        {
          title: "Cierra y a pagar",
          desc: "Al final de la noche, Roomy calcula qué debe pagar cada uno. Sin sumas mentales, sin liarla.",
        },
      ],
    },
    features: {
      eyebrow: "Funciones",
      title: "Hecha para mesas reales",
      subtitle:
        "Todo lo que necesitas para que dividir la cuenta deje de ser un drama.",
      items: [
        {
          title: "Salas privadas con código",
          desc: "Cada mesa, su propia Room. Comparte un código corto y todos dentro.",
        },
        {
          title: "Productos compartidos",
          desc: "¿Los nachos van entre tres? Marca quién comparte y Roomy reparte el importe.",
        },
        {
          title: "Balance automático",
          desc: "Cada usuario ve en tiempo real cuánto lleva acumulado. Sin sorpresas al final.",
        },
        {
          title: "Tiempo real",
          desc: "Todo lo que añade un compañero aparece al instante en el resto de móviles.",
        },
        {
          title: "Login rápido",
          desc: "Entra con Google o crea una cuenta con email. Tu historial te sigue.",
        },
        {
          title: "Sin pelearte con la propina",
          desc: "Aplica propina o redondeo a la cuenta total con un toque.",
        },
      ],
    },
    showcase: {
      eyebrow: "La app",
      title: "Diseñada para usarse con una mano",
      subtitle:
        "Mientras tomas algo, no quieres pelearte con menús. Cada acción está a un toque.",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo típico que te preguntas",
      items: [
        {
          q: "¿Necesito crear cuenta para usar Roomy?",
          a: "Puedes iniciar sesión con Google o con email y contraseña. Tu historial de Rooms se guarda asociado a tu cuenta.",
        },
        {
          q: "¿Es gratis?",
          a: "Sí, Roomy es totalmente gratuito mientras esté en su versión inicial.",
        },
        {
          q: "¿Funciona si solo una persona tiene la app?",
          a: "Funciona mejor si todos la tienen, pero el creador de la sala puede añadir productos en nombre del resto.",
        },
        {
          q: "¿Mis datos están seguros?",
          a: "Las Rooms son privadas y solo accesibles con el código. No compartimos tus datos con terceros.",
        },
        {
          q: "¿En qué dispositivos funciona?",
          a: "Roomy estará disponible para iOS y Android.",
        },
      ],
    },
    cta: {
      title: "La próxima cena, sin calculadora.",
      subtitle: "Descarga Roomy y prepárate para la siguiente mesa.",
      appStore: "Descargar en App Store",
      playStore: "Disponible en Google Play",
      comingSoon: "Próximamente",
    },
    footer: {
      tagline: "Divide la cuenta sin discusiones.",
      product: "Producto",
      legal: "Legal",
      privacy: "Privacidad",
      terms: "Términos",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      howItWorks: "How it works",
      features: "Features",
      faq: "FAQ",
      download: "Download",
    },
    hero: {
      badge: "Coming soon on App Store and Google Play",
      title1: "Split the bill",
      title2: "without the drama.",
      subtitle:
        "Roomy is the app to split the check at any bar or restaurant. Everyone adds what they ordered, the app figures out who owes what. That simple.",
      ctaPrimary: "Get Roomy",
      ctaSecondary: "See how it works",
      proofPoints: ["No mental math", "Ready in 30 seconds", "Free"],
    },
    how: {
      eyebrow: "How it works",
      title: "Three steps. Zero fights.",
      subtitle:
        "Built for that exact moment when the bill arrives and nobody knows who ordered what.",
      steps: [
        {
          title: "Create or join a Room",
          desc: "One person creates the room and shares the code with the table. The rest join in seconds.",
        },
        {
          title: "Add what you order",
          desc: "Your coke, the nachos shared between three, the round you paid for… everything inside the Room.",
        },
        {
          title: "Close it and pay",
          desc: "At the end of the night, Roomy calculates what each person owes. No mental math, no awkward moments.",
        },
      ],
    },
    features: {
      eyebrow: "Features",
      title: "Built for real tables",
      subtitle:
        "Everything you need so that splitting the bill stops being a hassle.",
      items: [
        {
          title: "Private rooms with code",
          desc: "Every table, its own Room. Share a short code and you're all in.",
        },
        {
          title: "Shared items",
          desc: "Nachos between three? Tag who's sharing and Roomy splits the cost.",
        },
        {
          title: "Automatic balance",
          desc: "Each user sees their running total in real time. No surprises at the end.",
        },
        {
          title: "Real-time sync",
          desc: "Anything a friend adds shows up instantly on everyone else's phone.",
        },
        {
          title: "Quick login",
          desc: "Sign in with Google or email. Your history travels with you.",
        },
        {
          title: "Tips, sorted",
          desc: "Add a tip or round up the total with one tap.",
        },
      ],
    },
    showcase: {
      eyebrow: "The app",
      title: "Designed to use one-handed",
      subtitle:
        "While you're having a drink, you don't want to fight with menus. Every action is one tap away.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "The usual stuff",
      items: [
        {
          q: "Do I need to create an account?",
          a: "You can sign in with Google or with email and password. Your Rooms history is tied to your account.",
        },
        {
          q: "Is it free?",
          a: "Yes, Roomy is completely free during its initial release.",
        },
        {
          q: "Does it work if only one person has the app?",
          a: "It works best if everyone has it, but the room creator can add items on behalf of the rest.",
        },
        {
          q: "Is my data safe?",
          a: "Rooms are private and only accessible with the code. We don't share your data with third parties.",
        },
        {
          q: "What devices does it work on?",
          a: "Roomy will be available for iOS and Android.",
        },
      ],
    },
    cta: {
      title: "Your next dinner, no calculator.",
      subtitle: "Download Roomy and be ready for the next table.",
      appStore: "Download on the App Store",
      playStore: "Get it on Google Play",
      comingSoon: "Coming soon",
    },
    footer: {
      tagline: "Split the bill without the drama.",
      product: "Product",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact",
      rights: "All rights reserved.",
    },
  },
};
