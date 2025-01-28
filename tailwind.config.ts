import type { Config } from "tailwindcss";

const config: Config = {

  //It is an Array, which set where tailwind is working
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    //if you want to add new folder in src, save it here so tailwind would be applicable in that folder
  ],

  //used to define custom themes which are not available in Tailwind
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
