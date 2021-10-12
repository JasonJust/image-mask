import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/view/TheHome.vue'

Vue.use(Router)
const route = [
  {
    path: '/home',
    name: 'home',
    // component: home
    component: () => import('../view/TheHome.vue')
  },
  {
    path: '/',
    name: 'img-size',
    // component: home
    component: () => import('../view/ImageSize.vue')
  }
]

export default new Router({
  routes: route
})
