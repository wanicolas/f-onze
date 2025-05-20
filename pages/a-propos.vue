<template>
	<div class="mx-auto max-w-5xl">
		<h1 class="mb-5 text-2xl font-semibold md:text-3xl">
			Association de production
			<span class="font-accent text-accent">audiovisuelle</span>
		</h1>
		<p class="mb-20 text-lg md:text-xl">
			Chez F/ONZE, chaque projet devient une aventure, chaque création une
			exploration. Grâce à notre expertise en communication et production, nous
			traversons les univers du digital, du sport et de l'humain, en capturant
			l'essence de chaque histoire. Ici, on ne se contente pas de produire, on
			façonne des expériences uniques qui résonnent profondément. Notre objectif
			va au-delà de la simple production : on cherche à éveiller l’imagination
			et à enrichir les perspectives. F/ONZE s’engage à repousser les limites de
			la création traditionnelle, en invitant chacun à plonger dans des mondes
			où innovation technologique et expression artistique se rencontrent pour
			susciter émotions et réflexions.
		</p>

		<div class="mb-8 flex h-fit w-full items-center gap-6">
			<h2 class="shrink-0 text-2xl font-medium">L'équipe au complet</h2>
			<div
				class="h-px w-full bg-gradient-to-r from-dark to-accent dark:from-white dark:to-accent"
			/>
		</div>

		<div
			class="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
		>
			<figure v-for="(member, index) in members" :key="index" class="relative">
				<img
					:src="'img/members/solo/' + member.img"
					alt=""
					class="mb-2 aspect-[3/4] rounded object-cover"
				/>
				<figcaption>
					<p
						class="absolute left-4 top-2 font-accent !text-4xl font-semibold text-white"
					>
						{{ member.firstname }}
					</p>
					<p class="text-lg">{{ member.role }}</p>
				</figcaption>
			</figure>
		</div>
	</div>
</template>

<script setup>
import members from "~/assets/members.json";

useHead({
	title: "À propos - F/ONZE, association de production audiovisuelle",
	meta: [
		{
			name: "description",
			content:
				"Vous-voulez en savoir plus sur nous ? Cette page est faites pour vous !",
		},
	],
});
</script>
