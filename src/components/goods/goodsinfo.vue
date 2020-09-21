<template>
    <div class="goodsinfo-container">
            <!-- 轮播图区域 -->
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<swiper :lunbotuList="banners" :isfull="isfull"></swiper>
					</div>
				</div>
			</div>
            <!-- 购买区域 -->
			<div class="mui-card">
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class='price'>
                            市场价：<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;&nbsp;销售价：<span class='now_price'>￥{{goodsinfo.sell_price}}</span>
                        </p>
                        <p>
                            购买数量：
                            <numberbox></numberbox>
                        </p>
                        <p>
                            <mt-button type='primary' size='small'>立即购买</mt-button>
                            <mt-button type='danger' size='small'>加入购物车</mt-button>
                        </p>
					</div>
				</div>
			</div>
            <!-- 商品参数区域 -->
            <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{goodsinfo.goods_no}}</p>
						<p>库存情况：{{goodsinfo.stock_quantity}}件</p>
						<p>上架时间：{{goodsinfo.add_time|dataFormat()}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
                </div>
			</div>
    </div>
</template>
<script>
import {Toast} from "mint-ui";
import swiper from "../news/subcomponents/swiper.vue"
import numberbox from "../news/subcomponents/goossinfo_numberbox.vue"
export default {
    data(){
        return{
            banners:[],
            id:this.$route.params.id,
            isfull:false,
            goodsinfo:[]
        }
    },
    methods:{
        getbanners(){
            this.$http.get(`api/getthumimages/${this.id}`).then(result=>{
                if(result.body.status===0){
                    result.body.message.forEach((item)=>{
                        item.img=item.src;
                    });
                    this.banners=result.body.message;
                }else{
                    Toast("轮播图获取失败")
                }
            });
        },
        goods_getinfo(){
            this.$http.get(`api/goods/getinfo/${this.id}`).then(
                (result)=>{
                    if(result.body.status===0){
                        this.goodsinfo=result.body.message[0];
                    }else{
                         Toast("商品详情获取失败！");
                    }
                }
            );
        },
        goDesc(id){
            this.$router.push({path:`/home/goodsinfo/goodsDesc/${id}`});
        },
        goComment(id){
            this.$router.push({path:`/home/goodsinfo/goodsComment/${id}`});
        }
    },
    mounted(){
        this.getbanners();
        this.goods_getinfo()
    },
      components:{
        swiper,
        numberbox
    }
}
</script>
<style lang="less" scoped>
    .goodsinfo-container{
        background: #eee;
        overflow: hidden;
    }
    .price{
        .now_price{
            color:red;
            font-size: 16px;
            font-weight: bold;
        }
    }
    .mui-card-footer{
        display: block;
        button{
            margin:15px 0;
        }
    }
</style>