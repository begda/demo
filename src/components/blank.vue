<template>
</template>
<script>
    /*
    * 用于刷新来往的页面
    * 如果有页面跳转到这里,使用路由的离开生命周期来清楚上个页面的缓存,实现组件刷新的效果
    * */
    export default {
        name: 'blank',
        app(){
            return {keepAlive:false}
        },
        beforeRouteEnter(to, from, next) {
            let fromRute = {...from} // 新建一个对象把from对象放进去,避免直接修改from对象
            delete fromRute.matched  //删除这个不要的参数,因为这玩意太大了
            next(vm => {
                vm.$router.replace(fromRute)
            })
        },
        beforeRouteLeave(to, from, next) {
            // 设置下一个路由的 meta
            to.meta.keepAlive = 'off';  // 让去往的页面不缓存,
            next();
        },
    }
</script>
