<template>


    <Layout>
        <Header style="height: 60px; " v-if="!meta.header">
            <Menu :active-name="$route.name" @on-select="onMenuSelect" mode="horizontal">
                <MenuItem :name="item.name" v-for="(item, key) in menus" :to="item.path" v-if="!item.hide">
                    <Icon type="ios-paper"/>
                    {{ item.name }}
                </MenuItem>
            </Menu>
        </Header>
        <Layout>
            <Sider hide-trigger style="" v-if="!meta.side">
                <Menu :active-name="$route.name" @on-select="onMenuSelect" mode="vertical">

                    <MenuItem :name="item.name" v-for="(item, key) in menus" :to="item.path" v-if="!item.hide">
                        <Icon type="ios-paper"/>
                        {{ item.name }}
                    </MenuItem>
                </Menu>
            </Sider>
            <Content v-if="!meta.content">
                <div id="nav">

                    <router-link to="/">Home</router-link>
                    |
                    <router-link to="/about">About</router-link>
                </div>


                <keep-alive>

                    <router-view v-if="$route.meta.keepAlive">
                        <!-- 这里是会被缓存的视图组件，比如 Home！ -->
                    </router-view>
                </keep-alive>
                <transition>
                    <router-view v-if="!$route.meta.keepAlive">
                        <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
                    </router-view>
                </transition>
            </Content>
        </Layout>
        <!--<Footer v-if="!meta.footer">Footer</Footer>-->
    </Layout>

</template>

<script>


    export default {
        name: "home",
        data() {
            return {
                list: []
            };
        },
        methods: {
            dianji() {
                console.log("sssssss");
            },
            onMenuSelect(index) {
                console.log(index);
            }
        },
        async created() {
            let self = this;
            // menu().then(res => {
            //     self.list = res;
            // });
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

<style lang="less">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
