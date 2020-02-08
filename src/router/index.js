import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutPage from '../views/AboutPage.vue'
import CartPage from '../views/CartPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
