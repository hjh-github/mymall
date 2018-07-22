// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import './mock/mock.js'
import '@/assets/icon/iconfont.css'
import '@/assets/basecss/base.css'
import {Swipe,SwipeItem,Lazyload,Row, Col,Field} from 'vant'
import 'vant/lib/vant-css/index.css'

Vue.prototype.$axios = Axios
Vue.config.productionTip = false
Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(Row).use(Col).use(Field)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
