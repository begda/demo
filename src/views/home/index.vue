<template>
	<ba-durex>

		asdfas
		这是home pc 页面{{pageHeight}}
		<el-button @click="dianji()">asdf</el-button>
		<el-button @click="dianji2()">asdf</el-button>
		<div>{{ date }}</div>
		{{ new Date().getTime() }}
		<el-card>
			asfdasdf
		</el-card>
		<p style="height: 10000px"></p>

	</ba-durex>
</template>

<script>
	export default {

		comments: {},
		app() {
			return {
				cache:false,
				// header:false,
				iframe: {cache: false}
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
				let self = this;
				// this.$store.commit('pageLoading',true)
				this.$refresh();

				// this.$store.commit('setNoCache',1)
			},
			dianji2() {
				// this.$refresh();


			},
		},
		async created() {
			let self = this;

		},
		mounted() {
			let self = this;
			// setTimeout(()=>{self.$store.commit('pageLoading',false)},2000)

		},
		activated() {
			// this.$liaohui()
			// this.date=new Date().getTime()
		},
		computed: {
			pageHeight() {
				return this.$store.state.pageHeight
			}
		}
	};
</script>

<style lang="less" scoped>
	.ass {
		background: rgba(144, 255, 142, 0.2);
	}
</style>
