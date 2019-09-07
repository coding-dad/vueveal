<template>
	<div class="example_one">
		<svg
			@mousemove="onMouseMove"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<rect x="0" y="0" height="150" width="300" :style="currentColor" />
		</svg>
	</div>
</template>

<script>
export default {
	name: "ex-one",

	data: () => ({
		redValue: 0,
		greenValue: 255
	}),

	computed: {
		currentColor() {
			return `fill: rgb(${this.redValue}, ${
				this.greenValue
			}, ${Math.floor(Math.random() * 255)})`;
		}
	},

	methods: {
		onMouseMove(evt) {
			this.redValue = this.map_range(evt.offsetX, 0, 300, 0, 255);
			this.greenValue = this.map_range(evt.offsetY, 0, 150, 0, 255);
			// console.log(":: y", evt.offsetX, evt.offsetY);
		},

		map_range(value, low1, high1, low2, high2) {
			return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
		}
	}
};
</script>

<style scoped>
	.example_one {
		text-align: center;
	}
</style>