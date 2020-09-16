
import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root="http://api.cms.liulongbin.top";
import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";
// 按需导入mint-ui 组件

// import { Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css';

import router from "./router.js";

import moment from 'moment';
Vue.filter("dataFormat",function(dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
        return moment(dataStr).format(pattern);
});
import VuePreview from'vue-preview'
Vue.use(VuePreview);
import app from './app.vue';

var vm=new Vue({
    el:'#app',
    render:(c)=>c(app),
    router
});
