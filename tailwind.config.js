/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js,ts,tsx,jsx}',
    './src/components/**/*.{html,js,ts,tsx,jsx}',
    './src/**/*.{html,js,ts,tsx,jsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

