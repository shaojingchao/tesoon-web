<template>
  <div>
    <MyHeader/>
    <div class="platform-data">
      <div class="content clearfix">
        <div class="data-item">
          <div class="num">19</div>
          <p>天星砥砺前行19年</p>
        </div>
        <div class="data-item">
          <div class="num">5000</div>
          <p>5000余位特优级教师加盟</p>
        </div>
        <div class="data-item">
          <div class="num">7</div>
          <p>开创7大教辅品牌</p>
        </div>
        <div class="data-item">
          <div class="num">26</div>
          <p>推出26大畅销系列</p>
        </div>
        <div class="data-item">
          <div class="num">2000</div>
          <p>单品研发2000余册</p>
        </div>
      </div>
    </div>
    <!--<div class="banner">-->
      <!--<img src="../assets/img/banner1.jpg">-->
    <!--</div>-->

    <div class="index-section bg-white">
      <h1 class="section-title">天星动态</h1>
      <div class="content">
        <ul class="dynamic-show clearfix">
          <li class="fl" v-for='item in dynamicList'>
            <div><img v-bind:src="item.pic"></div>
            <h3>{{item.title}}</h3>
            <div class="text-muted">
              <span class="fl">{{item.time}}</span>
              <span class="fr">{{item.cate}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="tc">共<span class="f20 text-primary">58</span>篇新闻动态，<a class="text-primary">查看更多 >></a></div>
    </div>

    <!--教育出版-->
    <div class="index-section index-section-gray">
      <h1 class="section-title">教育出版</h1>
      <div class="content">
        <div class="section-img">
          <img src="../assets/img/u43.png">
        </div>
        <p class="tc pt30 pb30 pct70 auto">天星教育以独到、敏锐的市场眼光，独辟蹊径地首创MOOK教辅理念，开中国教辅杂志化先河，实现了图书优势和杂志优势的完美结合，出版的《金考卷》《试题调研》等系列图书，将全国示范名校优质备考资源传递给万千学子，一时畅销大江南北。</p>
        <div class="sub-img tc">
          <div class="clearfix dib">
            教育出版图书品牌：
            <img class="fr" src="../assets/img/section-sub-img.png">
          </div>
        </div>
      </div>
      <div class="tc mt30"><a href="">详细了解 >></a></div>
    </div>

    <!--综合出版-->
    <div class="index-section bg-white">
      <h1 class="section-title">综合出版</h1>
      <div class="content">
        <div class="section-img">
          <img src="../assets/img/u43.png">
        </div>
        <p class="tc pt30 pb30 pct70 auto">天星教育打造的疯狂系列期刊群已成为青少年阅读拓展领军品牌，秉承激情专注之精神，怀抱出类拔萃之信念，长期执着于读写研究。彰显时代特征，吻合中、高考精神，全方位提升青少年人文素养及读写能力。使青少年在阅读中生发智慧，奠定内涵，在潜移默化中完善人格，提升能力，走向成功！</p>
        <div class="sub-img tc">
          <div class="clearfix dib">
            综合出版图书品牌：
            <img class="fr" src="../assets/img/section-sub-img.png">
          </div>
        </div>
      </div>
      <div class="tc mt30"><a href="">详细了解 >></a></div>
    </div>

    <!--数字出版-->
    <div class="index-section index-section-gray">
      <h1 class="section-title">数字出版</h1>
      <div class="content">
        <div class="section-img">
          <img src="../assets/img/u43.png">
        </div>
        <p class="tc pt30 pb30 pct70 auto">天星教育以独到、敏锐的市场眼光，独辟蹊径地首创MOOK教辅理念，开中国教辅杂志化先河，实现了图书优势和杂志优势的完美结合，出版的《金考卷》《试题调研》等系列图书，将全国示范名校优质备考资源传递给万千学子，一时畅销大江南北。</p>
        <div class="sub-img tc">
          <div class="clearfix dib">
            数字出版图书品牌：
            <img class="fr" src="../assets/img/section-sub-img.png">
          </div>
        </div>
      </div>
      <div class="tc mt30"><a href="">详细了解 >></a></div>
    </div>

    <!--用户评价-->
    <div class="index-section bg-white">
      <h1 class="section-title">用户评价</h1>
      <div class="content">
        <div class="section-img">
          <img src="../assets/img/u43.png">
        </div>
        <p class="tc pt30 pb30 pct70 auto">天星教育以独到、敏锐的市场眼光，独辟蹊径地首创MOOK教辅理念，开中国教辅杂志化先河，实现了图书优势和杂志优势的完美结合，出版的《金考卷》《试题调研》等系列图书，将全国示范名校优质备考资源传递给万千学子，一时畅销大江南北。</p>
        <div class="sub-img tc">
          <div class="clearfix dib">
            教育出版图书品牌：
            <img class="fr" src="../assets/img/section-sub-img.png">
          </div>
        </div>
      </div>
      <div class="tc mt30"><a href="">详细了解 >></a></div>
    </div>

    <!--联系我们-->

    <!--口号-->

    <div class="ts-kouhao">
      <span class="dib clearfix">
        <img src="../assets/img/logo.png">
        {{slogan}}
      </span>
    </div>
    <MyFooter/>
  </div>
</template>

<script>
  import MyHeader from '@/components/indexHeader.vue'
  import MyFooter from '@/components/footer.vue'
  import pic from '@/assets/img/news-01.jpg'
  export default{
    data () {
      return {
        slogan: '为优质教育资源的普及不懈努力！',
        dynamicList: [
          {
            title: '天星教育2016年度工作总结暨员工表彰大会顺利开展',
            pic: pic,
            cate: '天星动态',
            time: '2017-07-07'
          },
          {
            title: '天星教育2016年度工作总结暨员工表彰大会顺利开展',
            pic: pic,
            cate: '天星动态',
            time: '2017-07-07'
          },
          {
            title: '天星教育2016年度工作总结暨员工表彰大会顺利开展',
            pic: pic,
            cate: '天星动态',
            time: '2017-07-07'
          },
          {
            title: '天星教育2016年度工作总结暨员工表彰大会顺利开展',
            pic: pic,
            cate: '天星动态',
            time: '2017-07-07'
          },
          {
            title: '天星教育2016年度工作总结暨员工表彰大会顺利开展',
            pic: pic,
            cate: '天星动态',
            time: '2017-07-07'
          },
          {
            title: '天星教育2016年度工作总结暨员工表彰大会顺利开展',
            pic: pic,
            cate: '天星动态',
            time: '2017-07-07'
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
<style lang="less">
  @import "../assets/css/base.less";

  /*平台数据*/
  .platform-data{
    background-color: @primary;
    .data-item{
      float: left;
      width:236px;
      padding:15px 0 35px;
      text-align: center;
      color:#fff;
      .num{
        font-size:50px;
      }
      p{
      }
    }
  }

  /*section*/
  .section-title{
    color:@primary;
    padding:40px 0;
    text-align: center;
    font-size:40px;
  }
  .index-section{
    padding:50px 0 60px;
    background-color: #fff;
    .sub-img{
      line-height:40px;
    }
  }
  .index-section-gray{
    background-color: #f5f5f5;
  }
  .dynamic-show{
    padding:40px 0;
    li{
      width:353px;
      margin:20px;
      img{
        width:100%;
      }
    }
  }
  /*口号*/
  .ts-kouhao{
    padding:50px;
    text-align: center;
    line-height:50px;
    img{
      float: left;
      display: inline-block;
      width:50px;
      height:50px;
      margin-right:20px;
    }
    font-size:18px;
  }

</style>
