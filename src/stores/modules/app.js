/*
 * 这是app级别的状态管理
 * */
// import {layout} from "@/util/index"; //默认主题
import localstore from "store";
import {deviced, layout} from "@/util/index";

const state = {
	layout: "",
	deviced: {}, // 存储系统类型
	meta:{},
	noCache:[]
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
	meta(state, data){
		state.meta=data
	},
	setNoCache(state,data){
		let acb=new Set()
		acb.add(data)
		console.log(Array.from(acb))
		// state.noCache=[...state.noCache,...acb]
		// state.noCache.push(data)
	},
	removeNoCache(state,data){
		state.noCache.delete(data)
	}
};

const actions = {};

export default {
	state,
	getters,
	actions,
	mutations
};
