import VueRouter from "vue-router";
import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";
var router=new VueRouter({
    routes:[
       {path:'/',redirect:"/home"},
       {path:'/home',component:HomeContainer,name:"home"},
       {path:'/member',component:MemberContainer,name:"member"},
       {path:'/shopcar',component:ShopcarContainer,name:"shopcar"},
       {path:'/search',component:SearchContainer,name:"search"}
    ],
    linkActiveClass:"mui-active"
});
export default router;