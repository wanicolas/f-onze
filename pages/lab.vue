<template>
	<div class="columns-2 gap-4 sm:columns-3 lg:columns-4">
		<img
			v-for="(image, index) in imageFiles"
			:key="index"
			:src="image.name.replace('/public', '')"
			alt=""
			loading="lazy"
			class="mb-4 rounded"
		/>
	</div>
</template>

<script setup>
// import all images from /public/img/lab with Vite global import
const imageFiles = import.meta.glob("/public/img/lab/**/*.avif");

useHead({
	title: "Lab - F/ONZE, collectif de production audiovisuelle",
	meta: [
		{
			name: "description",
			content: "Photos de nos différents projets et de leurs backstages.",
		},
	],
});
</script>
