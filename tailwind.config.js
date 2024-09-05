/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'cream': '#fffdd0',
      'purple': '#310652',
      'purple-800': '#5b21b6',
      'gray-400': '#aaaaaa',
      'gray-300': '#dedede',
      'gray-200': '#ececec',
      'gray-100': '#fafafa',
      'light-blue': '#ADD8E6',
      'lavender': '#edd1ff',
      'linkedin-blue': '#0077b5',
      'duen-gold-100': '#fff2d7',
      'duen-gold-200': '#edd6aa',
      'duen-gold-300': '#c7aa72',
      'duen-gold-400': '#a68649',
      'duen-gold-500': '#876728',
      'duen-purple-100': '#665269',
      'duen-purple-200': '#453648',
      'duen-purple-300': '#271b29',
      'duen-purple-400': '#221125',
      'duen-purple-500': '#1b091e',
    },
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        raleway: ['var(--font-raleway)'],
        abel: ['var(--font-abel)'],
        teko: ['var(--font-teko)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'landing':"url('/landing-content/grads1.jpeg')"
      },
    },
  },
  plugins: [],
}
