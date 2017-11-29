import Vue from 'vue'
import Router from 'vue-router'

// 导入组件
import Seller from '@/components/seller/Seller'
import Goods from '@/components/goods/Goods'
import Ratings from '@/components/ratings/Ratings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: Goods,
      name: 'goods'
    },
    {
      path: '/seller',
      component: Seller,
      name: 'seller'
    },
    {
      path: '/ratings',
      component: Ratings,
      name: 'ratings'
    }
  ]
})
