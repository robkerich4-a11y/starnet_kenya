import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#7e22ce",
        input: "#a855f7",
        ring: "#9333ea",
        background: "#faf5ff",
        foreground: "#1e1b4b",

        primary: {
          DEFAULT: "#7e22ce", // rich purple
          foreground: "#faf5ff",
        },
        secondary: {
          DEFAULT: "#a855f7", // lighter purple
          foreground: "#f5f3ff",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#ede9fe",
          foreground: "#4c1d95",
        },
        accent: {
          DEFAULT: "#c084fc",
          foreground: "#2e1065",
        },
        popover: {
          DEFAULT: "#f3e8ff",
          foreground: "#1e1b4b",
        },
        card: {
          DEFAULT: "#f5f3ff",
          foreground: "#1e1b4b",
        },
        sidebar: {
          DEFAULT: "#3b0764",
          foreground: "#f5f3ff",
          primary: "#7e22ce",
          "primary-foreground": "#faf5ff",
          accent: "#a855f7",
          "accent-foreground": "#ffffff",
          border: "#6d28d9",
          ring: "#9333ea",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
