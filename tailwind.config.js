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

          DEFAULT: '#4A2F25',

          foreground: '#ffffff',

        },

        secondary: {

          DEFAULT: '#120C09',

          foreground: '#ffffff',

        },

        accent: {

          DEFAULT: '#6A4A38',

          foreground: '#ffffff',

        },

        muted: {

          DEFAULT: '#1C120F',

          foreground: '#9ca3af',

        },

        'muted-foreground': '#9ca3af',

        background: '#120C09',

        'background-foreground': '#ffffff',

        card: {

          DEFAULT: '#1C120F',

          foreground: '#ffffff',

        },

        'card-foreground': '#ffffff',

        input: {

          DEFAULT: '#37231D',

          foreground: '#ffffff',

        },

        ring: '#4A2F25',

        foreground: '#ffffff',

        border: '#37231D',

        destructive: {

          DEFAULT: '#ef4444',

          foreground: '#ffffff',

        },

        success: {

          DEFAULT: '#7A5944',

          foreground: '#ffffff',

        },

        warning: {

          DEFAULT: '#eab308',

          foreground: '#000000',

        },

        wood: {

          darkest: '#120C09',

          dark: '#1C120F',

          mid: '#241814',

          base: '#2D1D18',

          light: '#37231D',

          highlight: '#4A2F25',

          warm: '#6A4A38',

          glow: '#7A5944',

          cream: '#E8DDD4',

        },

      },

      fontFamily: {

        cursive: ['Dancing Script', 'cursive'],

      },

    },

  },

  plugins: [],

}

