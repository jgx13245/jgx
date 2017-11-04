import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import ListClassify from '@/pages/listClassify/ListClassify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path:'/listClassify',
      name:'listClassify',
      component:ListClassify
    }
  ]
})

