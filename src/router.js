import Vue from "vue";
import Router from "vue-router";
import createRoutes from '../.begda/route'
import store from '@/stores'

Vue.use(Router);
// 设计基础路由
const baseRoutes = [
    {
        path: "*",
        name: "404",
        component: resolve => require(["@/components/404.vue"], resolve)
    },
    {
        path: "/blank",
        name: "blank",
        component: resolve => require(["@/components/blank.vue"], resolve)
    },
    {
        path: "/",
        redirect:'/home'
    }
];

let router = new Router({
    // 合并所有路由数组
    // routes: createRoutes
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'nuxt-link-exact-active',
    routes: [...baseRoutes, ...createRoutes],

});

router.afterEach((to, from,next)=>{
    // ...

    // next()
})
export default async function () {

    // router.addRoutes(await createRoutes)
    return router
}