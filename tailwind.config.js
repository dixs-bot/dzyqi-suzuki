/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx}", "./src/app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07080c",
        ivory: "#f4f1ea",
        metallic: "#b8bec6",
        navy: "#0b1220",
        "navy-mid": "#121a2c",
        accent: "#1a73c7",
        "accent-bright": "#2b8ef0",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxury: "0.28em",
        wide2: "0.18em",
      },
      maxWidth: {
        cinema: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
