<template>
  <div class="news-list">
    <router-link
      class="nl-item db clearfix"
      v-for="(item,index) in newList"
      key="{{item.id}}"
      target="_blank"
      tag="a" :to="{path:'/dynamic/'+item.tid+'/'+item.id}">

      <!--配图-->
      <div class="nl-item-img">
        <img :src="item.thumb">
      </div>

      <!--内容-->
      <div class="item-context">
        <div class="title elli" :title="item.title">{{item.title}}</div>
        <div class="context text-muted f16">
          {{item.mydesc.slice(0,110)}}
        </div>
        <div class="info text-muted mt10">
          <span class="info-item" :title="item.add_time">{{item.add_time}}</span>
          <span class="info-item hide-xs" :title="item.add_user">{{item.add_user}}</span>
          <span class="info-item" :title="item.dept">{{item.dept}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {
      }
    },
    props: ['newList'],
    beforeRouteEnter (to, from, next) {
      next()
    }
  }
</script>
