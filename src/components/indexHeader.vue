<template>
  <div class="index-header">
    <header class="header clearfix">
      <div class="content">
        <div class="logo fl">LOGO</div>
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
          require('../assets/img/banner/banner1.jpg'),
          require('../assets/img/banner/banner2.jpg')
        ]
      }
    },
    components: {
      MyNav,
      Slider
    }
  }
</script>
