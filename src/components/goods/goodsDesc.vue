<template>
<div class='desc-container'>
   <h4>{{goodsDesc.title}}</h4>
   <div v-html="goodsDesc.content"></div>
</div>
</template>
<script>
import {Toast} from "mint-ui";
export default {
    data(){
        return {
            goodsDesc:[],
            id:this.$route.params.id
        }
    },
    methods:{
        getDesc(){
            this.$http.get(`api/goods/getdesc/${this.id}`).then((result)=>{
                if(result.body.status===0){
                    this.goodsDesc=result.body.message[0];
                }else{
                    Toast("商品详情获取失败！");
                }
            })
        }
    },
    mounted(){
        this.getDesc();
    }
}
</script>
<style lang="less">
    .desc-container{
        padding:0 2px;
        img{
            max-width: 100%;
            height: auto;
        }
    }
</style>
