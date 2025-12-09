// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(accordion|badge|button|card|checkbox|chip|divider|drawer|dropdown|form|image|input|link|modal|navbar|radio|scroll-shadow|select|skeleton|table|toast|popover|ripple|spinner|menu|listbox|spacer).js"
],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};