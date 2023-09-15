//const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FBE5FF",
          100: "#F7CBFF",
          200: "#F1A6FF",
          300: "#E990FA",
          400: "#D778E9",
          500: "#C562D8",
          600: "#B24CC5",
          700: "#9E39B0",
          800: "#851A99",
          900: "#69067B",
        },
      },
     
      spacing: {
        21: '5.25rem',
        84: '21rem',
        91: '22.75rem',
      },
      maxHeight: (theme, { breakpoints }) => ({
        none: 'none',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        full: '100%',
        ...breakpoints(theme('screens')),
      }),
    },
    typography: (theme) => ({
      default: {
        css: {
          a: {
            color: theme("colors.brand.600"),
            "&:hover": {
              color: theme("colors.brand.400"),
            },
          },
        },
      },
    }),
  },
  variants: {
    display: ['responsive', 'hover', 'focus', "group-hover"],
    backgroundColor: ["responsive", "hover", "focus", "group-hover", "focus-within", "odd"],
    backgroundOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderWidth: ["responsive", "odd", "hover", "focus", "odd"],
    borderRadius: ['responsive', 'hover', 'focus'],
    fontFamily: ["responsive", "hover", "focus"],
    padding: ['responsive', 'hover', 'focus', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textColor: ["responsive", "hover", "focus", "group-hover", "focus-within", "odd"],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [require("@tailwindcss/typography")],
}