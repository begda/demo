/*
* 程序思路 该插件逻辑过于复杂特此说明,过一段时间忘了,那就完了
* 通过vue mixin 从页面获取一个app的方法(带返回值的), 然后
*
* */
import {isApp, strMapToObj, defaultTrue, defaultFalse, layout,recursionMenu} from "@/util/index";
import store from "@/stores/index";



// 默认 meta配置 , 这里面包含所有一级设置的参数,主要给 store用
function defaultMeta(params = {}) {
	let meta = {};
	meta.header = defaultTrue(params.header);
	meta.breadcrumb = defaultFalse(params.breadcrumb);
	meta.side = defaultTrue(params.side);
	meta.content = defaultTrue(params.content);
	meta.layout = params.layout || layout();
	meta.footer = defaultTrue(params.footer);
	meta.tabbar = defaultFalse(params.tabbar);
	meta.cache = defaultTrue(params.cache)
	store.commit('meta', meta)
	return meta;
}

// 移动端配置
function mobileConfig(app) {

	const device = store.state.deviced 	// 获取设备信息
	const layout = 'mobile' // 设置移动端主题
	// 设置移动端默认配置
	const obj = {
		header: true,
		content: true,
		footer: true,
		tabbar: true,
		layout: layout,
		cache: true,
	}
	if (device.get('weixin')) {
		// console.log('微信环境')
		// 如果app 和 weixin 配置都存在,使用 weixin配置
		if (app && app.weixin) {
			return	defaultMeta({
				header: defaultTrue(app.weixin.header),
				content: defaultTrue(app.weixin.content),
				footer: defaultTrue(app.weixin.footer),
				tabbar: defaultTrue(app.weixin.tabbar),
				layout: layout,
				cache: defaultTrue(app.weixin.cache)
			})
		} else if (app) { //如果app存在使用app配置
			return	defaultMeta({
				header: defaultTrue(app.header),
				content: defaultTrue(app.content),
				footer: defaultTrue(app.footer),
				tabbar: defaultTrue(app.tabbar),
				layout: layout,
				cache: defaultTrue(app.cache)
			})
		} else { // 如果连app都不存在 使用默认配置
			return	defaultMeta(obj)
		}
	} else if (device.get('app')) {
		// console.log('在app环境下')
		if (app && app.app) {
			return	defaultMeta({
				header: defaultTrue(app.app.header),
				content: defaultTrue(app.app.content),
				footer: defaultTrue(app.app.footer),
				tabbar: defaultTrue(app.app.tabbar),
				layout: layout,
				cache: defaultTrue(app.app.cache)
			})
		} else if (app) {
			return	defaultMeta({
				header: defaultTrue(app.header),
				content: defaultTrue(app.content),
				footer: defaultTrue(app.footer),
				tabbar: defaultTrue(app.tabbar),
				layout: layout,
				cache: defaultTrue(app.cache)
			})
		} else {
			return	defaultMeta(obj)
		}
	} else {

		if (app) {
			console.log('在移动端浏览器环境下app')
			return	defaultMeta({
				header: defaultTrue(app.header),
				content: defaultTrue(app.content),
				footer: defaultTrue(app.footer),
				tabbar: defaultTrue(app.tabbar),
				layout: layout,
				cache: defaultTrue(app.cache)
			})
		} else {
			return	defaultMeta(obj)
		}
	}
}

// 设备切换, 传入to路由参数
function deviceSwitch(to){
	const device = store.state.deviced
	const isMobile = store.getters.mobile
	const isIE = device.get('ie')
	let app = isApp(to)

	// 移动端环境下
	if (isMobile) {
		// 在安卓环境下
		if (device.get('android')) {
			return mobileConfig(app)
		} else if (device.get('iphone')) {// 在苹果环境下
			return	mobileConfig(app)
		}
	} else {  //在pc端环境下

		if(isIE && isIE >= 10 || device.get('chrome')){
			if (device.get('iframe')) {
				// console.log('这是iframe')
				if (app && app.iframe) {
					return	defaultMeta({
						name:app.name,
						header: defaultFalse(app.iframe.header),
						breadcrumb: defaultTrue(app.iframe.breadcrumb),
						side: defaultFalse(app.iframe.side),
						content: defaultTrue(app.iframe.content),
						footer: defaultFalse(app.iframe.footer),
						cache: defaultTrue(app.iframe.cache)
					})
				} else {
					return	defaultMeta({
						name:app.name,
						header: false,
						breadcrumb: true,
						side: false,
						content: true,
						footer: false
					})
				}
			} else {
				// console.log('这是正常浏览器')
				if (app) {
					return	defaultMeta(app)
				} else {
					return	defaultMeta()
				}
			}
		}else{
			console.warn('只能运行在ie10及以上浏览器')
			alert('只能运行在ie10及以上浏览器')
		}

	}
}

let mixinApp = {};
mixinApp.install = function (Vue, options) {
	// 3. 注入组件
	Vue.mixin({
		beforeRouteEnter(to, from, next) {
			// 路由进入的时候 显示加载条
			store.commit('pageLoading',true)
			// 判断页面是否缓存,根据 cache参数来判断,如果 真 就是缓存 如果假就不缓存, cache是从页面的 app返回值里设置的
			if(!deviceSwitch(to).cache){
				store.commit('setNoCache',to.name)
			}
			next((vm)=>{
				setTimeout(()=>{
					// 路由完成加载以后,隐藏加载条
					vm.$store.commit('pageLoading',false)
				},10)
			});
		}
	});

};

export default mixinApp;
