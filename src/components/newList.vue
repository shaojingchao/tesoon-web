<template>
  <div class="news-list">
    <router-link
      class="nl-item db"
      v-for="(item,index) in newList"
      key="{{item.id}}"
      tag="a" :to="{path:'/dynamic/'+currentNav+'/'+item.id}">

      <!--配图-->
      <div class="nl-item-img">
        <img :src="item.pic">
      </div>

      <!--内容-->
      <div class="item-context">
        <div class="title elli">{{item.title}}</div>
        <div class="context text-muted f16">
          {{item.context}}
        </div>
        <div class="info text-muted mt10">
          <span class="info-item">{{item.time}}</span>
          <span class="info-item">{{item.author}}</span>
          <span class="info-item">{{item.cate}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    props: {
      newList: {
        type: Array
      },
      currentNav: String
    }
  }
</script>
