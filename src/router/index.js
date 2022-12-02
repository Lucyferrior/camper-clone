import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '@/views/ProductsView.vue'
import Search from '@/views/SearchView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/women',
    name: 'women',
    component: Products
  },
  {
    path: '/men',
    name: 'men',
    component: Products
  },
  {
    path:'/search',
    name:'search',
    component:Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
