import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { pearl: "#F7F9FC", ivory: "#FBFAF6", neon: { 500: "#0068FF", 400: "#1687FF", 300: "#00A8FF", 200: "#22D3EE" }, navy: "#0A1426", graphite: "#141B2D" },
    fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
    boxShadow: { neon: "0 8px 30px rgba(0,104,255,.28)", glass: "0 10px 40px rgba(10,20,38,.08)" },
  } },
  plugins: [],
};
export default config;
