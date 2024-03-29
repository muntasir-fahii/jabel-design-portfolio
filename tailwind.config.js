/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Titillium Web, sans-serif"],
        oval: ["colfax-web, sans-serif"],
      },
      colors: {
        primary: "#806BFF",
        light: "#FFFFFF",
        dark: "#000000",
        gray: "#F2F2F2",
        alt: " #646F79",
      },
    },
  },
  plugins: [],
};
