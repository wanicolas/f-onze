<template>
	<div class="mb-8 flex h-fit w-full items-center gap-6">
		<h1 class="text-xl">Projets</h1>
		<div
			class="to- h-px w-full bg-gradient-to-r from-dark via-accent dark:from-white"
		></div>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		<div
			v-for="(project, index) in projects"
			:key="index"
			class="[&:nth-child(3n)] col-span-1 md:col-span-2 lg:col-span-1 [&:nth-child(5n+1)]:col-span-2"
		>
			<h2 class="text-lg font-semibold">{{ project.title }}</h2>
			<p>{{ project.description }}</p>
		</div>
	</div>
</template>

<script setup>
const projects = ref([
	{
		title: "Projet 1",
		description: "Description du projet 1",
	},
	{
		title: "Projet 2",
		description: "Description du projet 2",
	},
	{
		title: "Projet 3",
		description: "Description du projet 3",
	},
	{
		title: "Projet 4",
		description: "Description du projet 4",
	},
	{
		title: "Projet 5",
		description: "Description du projet 5",
	},
	{
		title: "Projet 6",
		description: "Description du projet 6",
	},
	{
		title: "Projet 7",
		description: "Description du projet 7",
	},
	{
		title: "Projet 8",
		description: "Description du projet 8",
	},
	{
		title: "Projet 9",
		description: "Description du projet 9",
	},
	{
		title: "Projet 10",
		description: "Description du projet 10",
	},
	{
		title: "Projet 11",
		description: "Description du projet 11",
	},
	{
		title: "Projet 12",
		description: "Description du projet 12",
	},
	{
		title: "Projet 13",
		description: "Description du projet 13",
	},
	{
		title: "Projet 14",
		description: "Description du projet 14",
	},
	{
		title: "Projet 15",
		description: "Description du projet 15",
	},
	{
		title: "Projet 16",
		description: "Description du projet 16",
	},
	{
		title: "Projet 17",
		description: "Description du projet 17",
	},
	{
		title: "Projet 18",
		description: "Description du projet 18",
	},
]);
</script>
