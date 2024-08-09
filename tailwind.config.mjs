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
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s ease-out .8s 1 normal both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '3ch' },
          '35%, 40%': { width: '4ch' },
          '45%, 50%': { width: '5ch' },
          '55%, 60%': { width: '6ch' },
          '65%, 70%': { width: '7ch' },
          '75%, 80%': { width: '8ch' },
          '85%, 90%': { width: '9ch' },
          '95%': { width: '10ch' },
        },
        'infinite-scroll': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      fontFamily: {
        raleway: ["Raleway Variable", "sans-serif"],
        inter: ["Inter Variable", "sans-serif"],
        'jetbrains-mono': ["JetBrains Mono Variable", "sans-serif"]
      }
    },
  },
  plugins: [],
};
