// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/App'
import router from './router'
import store from './vuex'

//Vue.config.productionTip = false
//这行代码现像当用户执行console.info("")
/*Vue.config.productionTip = false*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
