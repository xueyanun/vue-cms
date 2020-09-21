<template>
    <div class="goodsList-container">
        <div class="goodsitem" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="">
            <h4 class="title">{{item.title}}</h4>
            <div class="info">
                <p class="price">
                    <span class="new">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sale">
                    <span>热卖中</span>
                    <span>剩余{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click='add_more'>加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from "mint-ui";
export default {
    data(){
        return{
            goodslist:[],
            pageindex:1
        }
    },
    methods:{
        getgoods(){
            this.$http.get("api/getgoods?pageindex="+this.pageindex).then(result=>{
                if(result.body.status===0){
                    if(result.body.message.length===0){
                        return  Toast("没有更多商品了")
                    }
                    this.goodslist=this.goodslist.concat(result.body.message);
                }else{
                    Toast("商品列表请求失败")
                }
            })
        },
        add_more(){
            this.pageindex++;
            this.getgoods()
        },
        goDetail(id){
            // this.$router.push("/home/goodsinfo/");
            this.$router.push({path:`/home/goodsinfo/${id}`});
        }
    },
    mounted() {
        this.getgoods();
    },
}
</script>
<style lang="less" scoped>
    .goodsList-container{
        display: flex;
        flex-wrap:wrap;
        padding:6px;
        justify-content: space-between;
        .goodsitem{
            width:49%;
            border:1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin:4px 0;
            padding:2px;
            border-radius: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 178px;
            img{
                width:100%;
            }
            .title{
                font-size: 14px;
            }
            .info{
                background:#ddd;
                .price{
                    padding:4px 2px;
                    .new{
                        color:red;
                        font-weight: 600;
                    }
                    .old{
                        text-decoration: line-through;
                        margin-left: 10px;
                    }
                }
                .sale{
                    display: flex;
                    justify-content: space-between;
                }
            }
            p{
                margin:0;
            }
        }
    }
</style>