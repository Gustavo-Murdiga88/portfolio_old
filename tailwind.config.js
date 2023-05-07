/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "page-main": "url('/main.png')",
      },
      fontSize: {
        "title": "10.625rem"
      },
      width: {
        "134": "33.5rem"
      }
    },
  },
  plugins: [],
}
