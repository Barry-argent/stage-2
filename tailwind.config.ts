import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "#052228",
        background: "#02191D",
        primary: "#2BA4B9",
        secondary: "#041E23",
        tertiary: "#197686",
        customBlack: "#0A0C11",
        white: "#FFFFFF",
        underlineBorder: "#24A0B5",
        secBg:"#08252B",
        border: "#07373F",
        customBorder: "#0E464F",
        customBg:"#052F35",
        customGray: "#B3B3B3",
       
      },
      fontFamily: {
        jeju: ["Jeju Myeongjo", "serif"],
        roboto: ["Roboto", "sans-serif"],
        alatsi: ["Alatsi", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
