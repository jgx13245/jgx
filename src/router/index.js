import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import ListClassify from '@/pages/listClassify/ListClassify'


import List from '@/pages/listHot/list-Home'
import listCity from '@/pages/listHot/List-city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path:'/b',
          name:'data',
          component:Home
        }
      ]
    },{

      path:'/listClassify',
      name:'listClassify',
      component:ListClassify
    },
    {
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

