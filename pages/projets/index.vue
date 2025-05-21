<template>
	<div>
		<div class="mb-8 flex h-fit w-full items-center gap-6">
			<h1 class="text-xl">Projets</h1>
			<div
				class="h-px w-full bg-gradient-to-r from-dark to-accent dark:from-white dark:to-accent"
			/>
		</div>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			<NuxtLink
				v-for="(project, index) in projects"
				:key="index"
				:to="'projets/' + project.title"
				@mouseover="$emit('cursor-hovered')"
				@mouseleave="$emit('cursor-left')"
				class="group relative h-[25rem] overflow-hidden rounded"
				:class="
					shouldApplyTestClass(index)
						? 'col-span-1 row-span-1 lg:col-span-2 lg:row-span-2 lg:h-[41rem]'
						: 'lg:h-80'
				"
			>
				<img
					:src="'/img/projects/' + project.pictures[0]"
					alt=""
					loading="lazy"
					class="size-full object-cover transition-all duration-500 group-hover:scale-110"
				/>
				<div class="absolute bottom-6 left-6">
					<div class="h-9 overflow-hidden">
						<h2
							class="text-3xl font-semibold text-white transition-all delay-100 duration-500 lg:translate-y-9 lg:group-hover:translate-y-0"
						>
							{{ project.title }}
						</h2>
					</div>
					<div class="h-6 overflow-hidden">
						<p
							class="italic text-accent transition-all delay-100 duration-500 lg:translate-y-6 lg:group-hover:translate-y-0"
						>
							{{ project.client }}
						</p>
					</div>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
import projects from "~/assets/projects.json";

useHead({
	title: "Projets - F/ONZE, association de production audiovisuelle",
	meta: [
		{
			name: "description",
			content:
				"Découvrez nos projets audiovisuels, de la production à la post-production, en passant par le tournage et le montage.",
		},
	],
});

const emit = defineEmits(["cursor-hovered", "cursor-left"]);

function shouldApplyTestClass(index) {
	const specialIndices = [0]; // Start with first element
	let currentIndex = 0;
	let increment = 7;

	// Generate the pattern of indices that should have the "test" class
	while (currentIndex < projects.length) {
		currentIndex += increment;
		specialIndices.push(currentIndex);

		// Toggle between +7 and +5
		increment = increment === 7 ? 5 : 7;
	}

	return specialIndices.includes(index);
}
</script>
