import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#8B5A2B",
        "accent-dark": "#7D5127",
        "accent-soft": "#C9A66B",
        container: "#F5F0E1",
        body: "#2A2A2A",
        heading: "#1B3A34",
        border: {
          soft: "#C9A66B",
          faint: "rgba(201, 166, 107, 0.35)",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      height: {
        hero: "100dvh",
      },
      minHeight: {
        hero: "100svh",
      },
    },
  },
  plugins: [],
};

export default config;
