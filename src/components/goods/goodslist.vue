<template>
    <div class="goodsList-container">
        <div class="goodsitem">
            <img src="http://vacuflex-china.bj01.bdysite.com/uploads/pro/VC1-PU.jpg" alt="">
            <h4 class="title">轻型，弯曲极其灵活的PVC软管轻型，弯曲极其灵活的PVC软管</h4>
            <div class="info">
                <p class="price">
                    <span class="new">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sale">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="goodsitem">
            <img src="http://vacuflex-china.bj01.bdysite.com/uploads/pro/VC1-PU.jpg" alt="">
            <h4 class="title">轻型，弯曲极其灵活的PVC软管</h4>
            <div class="info">
                <p class="price">
                    <span class="new">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sale">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="goodsitem">
            <img src="http://vacuflex-china.bj01.bdysite.com/uploads/pro/VC1-PU.jpg" alt="">
            <h4 class="title">轻型，弯曲极其灵活的PVC软管</h4>
            <div class="info">
                <p class="price">
                    <span class="new">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sale">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .goodsList-container{
        display: flex;
        flex-wrap:wrap;
        padding:6px;
        justify-content: space-between;
        .goodsitem{
            width:49%;
            border:1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin:4px 0;
            padding:2px;
            border-radius: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 178px;
            img{
                width:100%;
            }
            .title{
                font-size: 14px;
            }
            .info{
                background:#ddd;
                .price{
                    padding:4px 2px;
                    .new{
                        color:red;
                        font-weight: 600;
                    }
                    .old{
                        text-decoration: line-through;
                        margin-left: 10px;
                    }
                }
                .sale{
                    display: flex;
                    justify-content: space-between;
                }
            }
            p{
                margin:0;
            }
        }
    }
</style>