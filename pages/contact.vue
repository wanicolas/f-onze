<template>
	<div
		class="m-auto flex max-w-4xl flex-1 flex-col gap-16 md:flex-row md:gap-20"
	>
		<div class="shrink-0">
			<h1 class="mb-5 text-xl font-semibold md:text-2xl">
				Et si on
				<span class="font-accent text-accent">discutait</span> ?
			</h1>
			<p>Promis, on essayera de te répondre au plus vite !</p>
		</div>
		<form
			action="https://formsubmit.co/f11communication.team@gmail.com"
			method="POST"
			class="flex-1 space-y-3"
		>
			<Input
				required
				label="Nom complet"
				name="name"
				placeholder="Jean Dupont"
			/>
			<Input
				required
				label="Email"
				name="email"
				placeholder="jeandupont@mail.fr"
			/>
			<Input
				required
				label="Sujet"
				name="Sujet"
				placeholder="Idée de collaboration"
			/>
			<Input label="Téléphone" placeholder="07 00 00 00 00" />
			<Input
				required
				type="textarea"
				rows="3"
				label="Message"
				name="Message"
				placeholder="Hey, je voulais vous parler de mon projet..."
			/>
			<button
				type="submit"
				class="w-fit rounded-lg bg-accent px-4 py-1.5 font-accent !text-[1.7rem] font-medium !leading-7 text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-dark dark:focus:ring-white"
			>
				Envoyer
			</button>
			<input
				type="hidden"
				name="_next"
				value="https://f-onze.vercel.app/merci"
			/>
		</form>
	</div>
</template>
