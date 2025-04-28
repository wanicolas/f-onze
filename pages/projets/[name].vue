<template>
	<div>
		<div class="flex flex-col gap-2 md:flex-row md:gap-6">
			<h1 class="mb-6 text-3xl font-semibold md:text-4xl">
				{{ project.title }}
			</h1>
			<div>
				<h2 class="font-accent text-accent">Client</h2>
				<p>{{ project.client }}</p>
				<h2 class="font-accent text-accent">Directeur</h2>
				<p>{{ project.director }}</p>
			</div>
		</div>

		<div class="space-y-4">
			<iframe
				src="https://www.youtube.com/embed/O-Vu-DMIU40"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
				:title="'Vidéo : ' + project.title"
				class="aspect-video h-full w-full"
			></iframe>

			<div class="flex w-full items-center gap-6">
				<h2 class="text-xl">Galerie</h2>
				<div
					class="to- h-px w-full bg-gradient-to-r from-dark to-accent dark:from-white dark:to-accent"
				></div>
			</div>

			<img
				v-for="(picture, index) in project.pictures"
				:key="index"
				:src="picture.src"
				alt=""
			/>
		</div>
	</div>
</template>

<script setup>
import projects from "~/assets/projects.json";

const route = useRoute();

// get the project object inside the projects array
const project = projects.find((project) => project.name === route.params.name);
</script>
