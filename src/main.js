import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
// 自动设置REM基准值
import 'amfe-flexible'
import './assets/styles/index.less'
Vue.use(Vant)

Vue.config.productionTip = false
// 创建Vue根实例，将router，store
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
