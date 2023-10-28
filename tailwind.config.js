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
      boxShadow: {
        card: "0 3.2px 7.2px 0 rgba(0,0,0,.132), 0 0.6px 1.8px 0 rgba(0,0,0,.108)"
      },
      colors: {
        danger: "#FF004F",
        success: {
          50: "#C0FF00",
          100: "#03C03C"
        },
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
      xs: "350px",
      sm: "630px",
      md: "950px",
      lg: "1280px"
    }
  },
  plugins: []
};
