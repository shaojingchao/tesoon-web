import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index.vue'
import Dynamic from '@/components/dynamic.vue'
import Service from '@/components/service.vue'
import ServiceTab1 from '@/components/serviceTab1.vue'
import ServiceTab2 from '@/components/serviceTab2.vue'
import ServiceTab3 from '@/components/serviceTab3.vue'
import About from '@/components/about.vue'
import aboutJianjie from '@/components/aboutJianjie.vue'
import aboutLicheng from '@/components/aboutLicheng.vue'
import aboutWenhua from '@/components/aboutWenhua.vue'
import aboutZizhi from '@/components/aboutZizhi.vue'
import aboutLianxi from '@/components/aboutLianxi.vue'
import aboutGongzuo from '@/components/aboutGongzuo.vue'

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
      component: Service,
      redirect: '/service/jiaoyu',
      children: [
        {
          path: 'jiaoyu',
          component: ServiceTab1
        },
        {
          path: 'zonghe',
          component: ServiceTab2
        },
        {
          path: 'shuzi',
          component: ServiceTab3
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      redirect: '/about/jianjie',
      children: [
        {
          path: 'jianjie',
          component: aboutJianjie
        },
        {
          path: 'licheng',
          component: aboutLicheng
        },
        {
          path: 'wenhua',
          component: aboutWenhua
        },
        {
          path: 'zizhi',
          component: aboutZizhi
        },
        {
          path: 'lianxi',
          component: aboutLianxi
        },
        {
          path: 'gongzuo',
          component: aboutGongzuo
        }
      ]
    }

  ]
})
