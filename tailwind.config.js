/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      xl: { max: '1440px' },
      lg: { max: '976px' },
      md: { max: '768px' },
      sm: { max: '600px' },
    },

    extend: {
      width: {
        largeScreen: '46.125rem',
        smallScreen: '23.0625rem',
      },
      colors: {
        // Primary
        lightRed: 'hsl(0, 100%, 67%)',
        lightRedAlpha: 'hsla(0, 100%, 67%, .1)',
        orangeyYellow: 'hsl(39, 100%, 56%)',
        orangeyYellowAlpha: 'hsla(39, 100%, 56%, .1)',
        greenTeal: 'hsl(166, 100%, 37%)',
        greenTealAlpha: 'hsla(166, 100%, 37%, .1)',
        cobaltBlue: 'hsl(234, 85%, 45%)',
        cobaltBlueAlpha: 'hsla(234, 85%, 45%, .1)',
        // Background Gradient
        lightSlateBlue: 'hsl(252, 100%, 67%)',
        lightRoyalBlue: 'hsl(241, 81%, 54%)',
        // Circle Gradient
        violetBlue: 'hsla(256, 72%, 46%, 1)',
        persianBlue: 'hsla(241, 72%, 46%, 0)',
        // Neutral
        paleBlue: 'hsl(221, 100%, 96%)',
        lightLavender: 'hsl(241, 100%, 89%)',
        darkGrayBlue: 'hsl(224, 30%, 27%)',

        footerLink: 'hsl(228, 45%, 44%)',
      },
      fontFamily: {
        hankenGrotesk: ['Hanken Grotesk'],
      },
    },
  },
  plugins: [],
};
