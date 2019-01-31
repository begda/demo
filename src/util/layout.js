/*
 * 初始布局
 * */
import {layout} from "@/config/index"; //默认主题
import localStore from "store";

export default function (val) {
	// 获取本地主题, 如果传入的val不是字符串,说明是空的,用本地主题,
	let localLayout = typeof val === "string" ? val : null || localStore.get("layout");

	// 如果本地主题存在,用本地的,如果不存在用配置的默认主题
	if (localLayout) {
		localStore.set("layout", localLayout); //更新本地存储里记住当前的主题
		return localLayout;
	} else { // 如果本地主题不存在,传入的主题也不存在,就用配置的主题
		localStore.set("layout", layout); //在本地存储里记住当前的主题
		return layout;
	}
}
