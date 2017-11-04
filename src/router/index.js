import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/listHot/list-Home'
import listCity from '@/pages/listHot/List-city'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path:'/listHot',
      name:'listHot',
      component:List,
      children:[{
        path:'a',
        component:listCity
      }]
    }
  ]
})

