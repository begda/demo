import http from "@/util/http";
import {nav} from '@/config/index'

export const menu = async function () {
    let res = await http.get(nav.menu); // 获取后台生产路由
    return res.data;
};


// 如果有参数的话,就调用这个
// export default function () {
//     return ''
// }