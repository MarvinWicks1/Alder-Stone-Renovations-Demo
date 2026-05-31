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
        charcoal: "#151A18",
        "warm-stone": "#F3F0E8",
        "soft-taupe": "#CFC8BA",
        bronze: "#596B4A",
        "muted-slate": "#66706A",
        limestone: "#E7E1D3",
        graphite: "#151A18",
        olive: "#596B4A",
        sage: "#A8B09A",
        chalk: "#FAF8F1",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        editorial: "0 28px 80px rgba(21, 26, 24, 0.14)",
        fine: "0 16px 45px rgba(21, 26, 24, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
