/*
 * 这是app级别的状态管理
 * */
// import {layout} from "@/util/index"; //默认主题

import {deviced, layout} from "@/util/index";
import _ from 'lodash'
function dedupe(array) {
	return Array.from(new Set(array));
}
let cacheArr = new Set()
let tabsArr =[]
const state = {
	pageLoading: true,
	pageRefresh:true,
	pageHeight: 0, // 页面默认高度,减去头部 和 tabs
	layout: "", // 存储当前主题
	deviced: {}, // 存储系统类型
	meta: {}, // 存储当前页面的设置的app状态
	noCache: [], //存储当前不缓存的页面
	tabs: [],
	activeTab: ''
	// meta: {
	//     keepAlive: false,
	//     keepAlive2: true,
	//     header: false,
	//     breadcrumb: false,
	//     side: false,
	//     content: true,
	//     footer: false
	// }
};

const getters = {
	// 获取主题
	layout(state) {
		return state.meta.layout; // || localstore.get('theme')
	},

	// 判断是否是移动设备, 并且返回设备类型
	mobile(state) {
		if (state.deviced.get("android") || state.deviced.get("iphone")) {
			if (state.deviced.get("android")) {
				return 'android'
			} else {
				return 'iphone'
			}
		} else {
			return false;
		}
	}
};
const mutations = {
	// 设置主题
	setLayout(state, param) {
		if (param) {
			state.meta.layout = layout(param); //修改当前主题状态
		} else {
			state.meta.layout = layout();
		}
	},

	//获取当前设备类型
	os(state) {
		state.deviced = deviced;
	},
	// keepAlive(state, data){state.meta.keepAlive=data},
	// keepAlive2(state, data){state.meta.keepAlive2=data},
	// header(state, data){state.meta.header=data},
	// breadcrumb(state, data){state.meta.breadcrumb=data},
	// side(state, data){state.meta.side=data},
	// content(state, data){state.meta.content=data},
	// footer(state, data){state.meta.footer=data},

	// 所有设备改变以后的参数 通过这里设置 状态, 供其他所有需要设备切换的页面使用
	meta(state, data) {
		state.meta = data
	},

	//设置不缓存页面
	setNoCache(state, data) {
		cacheArr.add(data)
		state.noCache = Array.from(cacheArr)
	},
	// 删除不缓存页面
	removeNoCache(state, data) {
		cacheArr.delete(data)
		state.noCache = Array.from(cacheArr)
	},
	// 控制页面刷新
	pageRefresh(state, data){
		state.pageRefresh = data
	},

	pageLoading(state, data) {
		state.pageLoading = data
	},

	pageHeight(state, data) {
		state.pageHeight = data
	},
	addTabs(state, data) {
		let newData={...data}
		let tabIndex=_.findIndex(state.tabs,newData)
		if(tabIndex<0){
			state.tabs.push(newData)
		}
	},
	// 删除tab
	removeTabs(state, data) {
		let newData={...data}
		let tabIndex=_.findIndex(state.tabs,newData)
		state.tabs.splice(tabIndex,1)
	},
	activeTab(state, data) {
		state.activeTab = data
	},

};

const actions = {};

export default {
	state,
	getters,
	actions,
	mutations
};
