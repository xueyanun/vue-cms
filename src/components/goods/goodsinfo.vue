<template>
    <div class="goodsinfo-container">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class='ball' v-show="ballFlag" ref="ball"></div>
        </transition>
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
                            <numberbox @getcount="getcount" :max="goodsinfo.stock_quantity"></numberbox>
                        </p>
                        <p>
                            <mt-button type='primary' size='small'>立即购买</mt-button>
                            <mt-button type='danger' size='small' @click="addToShopCar">加入购物车</mt-button>
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
            goodsinfo:[],
            ballFlag:false,
            count:1
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
        },
        addToShopCar(){
            this.ballFlag=!this.ballFlag;
            // this.$store.state.catecount= this.$store.state.catecount+this.count;
            //   this.$store.commit("changeCount",this.count);
            var goodsinfo={
                id:this.id,
                count:this.count,
                price:this.goodsinfo.sell_price,
                selected:true
            };
            this.$store.commit("addToCar",goodsinfo);
        },
        beforeEnter(el){
            el.style.transform="translate(0,0)";
        },
        enter(el,done){
            el.offsetWidth;
            const ballposition=this.$refs.ball.getBoundingClientRect();
            const badgeposition=document.getElementById("badge").getBoundingClientRect();
            const moveLeft=badgeposition.left-ballposition.left;
            const moveTop=badgeposition.top-ballposition.top;
            el.style.transform=`translate(${moveLeft}px,${moveTop}px)`;
            el.style.transition="all .3s ease-in";
            done();
        },
        afterEnter(el){
            this.ballFlag=!this.ballFlag;
        },
        getcount(count){
            this.count=count;
        }

    },
    mounted(){
        this.getbanners();
        this.goods_getinfo();
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
        .ball{
            width:15px;
            height: 15px;
            border-radius:50%;
            background-color: red;
            position: absolute;
            z-index: 99;
            top:392px;
            left:152px;
        }
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