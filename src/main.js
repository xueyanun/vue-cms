
import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);
import VueResource from 'vue-resource';
Vue.use(VueResource);
import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";
// 按需导入mint-ui 组件

import { Header,Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import router from "./router.js";

import app from './app.vue';
var vm=new Vue({
    el:'#app',
    render:(c)=>c(app),
    router
});
