<template>
    <div class="layout">
        <h1>移动端主题</h1>
        <div v-if="$route.meta.header">
            header
        </div>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive">
                <!-- 这里是会被缓存的视图组件，比如 Home！ -->
            </router-view>
        </keep-alive>
        <transition>
            <router-view v-if="!$route.meta.keepAlive">
                <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
            </router-view>
        </transition>
    </div>

</template>

<script>
    import mixin from './mixin'
    export default {
        name: "dark",
        mixins:[mixin],
        data(){
            return {isCollapsed:true}
        }
    }
</script>

<style lang="less" scoped>


</style>