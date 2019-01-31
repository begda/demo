<template>
	<div class="ass">
		这是移动端
		<el-button @click="dianji()">asdf</el-button>
		<el-button @click="dianji2()">asdf</el-button>
		<div>{{ date }}</div>
		{{ new Date().getTime() }}
	</div>
</template>

<script >
	export default {

		comments: {},
		app() {
			return {
				cache:false,
				header:false,
				iframe:{cache:false}
				// keepAlive: true
				// theme:'blue'
			};
		},
		data() {
			return {
				activeIndex: "1",
				date: new Date().getTime()
			};
		},
		methods: {
			dianji() {
				this.$refresh();
				// this.$store.commit('setNoCache',1)
			},
			dianji2() {
				// this.$refresh();
				this.$store.commit('setNoCache',2)
			},
		},
		async created() {
			let self = this;
		},
		mounted() {},
		activated() {
			// this.$liaohui()
			// this.date=new Date().getTime()
		},
		computed: {}
	};
</script>

<style lang="less" scoped>
	.ass {
		background: rgba(144, 255, 142, 0.2);
	}
</style>
