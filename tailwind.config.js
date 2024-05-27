/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "contact-bg": "url('/assets/png/background.png')",
      },
      screens: {
        xs: "460px",
        // => @media (min-width: 460px) { ... }

        xxs: "250px",
        // => @media (min-width: 250px) { ... }
      },
    },
  },
  plugins: [],
};
