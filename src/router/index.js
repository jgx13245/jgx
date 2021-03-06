import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import ListClassify from '@/pages/listClassify/ListClassify'
import List from '@/pages/listHot/list-Home'
import listCity from '@/pages/listHot/List-city'
import Listgugong from '@/pages/listgogong/List'
import selectCity from '@/pages/selectCity/select-Home'
import order from '@/pages/order/Order'
import OneDayTour from '@/pages/oneDayTour/Tour'
import shop from '@/pages/shop/shop'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/listClassify',
      name: 'listClassify',
      component: ListClassify
    },
    {
      path: '/listHot',
      name: 'listHot',
      component: List,
      children: [{
        path: 'a',
        component: listCity
      }]
    },
    {
      path: '/listgogong',
      name: 'List',
      component: Listgugong
    },
    {
      path: '/selectCity',
      name: 'selectCity',
      component: selectCity
    }, {
      path: '/order',
      name: 'Order',
      component: order

    }, {

      path: '/oneDayTour',
      name: 'Tour',
      component: OneDayTour
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    }
  ]
})
