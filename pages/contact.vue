<template>
	<div
		class="m-auto flex max-w-4xl flex-1 flex-col gap-16 md:flex-row md:gap-20"
	>
		<div class="shrink-0">
			<h1 class="mb-5 text-xl font-semibold md:text-2xl">
				Et si on
				<span class="font-accent text-accent">discutait</span> ?
			</h1>
			<p>Promis, on tachera de vous répondre au plus vite !</p>
		</div>
		<form class="flex flex-1 flex-col gap-3">
			<Input label="Nom complet" placeholder="Jean Dupont" />
			<Input label="Email" placeholder="jeandupont@mail.fr" />
			<Input label="Sujet" placeholder="Idée de collaboration" />
			<Input label="Téléphone" placeholder="07 00 00 00 00" />
			<Input
				type="textarea"
				label="Message"
				placeholder="Hey, je voulais vous parler de mon projet..."
			/>
			<button
				type="submit"
				class="w-fit rounded-lg bg-accent px-5 py-2.5 font-accent text-sm font-medium text-white hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300"
			>
				Envoyer
			</button>
		</form>
	</div>
</template>
