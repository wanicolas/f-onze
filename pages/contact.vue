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

		<!-- Hidden email by the randomized string given by formsubmit -->
		<form
			action="https://formsubmit.co/d4044528eb35eb923ddf4d1b9c15ec09"
			method="POST"
			class="flex-1"
		>
			<div class="space-y-4">
				<Input
					required
					label="Nom complet"
					name="nom complet"
					autocomplete="name"
					placeholder="Jean Dupont"
				/>
				<Input
					required
					type="email"
					label="Email"
					name="email"
					autocomplete="email"
					placeholder="jeandupont@mail.fr"
				/>
				<Input
					required
					label="Sujet"
					name="_subject"
					placeholder="Idée de collaboration"
				/>
				<Input
					label="Téléphone (optionnel)"
					type="tel"
					name="téléphone"
					autocomplete="tel-national"
					placeholder="07 00 00 00 00"
				/>
				<Input
					required
					type="textarea"
					rows="3"
					label="Message"
					name="message"
					placeholder="Hey, je voulais vous parler de mon projet..."
				/>
			</div>

			<button
				type="submit"
				class="mt-6 w-full rounded border border-accent px-2 font-accent !text-3xl text-accent hover:scale-105 focus:outline-none focus:ring-2 focus:ring-dark dark:focus:ring-white"
			>
				Envoyer
			</button>

			<!-- Hidden input used by formsubmit.co -->
			<!-- See full documentation at https://formsubmit.co/documentation -->
			<input
				type="hidden"
				name="_next"
				value="https://f-onze.vercel.app/merci"
			/>
			<input
				type="hidden"
				name="_autoresponse"
				value="Ton message a bien été envoyé ! On esseyera de te répondre le plus vite possible, c'est promis ! PS : le week-end en revanche on dort, tu nous en voudra pas j'espère."
			/>
			<input type="hidden" name="_template" value="box" />
		</form>
	</div>
</template>
