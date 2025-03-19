import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["nuxt.config.ts"],
	theme: {
		extend: {
			colors: {
				light: "#fefae0",
				dark: "#0c0c0c",
				accent: "#ce2700",
			},
			fontFamily: {
				sans: ["CreatoDisplay", ...defaultTheme.fontFamily.sans],
				accent: ["Jacquard24", ...defaultTheme.fontFamily.serif],
			},
		},
	},
};
