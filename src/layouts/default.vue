<template>
    <div id="app">
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

        },
        async created() {
            let self = this;
            this.$store.commit('setTheme') //设置默认主题
        },
        mounted() {

        },
        computed: {
            theme() {
                return this.$store.getters.theme
            },
            meta() {
                return this.$route.meta
            },
            menus() {
                return this.$store.state.api.navMenu
            }
        }
    };
</script>

<style lang="less">


</style>
