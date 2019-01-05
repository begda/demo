import layout from "./layout";
import {deviced} from "./os";
import api from "./api";

const isUrl = window.location;

// 把默认值转换为真
// const defaultTrue = function(name, val) {
//   // console.log(name,val)
//   switch (val) {
//     case "off":
//       val = false;
//       break;
//     case "on":
//       val = true;
//       break;
//     case undefined:
//       val = true;
//       break;
//     case false:
//       val = false;
//       break;
//     case true:
//       val = true;
//       break;
//     default:
//       throw new Error("app 传入类型错误,只能是boole 值");
//     // return true; // 隐藏路由菜单
//   }
//   // store.commit(name,val)
//   // return store.getters.meta[name]
//   return val;
// };
const defaultTrue = function (val) {
	// console.log(name,val)
	switch (val) {
		case "off":
			return false;
			break;
		case "on":
			return true;
			break;
		case undefined:
			return true;
			break;
		case false:
			return false;
			break;
		case true:
			return true;
			break;
		default:
			throw new Error("app 传入类型错误,只能是boole 值");
		// return true; // 隐藏路由菜单
	}
};


// 把默认值转换为假
const defaultFalse = function ( val) {
	switch (val) {
		case undefined:
			return false;
			break;
		case false:
			return false;
			break;
		case true:
			return true;
			break;
		default:
			throw new Error("app 传入类型错误,只能是boole 值");
		// return true; // 隐藏路由菜单
	}

};

const isApp = to => {
	console.warn("温馨提示:在新建页面的时候app方法不能写在页面的mixin.js里面");
	// 从路由中读取组件的app方法, app方法不能写在页面的mixin.js里面
	let app = to.matched[0].components.default.app;
	if (app) {
		if (typeof app !== "function") throw new Error("app 只能是一个方法");
		if (typeof app() !== "object") throw new Error("app的返回值必须是一个对象");
		return app();
	} else {
		return false;
	}
};

let isIframe = app => {
	if (window.frames.length !== parent.frames.length) {
		if (app.iframe) {
			//如果iframe参数存在就返回页面设置的参数,如果不存在就返回一个空对象

			if (typeof app.iframe !== "object")
				throw new Error("app.iframe 的返回值必须是一个对象");
			return app.iframe;
		} else {
			console.log("---", app, "app存在 iframe参数不存在");
			return {};
		}
		return true;
	}
};

// 字符串map转obj对象
function strMapToObj(strMap) {
	let obj = Object.create(null);
	for (let [k, v] of strMap) {
		obj[k] = v;
	}
	return obj;
}


export {
	api,
	isUrl,
	deviced,
	layout,
	defaultFalse,
	defaultTrue,
	isApp,
	isIframe,
	strMapToObj
};
