<template>
	<div :style="{padding:type==='page'?'15px':'0', overflow:'auto', height:pageHeight}">
		<slot></slot>
	</div>
</template>

<script>

	export default {
		name: "durex",
		props:{
			type:{
				type: String,
				default: 'page'
			},
		},
		computed: {
			pageHeight() {
				return this.$store.state.pageHeight - 1 + 'px'
			}
		}

	}
</script>

<style scoped>

</style>
