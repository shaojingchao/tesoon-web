<template>
  <div class="dynamic-detail">
      <h2 class="fw4 tc">{{content.title}}</h2>
      <p class="text-muted mt5 f14 tc">
        <span class="mr15">{{content.time}}</span>
        <span class="mr15">{{content.author}}</span>
        <span>{{content.cate}}</span>
      </p>
    <div class="pt30">{{content.context}}</div>
  </div>
</template>
<style lang="less">
  .dynamic-detail{
    font-size:16px;
    line-height: 1.8;
    padding-bottom: 80px;
  }
</style>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue',
        content: {}
      }
    },
    props: ['param'],
    created () {
      this.$http('/api/news/' + this.param.params.id).then(res => {
        this.content = res.data.data
      })
    }
  }
</script>
