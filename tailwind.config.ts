import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#C1693C",
        "accent-soft": "#ECD2C4",
        container: "#FAF2EE",
        body: "#333333",
        heading: "#6B4A3D",
        border: {
          soft: "#ECD2C4",
          faint: "#F3E9E5",
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
