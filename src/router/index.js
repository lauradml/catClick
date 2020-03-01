import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/siameses',
    name: 'Siames',
    component: () => import(/* webpackChunkName: "siames" */ '../views/Siames.vue')
  },
  {
    path: '/persas',
    name: 'Persas',
    component: () => import(/* webpackChunkName: "persas" */ '../views/Persas.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
