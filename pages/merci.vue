<template>
	<div>
		<div class="flex flex-col items-center gap-4 text-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="#000000"
				viewBox="0 0 256 256"
				aria-hidden="true"
				class="size-16 fill-dark dark:fill-light"
			>
				<path
					d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
				></path>
			</svg>
			<h1 class="text-2xl font-medium md:text-3xl">
				Merci, on devrait avoir reçu ton mail !
			</h1>
			<p>
				On esseyera de te répondre le plus vite possible, c'est promis ! En
				revanche le week-end on dort, tu nous en voudra pas j'espère.
			</p>
		</div>

		<NuxtLink
			to="/"
			class="mx-auto mt-8 block w-fit rounded border border-dark px-10 py-1 text-dark transition-all hover:bg-dark hover:text-white dark:border-white dark:text-white hover:dark:bg-light hover:dark:text-dark"
		>
			Retour à l'accueil
		</NuxtLink>
	</div>
</template>

<script setup>
useHead({
	title: "Formulaire envoyé - F/ONZE, association de production audiovisuelle",
	meta: [
		{
			name: "description",
			content:
				"Merci d'avoir rempli le formulaire de contact. Nous avons bien reçu votre message et nous vous répondrons dès que possible.",
		},
	],
});
</script>
