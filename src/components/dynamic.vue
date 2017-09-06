<template>
  <div>
    <MyHeader/>
    <div class="dynamic-page-wrap">
      <div class="dynamic-page content clearfix">
        <div class="page-body">
          <div class="page-crumbs">首页 > 天星动态</div>
          <div class="news-list">
            <div class="nl-item" v-for="(item,index) in newList">

              <!--时间-->
              <div class="create-time">
                <span class="f28 date">{{item.time.substr(8)}}</span><br><span class="f12">{{item.time.substr(0,7)}}</span>
              </div>

              <!--内容-->
              <div class="item-context">
                <h3 class="title">{{item.title}}</h3>
                <div class="context text-muted mt10">
                  {{item.context}}
                </div>
                <div class="info text-muted mt20">
                  <span class="info-item"><i class="icon icon1 mr10"></i>{{item.time}}</span>
                  <span class="info-item"><i class="icon icon2 mr10"></i>{{item.author}}</span>
                  <span class="info-item"><i class="icon icon3 mr10"></i>{{item.cate}}</span>
                </div>
              </div>

              <!--配图-->
              <div class="nl-item-img">
                <img :src="item.pic">
              </div>
            </div>
          </div>
          <Pager @goToPage="goToPage"/>
        </div>
        <div class="right-nav">
          <div class="rn-item">
            <h3 class="rn-item-title">文章分类</h3>
            <ul class="nav-list">
              <li :class="{current:index === currentNavIndex}"
                  v-for="(item,index) in navList"
                  @click="newListCategory(index)"
                  :data-id="item.id">{{item.name}}</li>
            </ul>
          </div>
          <div class="rn-item pt30">
            <h3 class="rn-item-title">文章分类</h3>
            <div class="rn-ewm pt30">
              <p>已超20万小伙伴关注</p>
              <img class="rn-ewm-img" src="../assets/img/ewm.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <MyFooter/>
    <transition name="fadeIn-loading" mode="in-out">
      <Loading v-if="showLoading"/>
    </transition>
  </div>
</template>
<style lang="less">

  @import "../assets/variable.less";


  //天星动态
  .dynamic-page-wrap{
    padding-top:20px;
    background-color: #fff;
  }
  .dynamic-page{
    border-top:2px solid @primary;
    .page-body{
      float: left;
      width:900px;
    }
    .right-nav{
      width:240px;
      float: right;
      .rn-item-title{
        font-size:18px;
        padding:15px 0;
        border-bottom:4px solid @primary;
      }
    }
    .rn-ewm{
      text-align: center;
    }
  }

  /*新闻列表*/
  .news-list{
    .nl-item{
      overflow: hidden;
      padding:20px 0;
      border-bottom:1px solid #eee;
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
      width:570px;
      float: left;
      .info-item{
        display: inline-block;
      }
      .icon1{
        background: url(../assets/img/icon/time.png) 50% 50% no-repeat;
      }
      .icon2{
        background: url(../assets/img/icon/edit.png) 50% 50% no-repeat;
      }
      .icon3{
        background: url(../assets/img/icon/category.png) 50% 50% no-repeat;
      }
      .icon{
        float: left;
        width:18px;
        height:18px;
        background-size:contain;
      }
    }

    .nl-item-img{
      float: right;
      width:180px;
      img{
        display: block;
        max-width:100%;
        margin:0 auto;
      }
    }
  }

  /*right-nav*/
  .right-nav{
    .rn-item-title{
      font-weight:normal;
    }
    .nav-list{
      li{
        padding:10px 15px;
        border-bottom:1px solid #ddd;
        cursor:pointer;
        &:hover{
          background-color: #f6f6f6;
        }
        &.current{
          color: @primary;
          cursor:default;
          &:hover{
            background-color: #fff;
          }
        }
      }
    }
    .rn-ewm{
      text-align: center;
    }
    .rn-ewm-img{
      display: block;
      width:160px;
      margin:0 auto;
    }
  }

</style>
<script>
  import MyHeader from '@/components/header.vue'
  import MyFooter from '@/components/footer.vue'
  import Pager from '@/components/pager.vue'
  import Loading from '@/components/loading.vue'
  export default {
    data () {
      return {
        navList: [
          {
            id: 0,
            name: '全部新闻'
          },
          {
            id: 111,
            name: '集团新闻'
          },
          {
            id: 222,
            name: '行业新闻'
          },
          {
            id: 333,
            name: '员工活动'
          }
        ],
        showLoading: false,
        currentNavIndex: 0,
        newList: []
      }
    },
    components: {
      MyHeader,
      MyFooter,
      Pager,
      Loading
    },
    created () {
      this.getNewList('', (res) => {
        this.newList = this.newList.concat(res.data.data)
      })
    },

    methods: {
      goToPage (index) {
        this.getNewList(index, (res) => {
          this.newList = res.data.data
        })
      },
      newListCategory (index) {
        let id = this.navList[index].id
        this.getNewList(id, (res) => {
          this.newList = res.data.data
          this.currentNavIndex = index
        })
      },

      // 获取列表数据
      getNewList (tab, cb) {
        let cate = tab ? '?id=' + tab : ''
        this.showLoading = true
        setTimeout(() => {
          this.$http({
            url: '/api/data' + cate,
            method: 'post'
          }).then((res, rev) => {
            cb && cb(res)
            this.showLoading = false
          })
        }, Math.floor(Math.random() * 800))
      }
    }

  }
</script>
