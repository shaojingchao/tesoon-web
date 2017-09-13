<template>
  <div>
    <MyHeader class="wow fadeIn" data-wow-delay="0"/>
    <div class="platform-data">
      <div class="content clearfix" >
        <div class="data-item wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.1s">
          <div class="num">19</div>
          <p>天星砥砺前行19年</p>
        </div>
        <div class="data-item wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.3s">
          <div class="num">5000</div>
          <p>5000余位特优级教师加盟</p>
        </div>
        <div class="data-item wow fadeInUp" data-wow-duration="0.7s" data-wow-delay="0.5s">
          <div class="num">7</div>
          <p>开创7大教辅品牌</p>
        </div>
        <div class="data-item wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
          <div class="num">26</div>
          <p>推出26大畅销系列</p>
        </div>
        <div class="data-item wow fadeInUp" data-wow-duration="0.9s" data-wow-delay="0.9s">
          <div class="num">2000</div>
          <p>单品研发2000余册</p>
        </div>
      </div>
    </div>

    <div class="index-section bg-white wow fadeInUp" data-wow-offset="100">
      <h1 class="section-title">天星动态</h1>
      <div class="content">
        <ul class="dynamic-show clearfix" v-if="dynamicList.length>0">
          <router-link
            class="fl news-wow fadeInUp"
            :data-wow-delay="(index*0.15)+'s'"
            tag="li"
            v-for='(item,index) in dynamicList'
            key="item.id"
            :to="{path:'/dynamic/all/'+item.id}">
            <a class="ds-list-item" :title="item.title">
              <div><img v-bind:src="item.pic"></div>
              <h3 :title="item.title">{{item.title}}</h3>
              <div class="text-muted f16 clearfix">
                <span class="fl">{{item.time}}</span>
                <span class="fr">{{item.cate}}</span>
              </div>
            </a>
          </router-link>
        </ul>
        <div class="tc text-muted f16" v-else>拼命加载中</div>
      </div>
      <div class="tr content f16 pr30" v-if="dynamicList.length>0">
        <router-link class="text-muted" to="/dynamic">查看更多 ></router-link>
      </div>
    </div>

    <!--教育出版-->
    <div class="index-section index-section-gray wow fadeInUp" data-wow-offset="200">
      <h1 class="section-title">教育出版</h1>
      <div class="content">
        <p class="section-text">
          天星教育以独到、敏锐的市场眼光，独辟蹊径地首创MOOK教辅理念，开中国教辅杂志化先河，实现了图书优势和杂志优势的完美结合，出版的《金考卷》《试题调研》等系列图书，将全国示范名校优质备考资源传递给万千学子，一时畅销大江南北。</p>
        <div class="section-img mt20 pt30 pb30 mb30">
          <img src="../assets/img/index/jiaoyu_pic.png">
        </div>
        <div class="sub-img tc">
          <div class="clearfix dib">
            <img class="fr" src="../assets/img/index/jiaoyu_icon.png">
          </div>
        </div>
        <div class="tc mt10">
          <router-link to="/service/jiaoyu" class="f16 text-muted">详细了解 ></router-link>
        </div>
      </div>
    </div>

    <!--综合出版-->
    <div class="index-section bg-white wow fadeInUp" data-wow-offset="200">
      <h1 class="section-title">综合出版</h1>
      <div class="content">
        <p class="section-text">
          天星教育打造的疯狂系列期刊群已成为青少年阅读拓展领军品牌，秉承激情专注之精神，怀抱出类拔萃之信念，长期执着于读写研究。彰显时代特征，吻合中、高考精神，全方位提升青少年人文素养及读写能力。使青少年在阅读中生发智慧，奠定内涵，在潜移默化中完善人格，提升能力，走向成功！</p>
        <div class="section-img mt20 pt30 pb30 mb30">
          <img src="../assets/img/index/zonghe_pic.png">
        </div>
        <div class="sub-img tc">
          <div class="clearfix dib">
            <img class="fr" src="../assets/img/index/zonghe_icon.png">
          </div>
        </div>
        <div class="tc mt10">
          <router-link to="/service/zonghe" class="f16 text-muted">详细了解 ></router-link>
        </div>
      </div>
    </div>

    <!--数字出版-->
    <div class="index-section index-section-gray wow fadeInUp" data-wow-offset="200">
      <h1 class="section-title">数字出版</h1>
      <div class="content">
        <p class="section-text">
          天星教育以独到、敏锐的市场眼光，独辟蹊径地首创MOOK教辅理念，开中国教辅杂志化先河，实现了图书优势和杂志优势的完美结合，出版的《金考卷》《试题调研》等系列图书，将全国示范名校优质备考资源传递给万千学子，一时畅销大江南北。</p>
        <div class="sub-img tc">
          <div class="clearfix dib">
            <img class="fr" src="../assets/img/index/shuzi_icon.png">
          </div>
        </div>
        <div class="tc mt30">
          <router-link to="/service/shuzi" class="f16 text-muted">详细了解 ></router-link>
        </div>
        <div class="section-img pt30 mt10">
          <img src="../assets/img/index/shuzi_pic.png">
        </div>
      </div>
    </div>

    <!--用户评价-->
    <div class="user-pingjia  un-select wow fadeInUp" data-wow-offset="200">
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
        <a class="slide-btn fr" :class="{disabled:pjCurrentIndex===pingJiaList.length-1}"
           @click="scrollPingJiaRight">></a>
      </div>
    </div>

    <!--联系我们-->

    <div class="address-wrap wow fadeInUp" data-wow-offset="200">
      <div class="content address">
        <div class="map-tips">
          <p class="f20 fw6 mb15 mt5">河南天星教育传媒股份有限公司</p>
          <p class="f16">地址：郑州市高新区翠竹街1号企业总部基地51-52栋 电话：0371-68698</p>
        </div>
      </div>
    </div>
    <MyFooter/>
  </div>
</template>

<script type="text/ecmascript-6">
  import MyHeader from '@/components/indexHeader.vue'
  import MyFooter from '@/components/footer.vue'
  import WOW from '@/bower_components/wow/dist/wow.min'
  export default{
    data () {
      return {
        dynamicList: [],
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
    metaInfo () {
      return {
        title: '天星教育 - 首页',
        meta: [{
          name: '河南天星教育传媒股份有限公司',
          content: '天星教育是一家致力于教育图书出版及提供教育信息服务的文化教育机构，自1998年成立以来，已发展成为河南民营书业的旗舰品牌。公司坐落于历史文化源远流长的中原大地，秉承着中原儿女自强不息、上下求索的民族精神，积极投身于文化产业发展的大潮中，为了民族教育的振兴和发展，贡献着自己的智慧和热忱。'
        }]
      }
    },
    components: {
      MyHeader,
      MyFooter
    },
    created () {
      this.initWOW('wow')
      this.$http.get('/api/new').then(res => {
        this.dynamicList = res.data.data
        this.$nextTick(() => {
          this.initWOW('news-wow')
        })
      })
    },
    methods: {
      initWOW (cls) {
        new WOW.WOW({
          boxClass: cls,
          animateClass: 'animated',
          offset: 0,
          mobile: false,
          live: true
        }).init()
      },
      scrollPingJia (i) {
        if (i < 0 || i > this.pingJiaList.length - 1) {
          return false
        } else {
          this.pjCurrentIndex = i
        }
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
  .platform-data {
    position: relative;
    height: 110px;
    margin-top: -170px;
    .data-item {
      position: relative;
      float: left;
      width: 220px;
      text-align: center;
      color: #556c82;
      .num {
        font-size: 26px;
        color: #fff;
        margin-bottom: 5px;
      }
      &:not(:first-child):after {
        position: absolute;
        top: 25px;
        left: 0;
        display: block;
        content: '';
        width: 1px;
        height: 25px;
        background-color: #34506a;
      }
    }
  }

  /*section*/
  .section-title {
    font-weight: 400;
    padding: 0 0 30px;
    text-align: center;
    font-size: 42px;
  }

  .index-section {
    padding: 60px 0;
    background-color: #fff;
    .section-text {
      width: 75%;
      margin: 0 auto;
      font-size: 16px;
      color: #666;
      text-align: center;
      padding-bottom: 30px;
    }
  }

  .index-section-gray {
    background-color: #f7f7f7;
  }

  .dynamic-show {
    li {
      width: 345px;
      height: 245px;
      box-sizing: border-box;
      border: 1px solid #eeeeee;
      margin: 10px;
      transition: all 0.2s;
      &:hover {
        box-shadow:0 8px 20px -1px rgba(0,0,0,.12);
      }
      img {
        width: 100%;
      }
      h3 {
        margin-top: 5px;
        font-weight: 400;
        height: 2.6em;
        line-height: 1.3;
        margin-bottom: 5px;
        text-overflow-ellipsis: ellipsis;
        overflow: hidden;
      }
    }
    .ds-list-item {
      display: block;
      height: 245px;
      box-sizing: border-box;
      padding: 20px 20px 0;
    }
  }

  /*用户评价*/
  .user-pingjia {
    background-color: @primary-darken;
    color: #fff;
  }

  /*评价内容-滑动效果*/
  .slide-scroll-wrap {
    padding: 130px 0;
    overflow: hidden;
    @height: 140px;
    .slide-btn {
      font-size: 40px;
      font-weight: 100;
      color: #fff;
      height: @height;
      width: 50px;
      line-height: @height;
      text-align: center;
      font-family:Simsun, sans-serif;
      cursor: pointer;
      .disabled {
        opacity: 0.5;
        cursor: default;
        &:hover {
          color: #fff;
        }
      }
      &:hover {
        color: #00adef;
      }

    }
    .slide-scroll-content {
      width: 1000px;
      height: @height;
      float: left;
      overflow: hidden;
      position: relative;
      ul {
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        transition: left .6s ease;
      }
      .slide-item {
        float: left;
        width: 1000px;
        box-sizing: border-box;
        padding: 0 75px;
        overflow: hidden;
        .u-pic {
          float: left;
          width: 130px;
          height: 130px;
          margin-top: 5px;
          box-sizing: border-box;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, .8);
          box-shadow: 0 1px 2px rgba(0, 0, 0, .4);
        }
        .text {
          height: @height;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          float: right;
          width: 670px;
          font-size: 16px;
        }
      }
    }
  }

  /*地址*/
  .address-wrap {
    height: 567px;
    background: #fff url(../assets/img/index/address_map.png) 50% 0 no-repeat;
    font-weight: 400;
    .address {
      padding-top: 10px;
      .map-tips {
        margin-top: 200px;
        margin-left: 624px;
        width: 480px;
        height: 155px;
        box-sizing: border-box;
        padding: 20px 50px;
        background: url(../assets/img/index/map_tips.png) 0 0 no-repeat;
      }
    }
  }
</style>
