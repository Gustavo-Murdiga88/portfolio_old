/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "page-main": "url('/main.png')",
        "page-skills": "url('/skills.png')",
      },
      fontSize: {
        title: "7.5rem",
      },
      width: {
        134: "33.5rem",
        180: "720px",
        custom: "calc(100% - (100% - 1628px))",
      },

      keyframes: {
        hello: {
          "10%": {
            transform: "rotate(15deg)",
          },

          "20%": {
            transform: "rotate(25deg)",
          },

          "30%": {
            transform: "rotate(15deg)",
          },

          "40%": {
            transform: "rotate(30deg)",
          },

          "70%, 100%": {
            transform: "rotate(30deg)",
          },
        },
      },
      transformOrigin: {
        "bottom-center": "bottom 4px",
      },
      animation: {
        hello: "3s cubic-bezier(0,.85,.37,.99) infinite forwards hello",
      },
      rotate: {
        custom: "30deg",
      },
      aspectRatio: {
        custom: "9 / 16",
      },
    },
  },
  plugins: [],
};
