import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/view/TheHome.vue'

Vue.use(Router)
const route = [
  {
    path: '/',
    name: 'home',
    // component: home
    component: () => import('../view/TheHome.vue')
  }
]

export default new Router({
  routes: route
})
