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
  export default {
    data () {
      return {
        msg: 'hello vue',
        offsetHeight: 500,
        scrollTop: 0
      }
    },
    computed: {
      isShow () {
        return this.scrollTop > this.offsetHeight
      }
    },
    mounted () {
      this.addScrollEvent(this.offsetHeight)
    },
    methods: {
      getDoc () {
        return document.documentElement || document.body
      },
      backTop () {
        this.getDoc().scrollTop = 0
      },
      addScrollEvent (h) {
        this.scrollTop = this.getDoc().scrollTop
        window.addEventListener('scroll', () => {
          this.scrollTop = this.getDoc().scrollTop
        }, false)
      }
    }
  }
</script>
