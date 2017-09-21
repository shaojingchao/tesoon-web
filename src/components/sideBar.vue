<template>
  <div class="side-bar" v-show="isShow" @click="backTop">
      <!--<a class="go-top"></a>-->
  </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>
  .side-bar{
    position: fixed;
    z-index: 10000;
    right:10px;
    bottom:30px;
    width:50px;
    height:50px;
    border:1px solid #eeeeee;
    line-height:50px;
    text-align: center;
    cursor: pointer;
    background:#f8f8f8 url(../assets/img/top.png) center center no-repeat;
    background-size:45%;
  }
</style>

<script type="text/ecmascript-6">
  import Tween from '../util/tween.js'
  require('../util/requestAnimationFrame.js')
  import Event from '../util/event'
  export default {
    data () {
      return {
        msg: 'hello vue',
        offsetHeight: 500,
        scrollTop: null,
        duration: 900
      }
    },
    computed: {
      isShow () {
        return this.scrollTop > this.offsetHeight
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.addScrollEvent()
      })
    },
    methods: {
      getScrollTop () {
        return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop
      },
      animateStep (start, end, duration) {
        let _time = 0
        let _handler = null
        const _step = () => {
          _time += 1000 / 60
          let _top = this.getScrollTop()
          let process = Tween.Cubic.easeOut(_time, start, end - start, duration)
          if (_top > 0) {
            _handler = window.requestAnimationFrame(_step)
            window.scrollTo(0, process)
          } else {
            window.cancelAnimationFrame(_handler)
          }
        }
        _step()
      },
      backTop () {
        let start = this.getScrollTop()
        let end = 0
        this.animateStep(start, end, this.duration)
      },
      addScrollEvent () {
        Event.addEvent(window, 'scroll', () => {
          this.scrollTop = this.getScrollTop()
        })
      }
    }
  }
</script>
