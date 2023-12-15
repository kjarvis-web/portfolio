/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 45s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            borderRadius: "30% 70% 70% 30% / 30% 52% 48% 70%",
          },
          "10%": {
            borderRadius: "50% 50% 20% 80% / 25% 80% 20% 75%",
          },
          "20%": {
            borderRadius: "67% 33% 47% 53% / 37% 20% 80% 63%",
          },
          "30%": {
            borderRadius: "39% 61% 47% 53% / 37% 40% 60% 63%",
          },
          "40%": {
            borderRadius: "39% 61% 82% 18% / 74% 40% 60% 26%",
          },
          "50%": {
            borderRadius: "100%",
          },
          "60%": {
            borderRadius: "50% 50% 53% 47% / 72% 69% 31% 28%",
          },
          "70%": {
            borderRadius: "50% 50% 53% 47% / 26% 22% 78% 74%",
          },
          "80%": {
            borderRadius: "50% 50% 53% 47% / 26% 69% 31% 74%",
          },
          "90%": {
            borderRadius: "20% 80% 20% 80% / 20% 80% 20% 80%",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
