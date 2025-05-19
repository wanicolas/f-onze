<template>
	<Body
		class="text-pretty bg-light px-4 text-dark md:px-12 dark:bg-dark dark:text-light"
	>
		<div
			aria-hidden="true"
			class="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2"
			:style="{ left: cursorPosition.x + 'px', top: cursorPosition.y + 'px' }"
		>
			<div
				class="size-4 rounded-full bg-accent"
				:class="showOpen && 'hidden'"
			></div>
			<div
				class="font-accent !text-[2.5rem] text-accent"
				:class="!showOpen && 'hidden'"
			>
				Ouvrir
			</div>
		</div>

		<header class="z-10 my-6 flex items-center justify-between md:my-8">
			<NuxtLink to="/">
				<span class="sr-only">Accueil</span>
				<svg
					class="h-6 md:hidden"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 427.72 293.69"
				>
					<path
						d="M427.72.09l-.05.14-.14.45-34.24,73.65-1.18,2.49-14.31,30.98-6.43,13.81-22.6,48.69-.27.54-31.12,66.95-5.66,12.23-1.68,3.58-18.57,40.09h-71.2l51.73-111.47,8.79-18.98,8.61-18.57,34.61-74.46,14.72-31.75,9.6-20.56,8.29-17.89h65.18c1.99,0,3.94,0,5.93.09Z"
						style="fill: #ce2700"
					/>
					<polygon
						points="288.3 .04 257.96 65.75 65.15 65.75 65.15 135.66 225.46 135.66 194.9 201.45 65.15 201.45 65.15 293.66 0 293.66 0 .04 288.3 .04"
						class="fill-dark dark:fill-light"
					/>
				</svg>
				<svg
					class="hidden h-8 md:block"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1040.6 192.01"
				>
					<path
						d="M409.43,58.68c-4.94-11.77-11.77-21.98-20.5-30.58-8.76-8.61-19.11-15.44-31.15-20.5-10.56-4.47-21.83-6.92-33.81-7.45l-.09.3-22.36,48.09c5.27-1.98,11.06-2.96,17.33-2.96,7.1,0,13.66,1.33,19.76,3.99,6.06,2.63,11.18,6.24,15.38,10.8,4.17,4.56,7.45,9.94,9.85,16.15,2.43,6.21,3.61,12.72,3.61,19.55s-1.18,13.28-3.61,19.37c-2.4,6.06-5.68,11.39-9.85,15.94-4.2,4.56-9.32,8.16-15.38,10.83-6.09,2.66-12.66,3.99-19.76,3.99s-13.99-1.33-19.94-3.99c-5.95-2.66-11-6.27-15.17-10.83-4.17-4.55-7.48-9.88-9.88-15.94-.53-1.36-1.04-2.78-1.42-4.23l-.18.35-20.32,43.72-3.7,7.99c.18.21.36.38.56.59,8.73,8.73,19.11,15.56,31.12,20.5,12.04,4.94,25.02,7.39,38.92,7.39s26.92-2.45,38.92-7.39c12.04-4.94,22.39-11.77,31.15-20.5,8.73-8.76,15.56-18.87,20.5-30.38,4.94-11.54,7.39-23.99,7.39-37.42s-2.45-25.62-7.39-37.39Z"
						class="fill-dark dark:fill-light"
					/>
					<path
						d="M279.31.06l-.03.09-.09.3-22.36,48.09-.77,1.63-9.35,20.23-4.2,9.02-14.76,31.8-.18.35-20.32,43.72-3.7,7.99-1.09,2.34-12.13,26.18h-46.5l33.78-72.79,5.74-12.39,5.62-12.13,22.6-48.63,9.61-20.73,6.27-13.43L232.87,0h42.56C276.74,0,278.01,0,279.31.06Z"
						style="fill: #ce2700"
					/>
					<path
						d="M634.33,56.57c-3.36-10.07-8.13-18.85-14.33-26.34-7.75-9.3-17.24-16.66-28.47-22.08C580.29,2.72,568.09,0,554.92,0c-10.59,0-20.27,1.68-29.06,5.04-8.78,3.36-16.79,8.01-24.02,13.95V3.88h-48.43v187.89h50.36v-122.03c1.81-2.32,4.2-4.84,7.17-7.55,2.97-2.71,6.39-5.23,10.27-7.55,3.87-2.32,8.2-4.26,12.98-5.81,4.78-1.55,9.88-2.32,15.3-2.32,11.88,0,21.31,3.49,28.28,10.46,3.62,3.62,6.39,8.07,8.33,13.37,1.94,5.29,2.91,12.59,2.91,21.89v99.56h50.36v-95.69c0-16.27-1.68-29.44-5.04-39.52Z"
						class="fill-dark dark:fill-light"
					/>
					<path
						d="M743.97,149.16l91.04-114.29V3.88h-151.09v42.61h82.13l-89.88,114.28v30.99h166.58v-42.61h-98.79Z"
						class="fill-dark dark:fill-light"
					/>
					<path
						d="M1040.6,94.3c0-12.93-2.15-25.09-6.46-36.5-4.31-11.41-10.33-21.36-18.06-29.85-7.73-8.49-16.92-15.27-27.57-20.34C977.87,2.54,966.21,0,953.53,0c-13.69,0-26.04,2.6-37.07,7.79-11.03,5.2-20.47,12.23-28.33,21.1-7.86,8.87-13.88,19.07-18.06,30.61-4.18,11.53-6.27,23.76-6.27,36.69,0,14.45,2.47,27.57,7.41,39.35,4.94,11.79,11.72,21.86,20.34,30.23,8.62,8.36,18.82,14.83,30.61,19.39,11.79,4.56,24.52,6.84,38.21,6.84,14.45,0,28.45-2.85,42.01-8.55,13.56-5.7,24.78-13.88,33.65-24.52l-28.14-28.14c-4.31,4.82-10.46,9.57-18.44,14.26-7.98,4.69-17.3,7.03-27.95,7.03-6.59,0-12.74-1.08-18.44-3.23-5.7-2.15-10.77-5.13-15.21-8.93-4.44-3.8-8.05-8.37-10.84-13.69-2.79-5.32-4.56-11.28-5.32-17.87h127.75c.76-4.06,1.14-8.75,1.14-14.07ZM913.99,72.25c1.27-8.36,5.58-15.84,12.93-22.43,7.35-6.59,16.22-9.89,26.61-9.89,5.07,0,9.76.89,14.07,2.66,4.31,1.77,8.05,4.18,11.22,7.22s5.7,6.53,7.6,10.46c1.9,3.93,3.11,7.92,3.61,11.98h-76.04Z"
						class="fill-dark dark:fill-light"
					/>
					<polygon
						points="188.26 .03 168.45 42.94 42.55 42.94 42.55 88.59 147.23 88.59 127.28 131.55 42.55 131.55 42.55 191.76 0 191.76 0 .03 188.26 .03"
						class="fill-dark dark:fill-light"
					/>
				</svg>
			</NuxtLink>
			<nav class="flex items-center gap-6 md:gap-10 md:text-xl">
				<NuxtLink to="/projets" class="hover:text-accent">Projets</NuxtLink>
				<NuxtLink to="/lab" class="hover:text-accent">Lab</NuxtLink>
				<NuxtLink to="/a-propos" class="hover:text-accent">À propos</NuxtLink>
				<button @click="toggleColorMode">
					<svg
						class="fill-dark dark:fill-light"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path
							d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"
						></path>
					</svg>
					<span class="sr-only">Activer/Désactiver le mode sombre</span>
				</button>
			</nav>
		</header>

		<main id="main" class="my-16 w-full flex-1 md:my-20">
			<NuxtPage
				@cursor-hovered="showOpen = true"
				@cursor-left="showOpen = false"
			/>
		</main>

		<footer v-if="route.path !== '/'" class="z-10 my-6 md:my-8">
			<div
				class="flex flex-col items-center gap-5 text-xl font-semibold md:mb-12 md:flex-row md:justify-between md:gap-7"
			>
				<NuxtLink
					to="/contact"
					class="text-4xl text-accent transition-all hover:scale-110 md:text-5xl"
				>
					On <br class="hidden md:inline" />
					cause ?
				</NuxtLink>
				<div class="flex flex-col items-center gap-1">
					<NuxtLink to="https://www.instagram.com/f11.prod/">
						Instagram
					</NuxtLink>
					<NuxtLink
						to="https://www.youtube.com/channel/UCxBTaRCwMFDKCuQxPpCKgPQ"
					>
						Youtube
					</NuxtLink>
					<NuxtLink to="https://www.linkedin.com/in/f-onze-prod-848992339/">
						Linkedin
					</NuxtLink>
					<NuxtLink to="https://www.tiktok.com/@f11.prod">Tiktok</NuxtLink>
				</div>
			</div>
			<div
				class="m-4 flex flex-col items-center gap-2 border-t border-dark pt-4 md:flex-row md:justify-between dark:border-light"
			>
				<div
					class="flex flex-col items-center gap-1 md:flex-row-reverse md:gap-6"
				>
					<NuxtLink to="/mentions-legales">Mentions légales</NuxtLink>
					<div
						aria-hidden="true"
						class="hidden size-2 rounded-full bg-dark md:block dark:bg-light"
					/>
					<NuxtLink to="/contact">Contact</NuxtLink>
					<div
						aria-hidden="true"
						class="hidden size-2 rounded-full bg-dark md:block dark:bg-light"
					/>
					<span class="text-xs md:text-base">
						©{{ new Date().getFullYear() }} Tous droits réservés - F/ONZE
					</span>
				</div>
				<NuxtLink to="/">
					<svg
						class="h-6"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 427.72 293.69"
					>
						<path
							d="M427.72.09l-.05.14-.14.45-34.24,73.65-1.18,2.49-14.31,30.98-6.43,13.81-22.6,48.69-.27.54-31.12,66.95-5.66,12.23-1.68,3.58-18.57,40.09h-71.2l51.73-111.47,8.79-18.98,8.61-18.57,34.61-74.46,14.72-31.75,9.6-20.56,8.29-17.89h65.18c1.99,0,3.94,0,5.93.09Z"
							style="fill: #ce2700"
						/>
						<polygon
							points="288.3 .04 257.96 65.75 65.15 65.75 65.15 135.66 225.46 135.66 194.9 201.45 65.15 201.45 65.15 293.66 0 293.66 0 .04 288.3 .04"
							class="fill-dark dark:fill-light"
						/>
					</svg>
					<span class="sr-only">Accueil</span>
				</NuxtLink>
			</div>
		</footer>
	</Body>
</template>

<script setup>
const colorMode = useColorMode();

const toggleColorMode = () => {
	colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
};

const cursorPosition = ref({ x: -200, y: -200 });

const showOpen = ref(false);

onMounted(() => {
	// Add an event listener for mousemove event
	if (window.innerWidth > 1024) {
		document.addEventListener("mousemove", (e) => {
			cursorPosition.value = { x: e.clientX, y: e.clientY };
		});
	}
});

// When the url changes, emit cursor-left
const route = useRoute();

watch(
	() => route.path,
	() => {
		showOpen.value = false;
	},
);
</script>

<style>
/* Transition between pages */
.page-enter-active,
.page-leave-active {
	transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(0.1rem);
}
</style>
