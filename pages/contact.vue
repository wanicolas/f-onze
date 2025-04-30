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
				name="_subject"
				placeholder="Idée de collaboration"
			/>
			<Input label="Téléphone" name="phone" placeholder="07 00 00 00 00" />
			<Input
				required
				type="textarea"
				rows="3"
				label="Message"
				name="message"
				placeholder="Hey, je voulais vous parler de mon projet..."
			/>
			<button
				type="submit"
				class="w-fit rounded-lg bg-accent px-4 py-1.5 font-accent !text-[1.7rem] font-medium !leading-7 text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-dark dark:focus:ring-white"
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
		</form>
	</div>
</template>
