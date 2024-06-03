/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  darkMode: 'selector',
  theme: {
    container: {
      padding: '0.5rem'
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    spacing: {
      'xxs': '0.5rem',
      'xs': '0.75rem',
      'sm': '0.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '10rem',
    },
    extend: {
      backgroundImage: {
        'zigzag':'linear-gradient(135deg, #040409 25%, transparent 25%), linear-gradient(225deg, #040409 25%, transparent 25%), linear-gradient(45deg, #040409 25%, transparent 25%), linear-gradient(315deg, #040409 25%, #e5e5f7 25%)',
        'diagonal-line':'repeating-linear-gradient( 45deg, #DCDEDD, #74483F 100px, #4B4643 18px, #F9F9F9 400px )'
      },
      backgroundSize: {
        '80': '210px 210px'
      },
      backgroundPosition: {
        '40': '40px 0, 40px 0, 0 0, 0 0'
      },
      keyframes: {
        'on-load-title': {
          '0%': { color: '#781AC1', textShadow: '10px 5px #7e22ce', top: '0px' },
          '25%': { textShadow: '5px 5px #B71AC1', top: '8px' },
          '50%': { textShadow: '5px 5px #4a044e' },
          '100%': { color: '#e2e8f0', textShadow: '5px 5px #ec4899' },
        },
      },
      animation: {
        'on-load-title': 'on-load-title 3s ease-in-out infinite', 
      }
    },
  },
  plugins: [],
}

 // Alabaster #F9F9F9   Iron #DCDEDD     Spicy Mix #74483F    Masala #4B4643