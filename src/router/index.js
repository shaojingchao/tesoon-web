import Vue from 'vue'
import Router from 'vue-router'
import Loading from '@/loading'
// import SetTitle from '@/setTitle'

// components
import Index from '@/components/index.vue'
import Dynamic from '@/components/dynamic.vue'
import DynamicDetail from '@/components/dynamicDetail.vue'
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
import ErrorPage from '@/components/404.vue'

Vue.use(Loading)
// Vue.use(SetTitle)
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  // 仅在 mode history 可用
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: {
        title: '天星教育官网 - 首页'
      },
      component: Index
    },
    {
      path: '/dynamic',
      redirect: '/dynamic/all',
      meta: {
        title: '天星教育官网 - 天星动态'
      }
    },
    {
      path: '/dynamic/:cate',
      name: 'Dynamic',
      component: Dynamic,
      meta: {
        title: '天星教育官网 - 天星动态'
      },
      children: [
        {
          path: ':id',
          name: 'newsDetail',
          component: DynamicDetail,
          meta: {
            title: '天星教育官网 - 天星动态'
          }
        }
      ]
    },
    {
      path: '/service',
      name: 'Service',
      component: Service,
      redirect: '/service/jiaoyu',
      children: [
        {
          path: 'jiaoyu',
          component: ServiceTab1,
          meta: {
            title: '天星教育官网 - 教育出版'
          }
        },
        {
          path: 'zonghe',
          component: ServiceTab2,
          meta: {
            title: '天星教育官网 - 综合出版'
          }
        },
        {
          path: 'shuzi',
          component: ServiceTab3,
          meta: {
            title: '天星教育官网 - 数字出版'
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      redirect: '/about/jianjie',
      meta: {
        title: '天星教育官网 - 了解天星'
      },
      children: [
        {
          path: 'jianjie',
          component: aboutJianjie,
          meta: {
            title: '天星教育官网 - 集团简介'
          }
        },
        {
          path: 'licheng',
          component: aboutLicheng,
          meta: {
            title: '天星教育官网 - 发展历程'
          }
        },
        {
          path: 'wenhua',
          component: aboutWenhua,
          meta: {
            title: '天星教育官网 - 天星文化'
          }
        },
        {
          path: 'zizhi',
          component: aboutZizhi,
          meta: {
            title: '天星教育官网 - 荣誉资质'
          }
        },
        {
          path: 'lianxi',
          component: aboutLianxi,
          meta: {
            title: '天星教育官网 - 联系我们'
          }
        }
      ]
    },
    {
      path: '*',
      name: 'error',
      component: ErrorPage,
      meta: {
        title: '天星教育官网 - 页面未找到'
      }
    }
  ]
})

// 路由钩子
// router.beforeEach((to, from, next, tit) => {
//
// })

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  // next()
  if (to.hash) {
    let currentY = document.documentElement.getBoundingClientRect().y
    let el = document.querySelector(to.hash)
    if (el) {
      scrollTo(0, el.getBoundingClientRect().y - currentY)
    }
  } else {
    scrollTo(0, 0)
  }
})
export default router
