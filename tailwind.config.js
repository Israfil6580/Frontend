/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Red Hat Display", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundColor: {
        "light-transparent-white": "rgba(255, 255, 255, 0.05)",
        "custom-blue": "#0FC9F8",
        "custome-deep-blue": "#0E47AE",
      },
      colors: {
        "semi-transparent-white": "rgba(255, 255, 255, 0.70)",
        "semi-transparent-white-dark": "rgba(255, 255, 255, 0.10)",
      },
      borderRadius: {
        custom: "110px",
        customGradient: "658px",
        smallGradient: "300px",
      },
      borderColor: {
        "semi-transparent-white": "rgba(255, 255, 255, 0.12)",
      },
      spacing: {
        2.5: "10px",
      },
      letterSpacing: {
        custom: "2.08px",
      },
      lineHeight: {
        custom: "20.8px",
      },
      width: {
        custom: "658px",
        smallGradient: "300px",
      },
      height: {
        custom: "658px",
        smallGradient: "332px",
      },
      opacity: {
        50: "0.5",
        70: "0.7",
        80: "0.8",
      },
      blur: {
        custom: "212px",
      },
    },
  },
  plugins: [],
};
