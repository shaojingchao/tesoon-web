<template>
  <div class="dynamic-detail">
    <h2 class="fw4 tc">{{content.title}}</h2>
    <p class="text-muted mt5 f14 tc">
      <span class="mr15">{{content.add_time}}</span>
      <span class="mr15">{{content.add_user}}</span>
      <span>{{content.dept}}</span>
    </p>
    <div class="pt30" v-html="content.content"></div>
  </div>
</template>
<style lang="less">
  .dynamic-detail {
    font-size: 16px;
    line-height: 1.8;
    padding-bottom: 80px;
    img{
      max-width:100%;
    }
  }

  @media screen and (max-width:767px) {
    .dynamic-detail{
      /*font-size:14px;*/
      line-height: 1.5;
      padding-top: 30px;
      padding-bottom: 30px;
      h2{
        line-height:1.4;
        font-size:24px;
        font-weight: 700;
        padding-bottom: 10px;
      }
    }
  }
</style>
<script type="text/ecmascript-6">
  import CF from '@/api/'
  export default{
    data () {
      return {
        msg: 'hello vue',
        content: {}
      }
    },
    metaInfo () {
      return {
        title: '天星教育 - 天星动态 - ' + this.content.title
      }
    },
    props: ['param'],
    created () {
      console.log(this.param)
      this.$http(CF.getDynamicsInfo + '?article_id=' + this.param.params.id).then(res => {
        console.log(res.data)
        this.content = res.data
      })
    }
  }
</script>
