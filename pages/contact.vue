<template>
	<form>
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
			class="rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
		>
			Envoyer
		</button>
	</form>
</template>
