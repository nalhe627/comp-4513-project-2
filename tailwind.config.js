// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(accordion|badge|button|card|checkbox|chip|divider|drawer|dropdown|image|input|link|navbar|radio|scroll-shadow|select|ripple|spinner|form|modal|menu|popover|listbox).js"
],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};