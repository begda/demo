// import '@babel/polyfill'
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/stores/index";
import Meta from "vue-meta";
import ElementUI from "element-ui";
// import { Button, Menu,Submenu,MenuItem,MenuItemGroup,Tooltip,Loading } from 'element-ui';
import "element-ui/lib/theme-chalk/button.css";
import "element-ui/lib/theme-chalk/menu.css";
import "element-ui/lib/theme-chalk/icon.css";
import "element-ui/lib/theme-chalk/tooltip.css";
import "element-ui/lib/theme-chalk/loading.css";
// import iView from "iview";

import mixinApp from "./mixin/isApp";

Vue.use(mixinApp);
Vue.use(ElementUI);
// Vue.use(Meta);
// Vue.use(Button)
// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItem)
// Vue.use(Button)
// Vue.use(MenuItemGroup)
// Vue.use(Tooltip)
// Vue.use(Loading)

import BegdaSideMenu from "@/components/menu/sideMenu";

Vue.component("ba-side-menu", BegdaSideMenu);



// 刷新当前页面
Vue.prototype.$refresh = function() {
  this.pageLoading = true;
  this.$router.replace({ name: "blank" });
};

// 跳转到一个页面并且刷新这个页面
Vue.prototype.$refreshLeave = function(newRoute) {
  this.$router.push(newRoute);
  this.$router.replace({ name: "blank" });
};

Vue.mixin({
  data() {
    return {
      pageLoading: true
    };
  },
  mounted() {
    let self = this;
    setTimeout(() => {
      self.pageLoading = false;
    }, 1000);
  }
});

async function render() {
  Vue.config.productionTip = false;

  store.dispatch("api/navMenu"); //获取导航菜单
  new Vue({
    router: await router(),
    store,
    render: h => h(App)
  }).$mount("#app");
}

render();
