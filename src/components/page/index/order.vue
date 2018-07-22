<template>
    <div>
            <h1>order</h1>
    </div>
</template>

<script>
export default {
  name: "order",
  mounted() {},
  beforeRouteEnter(to, from, next) {
    //  使用路由守卫 刷新数据
    next(vm=>{
        vm.getData()
    })
  },
  methods: {
    getData() {
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
    }
  }
};
</script>

<style scoped>
</style>