/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1abc9c",
        secondary: {
          dark: "#d35400",
          light: "#f39c12",
          DEFAULT: "#f39c12",
        },
      },
    },
  },
  plugins: [],
};
