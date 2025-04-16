/* eslint-env node */
// tailwind.config.js

import { colors } from "./src/constants/colors";
import type { Config } from "tailwindcss";

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        ...colors,
        // Ek özel renkler ekleyebilirsiniz
      },
    },
    screens: {
      xs: {
        max: "640px",
      },
      sm: {
        min: "640px",
      },
      md: {
        min: "768px",
      },
      lg: {
        min: "1024px",
      },
      xl: {
        min: "1280px",
      },
      "2xl": {
        min: "1536px",
      },
      "3xl": {
        min: "2500px",
      },
    },
  },
  plugins: [],
} satisfies Config;
