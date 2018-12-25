<template>
    <div id="app">
        <!--<dark></dark>-->
        <!--{{meta}}-->
        <Dropdown @on-click="onTheme" style="margin-left: 20px">
            <Button type="primary">
                切换主题
                <Icon type="ios-arrow-down"></Icon>
            </Button>
            <DropdownMenu slot="list">
                <DropdownItem name="blue">蓝色</DropdownItem>
                <DropdownItem name="dark">暗色</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <template v-for="(item,key) in menus">
            <router-link :key="key" :to="{path:item.path}">{{item.title}}</router-link>
            |
        </template>
        <!--动态组件,从路由里获取的 theme优先级要高于 主题切换的优先级-->
        <component :is="meta.theme || theme"></component>
    </div>
</template>

<script>

    import {dark, blue, mobile} from '@/layouts/theme/index'

    export default {
        name: "app",
        components: {
            "dark": dark,
            "blue": blue,
            "mobile": mobile,
        },
        data() {
            return {};
        },
        methods: {
            onTheme(item) {
                this.$store.commit('setTheme', item)
            }
        },
        async created() {
            let self = this;

        },
        mounted() {

        },
        computed: {
            meta() {
                return this.$route.meta
            },
            theme() {
                return this.$store.state.theme
            },
            menus() {
                return this.$store.state.api.navMenu
            }
        }
    };
</script>

<style lang="less">

</style>
