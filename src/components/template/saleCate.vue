<!-- 销售分类 -->
<template>
    <div>
        <van-row>
            <van-col class="cate-item-box" v-for="(cate,index) in cates" :key="index" span="12">
                <h4>{{cate.title}}</h4>
                <h5>{{cate.describe}}</h5>
                <img :src="cate.img" width="45%">
            </van-col>
        </van-row>
    </div>
</template>

<script>
export default {
  props: ["cates"]
};
</script>
<style scoped lang="less">
.cate-item-box {
  position: relative;
  height: 125px;
  h4,
  h5 {
    text-align: left;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    z-index: 5;
    padding-left: 5px;
  }
  h4 {
    font-size: 16px;
  }
  h5 {
    font-size: 12px;
  }
  img {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  &:nth-child(1),
  &:nth-child(4) {
    background-color: skyblue;
    color: #fff;
  }
  &:nth-child(2),
  &:nth-child(3) {
    background-color: #f2f2f2;
  }
}
</style>