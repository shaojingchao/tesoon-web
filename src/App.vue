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
  name: 'app'
}
</script>

<style>
#app {
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.4
}
</style>
