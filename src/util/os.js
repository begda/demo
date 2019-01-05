// 获取ie版本号
function IEVersion() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
	var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
	var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
	if (isIE) {
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(userAgent);
		var fIEVersion = parseFloat(RegExp["$1"]);
		if (fIEVersion == 7) {
			return 7;
		} else if (fIEVersion == 8) {
			return 8;
		} else if (fIEVersion == 9) {
			return 9;
		} else if (fIEVersion == 10) {
			return 10;
		} else {
			return 6;//IE版本<=7
		}
	} else if (isEdge) {
		return 'edge';//edge
	} else if (isIE11) {
		return 11; //IE11
	} else {
		return false;//不是ie浏览器
	}
}


//获取当前设备类型
const os = () => {
	const ua = navigator.userAgent,
		isWindowsPhone = /(?:Windows Phone)/.test(ua),
		isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
		isAndroid = /(?:Android)/.test(ua),
		isFireFox = /(?:Firefox)/.test(ua),
		isChrome = /(?:Chrome|CriOS)/.test(ua),
		isTablet =
			/(?:iPad|PlayBook)/.test(ua) ||
			(isAndroid && !/(?:Mobile)/.test(ua)) ||
			(isFireFox && /(?:Tablet)/.test(ua)),
		isPhone = /(?:iPhone)/.test(ua) && !isTablet,
		isPc = !isPhone && !isAndroid && !isSymbian,
		isIframe = window.frames.length !== parent.frames.length,
		isIE = IEVersion(),
		isWeixin = () => {
			const ua = navigator.userAgent.toLowerCase();
			if (ua.match(/MicroMessenger/i) == "micromessenger") {
				return true;
			} else {
				return false;
			}
		},
		// 在混合环境下
		isapp= () => {
			return false;
		};
	const deviced = new Map();
	deviced.set("iphone", isPhone);
	deviced.set("android", isAndroid);
	deviced.set("pc", isPc);
	deviced.set("iframe", isIframe);
	deviced.set("chrome", isChrome);
	deviced.set("ie", isIE);
	deviced.set("weixin", isWeixin());
	deviced.set("app", isapp());
	// 当前设备
	// let deviced = {
	//   iphone: isPhone,
	//   android: isAndroid,
	//   pc: isPc,
	//   iframe: isIframe,
	//   chrome: isChrome,
	//   ie: isIE,
	//   weixin: isWeixin(),
	//   mix: isMix()
	// };

	return deviced;
};
export const deviced = os();
