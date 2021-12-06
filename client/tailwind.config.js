module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        form: "60% 1fr auto",
        search: "60% 1fr",
        list: "55% 35% 1fr",
      },
      fontFamily: {
        body: ["Roboto"],
      },
    },
    minHeight: {
      12: "12rem",
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
