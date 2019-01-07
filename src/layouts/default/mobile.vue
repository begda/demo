<template>
    <div class="layout">
        <h1  v-if="meta.header" style="background: #d2ff86;height: 50px">header标题栏</h1>
        <h1  v-if="meta.footer" style="background: #ff9ca3;height: 50px">footer底部</h1>
        <h1  v-if="meta.tabbar" style="background: #4e99ff;height: 50px">tabbar tabbar菜单</h1>
        <el-aside   v-model="isCollapsed"
                  :style="{background:'#fff'}">
            <div v-if="meta.side">

                <el-menu :collapse="isCollapsed" :default-active="menuActive" class="el-menu-demo"
                         mode="vertical">
                    <ba-side-menu v-for="item in menus"
                                  :data="item"></ba-side-menu>
                </el-menu>
            </div>
        </el-aside>
        <div v-loading="pageLoading">
            <div v-show="meta.content"
                 :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                <!--<template v-if="meta.cache">-->
                <keep-alive :exclude="noCache">
                    <!--<transition name="page" mode="out-in">-->
                    <router-view >
                        <!-- 这里是会被缓存的视图组件，比如 Home！ -->
                    </router-view>
                    <!--</transition>-->
                </keep-alive>
                <!--</template>-->
                <!--<transition name="fade" mode="out-in">-->
                <!--<router-view v-if="!meta.cache">-->
                <!--&lt;!&ndash; 这里是不被缓存的视图组件，比如 Edit！ &ndash;&gt;-->
                <!--</router-view>-->
                <!--</transition>-->
            </div>
        </div>
    </div>

</template>

<script>
    import mixin from './mixin'
    export default {
        name: "mobile",
        mixins:[mixin],
        data(){
            return {isCollapsed:false}
        }
    }
</script>

<style lang="less" scoped>


</style>
