import Vue from 'vue'
import VueRouter from 'vue-router'
import Sun from '../views/Sun.vue'
import Yang from '../views/Yang.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:"/sun",
  },
  {
    path:'/yang',
    component: Yang
  },
  {
    path: '/sun',
    component: Sun
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
