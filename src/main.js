// import '@babel/polyfill'
import "bootstrap/dist/css/bootstrap.min.css"
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/stores/index";
import Meta from "vue-meta";
import ElementUI from "element-ui";
import mixinApp from "./mixin/isApp";
import {recursionMenu} from '@/util/index' //递归菜单
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/theme-chalk/index.css';
Vue.use(Avue);
Vue.use(mixinApp);
Vue.use(ElementUI);
Vue.use(Meta);


import BegdaSideMenu from "@/components/menu/sideMenu"; // 递归菜单组件
import Durex from "@/components/durex/index"; // 递归菜单组件
import Frame from "@/components/durex/frame"; // 递归菜单组件
Vue.component("ba-side-menu", BegdaSideMenu);
Vue.component(`ba-${Durex.name}`, Durex);
Vue.component(`ba-${Frame.name}`, Frame);

Vue.mixin({
	async	beforeRouteEnter(to, from, next) {
		// 递归找到当前路由在导航菜单位置,然后用返回值来增加tabs, 所有导航的改变都回触发这里
	  let isMenu=recursionMenu(to.name,await store.dispatch("api/navMenu"))
		store.commit('addTabs',isMenu)
		next();
  },

	mounted(){
		let self=this;
		setTimeout(()=>{
			// 路由完成加载以后,隐藏加载条
			store.commit('pageLoading',false)
		},100)
	}

})

// 刷新当前页面
Vue.prototype.$refresh = function() {
  let self=this;
	this.$store.commit('setNoCache', this.$route.name)
	this.$store.commit('pageRefresh',false)
	this.$store.commit('pageLoading',true)
  setTimeout(()=>{
	  self.$store.commit('removeNoCache', this.$route.name)
	  self.$store.commit('pageRefresh',true)
  },10)
};


// 跳转到一个页面并且刷新这个页面
Vue.prototype.$refreshLeave = function(newRoute) {
  let self=this;
	this.$router.push(newRoute); // 先跳转到目标页面
	this.$store.commit('setNoCache', newRoute.name) // 设置不缓存页面
	this.$store.commit('pageRefresh',false) // 移除页面视图
  // 使用定时器去触发,否则无法触发
	setTimeout(()=>{
		self.$store.commit('removeNoCache', newRoute.name) // 把页面从不缓存列表中移除
		self.$store.commit('pageRefresh',true) // 重新展示视图
	},100)
};

Vue.liaohui=()=>{
	console.log('liaohuissss')
}
Vue.liaohui()
async function render() {
  Vue.config.productionTip = false;
	store.dispatch("api/navMenu"); //获取导航菜单
  new Vue({
    router: await router(),
    store,
    render: h => h(App)
  }).$mount("#app");
}

render();
