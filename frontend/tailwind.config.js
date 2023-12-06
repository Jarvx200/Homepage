/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#fbf1c7',
          fg: '#3c3836',
          primary: '#665c54',
          secondary: '#7c6f64',
          accent: '#bdae93',
          red: '#cc241d',
          green: '#98971a',
          yellow: '#d79921',
          blue: '#458588',
          purple: '#b16286',
          aqua: '#689d6a',
          orange: '#d65d0e',
          brown: '#2a2a2a'
        },
        dark: {
          bg: '#282828',
          fg: '#ebdbb2',
          primary: '#d3869b',
          secondary: '#af3a03',
          accent: '#458588',
          red: '#fb4934',
          green: '#b8bb26',
          yellow: '#fabd2f',
          blue: '#83a598',
          purple: '#d3869b',
          aqua: '#8ec07c',
          orange: '#fe8019',
          brown: '#202020'
        },
      },
    },
  },
  plugins: [],
}

