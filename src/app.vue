<template>
   <div class='app-container'>
       <mt-header fixed title="固定在顶部的header"></mt-header>
	   <transition>
			<router-view></router-view>
	   </transition>
       <nav class="mui-bar mui-bar-tab">	   
			<router-link id="defaultTab" class="mui-tab-item1" :to='{name:"home"}'>
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" :to='{name:"member"}'>
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" :to='{name:"shopcar"}'>
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" :to='{name:"search"}'>
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		
   </div>
    
</template>
<script>

export default {
}
</script>
<style scoped>
	.v-enter{
		opacity: 0;
		transform:translateX(100%);
	}
	.v-leave-to{
		opacity: 0;
		transform:translateX(-100%);
		position: absolute;
	}
	.v-enter-active,.v-leave-active{
		transition:all 0.5s ease;
	}
	.app-container{
		overflow-x: hidden;
		margin-top:40px;
		margin-bottom:50px;
	}
	* {touch-action: pan-y;}
	.mui-bar-tab .mui-tab-item11.mui-active {
		color: #007aff;
	}
	.mui-bar-tab .mui-tab-item11 {
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
	.mui-bar-tab .mui-tab-item11 .mui-icon {
		top: 3px;
		width: 24px;
		height: 24px;
		padding-top: 0;
		padding-bottom: 0;
	}
	.mint-header.is-fixed{
		z-index:9;
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
    text-overflow: ellipsis;}
</style>

