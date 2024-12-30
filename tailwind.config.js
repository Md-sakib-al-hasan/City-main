/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import tailwindcssAnimated from 'tailwindcss-animated';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer': "url('src/assets/Footer/Footer.png')",
        'pantagon': "url('src/assets/Header/pantagon.jpg')",
      },
      content: {
        "['']": "''",
      },
    },
  },
  plugins: [
    daisyui,
    tailwindcssAnimated,
  ],
};
