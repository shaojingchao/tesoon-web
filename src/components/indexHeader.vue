<template>
  <div class="index-header">
    <header class="header clearfix">
      <div class="content">
        <div class="logo fl"></div>
        <MyNav/>
      </div>
    </header>
    <Slider class="slider-wrap" :bannerPics="bannerPics" :time="4"/>
  </div>

</template>
<script>
  import Slider from './slider.vue'
  import MyNav from '@/components/myNav.vue'
  export default {
    data () {
      return {
        bannerPics: [
          require('../assets/img/banner/idx_banner_2.png')
        ]
      }
    },
    components: {
      MyNav,
      Slider
    }
  }
</script>
