/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js',
],
  theme: {
    extend: { colors: {
      primary: "green",
      secondary: "lime",
    }, container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
      },
    },},
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}

