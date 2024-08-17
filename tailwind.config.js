/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "laptop-pattern": "url('/img/hero-pattern.svg')",
        "mobile-texture": "url('/img/mobile-texture.jpg')",
      },
    },
  },
  plugins: [],
};
