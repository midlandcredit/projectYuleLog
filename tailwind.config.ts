import type { Config } from "tailwindcss";

const config: Config  = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 
        island: `url('../public/island.png')`
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'morning-sky-blue' : '#DFE8F8',
      },
      fontSize: {
        'standard': '12px',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        hostFadeIn: 'hostFadeIn 1s ease-out',
        buttonFadeIn: 'buttonFadeIn 1s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-200px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        hostFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        buttonFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(200px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;