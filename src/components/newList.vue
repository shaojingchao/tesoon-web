<template>
  <div class="news-list">
    <router-link
      class="nl-item db clearfix"
      v-for="(item,index) in newList"
      key="{{item.id}}"
      :title="item.title"
      target="_blank"
      tag="a" :to="{path:'/dynamic/'+currentNav+'/'+item.id}">

      <!--配图-->
      <div class="nl-item-img">
        <img :src="item.pic">
      </div>

      <!--内容-->
      <div class="item-context">
        <div class="title elli" :title="item.title">{{item.title}}</div>
        <div class="context text-muted f16">
          {{item.context.slice(0,110)}}
        </div>
        <div class="info text-muted mt10">
          <span class="info-item" :title="item.time">{{item.time}}</span>
          <span class="info-item hide-xs" :title="item.author">{{item.author}}</span>
          <span class="info-item" :title="item.cate">{{item.cate}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    beforeRouteEnter (to, from, next) {
      console.log('dasda', to, from)
      next()
    },
    props: {
      newList: {
        type: Array
      },
      currentNav: String
    }
  }
</script>
