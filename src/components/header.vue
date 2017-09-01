<template>
  <header class="page-header header clearfix">
      <div class="content">
        <div class="logo fl"></div>
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
