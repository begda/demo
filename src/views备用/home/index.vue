<template>
    <div class="ass">
        这是home
    </div>
</template>

<script>

    export default {
        comments: {},
        // template:img,
        // render(){
        //     return {img}
        // },
        data() {
            return {};
        },
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
