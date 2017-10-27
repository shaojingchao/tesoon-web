<template>
  <div>
    <MyHeader/>
    <div class="error-page">
      404
    </div>
    <div class="tc">
      抱歉，你访问的页面不存在！<a class="btn btn-primary" href="/">回首页</a>
    </div>
  </div>
</template>
<style lang="less">
  .error-page{
    font-size:200px;
    text-align: center;
    color:#ccc;
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
