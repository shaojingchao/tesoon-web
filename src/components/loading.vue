<template>
  <div class="g-shade">
    <div class="loading"></div>
  </div>
</template>
<style lang="less">
  .g-shade{
    position: fixed;
    z-index: 1000;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: rgba(0,0,0,.3);
    .loading{
      position: absolute;
      top:50%;
      left:50%;
      width:100px;
      height:100px;
      text-align: center;
      color:#333;
      font-size:15px;
      box-sizing: border-box;
      padding:60px 0 0;
      margin:-50px 0 0 -50px;
      border-radius: 10px;
      box-shadow:0 1px 15px rgba(0,0,0,.4);
      background: rgba(255,255,255,1) url(../assets/img/loading.gif) 50% 50% no-repeat;
    }
  }
</style>
<script>
  export default{
    data () {
      return {
      }
    }
  }
</script>
