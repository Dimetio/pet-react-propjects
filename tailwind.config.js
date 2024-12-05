/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-red-400",
    "bg-neutral-400",
    "bg-green-400",
    "hover:bg-red-500",
    "hover:bg-neutral-500",
    "hover:bg-green-500",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
