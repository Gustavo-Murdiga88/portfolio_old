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
        "page-about": "url('/about.png')",
      },
      fontSize: {
        title: "7.5rem",
      },

      maxWidth: {
        "max-page": "1732px",
        custom: "calc(100% - (100% - 1660px))",
      },

      width: {
        134: "33.5rem",
        180: "720px",
        custom: "calc(100% - (100% - 1460px))",
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

        greeting: {
          "0%": {
            transform: "translateY(-200px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },

        "greeting-vertical": {
          "0%": {
            transform: "translateX(-200px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: "1",
          },
        },

        "greeting-drawer": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },

        "good-by-drawer": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },

      transformOrigin: {
        "bottom-center": "bottom 4px",
      },

      animation: {
        hello: "3s cubic-bezier(0,.85,.37,.99) infinite forwards hello",
        greeting: "1s greeting backwards",
        "greeting-vertical": "1s greeting-vertical backwards",
        "good-by-drawer": "600ms good-by-drawer forwards",
        "greeting-drawer": "600ms greeting-drawer backwards",
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
