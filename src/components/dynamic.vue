<template>
  <div>
    <MyHeader/>
    <div class="dynamic-page-wrap">
      <div class="content">
        <div class="page-crumbs">首页 > 天星动态</div>
      </div>
      <div class="dynamic-page content clearfix">
        <div class="page-body" v-if="!isList">
          <transition name="fadeIn-down" appear mode="out-in">
            <router-view :param="$route"></router-view>
          </transition>
        </div>

        <div class="page-body" v-if="isList">
          <NewList :newList="newList" v-if="newList.length>0" :currentNav="currentNav"/>
          <div class="tc text-muted pt30 pb30 f16" v-else>拼命加载中...</div>
          <Pager class="tr pb30" v-if="newList.length>0" @goToPage="goToPage"/>
        </div>

        <div class="dynamic-nav">
          <div class="rn-item">
            <h3 class="rn-item-title">文章分类</h3>
            <ul class="nav-list">
              <router-link
                :class="{current:currentNav === item.cate}"
                v-for="(item,index) in navList"
                key="{{item.cate}}"
                tag="li"
                :to="{path:'/dynamic/'+item.cate}"><a class="db">{{item.name}}</a></router-link>
            </ul>
          </div>
          <div class="rn-item pt20">
            <h3 class="rn-item-title">关注我们</h3>
            <div class="rn-ewm pt30">
              <p>已超20万小伙伴关注</p>
              <img class="rn-ewm-img" src="../assets/img/ewm.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <MyFooter/>
  </div>
</template>
<style lang="less">
  @import "../assets/variable.less";

  //天星动态
  .dynamic-page-wrap{
    background-color: #fff;
  }
  .dynamic-page{
    padding-bottom: 40px;
    .page-body{
      float: right;
      width:850px;
      padding-top: 57px;
    }

    .dynamic-nav{
      width:200px;
      float: left;
      text-align: center;
      .rn-item-title{
        font-weight:400;
        font-size:18px;
        padding:15px 0;
        border-bottom:2px solid #eee;
      }
      .nav-list{
        li{
          font-size:16px;
          line-height:50px;
          border-bottom:1px solid #eee;
          &:hover{
            background-color: #f6f6f6;
          }
          &.current{
            color: @primary;
            a{
              cursor:default;
              color: @primary;
            }
            &:hover{
              background-color: #fff;
            }
          }
        }
      }
      .rn-ewm{
        text-align: center;
        padding:15px 0;
        border-bottom:2px solid #eee;
      }
      .rn-ewm-img{
        display: block;
        width:137px;
        margin:0 auto;
      }
    }
  }

  /*新闻列表*/
  .news-list{
    .nl-item{
      overflow: hidden;
      padding:20px;
      border:1px solid #eee;
      margin-bottom:20px;
      transition:all 0.2s;
      &:hover{
        background-color: #f6f6f6;
        border-color:#ddd;
        box-shadow:0 1px 10px rgba(0,0,0,.15);
      }
    }
    .create-time{
      float: left;
      width:120px;
      text-align: center;
      padding-top: 40px;
      .date{
        border-bottom:1px solid #333;
        width:50px;
      }
      span{
        display: inline-block;
      }
    }
    .item-context{
      width:608px;
      float: left;
      .title{
        font-size:18px;
        color:#444;
        line-height:1.2;
      }
      .context{
        line-height: 1.4;
        margin-top: 8px;
      }
      .info-item{
        display: inline-block;
        margin-right: 20px;
        color:#aaa;
      }
    }
    .nl-item-img{
      float: left;
      width:180px;
      height:120px;
      margin-right:20px;
      img{
        display: block;
        max-width:100%;
        margin:0 auto;
      }
    }
  }

</style>
<script type="text/ecmascript-6">
  import MyHeader from '@/components/header.vue'
  import MyFooter from '@/components/footer.vue'
  import NewList from '@/components/newList.vue'
  import Pager from '@/components/pager.vue'
  // import Loading from '@/components/loading.vue'
  export default {
    data () {
      return {
        navList: [
          {
            cate: 'all',
            name: '全部新闻'
          },
          {
            cate: 'jt',
            name: '集团新闻'
          },
          {
            cate: 'hy',
            name: '行业新闻'
          },
          {
            cate: 'yg',
            name: '员工活动'
          }
        ],
        navItemTag: ['all', 'jt', 'hy', 'yg'],
        currentNav: '',
        newList: []
      }
    },
    components: {
      MyHeader,
      MyFooter,
      NewList,
      Pager
    },
    computed: {
      isList () { // 是否是列表
        let params = this.$route.params
        let cate = params.cate
        let id = params.id
        return this.navItemTag.indexOf(cate) !== -1 && !id
      }
    },
    created () {
      this.getNewList('', (res) => {
        this.$hideLoading()
        this.newList = this.newList.concat(res.data.data)
        if (this.$route.params.cate) {
          this.currentNav = this.$route.params.cate
        }
      })
    },

    // 导航路由钩子
    beforeRouteUpdate (to, from, next) {
      this.getNewList('', (res) => {
        this.newList = res.data.data
        if (to.params.cate) {
          this.currentNav = to.params.cate
        }
        next()
      })
    },
    methods: {
      goToPage (index) {
        this.getNewList(index, (res) => {
          this.newList = res.data.data
        })
      },

      // 获取列表数据
      getNewList (tab, cb) {
        let cate = tab ? '?id=' + tab : ''
        this.newList = []
        this.$showLoading()
        setTimeout(() => {
          this.$http({
            url: '/api/data' + cate,
            method: 'post'
          }).then((res, rev) => {
            cb && cb(res)
            this.$hideLoading()
          })
        }, Math.floor(Math.random() * 800))
      }
    }
  }
</script>
