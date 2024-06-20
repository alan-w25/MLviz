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
        mechanical: {
          dark: '#141619', // light color
          medium: '#2c2e3a', // medium color
          darkblue: '#050a44', // dark color
          accentblue: '#0a21c0', // accent color
          light: '#b3b4bd', // neutral color
        }
      }, 
      fontFamily : {
        inter: ['Inter', 'sans-serif']
      }

    },
  },
  plugins: [],
};
export default config;
