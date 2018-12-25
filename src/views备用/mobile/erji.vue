<template>
    <div class="liaohui">
        <!--{{os}}-->
        <!--<component :is="os?'bbb':'ass'"></component>-->
        <router-view></router-view>
    </div>
</template>


<script>
    // import mixin from './mixin'
    export default {
        data() {
            return {cc: 'ass'}
        },
        // components: {
        //     "ass": () => import('./a.vue'),
        //     "bbb": () => import('./b.vue')
        // },
        // mixins: [mixin],
    }
</script>

<style lang="less" scoped>
    .liaohui {
        background: #22ff3d;
    }

</style>