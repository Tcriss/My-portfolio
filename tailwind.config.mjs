/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill-100": "repeat(auto-fill, minmax(min(100%, 100px), 1fr))",
        "auto-fit-100": "repeat(auto-fit, minmax(min(100%, 100px), 1fr))",
        "auto-fill-260": "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
        "auto-fit-260": "repeat(auto-fit, minmax(min(100%, 260px), 1fr))"
      },
    },
  },
  plugins: [],
};
