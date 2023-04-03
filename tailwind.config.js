/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    fontFamily: {
      'myFont' : ['nunito'],
    },
    extend: {
      backgroundImage: {
        'skills': "url('/bg-skills.png')",
      },
    
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
    },
  },
  plugins: [],
}

