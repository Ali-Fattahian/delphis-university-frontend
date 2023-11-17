/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vgblue: "#023857",
        vgskyblue: "#397ebf",
        vgred: "#743837",
        vgyellow: "#ecc64b",
        vggreen: "#607a4f",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
        fadeOut: {
          "100%": { opacity: 100 },
          "0%": { opacity: 0 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-in-out forwards",
        fadeOut: "fadeOut 0.4s ease-in-out forwards",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-vg(|blue|skyblue|red|yellow|green)/,
    },
  ],
};
