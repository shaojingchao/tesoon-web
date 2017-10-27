import Vue from 'vue'
import Router from 'vue-router'

// components
const Index = () => import('@/components/index.vue')
const Dynamic = () => import('@/components/dynamic.vue')
const DynamicDetail = () => import('@/components/dynamicDetail.vue')
const Service = () => import('@/components/service.vue')
const ServiceTab1 = () => import('@/components/serviceTab1.vue')
const ServiceTab2 = () => import('@/components/serviceTab2.vue')
const ServiceTab3 = () => import('@/components/serviceTab3.vue')
const About = () => import('@/components/about.vue')
const aboutJianjie = () => import('@/components/aboutJianjie.vue')
const aboutLicheng = () => import('@/components/aboutLicheng.vue')
const aboutWenhua = () => import('@/components/aboutWenhua.vue')
const aboutZizhi = () => import('@/components/aboutZizhi.vue')
const aboutLianxi = () => import('@/components/aboutLianxi.vue')
const ErrorPage = () => import('@/components/404.vue')

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
      redirect: '/dynamic/0',
      meta: {
        title: '天星教育官网 - 天星动态'
      }
    },
    {
      path: '/dynamic/:tid',
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
router.afterEach((to, from) => {
  // if (to.meta && to.meta.title) {
  //   document.title = to.meta.title
  // }
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
