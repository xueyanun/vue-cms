<template>
    <div>
        <ul class="mui-table-view">		
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.add_time|dataFormat}}</span>
                                <span>点击：{{item.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>

			</ul>
    </div>
</template>
<script>
import {Toast} from 'mint-ui';
export default {
    data(){
        return{
            newsList:[]
        }
    },
    methods: {
        getNewsList(){
            this.$http.get("api/getnewslist").then(function(result){
                if(result.body.status===0){
                    this.newsList=result.body.message;
                }else{
                     //数据请求失败
                    Toast('加载新闻列表失败。。。');
                }
            });
        }
    },
    created(){
        this.getNewsList();
    }
}
</script>
<style lang="less" scoped>
    .mui-table-view{
        li{
            .mui-media-body{
                font-size: 14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color:#226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>