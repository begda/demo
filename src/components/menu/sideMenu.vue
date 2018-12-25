<template>


    <!--如果有子菜单就递归组件-->
    <el-submenu
            @click="itemClick(data)"
            :index="data.name"
            v-if="data.sub">
        <template slot="title">
            <i :class="data.icon" :style="{color:iconColor}"></i>
            <span slot="title">{{data.title}}</span>
        </template>
        <!--递归自己找个组件-->
        <ba-side-menu :data="item" v-for="item in data.sub"></ba-side-menu>
    </el-submenu>
    <!--如果没有子菜单就只显示菜单-->
    <el-menu-item
            v-else
            @click="itemClick(data)"
            :index="data.name">
        <i :class="data.icon" :style="{color:iconColor}"></i>
        <span slot="title">{{data.title}}</span>
    </el-menu-item>


</template>


<script>
    export default {
        name: 'ba-side-menu',

        props: {

            //导航菜单数据
            data: {
                type: Object,
                required: true
            },
            // sideBackgroundColor: {default: "#142534"},//侧边栏背景色
            iconColor: {}, //图标颜色


        },


        methods: {
            itemClick(item) {
                switch (item.action) {
                    case 'page':
                        this.$router.push({name: item.name});
                        break;

                    // case 'window':
                    //
                    //     //如果是 window,说明需要在新窗口打开的网址
                    //     window.open(item.control);
                    //
                    //     break;
                    // case 'dialog':
                    //     //打开弹窗
                    //     //  item.show=true
                    //     this.$lrDialog(item);
                    //
                    //     break;

                }


            },


        },


    }


</script>


<style lang="less" scoped>


</style>