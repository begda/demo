<template>

	<iframe :src="route.src" :style="{width: '100%',
	padding:0,
	margin:0,
	border:'none',
	height:pageHeight}"></iframe>

</template>

<script>
	export default {
		name: "frame",
		props: {
			type: {
				type: String,
				default: 'page'
			},
		},
		computed: {
			route() {
				return this.$route.query
			},
			pageHeight() {
				return this.$store.state.pageHeight - 1 + 'px'
			}
		}
	}
</script>

<style scoped>

</style>
