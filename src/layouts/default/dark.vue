<template>
    <div class="layout dark">
        {{noCache}}
        <el-container>
            <el-header v-if="meta.header" class="header">
                <el-row>
                    <el-col :span="12">
                        <div class="layout-logo"><i class="el-icon-success icon"></i> 前端基础开发技术展示平台</div>
                    </el-col>
                    <el-col :span="12">
                        <el-menu  mode="horizontal" style="float:right; padding-left: 15px">
                            <el-submenu index="2">
                                <template slot="title">头像</template>
                                <el-menu><el-menu-item index="2-1">用户名字</el-menu-item></el-menu>
                                <el-menu><el-menu-item index="2-1">选项1</el-menu-item></el-menu>
                                <el-menu><el-menu-item index="2-1">选项1</el-menu-item></el-menu>
                                <el-menu>
                                    <el-submenu index="2-4">
                                        <template slot="title">设置主题</template>
                                        <el-menu-item index="2-4-1" @click="onTheme('blue')">蓝色</el-menu-item>
                                        <el-menu-item index="2-4-1" @click="onTheme('dark')">暗色</el-menu-item>
                                    </el-submenu>
                                </el-menu>

                            </el-submenu>
                        </el-menu>
                        <div style="float:right;">
                            <Input style="margin-bottom: 4px;width: 250px" search v-model="input"
                                   placeholder="菜单快速定位"/>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside v-show="meta.side" collapsible :collapsed-width="60" v-model="isCollapsed"
                       :style="{background:'#fff'}">
                    <div v-if="meta.side">

                        <el-menu :collapse="isCollapsed" :default-active="menuActive" class="el-menu-demo"
                                 mode="vertical">
                            <ba-side-menu v-for="item in menus"
                                          :data="item"></ba-side-menu>
                        </el-menu>
                    </div>
                </el-aside>


                <el-container>
                    <div style="">

                        <el-tabs type="border-card" v-model="activeIndex">
                            <el-tab-pane label="用户管理" name="first"></el-tab-pane>
                            <el-tab-pane label="配置管理" name="second"></el-tab-pane>
                            <el-tab-pane label="角色管理" name="third"></el-tab-pane>
                            <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
                        </el-tabs>
                    </div>
                    <el-container :style="{padding: '20px'}">
                        <div :style="{margin: '24px 0'}" v-if="meta.breadcrumb">
                           面包学
                        </div>
                        <div v-loading="pageLoading">
                            <Content v-if="meta.content"
                                     :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                                <keep-alive >
                                    <!--<transition name="page" mode="out-in">-->
                                    <router-view v-if="meta.cache">
                                        <!-- 这里是会被缓存的视图组件，比如 Home！ -->
                                    </router-view>
                                    <!--</transition>-->
                                </keep-alive>
                                <!--<transition name="fade" mode="out-in">-->
                                <router-view v-if="!meta.cache">
                                    <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
                                </router-view>
                                <!--</transition>-->
                            </Content>
                        </div>
                    </el-container>

                </el-container>
            </el-container>
            <el-footer v-if="meta.footer">Footer</el-footer>
        </el-container>
    </div>

</template>

<script>
    import mixin from './mixin'
    import Vue from 'vue'

    let bus = new Vue();
    export default {
        name: "dark",
        mixins: [mixin],
        data() {
            return {
                isCollapsed: false,
                activeIndex: '0',
                input: ""
            }
        },
        mounted() {
        }

    }
</script>

<style lang="less">
    .dark .el-col {
        /*height: 56px;*/
    }

    .dark .el-tabs__content {
        display: none !important;
    }

    .dark .layout-logo {
        /*width: 100px;*/
        /*height: 56px;*/
        color: #fff;
        font-size: 25px;
        line-height: 60px;

        /*border-radius: 3px;*/
        float: left;
        /*position: relative;*/
        /*top: 15px;*/
        /*left: 20px;*/
        .icon {
            font-size: 30px;
        }
    }

    .dark .header {
        max-height: 60px;
        padding-left: 20px;
        padding-right: 0;

        /*height: auto;*/
        background: #0f223a;
    }

    .dark .el-menu {
        background: transparent;
        border: none;
    }

    /*页面切换动画*/
    .page-enter-active, .page-leave-active {
        transition: opacity .1s;
    }

    .page-enter, .page-leave-active {
        opacity: 0.6;
    }

</style>
