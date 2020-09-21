<template>
    <div>
        <!-- 轮播图区 -->
        <swiper :lunbotuList="lunbotuList" :isfull="isfull"></swiper>
        <!-- 9宫格改6宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to='/home/newsList'>
                    <img src="/src/images/icon1.png" />
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to='/home/photoList'>
                    <img src="/src/images/icon1.png" />
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="/src/images/icon1.png" />
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="/src/images/icon1.png" />
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="/src/images/icon1.png" />
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="/src/images/icon1.png" />
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import {Toast} from 'mint-ui';
import swiper from "../news/subcomponents/swiper.vue"
export default {
    data(){
        return{
            lunbotuList:[],
            isfull:true
        }
    },
    created(){
        this.getLunbotu();
    },
    methods: {
        getLunbotu(){
            this.$http.get("api/getlunbo").then(result=>{
                // console.log(result.body)
                if(result.body.status===0){
                    //数据请求成功
                    this.lunbotuList=result.body.message; 
                    // Toast('加载轮播图成功。。。');
                }else{
                    //数据请求失败
                    Toast('加载轮播图失败。。。');
                }
            })
        }
    },
    components:{
        swiper
    }
}
</script>
<style lang="less" scoped>
    .mui-grid-view.mui-grid-9{
        background:#fff;
        img{
            width:60px;
        }
        .mui-media-body{
            font-size: 13px;
        }
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:none;
    }
   
</style>