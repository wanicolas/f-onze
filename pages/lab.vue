<template>
	<div class="columns-4 gap-4">
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
</script>
