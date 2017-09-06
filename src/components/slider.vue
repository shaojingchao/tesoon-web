<!--vue slider components-->

<template>
  <div class="wln-slider">
    <div class="hd">
      <div class="nav-bar">
        <span
          v-if="bannerPics && bannerPics.length>1"
          v-for="(item,index) in bannerPics.length"
          :class="{on:(index === currentIndex)}"
          @click="showThisBanner(index)"
          @mouseover="hoverThisBannerBar"
          @mouseout="bannerAutoPlay"
        >
        </span>
      </div>
    </div>
    <div class="bd">
      <ul>
        <li v-for="(item,index) in bannerPics"
            :style="{background: 'url('+item+') 50% 100% no-repeat',
              visibilty:(currentIndex===index?'visible':'hidden'),
              opacity:(currentIndex===index?'1':'0')}">
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @height:929px;
  .banner-wrap{
    height:@height;
    background:#4889e5;
  }
  .wln-slider{
    min-width:1200px;
    position:relative;
    height:@height;
    overflow:hidden;
    .bd{
      position:relative;
      z-index:0;
      ul{
        position: relative;
        height: @height;
        width:100%!important;
        li{
          width:100%!important;
          height:@height;
          position:absolute;
          left: 0;
          top: 0;
          transition: opacity .9s;
        }
      }
    }
    .hd{
      width:1000px;
      margin-left:-500px;
      position:absolute;
      bottom:6px;
      left:50%;
      text-align:center;
      z-index:1;
      .nav-bar{
        cursor:default;
      }
      span{
        width:14px;
        height:14px;
        display:inline-block;
        margin:0 2px;
        background:url(../assets/img/banner/circlebutton.png) -3px -25px no-repeat;
        cursor:pointer;
        &.on{
          background-position:-3px -3px;
          cursor:default;
        }
      }
    }
  }
</style>

<script>
  export default{
    props: {
      time: {
        type: Number,
        default: 3.5
      },
      bannerPics: {
        type: Array,
        required: true,
        validator: function (len) {
          return len.length >= 1
        }
      }
    },
    data () {
      return {
        timer: null,
        currentIndex: 0
      }
    },
    mounted () {
      this.bannerAutoPlay()
    },
    methods: {
      bannerAutoPlay () {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          if (this.currentIndex < this.bannerPics.length - 1) {
            this.currentIndex++
          } else {
            this.currentIndex = 0
          }
        }, this.time * 1000)
      },
      showThisBanner (i) {
        this.currentIndex = i
      },
      hoverThisBannerBar (i) {
        clearInterval(this.timer)
      }
    }
  }
</script>
