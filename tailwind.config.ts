import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#172033",
        "warm-stone": "#F5F2EA",
        "soft-taupe": "#D6D5CB",
        bronze: "#596B4A",
        "muted-slate": "#5F6B76",
        limestone: "#ECE8DC",
        graphite: "#172033",
        olive: "#596B4A",
        sage: "#A6B39A",
        chalk: "#FAF8F2",
        navy: "#172033",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        editorial: "0 28px 80px rgba(23, 32, 51, 0.13)",
        fine: "0 16px 45px rgba(23, 32, 51, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
