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
        glow: 'glow-animation 10s ease infinite'
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'glow-animation': {
          '0%': {
            'background-position': '0% 0%'
          },
          '25%': {
              'background-position': '50% 5%'
          },
          '50%': {
              'background-position': '100% 5%'
          },
          '75%': {
              'background-position': '50% 5%'
          },
          '100%': {
              'background-position': '0% 0%'
          }
        }
      },
      fontFamily: {
        raleway: ["Raleway Variable", "sans-serif"],
        inter: ["Inter Variable", "sans-serif"],
        'jetbrains-mono': ["JetBrains Mono Variable", "sans-serif"]
      },
      backgroundColor: {
        dark: 'radial-gradient(circle, rgba(166, 42, 4, 0.175), #1e2737, #1d2432)',
        light: 'radial-gradient(circle, #32a7ea3e, #fff, #ffffff)'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
};
