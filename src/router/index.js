import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import banner from '@/components/banner'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/',
      name: 'banner',
      component: banner
    },
  ]
})
