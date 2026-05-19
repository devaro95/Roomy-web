/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Roomy (alineada con la app móvil — fondo #F8F9FA)
        roomy: {
          bg: "#F8F9FA",
          surface: "#FFFFFF",
          ink: "#0F172A",
          muted: "#64748B",
          line: "#E2E8F0",
          primary: "#FF6B35", // naranja cálido tipo terraza/bar
          primaryDark: "#E5552A",
          accent: "#FFB627",
          success: "#16A34A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(15, 23, 42, 0.12)",
        soft: "0 4px 14px -4px rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
