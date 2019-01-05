<template>
	<div class="ass">
		这是liaohui 移动
	</div>
</template>

<script>

	import mixin from './mixin'

	export default {
		app() {
			return {
				header: true,
				wexin: {tabbar: false},
				app: {footer: false}
			}
		},
		mixins: [mixin]
	};
</script>

<style lang="less" scoped>
	.ass {
		background: rgba(144, 255, 142, 0.2);
	}

</style>
