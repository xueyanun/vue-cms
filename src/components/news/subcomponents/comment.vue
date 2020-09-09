<template>
    <div class="comments-container">
        <h3>发表评论</h3>
        <hr/>
        <textarea placeholder="输入内容100字" maxlength='100' v-model="msg"></textarea>
        <mt-button type='primary' size='large' @click='postComments'>发表评论</mt-button>
        <div class='comments-list'>
            <div class='comments-item' v-for="(item,i) in comments" :key="i">
                <p class='subtitle'>
                    <span>{{i+1}}楼</span>
                    <span>用户：{{item.user_name}}</span>
                    <span>发布时间：{{item.add_time|dataFormat()}}</span>
                </p>
                <h5 class='title'>{{item.content}}</h5>
            </div>
        </div>
        <mt-button type='danger' size='large' plain @click='add_more'>加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from 'mint-ui';
export default {
    data(){
        return{
            pageIndex:1,
            comments:[],
            msg:''
        }
    },
    props:["id"],
    methods:{
        getComments(){
            this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(function(result){
                if(result.body.status===0){
                    if(result.body.message.length==0){
                        return  Toast('没有更多数据啦！');
                    }
                    this.comments=this.comments.concat(result.body.message);
                }else{
                    Toast('评论加载失败');
                }
            });
        },
        add_more(){
            this.pageIndex++;
            this.getComments();
        },
        postComments(){
            // this.comments.unshift({"add_time":new Date,"content":this.msg,"user_name":'xy'});
            if(this.msg.trim().length===0){
               return Toast('内容不能为空！')
            }
            this.$http.post("api/postcomment/"+this.id,{
                content:this.msg.trim(),user_name:"xy",add_time:new Date
            }).then(function(result) {
                if(result.body.status===0){
                    this.comments.unshift({"add_time":new Date,"content":this.msg,"user_name":'xy'});
                    this.msg='';
                }else{
                     Toast('提交失败！')
                }
            });
        }
    },
    created() {
       this.getComments(); 
    },
}
</script>
<style lang="less" scoped>
    .comments-container{
        .comments-list{
            .comments-item{
                .title{
                    padding:0 5px;
                }
                .subtitle{
                    background: #ccc;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>