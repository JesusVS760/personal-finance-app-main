/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      textColor: { "primary-color": "#eb4034" },
      colors: {
        // Define your custom colors here
        theme1: "#277C78",
        theme2: "#626070",
        theme3: "#82C9D7",
        theme4: "#F2CDAC",
        theme5: "#DE3163",
      },
    },
  },
  plugins: [],
};
