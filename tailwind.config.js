/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ["10px", "16px"],
        "x0-5s": ["11px", "16px"],
        xs: ["12px", "16px"],
        "s0-5": ["11px", "16px"],
        s: ["13px", "16px"],
        sm: ["14px", "20px"],
        m: ["15px", "22px"],
        base: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "28px"],
        xxl: ["24px", "32px"],
        xxl: ["26px", "32px"],
        xxxl: ["30px", "36px"],
      },
      color:{
        "primary-0":"#9c27b0",
        "danger-0":"#f44336"
      }
    },
  },
  plugins: [],
};
