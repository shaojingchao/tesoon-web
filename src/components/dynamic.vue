<template>
  <div>
    <MyHeader/>
    <div class="dynamic-page-wrap">
      <div class="content hide-xs">
        <div class="page-crumbs">首页 > 天星动态</div>
      </div>
      <div class="dynamic-page content clearfix">

        <div class="dynamic-nav">
          <div class="rn-item">
            <h3 class="rn-item-title">文章分类</h3>
            <ul class="nav-list">
              <router-link
                :class="{current:currentNav === item.tid}"
                v-for="(item,index) in navList"
                key="{{item.id}}"
                tag="li"
                :to="{path:'/dynamic/'+item.tid}"><a class="db">{{item.name}}</a></router-link>
            </ul>
          </div>
          <div class="rn-item pt20 hide-xs">
            <h3 class="rn-item-title">关注我们</h3>
            <div class="rn-ewm pt30">
              <p>已超20万小伙伴关注</p>
              <img class="rn-ewm-img" src="../assets/img/ewm.png">
            </div>
          </div>
        </div>

        <div class="page-body" v-if="!isList">
          <transition name="fadeIn-down" appear mode="out-in">
            <router-view :param="$route"></router-view>
          </transition>
        </div>

        <div class="page-body" v-if="isList && newList.length>0">
          <NewList :newList="newList"/>
          <Pager class="tr pb30"
                 @goToPage="goToPage"
                 :pageNum="pages.pageNum"
                 :currentPage="pages.currentPage"
                 :totalCount="pages.totalCount"
                 v-if="pages.pageNum > 1" />
          <div class="tc mt20 text-muted" v-else>加载完毕</div>
        </div>
      </div>
    </div>
    <MyFooter/>
  </div>
</template>
<script type="text/ecmascript-6">
  import MyHeader from '@/components/header.vue'
  import MyFooter from '@/components/footer.vue'
  import NewList from '@/components/newList.vue'
  import Pager from '@/components/pager.vue'
  import CF from '@/api/'
  export default {
    data () {
      return {
        navList: [
          {
            tid: '0',
            cate: 'all',
            name: '全部新闻'
          },
          {
            tid: '9',
            cate: 'jt',
            name: '集团新闻'
          },
          {
            tid: '10',
            cate: 'hy',
            name: '行业新闻'
          },
          {
            tid: '11',
            cate: 'yg',
            name: '员工活动'
          }
        ],
        navItemTag: ['0', '9', '10', '11'],
        currentNav: '',
        newList: [],
        pages: {
          totalCount: 0,
          pageNum: 0,
          currentPage: 1
        }
      }
    },
    metaInfo () {
      return {
        title: '天星教育 - 天星动态'
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
        let tid = params.tid
        let id = params.id
        return this.navItemTag.indexOf(tid) !== -1 && !id
      }
    },
    created () {
      this.routeFunc(this.$route)
    },
    // 导航路由钩子
    beforeRouteUpdate (to, from, next) {
      this.routeFunc(to)
      next()
    },
    methods: {
      routeFunc (to) {
        console.log('beforeRouteUpdate')
        let params = {
          tid: 0,
          page: 1
        }
        if (to.params.tid) {
          params.tid = to.params.tid
          this.currentNav = to.params.tid
        }
        if (to.query.page) {
          params.page = to.query.page
        }
        this.getNewList(params, (res) => {
          console.log(res.data.data)
          this.newList = res.data.data
          console.log(res.data.pages)
          this.pages.pageNum = parseInt(res.data.pages.pageNum)
          this.pages.totalCount = parseInt(res.data.pages.totalCount)
          this.pages.currentPage = parseInt(params.page)
        })
      },
      goToPage (index) {
        console.log(index)
        this.$router.push({query: {page: index}})
        // this.$route.push({params: {page: index}})
        // this.getNewList({
        //   tid: this.currentNav,
        //   page: index
        // }, (res) => {
        //   this.newList = res.data.data
        // })
      },

      // 获取列表数据
      getNewList (p, cb) {
        let _paramStr = '?tid=' + p.tid + '&page=' + p.page
        // this.$showLoading()
        this.$http.get(CF.getDynamicsList + _paramStr).then((res, rev) => {
          cb && cb(res)
          // this.$hideLoading()
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../assets/css/_mixins-wln.less";

  //天星动态
  .dynamic-page-wrap{
    background-color: #fff;
  }
  .dynamic-page{
    padding-bottom: 40px;
    .page-body{
      float: left;
      width:850px;
      padding-top: 57px;
    }

    .dynamic-nav{
      width:200px;
      float: right;
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
      border:1px solid #eeeeee;
      margin-bottom:20px;
      transition:all 0.2s;
      &:hover{
        box-shadow:0 8px 20px -1px rgba(0,0,0,.12);
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
      overflow: hidden;
      img{
        display: block;
        max-width:100%;
        margin:0 auto;
      }
    }
  }

  @media screen and (max-width:767px){
    //天星动态
    .dynamic-page{
      padding-bottom: 40px;
      .page-body{
        float: none;
        width:auto;
        padding-top: 5px;
      }

      .dynamic-nav{
        width:auto;
        float: none;
        text-align: left;
        .rn-item-title{
          display: none;
        }
        .nav-list{
          white-space: nowrap;
          overflow: scroll;
          border-bottom:1px solid #eee;
          li{
            display: inline-block;
            font-size:15px;
            line-height:46px;
            height:46px;
            box-sizing: border-box;
            margin-right:4px;
            padding:0 2px;
            border-bottom:none;
            transition: all 0.3s;
            &:hover{
              background-color: #fff;
            }
          }
          .router-link-exact-active{
            color: @primary;
            border-bottom:2px solid @primary;
          }
        }
      }
    }

    /*新闻列表*/
    .news-list{
      .nl-item{
        padding:10px 0;
        border:none;
        border-bottom:1px solid #eeeeee;
        margin-bottom:0;
        &:hover{
          box-shadow:none;
        }
      }
      .item-context{
        width:auto;
        float: none;
        .title{
          font-size:15px;
          white-space: normal;
          word-break:break-all;
          display:-webkit-box;
          -webkit-line-clamp:2;
          -webkit-box-orient:vertical;
          overflow:hidden;
        }
        .context{
          display: none;
        }
        .info-item{
          font-size:14px;
          margin-right: 10px;
          &:last-child{
            margin-right:0;
          }
        }
      }
      .nl-item-img{
        width:120px;
        height:80px;
        margin-right:10px;
      }
    }
    .pagination-wrap{
      text-align: center;
      margin-top: 20px;
    }
  }

</style>
