import defaultTheme from "tailwindcss/defaultTheme";

export default {
  theme: {
    extend: {
      // colors: {
      //   beige: "#fffff",
      //   grayish: "#000000",
      //   accent: "#ce2700",
      // },
      fontFamily: {
        sans: ["CreatoDisplay", ...defaultTheme.fontFamily.sans],
        accent: ["Jacquard24", ...defaultTheme.fontFamily.serif],
      },
    },
  },
};
