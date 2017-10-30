<template>
  <div class="index-header">
    <header class="header clearfix">
      <div class="content">
        <div class="logo fl"></div>
        <MyNav/>
      </div>
    </header>
    <Slider class="slider-wrap" :bannerPics="bannerPics" :style="{height:(clientSize.width > 767) ? (clientSize.height + 'px') : '500px'}" :time="4"/>
  </div>

</template>
<script type="javascript">
  import Slider from './slider.vue'
  import MyNav from '@/components/myNav.vue'
  import $ from 'jquery'
  export default {
    data () {
      return {
        bannerPics: [
          require('../assets/img/banner/idx_banner_1.png')
        ],
        clientSize: {
        }
      }
    },
    components: {
      MyNav,
      Slider
    },
    mounted () {
    	this.clientSize = this.getClientSize()
      $(window).on('resize', () => {
        this.clientSize = this.getClientSize()
      })
    },
    methods: {
      getClientSize () {
        return {
        	height: $(window).height(),
          width: $(window).width()
        }
      }
    }
  }
</script>
