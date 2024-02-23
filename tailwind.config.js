/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: {'max':'991px' }, // Mobile


      lg: { 'min': "992px" }, // NoteBook and PC
    },
    extend: {},
  },
  plugins: [],
};
