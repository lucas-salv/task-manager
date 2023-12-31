/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      primary: {
        100: '#382479',
        200: '#2E1B6B',
        300: '#231355'
      },
      secondary: {
        100: '#2CC78F',
        200: '#25A778',
        300: '#208E67'
      },
      info: '#4299E1',
      success: '#2CC78F',
      warning: '#ECC94B',
      error: '#F56565',
      textColor: 'rgba(255, 255, 255, 0.36)',
      borderColor: '#382479'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
