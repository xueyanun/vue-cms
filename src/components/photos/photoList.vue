<template>
    <div class='photo-container'>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a  class="mui-control-item"  data-wid="tab-top-subpage-1.html" @click='getimages(0)'>
                        全部
                    </a>
                    <a v-for="item in imgcategory" :key="item.id" class="mui-control-item"  data-wid="tab-top-subpage-1.html" @click='getimages(item.id)'>
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <div class='images-box' id='imgcontainter'>
            <router-link  class='images-item' v-for="item in images" :key="item.id" :to="'/home/photoList/imginfo/'+item.id">
                    <img v-lazy='item.img_url'/>
                    <h5>{{item.title}}</h5>
                    <p>{{item.zhaiyao}}</p>
            </router-link>
        </div>
    </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";
import {Toast} from "mint-ui";
export default {
    data(){
        return{
            imgcategory:[],
            images:[], 
        }
    },
    methods:{
        getcate(){
            this.$http.get("api/getimgcategory").then(function(result) {
                if(result.body.status===0){
                    this.imgcategory=result.body.message;
                }else{
                    Toast("数据请求失败！");
                }
            })
        },
        getimages(id){
             this.$http.get("api/getimages/"+id).then(function (result) {
                 if(result.body.status===0){
                      this.images=result.body.message;
                 }else{
                    Toast("数据请求失败！");
                }
             })
        }
        
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
        this.getimages(0);
    },
    created() {
        this.getcate();
    }
}
</script>
<style lang='less' scoped>
    *{
        touch-action: pan-y;
    }
    .mui-bar-tab .mui-tab-item1.mui-active {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item1 {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item1 .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
        .mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .images-item{
        background:#eee;
        text-align:center;
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }

    }
</style>