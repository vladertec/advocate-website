import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "Inter", "system-ui", "sans-serif"],
        serif: [
          "var(--font-cormorant)",
          "Playfair Display",
          "Georgia",
          "serif",
        ],
      },
      colors: {
        gold: {
          50: "#faf8f0",
          100: "#f5f0e0",
          200: "#e8dcc0",
          300: "#d4af37",
          400: "#b8860b",
          500: "#b8860b", // Темнее золотой
          600: "#9a7209",
          700: "#7a5a07",
          800: "#5a4305",
          900: "#3a2c03",
        },
        dark: {
          50: "#f5f5f5",
          100: "#e0e0e0",
          200: "#b3b3b3",
          300: "#808080",
          400: "#4d4d4d",
          500: "#1a1a1a",
          600: "#0d0d0d",
          700: "#000000",
        },
      },
      boxShadow: {
        "gold-glow": "0 0 20px rgba(184, 134, 11, 0.2)",
        "gold-glow-sm": "0 0 10px rgba(184, 134, 11, 0.15)",
      },
    },
  },
  plugins: [],
}
export default config
