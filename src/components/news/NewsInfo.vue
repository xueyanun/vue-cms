<template>
    <div class='newsInfo_container'>
        <h3 class='title'> newsTitile</h3>
        <p class='sub_title'>
            <span>发布时间：2020-09-07 16:11</span>
            <span>点击：8次</span>
        </p>
        <hr/>
        <div class='content'>
            {{newsInfo}}
        </div>
        <comment-box :id="id"></comment-box>
    </div>
</template>
<script>
import {Toast} from 'mint-ui';
import comment from './subcomponents/comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            newsInfo:[]
        }
    },
    methods:{
        getNewsInfo(){
            this.$http.get("api/getnew/:"+this.id).then(function(result) {
                if(result.body.status===1){
                    this.newsInfo=result.body.message;
                }else{
                    //数据请求失败
                    Toast('加载新闻数据失败。。。');
                }
            })
        }
    },
    created(){
        this.getNewsInfo();
    },
    components:{
       "comment-box":comment
    }
}
</script>
<style lang="less" scoped>
.newsInfo_container{
    padding:0 4px;
    .title{
        text-align:center;
        font-size: 16px;
        padding:15px 0;
        color:red;
    }
    .sub_title{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color:#226aff;
    }

}

</style>