<template>
    <div class="ass">
        这是home pc
        <el-button @click="dianji()">asdf</el-button>
        <div>{{date}}</div>
        {{new Date().getTime()}}
    </div>
</template>

<script>

    export default {
        comments: {},
        app() {
            return {
                // header: false,
                // keepAlive: true
                // theme:'blue'
            }
        },
        data() {
            return {
                activeIndex: '1',
                date: new Date().getTime()
            };
        },
        methods: {
            dianji() {
                this.$refresh()
            }
        },
        async created() {
            let self = this;

        },
        mounted() {

        },
        activated() {
            // this.$liaohui()
            // this.date=new Date().getTime()
        },
        computed: {}
    };
</script>

<style lang="less" scoped>
    .ass {
        background: rgba(144, 255, 142, 0.2);
    }

</style>
