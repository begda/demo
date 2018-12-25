import http from "@/util/http";
import config from '@/config/index'

let {nav} = config
let defaultItem = function (val) {
    switch (val) {
        case undefined:
            return false; // 显示路由菜单
            break;
        case false:
            return false; // 显示路由菜单
            break;
        case true:
            return true; // 隐藏路由菜单
            break;
    }
}
let defaultItem2 = function (val) {
    switch (val) {
        case undefined:
            return true; // 显示路由菜单
            break;
        case false:
            return false; // 显示路由菜单
            break;
        default:
            return true; // 隐藏路由菜单
            break;

    }
}


export let menu = async function () {
    let newArr;
    let res = await http.get(nav.menu); // 获取后台生产路由
    for (let item of res.data) {
        let moduleRoute = await import("@/views/" + item.componentPath); //导入模块下配置的路由
        if (typeof moduleRoute.default.moduleRoute==='function') {
            newArr = [...res.data, ...moduleRoute.default.moduleRoute()] // 把两个数组合并成一个数组
        }
        // if(item.sub){
        //     for(let item of item.sub){
        //         console.log(item)
        //     }
        // }

    }
    // 循环当前模块下所有路由
    // for (let item of newArr) {
    //     let meta = item.meta;
    //     // 是否隐藏界面导航部分
    //     item.meta.header = defaultItem2(meta.header);
    //     item.meta.side = defaultItem2(meta.side);
    //     item.meta.content = defaultItem2(meta.content);
    //     item.meta.footer = defaultItem2(meta.footer);
    //     // 是否显示路由菜单
    //     item.hide = defaultItem(item.hide)
    // }

    console.log(newArr)




    newArr.map(item => {
        item.component = () => import( "@/views/" + item.componentPath);
    });
    return newArr;
};
