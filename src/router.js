import VueRouter from "vue-router";
import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";
import NewsList from "./components/news/NewsList.vue";
import NewsInfo from "./components/news/NewsInfo.vue";
import photoList from "./components/photos/photoList.vue";
import imageinfo from "./components/photos/imageinfo.vue";
import goodslist from "./components/goods/goodslist.vue";
import goodsinfo from "./components/goods/goodsinfo.vue";
import goodsDesc from "./components/goods/goodsDesc.vue";
import goodsComment from "./components/goods/goodsComment.vue";
var router=new VueRouter({
    routes:[
       {path:'/',redirect:"/home"},
       {path:'/home',component:HomeContainer,name:"home"},
       {path:'/member',component:MemberContainer,name:"member"},
       {path:'/shopcar',component:ShopcarContainer,name:"shopcar"},
       {path:'/search',component:SearchContainer,name:"search"},
       {path:'/home/newsList',component:NewsList},
       {path:'/home/newsInfo/:id',component:NewsInfo},
       {path:'/home/photoList',component:photoList},
       {path:'/home/photoList/imginfo/:id',component:imageinfo},
       {path:'/home/goodslist',component:goodslist},
       {path:'/home/goodsinfo/:id',component:goodsinfo,name:"goodsinfo"},
       {path:'/home/goodsinfo/goodsDesc/:id',component:goodsDesc,name:"goodsDesc"},
       {path:'/home/goodsinfo/goodsComment/:id',component:goodsComment,name:"goodsComment"},
    ],
    linkActiveClass:"mui-active"
});
export default router;