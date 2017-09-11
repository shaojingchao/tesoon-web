<template>
  <header class="page-header header clearfix">
    <div class="content wow fadeInUp" data-wow-delay="0.2s">
      <router-link class="logo fl cur-poi" title="首页" tag="div" to="/"></router-link>
      <MyNav/>
    </div>
  </header>
</template>
<script>
  import MyNav from '@/components/myNav.vue'
  export default {
    components: {
      MyNav
    }
  }
</script>
