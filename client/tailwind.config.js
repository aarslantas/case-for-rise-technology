module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        form: "60% 1fr auto",
        search: "60% 1fr",
        list: "55% 1fr 1fr",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
