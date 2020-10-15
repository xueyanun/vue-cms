
import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);
var car=JSON.parse(localStorage.getItem('car')||'[]')
var store=new Vuex.Store({
    state:{
        // catecount:0
        car:car,
    },
    mutations:{
        addToCar(state,goodsinfo){
            console.log(state.car);
            var flag=false;
            state.car.some(item=>{
                if(item.id==goodsinfo.id){
                    item.count+= parseInt(goodsinfo.count);
                    flag=true;
                    console.log(state.car)
                    return true;
                }
            });
            if(!flag){
                state.car.push(goodsinfo);
                 console.log(state.car)
            }
            localStorage.setItem("car",JSON.stringify(state.car))
        },
        updateGoodsInfo(state,goodsinfo){
            state.car.some(item=>{
                if(item.id==goodsinfo.id){
                    item.count=parseInt(goodsinfo.count);
                    return true;
                }
            });
            localStorage.setItem("car",JSON.stringify(state.car))
        },
        removeFormCar(state,id){
            state.car.some((item,i)=>{
                if(item.id==id){
                    state.car.splice(i,1);
                    return true;
                }
            });
            localStorage.setItem("car",JSON.stringify(state.car))
        },
        updateGoodsSelected(state,info){
            state.car.some(item=>{
                if(item.id==info.id){
                    item.selected=info.val
                }
            });
            localStorage.setItem("car",JSON.stringify(state.car))
        }
    },
//     mutations: {
//     increment (state) {
//       // 变更状态
//       state.count++
//       console.log(state.count);
//     }
//   },
    getters:{
        getAllCount(state){
            var c=0;
            state.car.forEach(item=>{
                c+=item.count;
            });
            return c;
        },
        getCar(state){
            return state.car
        },
        getGoodsCount(state){
            var o=[];
            state.car.forEach(item=>{
                o[item.id]=item.count;
            });
            return o;
        },
        getGoodsSelected(state){
            var o=[];
            state.car.forEach((item,i)=>{
                o[item.id]=item.selected;
            })
            return o;
        },
        getGoodsCountAndAmount(state){
            var o={
                count:0,
                amount:0
            };
            state.car.forEach(item=>{
                if(item.selected){
                    o.count+=item.count;
                    o.amount+=item.price*item.count;
                }
            });
            return o;
        }
        
    }
});

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
    router,
    store
});

