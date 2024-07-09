const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Open Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#4f83cc', // light shade of primary color (trustworthy blue)
          DEFAULT: '#0056b3', // primary color (trustworthy blue)
          dark: '#003366', // dark shade of primary color (trustworthy blue)
        },
        secondary: {
          light: '#ffcccb', // light shade of secondary color
          DEFAULT: '#ff6347', // secondary color
          dark: '#cc4b38', // dark shade of secondary color
        },
        accent: {
          light: '#ffeb3b', // light shade of accent color
          DEFAULT: '#ffc107', // accent color
          dark: '#ffa000', // dark shade of accent color
        },
        info: {
          light: '#62b1f6', // light shade of info color
          DEFAULT: '#2196f3', // info color
          dark: '#1976d2', // dark shade of info color
        },
        success: {
          light: '#81c784', // light shade of success color
          DEFAULT: '#4caf50', // success color
          dark: '#388e3c', // dark shade of success color
        },
        warning: {
          light: '#ffb74d', // light shade of warning color
          DEFAULT: '#ff9800', // warning color
          dark: '#f57c00', // dark shade of warning color
        },
        danger: {
          light: '#e57373', // light shade of danger color
          DEFAULT: '#f44336', // danger color
          dark: '#d32f2f', // dark shade of danger color
        },
        neutral: {
          light: '#f5f5f5', // light shade of neutral color
          DEFAULT: '#9e9e9e', // neutral color
          dark: '#616161', // dark shade of neutral color
        },
        black: {
          light: '#555555', // lighter shade of black (dark gray)
          DEFAULT: '#000000', // default black color
          dark: '#0D0D0D', // darker shade of black
        },
        highlight: {
          light: '#FFD700', // lighter shade of highlight color
          DEFAULT: '#DAA520', // default highlight color
          dark: '#B8860B', // darker shade of highlight color
        }
      },
    },
  },
  plugins: [],
};
