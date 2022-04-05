import Vue from 'vue'
import VueRouter from 'vue-router'

import Homepage from '@/views/Homepage.vue'
import vCatalog from '@/views/v-catalog'
import vCart from '@/views/v-cart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Homepage
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: vCatalog
  },
  {
    path: '/cart',
    name: 'cart',
    component: vCart,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
