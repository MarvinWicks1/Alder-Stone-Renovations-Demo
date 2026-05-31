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
        charcoal: "#0F1C2E",
        "warm-stone": "#F7F6F2",
        "soft-taupe": "#D7DCE4",
        bronze: "#596B4A",
        "muted-slate": "#5E6877",
        limestone: "#ECEFF3",
        graphite: "#0F1C2E",
        olive: "#596B4A",
        sage: "#8FA287",
        chalk: "#FBFCFD",
        navy: "#0F1C2E",
        "navy-soft": "#15263A",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        editorial: "0 28px 80px rgba(15, 28, 46, 0.16)",
        fine: "0 16px 45px rgba(15, 28, 46, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
