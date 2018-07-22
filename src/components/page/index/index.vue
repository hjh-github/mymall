<template>
    <div>
          <van-row type="flex" justify="start" align="center" class="search-bar" :style="{backgroundColor: searchBg}">
            <van-col span="21" class="search-box">
              <i class="iconfont icon-sousuo "></i>
              <input class="search-input" type="text" placeholder="搜索">
            </van-col>
            <van-col span="3"><i class="iconfont icon-mail"></i></van-col>
          </van-row>
          <div class="swipe">
            <van-swipe :autoplay="3000">
              <van-swipe-item v-for="(img,index) in loops" :key="index">
                <img v-lazy="img" :title="index" width="100%"/>
              </van-swipe-item>
            </van-swipe>
        </div>
        <van-row class="quick-entry">
          <van-col span="12">
            <div class="quick-bar">
              <i class="iconfont icon-activity"></i>登记出售
            </div>
            </van-col>
          <van-col span="12">
             <div class="quick-bar">
                <i class="iconfont icon-qrcode_fill"></i>全部商品
             </div>
            </van-col>
        </van-row>
        <!-- 销售分类 -->
        <cate :cates="cates"></cate>
        <!-- 商品列表 -->
        <h1 class="goodslist-title">最新上架</h1>
        <goodslist :goodslist="goodslist"></goodslist>
    </div>
</template>

<script>
import cate from "../../template/saleCate";
import goodslist from "../../template/goodslist";
export default {
  props: ["scroll"],
  components: {
    cate,
    goodslist
  },
  data() {
    return {
      thisPage: "",
      loops: [],
      searchBg: `rgba(18,150,219, 0)`,
      cates: [],
      goodslist: []
    };
  },
  created() {
    let that = this;
    this.$axios
      .get("/news/index") //直接页面创建的时候请求接口
      .then(res => {
        let data = res.data;
        that.loops = data.loops;
        that.cates = data.cate;
        that.goodslist = data.goodslist;
        console.table(data);
      });
  },
  mounted() {},
  watch: {
    scroll(n) {
      let opacity;
      n < 101 ? (opacity = n / 100) : (opacity = 1);
      // 根据scrollTop修改背景透明度
      this.searchBg = `rgba(118,150,219, ${opacity})`;
    },
  }
};
</script>

<style scoped lang="less">
.search-bar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 36px;
  .search-box {
    margin-left: 10px;
    border-radius: 3px;
    font-size: 12px;
    padding-left: 5px;
    line-height: 22px;
    height: 24px;
    background-color: #fff;
    i {
      font-size: 14px;
      color: #333;
    }
    .search-input {
      width: 90%;
      border: 0;
      outline: none;
      padding-left: 5px;
    }
  }
  i {
    color: #fff;
    font-size: 22px;
    line-height: 22px;
  }
}
.quick-entry {
  height: 12vw;
  line-height: 12vw;
  font-size: 18px;
  vertical-align: middle;
  .quick-bar {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      font-size: 26px;
    }
  }
}
.swipe {
  width: 100%;
  max-height: 41.666vw;
  overflow: hidden;
  z-index: 8;
}
.goodslist-title {
  font-weight: 500;
  padding: 10px 0;
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    border-top: 2px solid red;
  }
}
</style>