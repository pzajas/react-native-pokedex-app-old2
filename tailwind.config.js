/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        text: {
          light: '#11181C',
          dark: '#ECEDEE',
        },
        background: {
          light: '#ffffff',
          dark: '#000000',
        },
        tint: {
          light: '#0a7ea4',
          dark: '#ffffff',
        },
        icon: {
          light: '#687076',
          dark: '#9BA1A6',
        },
        tabIconDefault: {
          light: '#687076',
          dark: '#9BA1A6',
        },
        tabIconSelected: {
          light: '#0a7ea4',
          dark: '#ffffff',
        },
        card: {
          light: '#f2f2f2',
          dark: '#2a2a2a',
        },
        inputBackground: {
          light: '#f0f0f0',
          dark: '#1e1e1e',
        },
        border: {
          light: '#dddddd',
          dark: '#333333',
        },
      },
    },
  },
  plugins: [],
};
