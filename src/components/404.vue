<template>
  <div>
    <MyHeader/>
    <div class="error-page text-muted">
      404
    </div>
    <div class="tc">
      <a class="btn btn-primary btn-lg" href="/">回首页</a>
    </div>
  </div>
</template>
<style lang="less">
  .error-page{
    font-size:200px;
    text-align: center;
  }
</style>

<script>
import MyHeader from './header.vue'
export default {
  components: {
    MyHeader
  }
}
</script>
