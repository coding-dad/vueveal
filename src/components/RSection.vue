<template>
	<section :data-markdown="markdown" :data-background-image="bgImage" :data-background-size="bgSize">
		<div v-if="content">{{ content }}</div>
		<slot></slot>
	</section>
</template>

<script>
export default {
	name: "r-section",
	props: {
		markdown: {
			type: Boolean,
			default: false
		},
		bgImage: {
			type: String,
			default: null
		},
		bgSize: {
			type: String,
			default: null
		}
	},

	data: () => ({ content: null }),

	mounted() {
		// If length === 1, we don't have tags inside, so we present text only
		// Otherwise we render the slot data only to don't get the text twice
		this.content =
			this.$slots.default.length === 1 && this.$slots.default[0].text;
	}
};
</script>

<style>
</style>