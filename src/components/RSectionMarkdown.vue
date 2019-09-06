<template>
	<section data-markdown>
		<!-- eslint-disable-next-line vue/no-textarea-mustache -->
		<textarea ref="ta" data-template>{{this.$slots.default[0].text}}</textarea>
	</section>
</template>

<script>
export default {
	name: "r-section-markdown",

	data: () => ({
		content: ""
	}),

	mounted() {
		this.$refs.ta.value = this.$slots.default[0].text;
	}
};
</script>