/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: {'max':'767px' }, // Mobile
      md: {'min':'768px', 'max':'1024px' }, // Tablet
      lg: { 'min': "1025px"}, // NoteBook and PC
    },
    fontFamily: {
      'main': ['Anton', 'serif']
    },
    extend: {},
  },
  plugins: [],
};
