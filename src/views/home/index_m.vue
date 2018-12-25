<template>
    <div class="ass">
        这是homeasfasfas
    </div>
</template>

<script>

    export default {
        comments: {},
        // template:img,
        // render(){
        //     return {img}
        // },
        // app(){
        //     return {   header:true}
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
