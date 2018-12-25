<template>
    <div>这是电脑
        <router-link to="/home">跳转到home</router-link>

    </div>
</template>
<script>
    import mixin from './mixin'

    export default {
        mixins:[mixin]
    }
</script>