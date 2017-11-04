import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
<<<<<<< HEAD
import ListClassify from '@/pages/listClassify/ListClassify'

=======
import List from '@/pages/listHot/list-Home'
import listCity from '@/pages/listHot/List-city'
>>>>>>> 405b4f2df0be25894a22dbaf432eda255f5a7de3
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
<<<<<<< HEAD
      path:'/listClassify',
      name:'listClassify',
      component:ListClassify
=======
      path:'/listHot',
      name:'listHot',
      component:List,
      children:[{
        path:'a',
        component:listCity
      }]
>>>>>>> 405b4f2df0be25894a22dbaf432eda255f5a7de3
    }
  ]
})

