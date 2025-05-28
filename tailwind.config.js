
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        morning:{
          light: '#F7ECA2',
          DEFAULT:'#F7ECA2',
          box:'#FBB860'
        },
        noon:{
          light:'#F7C7A2',
          DEFAULT:'#F7C7A2',
          box:'#FB9660'
        }
      }
    },
  },
  plugins: [],
}
