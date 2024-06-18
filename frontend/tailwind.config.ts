import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      primary: '#1E293B', // Dark background color
      secondary: '#F8FAFC', // Light text color
      accent: '#4F46E5', 
    },
  },
  plugins: [],
};
export default config;
