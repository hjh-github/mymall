<template>
    <div>
            <h1 class="order-title">订单中心</h1>
            <van-tabs v-model="active" swipeable>
              <van-tab v-for="(item,index) in tabConfig" :key="index" :title="item.name">
                <div class="orderlist-box">
                    <orderlist :orders="item.list" :inx="index"></orderlist> 
                </div>
              </van-tab>
            </van-tabs>
    </div>
</template>

<script>
import orderlist from "../../template/orderlist";
export default {
  name: "order",
  components: {
    orderlist
  },
  data() {
    return {
      tabConfig: [
        { name: "全部", list: [] },
        { name: "待付款", list: [] },
        { name: "已取消", list: [] }
      ],
      orders: [],
      active: 0
    };
  },
  mounted() {},
  beforeRouteEnter(to, from, next) {
    //  使用路由守卫 刷新数据
    next(vm => {
      vm.getData();
    });
  },
  methods: {
    getData() {
      this.$axios
        .get(this.$api.order) //直接页面创建的时候请求接口
        .then(res => {
          this.orders = res.data.orderlist;
          this.orderMast();
        });
    },
    orderMast() {
      // 分配订单状态
      this.tabConfig.forEach((item, index) => {
        this.tabConfig[index].list = this.orderfy(index);
      });
    },
    orderfy(inx) {
      let orderlist = [];
      // 当inx==0，即全部订单时
      if (!inx) return (orderlist = this.orders);
      // 当inx !=0，即订单需要分配
      this.orders.forEach(order => {
        if (order.state === inx - 1) orderlist.push(order);
      });
      return orderlist;
    }
  }
};
</script>

<style scoped lang="less">
.order-title {
  font-size: 16px;
  height: 44px;
  line-height: 44px;
}
.orderlist-box{
  height: calc(92vh - 88px);
  overflow: auto;
}
</style>