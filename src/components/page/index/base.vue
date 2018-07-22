<template>
    <div>
        <div class="index-view" ref="content">
          <keep-alive>
            <router-view :scroll="scrollTop"></router-view>
          </keep-alive>
        </div>
        <nav class="tab-box">
            <ul>
                <li :class="thisPage === 'index'? 'on' :'' "><router-link to="/"><i class="iconfont icon icon-shouye"></i>首页</router-link></li>
                <li :class="thisPage === 'order'? 'on' :'' "><router-link to="order"><i class="iconfont icon icon-wodedingdan"></i>订单</router-link></li>
                <li :class="thisPage === 'user'? 'on' :'' "><router-link to="user"><i class="iconfont icon icon-wodejuhuasuan"></i>我的</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  data() {
    return {
      thisPage: "index",
      scrollTop: ""
    };
  },
  created() {
    // 初始化当前页面路由渲染
    this.thisPage = this.$route.name;
  },
  mounted() {
    // 监听首页滚动
    this.$refs.content.addEventListener("scroll", this.scrollTo);
  },
  methods: {
    scrollTo() {
      this.scrollTop = this.$refs.content.scrollTop;
    }
  },
  watch: {
    $route(to, from) {
      // 监听路由改变修改页面
      this.thisPage = to.name;
    }
  }
};
</script>

<style scoped lang="less">
.index-view {
  width: 100%;
  height: 92vh;
  overflow-y: auto;
}
.tab-box {
  width: 20rem;
  height: 8vh;
  box-sizing: border-box;
  background-color: #fff;
  border-top: 1px solid #f2f2f2;
  font-size: 12px;
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      height: 100%;
      flex: 1;
      a {
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;
        justify-content: center;
      }
      &.on {
        a {
          color: skyblue;
        }
      }
      .icon {
        font-size: 18px;
      }
    }
  }
}
</style>