/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        danger: "#FF004F",
        success: "#C0FF00",
        action: "#1F75FE"
      },
      keyframes: {
        out: {
          "0%": { scale: 0 },
          "100%": { scale: 1 }
        }
      },
      animation: {
        out: "out 500ms forwards"
      }
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }
      laptop: "1024px",
      desktop: "1280px"
    }
  },
  plugins: []
};
