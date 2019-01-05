<template>
	<div id="app">
		<!--动态组件,从路由里获取的 layout优先级要高于 主题切换的优先级-->
		<component :is="meta.layout"></component>
	</div>
</template>

<script>

	import {dark, blue, mobile} from '@/layouts/default/index'

	export default {
		name: "app",
		components: {
			"dark": dark,
			"blue": blue,
			"mobile": mobile,
		},
		data() {
			return {};
		},
		methods: {},
		async created() {
			let self = this;
			this.$store.commit('setLayout') //设置默认主题
		},
		mounted() {

		},
		computed: {
			// layout() {
			// 	return this.$store.getters.layout
			// },
			meta() {
				return this.$store.state.meta
			},
			menus() {
				return this.$store.state.api.navMenu
			}
		}
	};
</script>

<style lang="less">


</style>
