/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundImage: {
        'zigzag':'linear-gradient(135deg, #040409 25%, transparent 25%), linear-gradient(225deg, #040409 25%, transparent 25%), linear-gradient(45deg, #040409 25%, transparent 25%), linear-gradient(315deg, #040409 25%, #e5e5f7 25%)',
        'diagonal-line':'repeating-linear-gradient( 45deg, #781AC1, #B71AC1 100px, #18181b 18px, #18181b 400px )'
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

