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
                  <span class="info-item"><i class="icon mr10">ico</i>{{item.time}}</span>
                  <span class="info-item"><i class="icon mr10">ico</i>{{item.author}}</span>
                  <span class="info-item"><i class="icon mr10">ico</i>{{item.cate}}</span>
                </div>
              </div>

              <!--配图-->
              <div class="nl-item-img">
                <img src="../assets/img/news/new01.jpg">
              </div>
            </div>
          </div>
        </div>
        <div class="right-nav">
          <div class="rn-item">
            <h3 class="rn-item-title">文章分类</h3>
            <ul class="nav-list">
              <li><a>全部新闻</a></li>
              <li><a>集团新闻</a></li>
              <li><a>行业新闻</a></li>
              <li><a>员工活动</a></li>
            </ul>
          </div>
          <div class="rn-item mt30">
            <h3 class="rn-item-title">文章分类</h3>
            <div class="rn-ewm">
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

</style>
<script>
  import MyHeader from '@/components/header.vue'
  import MyFooter from '@/components/footer.vue'
  export default {
    data () {
      return {
        newList: [
          {
            title: '天星携手私家车999和许昌学院小书虫公益书屋走进梁北二中',
            context: '4月21日下午，河南天星教育传媒股份有限公司副总经理吴涛和营销中心的两位同事一起，带着天星教育疯狂阅读部的500册图书，来到禹州市梁北镇第二初级中学，为这里的孩子们送去我们的一分爱心。',
            time: '2017-08-01',
            author: '文/营销中心 倪秋利',
            cate: '集团新闻'
          },
          {
            title: '天星携手私家车999和许昌学院小书虫公益书屋走进梁北二中',
            context: '4月21日下午，河南天星教育传媒股份有限公司副总经理吴涛和营销中心的两位同事一起，带着天星教育疯狂阅读部的500册图书，来到禹州市梁北镇第二初级中学，为这里的孩子们送去我们的一分爱心。',
            time: '2017-08-01',
            author: '文/营销中心 倪秋利',
            cate: '集团新闻'
          },
          {
            title: '天星携手私家车999和许昌学院小书虫公益书屋走进梁北二中',
            context: '4月21日下午，河南天星教育传媒股份有限公司副总经理吴涛和营销中心的两位同事一起，带着天星教育疯狂阅读部的500册图书，来到禹州市梁北镇第二初级中学，为这里的孩子们送去我们的一分爱心。',
            time: '2017-08-01',
            author: '文/营销中心 倪秋利',
            cate: '集团新闻'
          }
        ]
      }
    },
    components: {
      MyHeader,
      MyFooter
    }
  }
</script>
