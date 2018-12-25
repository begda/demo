//获取当前设备类型
const os=()=> {
    const ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
    // 当前设备
    let deviced = [
        {name: 'iphone', is: isPhone},
        {name: 'android', is: isAndroid},
        {name: 'pc', is: isPc}
    ];

    //过滤等于真的设备就是当前的设备
    let os = deviced.filter((item, index) => {
        return item.is ? item : ''
    })
    return os[0].name
}

export default os