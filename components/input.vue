<template>
	<div class="w-full">
		<label
			:for="id"
			class="mb-2 block text-sm font-medium text-dark dark:text-white"
		>
			{{ label }}{{ required ? "*" : null }}
		</label>
		<component
			:is="type == 'textarea' ? 'textarea' : 'input'"
			:type="type"
			:autocomplete="autocomplete"
			:id="id"
			:rows="type == 'textarea' ? 4 : null"
			:name="name"
			class="block w-full rounded border-2 border-dark bg-transparent p-2.5 text-sm text-dark placeholder-gray-500 ring-dark focus:outline-none focus:ring-1 focus:ring-offset-0 dark:border-light dark:text-white dark:placeholder-gray-400 dark:ring-light"
			:placeholder="placeholder"
			:required="required"
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
	autocomplete: {
		type: String,
	},
	required: {
		type: Boolean,
		default: false,
	},
	name: {
		type: String,
		default: null,
	},
});

const id = useId();
</script>
