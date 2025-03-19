<template>
	<div class="w-full">
		<label
			:for="id"
			class="mb-2 block text-sm font-medium text-dark dark:text-white"
		>
			{{ label }}
		</label>
		<component
			:is="type == 'textarea' ? 'textarea' : 'input'"
			type="text"
			:id="id"
			class="block w-full rounded-lg border-2 border-dark bg-transparent p-2.5 text-sm text-dark placeholder-gray-500 ring-dark focus:ring dark:border-light dark:text-white dark:placeholder-gray-400 dark:ring-light"
			:placeholder="placeholder"
			required
		/>
	</div>
</template>

<script setup>
defineProps({
	label: {
		type: String,
		required: true,
	},
	placeholder: {
		type: String,
	},
	type: {
		type: String,
		default: "input",
	},
});

const id = useId();
</script>
