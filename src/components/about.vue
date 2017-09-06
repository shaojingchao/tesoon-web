<template>
  <div>
    <MyHeader/>
    <div class="service-wrap">
      <div class="service-body content">
        <div class="page-crumbs">首页 > 了解天星</div>
        <div class="page-nav-tab">
          <router-link to="/about/jianjie">集团简介</router-link>
          <router-link to="/about/licheng">发展历程</router-link>
          <router-link to="/about/wenhua">天星文化</router-link>
          <router-link to="/about/zizhi">荣誉资质</router-link>
          <router-link to="/about/lianxi">联系我们</router-link>
          <router-link to="/about/gongzuo">加入天星</router-link>
        </div>

        <div class="page-content content bg-white pt10">
          <transition name="fadeIn-down" appear mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
    <MyFooter/>
  </div>
</template>
<style lang="less">
  .page-content{
    max-width:1000px;
  }
</style>
<style lang="less">
  .page-content{
    max-width:1000px;
  }
</style>

<script>
import MyHeader from './header.vue'
import MyFooter from './footer.vue'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
