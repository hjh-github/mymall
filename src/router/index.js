import Vue from "vue";
import Router from "vue-router";
import Base from "@/components/page/index/base";
import IndexPage from "@/components/page/index/index";
import Order from "@/components/page/index/order";
import User from "@/components/page/index/user";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "inedx",
      component: Base,
      children: [
        {
          path: "",
          name:'index',
          component: IndexPage,
          meta:{keepAlive: true}
        },
        {
          path: "order",
          name: "order",
          component: Order
        },
        {
          path: "user",
          name: "user",
          component: User
        }
      ]
    }
  ]
});
