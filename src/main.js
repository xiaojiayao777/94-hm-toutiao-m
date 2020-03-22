import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant组件库
import Vant from 'vant'
// 引入
import 'amfe-flexible'
// 引入样式
import 'vant/lib/index.css'
// 引入自定义的全局样式 用它覆盖vant的样式
import '@/styles/index.less'
Vue.use(Vant)
// 以上做法是完整导入 上线的时候可以用按需导入

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
