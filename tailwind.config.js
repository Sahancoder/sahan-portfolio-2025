/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0b0b',
        accent: '#E97319',
        card: '#111111',
        muted: '#9CA3AF'
      },
      fontFamily: {
        heading: ['Poppins','ui-sans-serif','system-ui'],
        body: ['Inter','ui-sans-serif','system-ui']
      }
    }
  },
  plugins: []
}
