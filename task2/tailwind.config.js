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
        "hero-pattern": "url('/images/BannerFront.jpg')",
        "hero-background": "url('/images/BannerBack.jpg')",
      },
      colors: {
        blue1: "#0D73C1",
        gray1: "#F4F8FC",
        desc: "#8B8B8B",
      },
    },
  },
  plugins: [],
};
