<template>
  <div>
    <MyHeader/>
    <div class="service-wrap">
      <div class="about-banner">
        <div class="page-crumbs content">首页 > 了解天星</div>
      </div>
      <div class="service-body about-body content">
        <div class="page-nav-tab">
          <router-link to="/about/jianjie">集团简介</router-link>
          <router-link to="/about/licheng">发展历程</router-link>
          <router-link to="/about/wenhua">天星文化</router-link>
          <router-link to="/about/zizhi">荣誉资质</router-link>
          <router-link to="/about/lianxi">联系我们</router-link>
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
  .page-content{
    /*max-width:1000px;*/
    img{
      max-width:100%;
    }
  }
  .about-banner{
    height:359px;
    background: #fff url(../assets/img/page/about.jpg) 50% 0 no-repeat;
    .page-crumbs{
      color:#fff;
    }
  }
  .about-body{
    .page-nav-tab{
      display: flex;
      /*align-items: stretch;*/
      justify-content: space-around;
      a{
        margin-right:0;
        font-size:16px;
        height:60px;
        line-height:60px;
      }
    }
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
