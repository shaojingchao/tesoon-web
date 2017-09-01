import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Dynamic from '@/components/dynamic'
import Service from '@/components/service'
import About from '@/components/about'
// import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/dynamic',
      name: 'Dynamic',
      component: Dynamic
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }

  ]
})
