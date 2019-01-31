<template>
	<ba-durex>

		asdfas
		这是home pc 页面{{pageHeight}}
		<el-button @click="dianji()">asdf</el-button>
		<el-button @click="dianji2()">asdf</el-button>
		<div>{{ date }}</div>
		{{ new Date().getTime() }}
		<el-card>
			<avue-crud :data="data" :option="option" v-model="obj" @search-change="searchChange" >
				<template slot="menuLeft">
					sdfasd
				</template>
				<template slot="menuRight">
					<!--<el-button type="primary" icon="el-icon-edit" circle size="small"></el-button>-->
					<el-button type="primary" size="small">自定义按钮</el-button>
				</template>
			</avue-crud>

			<el-tag>当前弹出框表单中的数据{{obj}}</el-tag>
		</el-card>

		<div>

		</div>
		<p style="height: 10000px"></p>




	</ba-durex>
</template>

<script>
	export default {

		comments: {},
		app() {
			return {
				cache:true,
				// header:false,
				iframe: {cache: true}
				// keepAlive: true
				// theme:'blue'
			};
		},
		data() {
			return {
				activeIndex: "1",
				date: new Date().getTime(),

				obj:{},
				data: [
					{
						name:'张三',
						sex:'男',
						date:'1994-02-23 00:00:00'
					}, {
						name:'李四',
						sex:'女',
						date:'1994-02-23 00:00:00'
					}, {
						name:'王五',
						sex:'女',
						date:'1994-02-23 00:00:00'
					}, {
						name:'赵六',
						sex:'男',
						date:'1994-02-23 00:00:00'
					}
				],
				option:{
					title:'表格的标题',
					// page:false,
					// searchMenuSpan:6,
					addBtn:false,
					align:'center',
					menuAlign:'center',
					column:[
						{
							label:'姓名',
							prop:'name',
							// search:true
						},
						{
							label:'性别',
							prop:'sex'
						},{
							label: "日期",
							prop: "date",
							type: "date",
							format: "yyyy-MM-dd hh:mm:ss",
							valueFormat: "yyyy-MM-dd hh:mm:ss",
						}
					]
				}
			};
		},
		methods: {
			searchChange(a){console.log(a) ;
			this.data=[
				{
					name:'张三',
					sex:'男',
					date:'1994-02-23 00:00:00'
				}
			]},
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


			console.log(this)
			console.log('-----')

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
