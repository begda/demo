<template>
    <div>这是移动
        <router-link :to="{name:'home'}">跳转到home</router-link>
    </div>
</template>
<script>
    import mixin from '../mixin'

    export default {
        mixins:[mixin]
    }
</script>