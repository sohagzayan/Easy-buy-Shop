module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "own-primary": "#09BE8B",
      "own-secondary": "#28CC8B",
      "own-ternary": "#1E2738",
      "own-text": "#7B80A8",
      "own-white": "#ffffff",
      "own-black": "#000000",
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#294962",
          secondary: "#EE574C",
          accent: "#F8F9FC",
          neutral: "#8997b1",
          "base-100": "#F8F9FC",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          background_1: "#181D29",
          background_2: "#1B2634",
          "dark-gray": "#646F80",
          black: "#1B2634",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
