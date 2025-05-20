<template>
	<div v-if="project" class="mx-auto max-w-[120rem]">
		<div class="mb-6 flex flex-col justify-between gap-4 md:flex-row">
			<h1 class="text-3xl font-semibold md:text-4xl">
				{{ project.title }}
			</h1>
			<div class="flex gap-8 text-right italic">
				<div>
					<h2 class="text-accent">Client</h2>
					<p>{{ project.client }}</p>
				</div>
				<div>
					<h2 class="text-accent">Réalisateur</h2>
					<p>{{ project.director }}</p>
				</div>
			</div>
		</div>
		<div class="space-y-4">
			<iframe
				:src="project.videoUrl"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
				:title="'Vidéo : ' + project.title"
				class="aspect-video h-full w-full"
			></iframe>
			<div class="flex w-full items-center gap-6">
				<h2 class="text-xl">Galerie</h2>
				<div
					class="h-px w-full bg-gradient-to-r from-dark to-accent dark:from-white dark:to-accent"
				/>
			</div>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<img
					class="aspect-video size-full rounded object-cover"
					:src="project.pictures[0]"
					alt=""
				/>
				<img
					class="aspect-video size-full rounded object-cover"
					:src="project.pictures[1]"
					alt=""
				/>
			</div>
			<img
				class="aspect-video w-full rounded object-cover"
				:src="project.pictures[2]"
				alt=""
			/>
		</div>
		<div
			v-html="project.description"
			class="prose mx-auto mt-20 text-sm dark:prose-invert md:text-lg"
		></div>
	</div>
	<div v-else>Ce projet ne semple pas exister...</div>
</template>

<script setup>
import projects from "~/assets/projects.json";

useHead({
	title: "Projet spécifique - F/ONZE, association de production audiovisuelle",
	meta: [
		{
			name: "description",
			content: "Découvrez ce projet réalisé par F/ONZE.",
		},
	],
});

const route = useRoute();

// get the project object inside the projects array knowing the title is in the url after "projets/"
const project = projects.find((project) => project.title === route.params.name);
</script>
