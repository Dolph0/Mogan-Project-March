import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#16214A",
        "brand-blue": "#004870",
        "brand-orange": "#EB6332",
        "brand-gray-50": "#F5F5F5",
        "brand-gray-light": "#EEEEEE",
        "brand-gray": "#D9D9D9",
        "brand-gray-200": "#F6F6F6",
        "brand-maron": "#9A3612",
        "brand-green": "#1ED760",
        "brand-teal": "#0096D3",
        "brand-teal-light": "#60BDE4",
        "brand-pink": "#D3008B",
        "brand-red": "#E00B1A",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        banner:
          "linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(0,0,0,0.88) 100%)",
        "banner-two":
          "linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(0,0,0,0.35) 100%)",
      },
      boxShadow: {
        "3xl": "0 4px 4px 0 rgba(0,0,0,0.25)",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xl: "1267px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
export default config;
