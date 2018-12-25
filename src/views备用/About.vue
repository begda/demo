<template>
    <div class="about">
        <input type="text"/>
        <h1>This is an about page</h1>
        <router-link :to="{ name: 'home', query: { liaohui: 199999 } }"
        >返回home
        </router-link>
        |
    </div>
</template>
<script>

    export default {
        name: "about",
        metaInfo: {
            title: '我的名字', // set a title
        },
        app(meta) {
            // meta.header = true
            // meta.side = false
            // meta.keepAlive = true
        },
        beforeCreate() {

        },
        data() {
            return {
                date: new Date().getTime()
            };
        }
    };
</script>
