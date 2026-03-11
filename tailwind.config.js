/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f4c1a',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#000000',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#16a34a',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#111827',
          foreground: '#9ca3af',
        },
        'muted-foreground': '#9ca3af',
        background: '#000000',
        'background-foreground': '#ffffff',
        card: {
          DEFAULT: '#111827',
          foreground: '#ffffff',
        },
        'card-foreground': '#ffffff',
        input: {
          DEFAULT: '#374151',
          foreground: '#ffffff',
        },
        ring: '#0f4c1a',
      },
      fontFamily: {
        cursive: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
} 