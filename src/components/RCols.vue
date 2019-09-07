<template>
	<div class="container">
		<div class="col">
			<slot name="left" />
		</div>
		<div class="col">
			<slot name="right" />
		</div>
	</div>
</template>

<script>
export default {
	name: "r-cols"
};
</script>

<style scoped>
	.container {
		display: flex;
	}
	.col {
		flex: 1;
	}
</style>