import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      colors: {
        gold: {
          50: "#fffef5",
          100: "#fffce8",
          200: "#fff8c4",
          300: "#fff08d",
          400: "#ffe252",
          500: "#ffd700",
          600: "#e6c200",
          700: "#cc9900",
          800: "#997700",
          900: "#665500",
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
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 20px rgba(255, 215, 0, 0.3)",
        "gold-glow-sm": "0 0 10px rgba(255, 215, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;

