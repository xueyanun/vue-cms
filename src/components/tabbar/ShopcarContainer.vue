<template>
    <div class='shopcar-container'>
        <!-- 商品列表区域 -->
        <div class="good-list">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner" v-for="(item,i) in goodslist" :key="item.id">
                        <mt-switch 
                            v-model="$store.getters.getGoodsSelected[item.id]"
                            @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])" 
                        ></mt-switch>
                        <img :src='item.thumb_path'/>
                        <div class='proInfo'>
                            <h5>{{item.title}}</h5>
                            <p> 
                                <span class='price'>￥{{item.sell_price}}</span>
                                <numbox :initCount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                                <a href='#' @click.prevent="remove(item.id,i)">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 结算区域 -->
        <div>
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        数量：{{$store.getters.getGoodsCountAndAmount.count}}
                        <br/>
                        价格：￥{{$store.getters.getGoodsCountAndAmount.amount}}
                        <br/>
                        <mt-button type="danger">结算</mt-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import numbox from '../subcomponents/shopcar_numbox.vue'
export default {
    data(){
        return {
            goodslist:[]
        }
    },
    methods:{
        getGoodsList(){
            var idArr=[];
            this.$store.state.car.forEach((item)=>{
                idArr.push(item.id)
            });
            if(idArr.length<=0) return;
            this.$http.get('api/goods/getshopcarlist/'+idArr).then(result=>{
                if(result.body.status==0){
                    this.goodslist=result.body.message
                }
            })
        },
        remove(id,index){
            this.goodslist.splice(index,1);
            this.$store.commit("removeFormCar",id)
        },
        selectedChanged(id,val){
            this.$store.commit("updateGoodsSelected",{id,val})
        }
    },
    created(){
        this.getGoodsList();
    },
    components:{
        numbox
    }

}
</script>
<style lang="less"  scoped>
    .shopcar-container{
        background-color: #eee;
        overflow: hidden;
        .good-list{
            img{
                width:60px;
                height:60px;
            }
            h5{
                font-weight: 800;
                color:#000;
                font-size: 13px;
            }
        }
        .mui-card-content-inner{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .proInfo{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .price{
                color:red;
            }
        }
    }
</style>