import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#002B5C",
        "deep-navy": "#001631",
        blue: "#0052A5",
        gold: "#FCD116",
        "gold-dark": "#D4A800",
        green: "#009739",
        "green-light": "#E8F5ED",
        sand: "#FAF7F2",
        cream: "#FFFDF7",
        charcoal: "#1C1C28",
        slate: "#4A4A5A",
        muted: "#8A8A9A",
        border: "#E8E6E1",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "serif"],
      },
      maxWidth: {
        container: "1160px",
      },
    },
  },
  plugins: [],
};
export default config;
