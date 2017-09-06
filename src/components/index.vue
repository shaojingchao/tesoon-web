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

    <div class="index-section bg-white">
      <h1 class="section-title">天星动态</h1>
      <div class="content">
        <ul class="dynamic-show clearfix">
          <li class="fl" v-for='item in dynamicList'>
            <div><img v-bind:src="item.pic"></div>
            <h3 :title="item.title">{{item.title}}</h3>
            <div class="text-muted f16">
              <span class="fl">{{item.time}}</span>
              <span class="fr">{{item.cate}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="tr content f16 pr30"><a class="text-muted" href="/dynamic">查看更多 ></a></div>
    </div>

    <!--教育出版-->
    <div class="index-section index-section-gray">
      <h1 class="section-title">教育出版</h1>
      <div class="content">
        <p class="section-text">天星教育以独到、敏锐的市场眼光，独辟蹊径地首创MOOK教辅理念，开中国教辅杂志化先河，实现了图书优势和杂志优势的完美结合，出版的《金考卷》《试题调研》等系列图书，将全国示范名校优质备考资源传递给万千学子，一时畅销大江南北。</p>
        <div class="section-img mt20 pt30 pb30 mb30">
          <img src="../assets/img/index/jiaoyu_pic.png">
        </div>
        <div class="sub-img tc">
          <div class="clearfix dib">
            <img class="fr" src="../assets/img/index/jiaoyu_icon.png">
          </div>
        </div>
        <div class="tc mt10"><a href="" class="f16 text-muted">详细了解 ></a></div>
      </div>
    </div>

    <!--综合出版-->
    <div class="index-section bg-white">
      <h1 class="section-title">综合出版</h1>
      <div class="content">
        <p class="section-text">天星教育打造的疯狂系列期刊群已成为青少年阅读拓展领军品牌，秉承激情专注之精神，怀抱出类拔萃之信念，长期执着于读写研究。彰显时代特征，吻合中、高考精神，全方位提升青少年人文素养及读写能力。使青少年在阅读中生发智慧，奠定内涵，在潜移默化中完善人格，提升能力，走向成功！</p>
        <div class="section-img mt20 pt30 pb30 mb30">
          <img src="../assets/img/index/zonghe_pic.png">
        </div>
        <div class="sub-img tc">
          <div class="clearfix dib">
            <img class="fr" src="../assets/img/index/zonghe_icon.png">
          </div>
        </div>
        <div class="tc mt10"><a href="" class="f16 text-muted">详细了解 ></a></div>
      </div>
    </div>

    <!--数字出版-->
    <div class="index-section index-section-gray">
      <h1 class="section-title">数字出版</h1>
      <div class="content">
        <p class="section-text">天星教育以独到、敏锐的市场眼光，独辟蹊径地首创MOOK教辅理念，开中国教辅杂志化先河，实现了图书优势和杂志优势的完美结合，出版的《金考卷》《试题调研》等系列图书，将全国示范名校优质备考资源传递给万千学子，一时畅销大江南北。</p>
        <div class="sub-img tc">
          <div class="clearfix dib">
            <img class="fr" src="../assets/img/index/shuzi_icon.png">
          </div>
        </div>
        <div class="tc mt30"><a href="" class="f16 text-muted">详细了解 ></a></div>
        <div class="section-img pt30 mt10">
          <img src="../assets/img/index/shuzi_pic.png">
        </div>
      </div>
    </div>

    <!--用户评价-->
    <div class="user-pingjia  un-select">
      <div class="content slide-scroll-wrap">
        <a class="slide-btn fl" :class="{disabled:pjCurrentIndex===0}" @click="scrollPingJiaLeft"><</a>
        <div class="slide-scroll-content">
          <ul :style="{width:pingJiaList.length*1000+'px',left:-pjCurrentIndex*1000+'px'}">
            <li class="slide-item" v-for="item in pingJiaList">
              <img class="u-pic" :src="item.photo">
              <div class="text">
                <p>{{item.text}}</p>
                <p class="mt5">{{item.user}}</p>
              </div>
            </li>
          </ul>
        </div>
        <a class="slide-btn fr" :class="{disabled:pjCurrentIndex===pingJiaList.length-1}" @click="scrollPingJiaRight">></a>
      </div>
    </div>

    <!--联系我们-->

    <div class="address-wrap">
      <div class="content address">
        <div class="map-tips">
          <p class="f20 fw6 mb15 mt5">河南天星教育传媒股份有限公司</p>
          <p class="f16">地址：郑州市高新区翠竹街1号企业总部基地51-52栋 电话：0371-68698</p>
        </div>
      </div>
    </div>

    <!--口号-->

    <!--<div class="ts-kouhao">-->
      <!--<span class="dib clearfix">-->
        <!--<img src="../assets/img/logo.png">-->
        <!--{{slogan}}-->
      <!--</span>-->
    <!--</div>-->
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
            title: '天星教育2016年度工作总结暨员工表彰大会顺利开展,天星教育2016年度工作总结暨员工表彰大会顺利开展',
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
        ],
        pingJiaList: [
          {
            text: '挺推荐这本的——高考复习讲义适合对象:高三一轮复习的孩子（细心的同学可以观察第一张照片里的第一排，这个系列的物理数学英语化学生物我都做过）这本书真的超级厚，但是也特别适合高三第一轮复习。重难点有划分，也有往年高考原题和创新题。',
            user: '特级教师 - 王老师',
            photo: require('../assets/img/index/u-pic_1.jpg')
          },
          {
            text: '挺推荐这本的——高考复习讲义适合对象:高三一轮复习的孩子（细心的同学可以观察第一张照片里的第一排，这个系列的物理数学英语化学生物我都做过）这本书真的超级厚，但是也特别适合高三第一轮复习。重难点有划分，也有往年高考原题和创新题。',
            user: '特级教师 - 王老师',
            photo: require('../assets/img/index/u-pic_1.jpg')
          }
        ],
        pjCurrentIndex: 0
      }
    },
    components: {
      MyHeader,
      MyFooter
    },
    methods: {
      scrollPingJia (i) {
        if (i < 0 || i > this.pingJiaList.length - 1) return
        this.pjCurrentIndex = i
      },
      scrollPingJiaRight () {
        this.scrollPingJia(this.pjCurrentIndex + 1)
      },
      scrollPingJiaLeft () {
        this.scrollPingJia(this.pjCurrentIndex - 1)
      }
    }
  }
</script>
<style lang="less">
  @import "../assets/css/base.less";

  /*平台数据*/
  .platform-data{
    position: relative;
    height:110px;
    margin-top: -170px;
    .data-item{
      position: relative;
      float: left;
      width:220px;
      text-align: center;
      color:#556c82;
      .num{
        font-size:26px;
        color:#fff;
        margin-bottom:5px;
      }
      &:not(:first-child):after{
        position: absolute;
        top:25px;
        left:0;
        display: block;
        content:'';
        width:1px;
        height:25px;
        background-color: #34506a;
      }
    }
  }

  /*section*/
  .section-title{
    font-weight:400;
    padding:0 0 30px;
    text-align: center;
    font-size:42px;
  }
  .index-section{
    padding:60px 0;
    background-color: #fff;
    .section-text{
      width:75%;
      margin:0 auto;
      font-size:16px;
      color:#666;
      text-align: center;
      padding-bottom: 30px;
    }
  }
  .index-section-gray{
    background-color: #f7f7f7;
  }
  .dynamic-show{
    li{
      width:345px;
      height:245px;
      padding:20px 20px 0;
      box-sizing: border-box;
      border:1px solid #e5e5e5;
      box-shadow:0 1px 2px rgba(0,0,0,.1);
      margin:10px;
      img{
        width:100%;
      }
      h3{
        margin-top:5px;
        font-weight:400;
        height:2.6em;
        line-height:1.3;
        margin-bottom:5px;
        text-overflow-ellipsis: ellipsis;
        overflow: hidden;
      }
    }
  }

  /*用户评价*/
  .user-pingjia{
    background-color: @primary-darken;
    color:#fff;
  }
  /*评价内容-滑动效果*/
  .slide-scroll-wrap{
    padding:130px 0;
    overflow: hidden;
    @height:140px;
    .slide-btn{
      font-size:40px;
      font-weight:100;
      color:#fff;
      height:@height;
      width:50px;
      line-height:@height;
      text-align: center;
      font-family: cursive,Simsun, sans-serif;
      cursor: pointer;
      .disabled{
        opacity:0.5;
        cursor: default;
        &:hover{
          color:#fff;
        }
      }
      &:hover{
        color:#00adef;
      }

    }
    .slide-scroll-content{
      width:1000px;
      height:@height;
      float: left;
      overflow: hidden;
      position: relative;
      ul{
        position: absolute;
        left:0;
        top:0;
        overflow: hidden;
        transition: all .4s;
      }
      .slide-item{
        float: left;
        width:1000px;
        box-sizing: border-box;
        padding:0 75px;
        overflow: hidden;
        .u-pic{
          float: left;
          width:130px;
          height:130px;
          margin-top:5px;
          box-sizing:border-box;
          border-radius:50%;
          border:1px solid rgba(255,255,255,.8);
          box-shadow:0 1px 2px rgba(0,0,0,.4);
        }
        .text{
          height:@height;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          float: right;
          width:670px;
          font-size:16px;
        }
      }
    }
  }
  /*地址*/
  .address-wrap{
    height:567px;
    background: #fff url(../assets/img/index/address_map.png) 50% 0 no-repeat;
    font-weight: 400;
    .address{
      padding-top: 10px;
      .map-tips{
        margin-top:200px;
        margin-left:624px;
        width:480px;
        height:155px;
        box-sizing:border-box;
        padding:20px 50px;
        background: url(../assets/img/index/map_tips.png) 0 0 no-repeat;
      }
    }
  }
  /*.ts-kouhao{*/
    /*padding:50px;*/
    /*text-align: center;*/
    /*line-height:50px;*/
    /*img{*/
      /*float: left;*/
      /*display: inline-block;*/
      /*width:50px;*/
      /*height:50px;*/
      /*margin-right:20px;*/
    /*}*/
    /*font-size:18px;*/
  /*}*/
</style>
