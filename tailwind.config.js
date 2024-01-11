/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        8: "4rem",
      },
      height: {
        8: "4rem",
      },
      margin: {
        right: {
          2: "0.5rem",
        },
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
