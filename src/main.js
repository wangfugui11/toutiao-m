import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入入全局样式(没补全index.js没法子热更新)
import './style/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
