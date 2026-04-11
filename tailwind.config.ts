import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-public-sans)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        ink: "#14213D",
        paper: "#F7F4EA",
        accent: "#0F766E",
        muted: "#EEF2F4",
      },
      boxShadow: {
        soft: "0 18px 48px rgba(20, 33, 61, 0.08)",
      },
      backgroundImage: {
        "paper-grid":
          "linear-gradient(rgba(20, 33, 61, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 33, 61, 0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
