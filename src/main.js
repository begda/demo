import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/stores/index";
import Meta from 'vue-meta'
import ElementUI from 'element-ui';
// import { Button, Menu,Submenu,MenuItem,MenuItemGroup,Tooltip,Loading } from 'element-ui';
import 'element-ui/lib/theme-chalk/button.css';
import 'element-ui/lib/theme-chalk/menu.css';
import 'element-ui/lib/theme-chalk/icon.css';
import 'element-ui/lib/theme-chalk/tooltip.css';
import 'element-ui/lib/theme-chalk/loading.css';
// import iView from "iview";


Vue.use(ElementUI);
// Vue.use(Meta);
// Vue.use(Button)
// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItem)
// Vue.use(Button)
// Vue.use(MenuItemGroup)
// Vue.use(Tooltip)
// Vue.use(Loading)

import BegdaSideMenu from '@/components/menu/sideMenu'
Vue.component('ba-side-menu',BegdaSideMenu)

import "iview/dist/styles/iview.css";
import { Layout, Header,Content,Sider,Footer,Dropdown,DropdownMenu,DropdownItem ,Icon,Avatar,Input} from 'iview';
Vue.component('Input',Input)
Vue.component('Layout',Layout)
Vue.component('Avatar',Avatar)
Vue.component('Header',Header)
Vue.component('Content',Content)
Vue.component('Sider',Sider)
Vue.component('Content',Footer)
Vue.component('Dropdown',Dropdown)
Vue.component('DropdownMenu',DropdownMenu)
Vue.component('DropdownItem',DropdownItem)
Vue.component('Icon',Icon)




// 把默认值转换为真
let defaultTrue = function (name,val) {
    // console.log(name,val)
    switch (val) {
        case 'off':
            val= false;
            break;
        case 'on':
            val= true;
            break;
        case undefined:
            val= true;
            break;
        case false:
            val= false;
            break;
        case true:
            val= true;
            break;
        default:
            throw new Error('app 传入类型错误,只能是boole 值')
            // return true; // 隐藏路由菜单
            break;
    }
    // store.commit(name,val)
    // return store.getters.meta[name]
    return val
}

// 把默认值转换为假
let defaultFalse = function (name,val) {
    console.log(name,typeof val)
    switch (val) {
        case undefined:
            val= false;
            break;
        case false:
            val= false;
            break;
        case true:
            val= true;
            break;
        default:
            throw new Error('app 传入类型错误,只能是boole 值')
            // return true; // 隐藏路由菜单
            break;
    }

    // store.commit(name,val)
    // return store.getters.meta[name]
    return val
}
let isApp = (to) => {
    console.warn('温馨提示:在新建页面的时候app方法不能写在页面的mixin.js里面')
    // 从路由中读取组件的app方法, app方法不能写在页面的mixin.js里面
    let app = to.matched[0].components.default.app;
    if (app) {
        if (typeof app !== 'function')
            throw new Error('app 只能是一个方法')
        if (typeof app() !== 'object')
            throw new Error('app的返回值必须是一个对象')
        return app()
    } else {
        return false
    }
}
let isIframe = (app) => {

    if (window.frames.length !== parent.frames.length) {
        if (app.iframe) { //如果iframe参数存在就返回页面设置的参数,如果不存在就返回一个空对象

            if (typeof app.iframe !== 'object')
                throw new Error('app.iframe 的返回值必须是一个对象')
            return app.iframe;
        } else {
            console.log('---',app,'app存在 iframe参数不存在',store.getters.meta)
            return {}
        }
        return true;
    }
}


Vue.mixin({
    activated(){
        let self=this

    },
    created() {
        let self=this
        // console.log(this)
    },
    mounted(){

        let self=this
        setTimeout(()=>{
            self.pageLoading=false
        },1000)

    },

    data() {
        return {
            pageLoading:true,
            device: store.state.os //获取当前设备信息
        }
    },
    beforeRouteEnter(to, from, next) {

        let meta = to.meta
        let app = isApp(to)
        let iniframe = isIframe(app)
        // 检测当前是否是移动设备
        let os = store.getters.mobile
        /*
        * 如果app页面配置存在,就按页面配置显示
        * */
        if (app) {

            //如果meta.keepAlive 有值,说明上一个页面改变了当前页面的参数,一般情况是给了 off, off是取消当前页面的缓存刷新页面
            meta.keepAlive = defaultTrue('keepAlive',meta.keepAlive || app.keepAlive)
            /*
            * 如果iframe存在,就隐藏 heder side footer ,显示 breadcumb面包屑, 页面内自定义主题将无效
            * */
            if (iniframe) {
                meta.header = defaultFalse('header',iniframe.header)
                meta.breadcrumb = defaultTrue('breadcrumb',iniframe.breadcrumb)
                meta.side = defaultFalse('side',iniframe.side)
                meta.content = defaultTrue('content',app.content)
                meta.footer = iniframe.footer || false

            } else {
                /*
                * 如果iframe不存在,就隐藏breadcumb面包屑  ,显示heder side footer根据页面自定义显示 , 页面内自定义主题生效
                * */
                meta.header = defaultTrue('header',app.header)
                meta.breadcrumb = defaultFalse('breadcrumb',app.breadcrumb)
                meta.side = defaultTrue('side',app.side)
                meta.content = defaultTrue('content',app.content)
                meta.theme = app.theme
                meta.footer = app.footer || false
            }
        } else {
            /*
           * 如果app页面不配置存在,就按默认值显示
           * */
            // 如果meta.keepAlive 有值,说明上一个页面改变了当前页面的参数,一般情况是给了 off, off是取消当前页面的缓存刷新页面
            meta.keepAlive = defaultTrue('keepAlive',meta.keepAlive)
            if (iniframe) {
                meta.header = false
                meta.breadcrumb = true
                meta.side = false
                meta.content = true
                meta.footer = false
            } else {

                meta.header = true
                meta.breadcrumb = false
                meta.side = true
                meta.content = true
                meta.footer = false
            }


        }

        // 判断是否是移动设备 ,这段代码的app依赖于上面的计算结果
        if (os) {
            store.commit('setTheme', 'mobile') //调用移动主题
            if (app) {
                delete meta.theme //删除上面app绑定的主题,以防止某些人在复制粘贴的时候忘了去掉移动端的主题设置
            }
        }

        next()

    },
});




// 刷新当前页面
Vue.prototype.$refresh =function () {
    this.pageLoading=true
    this.$router.replace({name:'blank'})
}

// 跳转到一个页面并且刷新这个页面
Vue.prototype.$refreshLeave=function (newRoute) {
    this.$router.push(newRoute)
    this.$router.replace({name:'blank'})
}


let MyPlugin = {}


MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    // Vue.liaohui = function (ee) {
    //     // 逻辑...
    //     console.log('liaohui',ee)
    // }
    //
    // // 2. 添加全局资源
    // Vue.directive('my-directive', {
    //     bind(el, binding, vnode, oldVnode) {
    //         // 逻辑...
    //     }
    // })


    // 3. 注入组件
    Vue.mixin({})


    // const strats = Vue.config.optionMergeStrategies

//
// // use the same hook merging strategy for route hooks
// // strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created
//     strats.appss = function () {
//         console.log('asfasdfasdf')
//     }
//     strats.appss = strats.created
//     console.log('vuefonfig',strats)

    // 4. 添加实例方法
    // Vue.prototype.$myMethod = function (methodOptions) {
    //     // 逻辑...
    // }
}

async function render() {

    Vue.config.productionTip = false;

    store.dispatch('api/navMenu') //获取导航菜单
   let c= new Vue({
        router: await router(),
        store,
        render: h => h(App)
    }).$mount("#app");

}

render();


