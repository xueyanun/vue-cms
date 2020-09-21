<template>
<div>
    <comment-box :id="id"></comment-box>
</div>
</template>
<script>
import {Toast} from "mint-ui";
import comment from "../news/subcomponents/comment.vue";
export default {
    data(){
        return {
            goodsDesc:[],
            id:this.$route.params.id,
        }
    },
    methods:{
        getDesc(){
            this.$http.get(`api/goods/getdesc/${id}`).then(
                (result)=>{
                     if(result.body.status===0){
                        this.goodsDesc=result.body.message[0];
                    }else{
                         Toast("商品详情获取失败！");
                    }
                }
            )
        }
    },
    components:{
       "comment-box":comment
    }
}
</script>
<style lang="less" scoped>

</style>
