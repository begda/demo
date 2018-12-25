<template>
    <div class="ass">
        这是home 移动的

    </div>
</template>

<script>
    export default {
        comments: {},
        data() {
            return {};
        },
        // app() {
        //     return {
        //         // iframe: {side: true,}
        //     }
        // },
        // app() {
        //     return {
        //         iframe: {side: false,}
        //     }
        // },
        methods: {},
        async created() {
            let self = this;

        },
        mounted() {

        },
        computed: {
            meta() {
                return this.$route.meta
            },
            menus() {

                return this.$store.state.navMenu
            }
        }
    };
</script>

<style lang="less" scoped>
    .ass {
        background: rgba(144, 255, 142, 0.2);
    }

</style>
