import Vue from 'vue'
import App from './app/App'
import router from './router'
import store from './vuex'


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
