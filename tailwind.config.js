/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
       "shadow" : "rgba(0, 0, 0, 0.364)"
      }
    },
    container:{
      center:true,
      padding:"4rem",
    }

  },
  plugins: [
    
  ],
}

