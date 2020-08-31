<template>
   <div class='app-container'>
       <mt-header fixed title="固定在顶部的header"></mt-header>
	   <transition>
			<router-view style='margin-top:40px;'></router-view>
	   </transition>
       <nav class="mui-bar mui-bar-tab">	   
			<router-link id="defaultTab" class="mui-tab-item" :to='{name:"home"}'>
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" :to='{name:"member"}'>
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" :to='{name:"shopcar"}'>
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" :to='{name:"search"}'>
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
<style>
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
	}
</style>

