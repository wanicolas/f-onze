// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		rootAttrs: {
			class: "min-h-dvh flex flex-col",
		},
		head: {
			link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
		},
		pageTransition: { name: "page", mode: "out-in" },
	},
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
	css: ["~/assets/fonts.css"],
	colorMode: {
		preference: "dark",
	},
});
