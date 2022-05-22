module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#570DF8",
          secondary: "#FD4A44",
          accent: "#37CDBE",
          neutral: "#8997b1",
          "base-100": "#FCFBFE",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          "background_1": "#181D29",
          "background_2": "#1B2634",
          "dark-gray": "#646F80",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
