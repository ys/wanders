const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "media",
  plugins: [require('@tailwindcss/typography'),],
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#e6fffa',
          200: '#b2f5ea',
          300: '#81e6d9',
          400: '#4fd1c5',
          500: '#38b2ac',
          600: '#319795',
          700: '#2c7a7b',
          800: '#285e61',
          900: '#234e52',
        },
        orange: {
          100: '#fffaf0',
          200: '#feebc8',
          300: '#fbd38d',
          400: '#f6ad55',
          500: '#ed8936',
          600: '#dd6b20',
          700: '#c05621',
          800: '#9c4221',
          900: '#7b341e',
        },
        sunray: {
          100: '#FDF8EE',
          200: '#FBECD5',
          300: '#F8E1BC',
          400: '#F2CB8A',
          500: '#EDB458',
          600: '#D5A24F',
          700: '#8E6C35',
          800: '#6B5128',
          900: '#47361A',
        },
        accent: {
          100: '#FDF8EE',
          200: '#FBECD5',
          300: '#F8E1BC',
          400: '#F2CB8A',
          500: '#EDB458',
          600: '#D5A24F',
          700: '#8E6C35',
          800: '#6B5128',
          900: '#47361A',
        },
        accentblue: {
          100: '#E6F6FC',
          200: '#BFE9F8',
          300: '#99DCF3',
          400: '#4DC1EA',
          500: '#00A7E1',
          600: '#0096CB',
          700: '#006487',
          800: '#004B65',
          900: '#003244',
        },
        dark: "#2d2f34",
        darker: "#1F2023"
      }
    }
  }
};
