/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Very small devices
        xsm: "375px", // Small phones
        sm: "640px", // Mobile landscape
        md: "768px", // Tablet portrait
        mdlg: "900px", // Tablet landscape / small laptops
        lg: "1024px", // Standard laptop (starting point for desktop layout)
        lglg: "1152px", // MacBook Air 13" or small laptop screens
        xlsm: "1200px", // MacBook Air 13" or small laptop screens
        xlmd: "1280px", // 720p-768p height screens
        xl: "1440px", // Large desktop
        "2xl": "1920px", // Full HD
        "3xl": "2140px", // Ultra Wide
        "4xl": "2560px", // 4K Displays
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        cta: "hsl(var(--cta))",
      },
      animation: {
        "progress-fill": "progress-fill 5s linear infinite",
      },
      keyframes: {
        "progress-fill": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-responsive-xxs": {
          fontSize: "10px",
          "@screen lg": {
            fontSize: "10px",
          },
          "@screen xl": {
            fontSize: "12px",
          },
        },
        ".text-responsive-xs": {
          fontSize: "16px",
          "@screen lg": {
            fontSize: "16px",
          },
          "@screen xl": {
            fontSize: "16px",
          },
        },
        ".text-responsive-sm": {
          fontSize: "18px",
          "@screen lg": {
            fontSize: "18px",
          },
          "@screen xl": {
            fontSize: "20px",
          },
        },
        ".text-responsive-md": {
          fontSize: "20px",
          "@screen lg": {
            fontSize: "20px",
          },
          "@screen xl": {
            fontSize: "24px",
          },
        },
        ".text-responsive-lg": {
          fontSize: "26px",
          "@screen lg": {
            fontSize: "26px",
          },
          "@screen xl": {
            fontSize: "32px",
          },
        },
        ".text-responsive-xl": {
          fontSize: "42px",
          "@screen lg": {
            fontSize: "42px",
          },
          "@screen xl": {
            fontSize: "48px",
          },
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    }),
  ],
};
