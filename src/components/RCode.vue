<template>
	<pre><code
	class="hljs"
	:data-line-numbers="lineNumbers"
	:data-trim="trim"
	:data-noescape="noescape"
>{{code}}</code></pre>
</template>

<script>
export default {
	name: "r-code",
	props: {
		"line-numbers": {
			type: String,
			default: null
		},
		trim: {
			type: Boolean,
			default: true
		},
		noescape: {
			type: Boolean,
			default: false
		}
	},

	data: () => ({
		code: ""
	}),

	mounted() {
		this.code =
			this.$slots.default[0].text ||
			this.$slots.default[0].children[0].text; //.trim(); // content of textarea
	}
};
</script>

<style>
</style>