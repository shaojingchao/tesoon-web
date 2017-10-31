<!--vue slider components-->

<template>
  <div class="canvas-box" v-if="isShow" v-html="starHtml" @click="clickIt">
  </div>
</template>

<style lang="less">
  .canvas-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    span {
      background-color: #fff;
      background: url(../assets/img/banner/star_png.png) 0 0 no-repeat;
      background-size: contain;
      position: absolute;
      transition: top 0.2s, left 0.2s,transform 30s linear;
    }
  }

  @keyframes myfirst {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.7;
    }
  }

  .starFade {
    animation: myfirst 3s linear 0s infinite alternate;
    /*-moz-animation: myfirst 3s;	!* Firefox *!*/
    /*-webkit-animation: myfirst 3s;	!* Safari 和 Chrome *!*/
    /*-o-animation: myfirst 3s;*/
  }
</style>

<script type="text/javascript">
  import $ from 'jquery'
  export default{
    data () {
      return {
        isShow: false,
        num: 14,
        size: 16,
        time: 3,
        stars: []
      }
    },
    computed: {
      starHtml () {
        let starHtml = ''
        this.stars.forEach((item) => {
          starHtml += '<span class="starFade" style="left:' + item.left + 'px;top:' + item.top + 'px;opacity:' + item.opacity + ';width:' + item.size + 'px;height:' + item.size + 'px;animation-duration:' + item.time + 's;"></span>'
        })
        return starHtml
      }
    },
    created () {
      if ($(window).width() > 767) {
        this.isShow = true
      }
    },
    mounted () {
      this.startPlay()
    },
    methods: {
      startPlay () {
        let _winHeight = $(window).height() * 0.65
        let _winWidth = $(window).width()
        let stars = []
        for (let i = 0; i < this.num; i++) {
          stars.push({
            left: parseInt(_winWidth * Math.random()),
            top: parseInt(_winHeight * Math.random()),
            opacity: Math.random(),
            time: Math.random() * this.time + 1,
            size: parseInt(this.size * Math.random() + 4)
          })
        }
        this.stars = stars
      },
      clickIt (e) {
        let index = parseInt(Math.random() * this.stars.length)
        $('.canvas-box').find('span').eq(index).css({
          left: e.clientX - Math.round(this.stars[index].size / 2),
          top: e.clientY - Math.round(this.stars[index].size / 2)
        })
      }
    }
  }
</script>
