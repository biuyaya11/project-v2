import Vue from 'vue'
import App from './App.vue'
// import '../plugins/element'
import 'font-awesome/css/font-awesome.min.css'
// import axios from 'axios'
import router from "./router";
// 全局引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import service from "./service";
import echarts from 'echarts'

Vue.use(ElementUI)

// Vue.prototype.axios = axios //挂载到原型，可以全局使用
Vue.prototype.service = service
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
