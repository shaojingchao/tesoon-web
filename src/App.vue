<template>
  <div id="app">
    <router-view></router-view>
    <!--<transition>-->
    <!---->
    <!--</transition>-->
  </div>
</template>

<script>
  export default {
    name: 'app',
    data (a, b) {
      return {
        dsfsd: 'dsfsd'
      }
    }
  }
</script>

<style lang="less">
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
