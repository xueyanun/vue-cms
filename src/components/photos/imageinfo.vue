<template>
    <div class='imginfo-container'>
        <h5>{{imageinfo.title}}</h5>
        
        <div class='thumimages-box'>
                <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        </div>
           
        <p>
            <span>{{imageinfo.add_time|dataFormat}}</span>
            <span>点击：{{imageinfo.click}}次</span>
        </p>
        <div v-html="imageinfo.content">
            
        </div>
         <comment-box :id="id"></comment-box>
    </div>
</template>
<script>
import {Toast} from "mint-ui";
import comment from '../news/subcomponents/comment.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            imageinfo:[],
            slide1: []        
        }
    },
    methods:{
        getimageinfo(){
            this.$http.get("api/getimageinfo/"+this.id).then(
                (result)=>{
                    if(result.body.status===0){
                        this.imageinfo=result.body.message[0];
                    }else{
                        Toast("详情数据获取失败！");
                    }
                }
            )
        },
        handleClose () {
        console.log('close event')
      },
      getthumimages(){
          this.$http.get("api/getthumimages/"+this.id).then(
              (result)=>{
                  if(result.body.status===0){
                      result.body.message.forEach((item)=>{
                          item.msrc=item.src;
                          item.w=600;
                          item.h=400;
                      },
                      this.slide1=result.body.message
                      );
                  }else{
                        Toast("详情数据获取失败！");
                    }
              }
          )
      }
    },
    mounted(){
        this.getimageinfo();
        this. getthumimages();
    },
    components:{
       "comment-box":comment
    }
}
</script>
<style lang="less">
.imginfo-container{
    .thumimages-box{
        .my-gallery{
            display: flex;
            flex-wrap:wrap;
        }
        figure{
                margin:0;
            img{
                width:90px;
            }
        }
    }
}
</style>