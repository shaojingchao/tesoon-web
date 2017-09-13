<template>
  <div>
    <MyHeader/>
    <div class="service-wrap">
      <div class="service-body content">
        <div class="page-crumbs">首页 > 集团业务</div>
        <div class="page-nav-tab">
          <router-link to="/service/jiaoyu">教育出版</router-link>
          <router-link to="/service/zonghe">综合出版</router-link>
          <router-link to="/service/shuzi">数字出版</router-link>
        </div>

        <div class="page-content content bg-white pt10">
          <transition name="fadeIn-down" :duration="{ enter: 500, leave: 0 }" appear mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
    <MyFooter/>
  </div>
</template>
<style lang="less">
  /*.page-content{*/
  /*max-width:1000px;*/
  /*}*/
</style>

<script type="text/ecmascript-6">
  import MyHeader from './header.vue'
  import MyFooter from './footer.vue'
  export default {
    metaInfo () {
      return {
        title: '天星教育 - 集团业务', // set a title
        meta: [{                 // set meta
          name: 'keyWords',
          content: 'My Example App'
        }]
      }
    },
    components: {
      MyHeader,
      MyFooter
    }
  }
</script>
