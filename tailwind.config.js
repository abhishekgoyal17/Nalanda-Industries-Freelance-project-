module.exports = {
  plugins: [require("daisyui")],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Saira',
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        // lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#23262F',
        accent: '#15615e',
        grey: {
          DEFAULT: '#919297',
          1: '#D9D9D9',
          2: '#E7E9EB',
          3: '#F5F5F5',
        },
        white: '#fff',
        pink: 'pink',
      },
      backgroundImage: (theme) => ({
        hero: 'url("/src/assets/img/door-graphics-2.jpg")',
        door: 'url("/src/assets/img/door-graphics-1.jpg")',
        newsletter: 'url("/src/assets/img/newsletter.png")',
        add: 'url("/src/assets/img/add-bg.png")',
        mission: 'url("/src/assets/img/door-graphics-4.jpg")',
        AboutNalanda:'url("/src/assets/img/window-graphics-1.jpg")',
      }),
      dropShadow: {
        primary: '0px 4px 10px rgba(15, 27, 51, 0.05);',
      },
    },
  },
  plugins: [],
};
