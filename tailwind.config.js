/*
 * @Author       : haocanweng@chatlabs.com
 * @Date         : 2022-12-08 16:42:35
 * @LastEditors  : haocanweng@chatlabs.com
 * @LastEditTime : 2023-05-10 10:16:37
 * @FilePath     : /my-app/tailwind.config.js
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontSize: "14px",
    extend: {},
  },
  plugins: [],
};
