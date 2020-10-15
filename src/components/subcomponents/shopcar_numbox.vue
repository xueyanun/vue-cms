<template>
    <div class="mui-numbox" data-numbox-min='1' style='height:25px;'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initCount" @change="changenum" ref='numbox' readonly/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
    data(){
        return{}
    },
    props:["initCount","goodsid"],
    methods:{
        changenum(){
           this.$store.commit("updateGoodsInfo",
            {
                id:this.goodsid,
                count:this.$refs.numbox.value
            });
        }
    },
    mounted(){
        mui(".mui-numbox").numbox();
    },
    watch: {
       
    },

}
</script>
<style lang="less" scoped>

</style>