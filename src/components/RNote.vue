<template>
	<aside class="notes">{{ note }}</aside>
</template>

<script>
export default {
	name: "r-note",

	data: () => ({
		note: ""
	}),

	mounted() {
		this.note = this.$slots.default[0].text;
	}
};
</script>

<style>
</style>