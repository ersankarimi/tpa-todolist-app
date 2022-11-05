/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "main-dark": "url('/src/assets/images/hero-dark@90.dba36cdf.jpg')",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },

  plugins: [],
};
