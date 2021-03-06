import Vue from 'vue'
import VueRouter from 'vue-router'
import Sun from '../views/Sun.vue'
import Yang from '../views/Yang.vue'
import Index from '../views/Index.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:"/index",
  },
  {
    path:'/index',
    component:Index,
  },
  {
    path:'/yang',
    component: Yang
  },
  {
    path: '/sun',
    component: Sun
  },
  {
    path: '/detail',
    component: Detail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
