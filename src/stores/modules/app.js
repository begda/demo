/*
* 这是app级别的状态管理
* */
import {theme} from '@/config/index' //默认主题
import localstore from "store";
import os from "@/util/os";

const state = {
    theme: '',
    os: '', // 存储系统类型
    // meta: {
    //     keepAlive: false,
    //     keepAlive2: true,
    //     header: false,
    //     breadcrumb: false,
    //     side: false,
    //     content: true,
    //     footer: false
    // }
}

const getters = {
    // 获取主题
    theme(state) {
        return  state.theme // || localstore.get('theme')
    },

    // 判断是否是移动设备
    mobile(state, getters) {
        // 这是一个if表达式
        return state.os === 'android' || state.os === 'iphone';

    }
}
const mutations = {
    // 设置主题
    setTheme(state, data) {
        let localTheme=localstore.get('theme')
        // 如果传入的主题存在,就用传入的,如果不存在判断本地是否有主题,如有用本地的,没有用默认配置的
        if(data){
            // 如果是移动端只更新状态,不保存到本地存储,这样在切换设备的时候,可以正常回到pc主题
            if(data==='mobile'){
                state.theme = 'mobile' //修改当前主题状态
            }else{
                localstore.set('theme', data) //在本地存储里记住当前的主题
                state.theme = data //修改当前主题状态
            }

        }else{
            if(localTheme){
                state.theme = localTheme //修改当前主题状态
            }else{
                localstore.set('theme', theme) //在本地存储里记住当前的主题
                state.theme = theme //修改当前主题状态
            }
        }

    },

    //获取当前设备类型
    os(state) {
        state.os = os()
    },
    // keepAlive(state, data){state.meta.keepAlive=data},
    // keepAlive2(state, data){state.meta.keepAlive2=data},
    // header(state, data){state.meta.header=data},
    // breadcrumb(state, data){state.meta.breadcrumb=data},
    // side(state, data){state.meta.side=data},
    // content(state, data){state.meta.content=data},
    // footer(state, data){state.meta.footer=data},




}

const actions = {}

export default {
    state,
    getters,
    actions,
    mutations
}