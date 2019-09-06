<template>
	<p class="fragment" :class="type">
		<span v-if="this.$slots.default[0].text">{{this.$slots.default[0].text}}</span>
		<slot v-else />
	</p>
</template>

<script>
export const FRAGMENT_TYPES = {
	GROW: "grow",
	SHRINK: "shrink",
	FADE_OUT: "fade-out",
	FADE_UP: "fade-up",
	FADE_DOWN: "fade-down",
	FADE_RIGHT: "fade-right",
	FADE_LEFT: "fade-left",
	FADE_IN_OUT: "fade-in-then-out",
	FADE_IN_SEMI_OUT: "fade-in-then-semi-out",
	BLUE_ONCE: "highlight-current-blue",
	RED: "highlight-red",
	GREEN: "highlight-green",
	BLUE: "highlight-blue"
};

export default {
	props: ["type"]
};
</script>

<style>
</style>