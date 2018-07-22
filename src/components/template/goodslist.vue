<!-- 商品列表1 -->
<template>
    <div>
        <van-row class="list goodslist" v-for="(goods,index) in goodslist" :key="index">
            <van-col span="6" class="goods-img"><img v-lazy="goods.img" width="100%"></van-col>
            <van-col span="12" class="goods-content">
                <h4>{{goods.title}}</h4>
                <h4>{{goods.describe}}</h4>
            </van-col>
            <van-col class="goodslist-msg" span="6">
                <h4>
                    {{goods.serverName}}
                </h4>
                <h4>
                   ￥{{goods.price}}
                </h4>
                <h4>
                  收藏{{goods.collect}}
                </h4> 
            </van-col>
        </van-row>
    </div>
</template>

<script>
export default {
  props: ["goodslist"]
};
</script>

<style scoped lang="less">
.list:active {
  background-color: #f2f2f2;
}
.goodslist {
  border-top: 1px solid #f2f2f2;
  padding: 5px 0;
  h4 {
    font-weight: 500;
    text-align: left;
    font-size: 14px;
  }
  .goods-img {
    display: flex;
    align-items: center;
  }
  .goods-content {
    padding-left: 5px;
    h4 {
      &:last-child {
        padding-top: 5px;
        font-size: 12px;
      }
    }
  }
  .goodslist-msg {
    h4 {
      font-size: 12px;
      text-align: right;
      padding-right: 5px;
      padding-bottom: 5px;
    }
  }
}
</style>