<template>
  <div id="app">
    <div class="g-components-view">
      <side-bar></side-bar>
    </div>
    <router-view class="view-content"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import SideBar from './components/sideBar.vue'
  export default {
    name: 'app',
    data () {
      return {
        pageName: 'loading'
      }
    },
    components: {
      SideBar
    },
    mounted () {
      setTimeout(() => {
        this.pageName = 'async'
      }, 2000)
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  #app {
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0.4
  }
</style>
