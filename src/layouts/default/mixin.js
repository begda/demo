import {recursionMenu} from '@/util/index'
export default {
	data() {
		return {
			sideWidth:230,
			triggerIcon:'el-icon-arrow-left',
			isCollapsed: false,
			activeIndex: '0',
			sideMenus: {},
		};
	},
	methods: {
		// 切换主题
		onTheme(item) {
			this.$store.commit('setLayout', item)
		},
		onCollapsed(){
			this.isCollapsed=!this.isCollapsed

			if(this.sideWidth===230){
				this.sideWidth=65
				this.triggerIcon='el-icon-arrow-right'
			}else{
				this.sideWidth=230
				this.triggerIcon='el-icon-arrow-left'
			}
		},
		onTab(item){
			this.$store.commit('activeTab',item.name)
			this.$router.push({name:item.name})
		},
		removeTab(targetName){
			// this.$store.commit('removeTabs',targetName)
			let tabs = this.$store.state.tabs;
			let activeName = this.activeTab;
			if (activeName === targetName) {
				tabs.forEach((tab, index) => {
					if (tab.name === targetName) {
						let nextTab = tabs[index + 1] || tabs[index - 1];
						if (nextTab) {
							activeName = nextTab.name;
							this.$refresh() // 刷新当前页面
							this.$router.push({name:activeName})
						}
					}
				});
			}
			this.$store.commit('removeTabs',recursionMenu(targetName,tabs))
			// this.activeTab = activeName;




			// console.log(this.activeTab)
			// this.tabs =tabs.filter(tab => tab.name !== targetName)
			// console.log(tabs.filter(tab => tab.name !== targetName))
			// this.$store.commit('addTabs',tabs.filter(tab => tab.name !== targetName))
			// this.$store.commit('removeTabs',recursionMenu(targetName,tabs))
		},
		abd(){
			console.log('-----',this.$route)
		}
	},

	mounted() {

	},
	created(){

	},
	computed: {
		// 根据导航参数默认选中菜单
		menuActive() {
			return this.$route.name
		},
		// 获取不缓存页面数组
		noCache() {
			return this.$store.state.noCache
		},
		// 获取当前页面的布局设置(header  side footer)
		meta() {
			this.$nextTick(() => {
				const windowHeight = window.innerHeight
				const tabsHeight = this.$refs.tabs.offsetHeight
				const headerHeight = this.$refs.header.$el.offsetHeight
				const trigger = this.$refs.trigger.offsetHeight // 侧边底部触发器的高度
				let contentHeight = windowHeight - headerHeight - tabsHeight
				this.$refs.content.style.height =contentHeight+ 'px'
				this.$store.commit('pageHeight',contentHeight)
				this.$refs.side.style.height=windowHeight - headerHeight-trigger+ 'px'
			})
			return this.$store.state.meta
		},
		// 获取导航菜单
		menus() {
			return this.$store.state.api.navMenu
		},
		pageLoading() {
			return this.$store.state.pageLoading
		},
		pageRefresh(){
			return this.$store.state.pageRefresh
		},
		isIframe(){
			return this.$store.state.isIframe
		},
		tabs:{

			get: function () {
				return this.$store.state.tabs
			},
			set: function (v) {

			}
		},
		activeTab:{
			get: function () {
				return this.$route.name
			},
			set: function (v) {

			}
		}
	}
}
