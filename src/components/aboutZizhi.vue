<template>
  <div class="zizhi-wrap">
    <div class="zz-content">
      <h1 class="title tc">天星教育荣誉证书</h1>
      <ul class="zz-pic-list clearfix">
        <li class="list-item" v-for="item in ziZhiPic" key="item.pic">
          <div class="pic-content" :class="{'pic-a4':item.size === 'a4','pic-a3':item.size === 'a3'}">
            <div class="pic-box" :style="{background: 'url('+item.pic+') center center no-repeat','background-size':'contain'}"></div>
            <p>{{item.name}}</p>
            <div class="pic-box-bg" :class="{'pic-box-a4':item.size === 'a4','pic-box-a3':item.size === 'a3'}"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        ziZhiPic: [
          {
            size: 'a4',
            name: '中学教材学习讲义获奖',
            pic: require('../assets/img/page/rongyu_pic/01.jpg')
          },
          {
            size: 'a4',
            name: '示范性网站',
            pic: require('../assets/img/page/rongyu_pic/02.jpg')
          },
          {
            size: 'a4',
            name: '组卷系统软件著作权',
            pic: require('../assets/img/page/rongyu_pic/03.jpg')
          },
          {
            size: 'a4',
            name: '备考软件著作权',
            pic: require('../assets/img/page/rongyu_pic/04.jpg')
          },
          {
            size: 'a4',
            name: '提分系统软件著作权',
            pic: require('../assets/img/page/rongyu_pic/05.jpg')
          },
          {
            size: 'a4',
            name: '数字化备考软件著作权',
            pic: require('../assets/img/page/rongyu_pic/06.jpg')
          },
          {
            size: 'a3',
            name: '2014年度民营书业“创新人物”',
            pic: require('../assets/img/page/rongyu_pic/07.jpg')
          },
          {
            size: 'a3',
            name: '天星教育荣获2014年度民营书业“最具影响力机构”',
            pic: require('../assets/img/page/rongyu_pic/08.jpg')
          },
          {
            size: 'a3',
            name: '杜志建同志荣获十大民营实力出版策划人',
            pic: require('../assets/img/page/rongyu_pic/09.jpg')
          },
          {
            size: 'a3',
            name: '天星公司向枣庄市第八中学捐赠图书',
            pic: require('../assets/img/page/rongyu_pic/10.jpg')
          },
          {
            size: 'a3',
            name: '示范网站',
            pic: require('../assets/img/page/rongyu_pic/11.jpg')
          },
          {
            size: 'a3',
            name: '天星公司向山东日照一中捐赠图书',
            pic: require('../assets/img/page/rongyu_pic/12.jpg')
          },
          {
            size: 'a3',
            name: '天星公司向河南省红十字会捐款',
            pic: require('../assets/img/page/rongyu_pic/13.jpg')
          },
          {
            size: 'a3',
            name: '天星公司向河南省慈善总会捐款',
            pic: require('../assets/img/page/rongyu_pic/14.jpg')
          },
          {
            size: 'a3',
            name: '华腾向河南省慈善总会捐款',
            pic: require('../assets/img/page/rongyu_pic/15.jpg')
          },
          {
            size: 'a3',
            name: '华腾公司向河南红十字会捐款',
            pic: require('../assets/img/page/rongyu_pic/16.jpg')
          },
          {
            size: 'a3',
            name: '华腾书业向玉树地震捐款',
            pic: require('../assets/img/page/rongyu_pic/17.jpg')
          }
        ]
      }
    },
    metaInfo () {
      return {
        title: '天星教育 - 荣誉资质'
      }
    }
  }
</script>

<style lang="less">
  .zizhi-wrap{
    padding-top: 70px;
    padding-bottom: 80px;
    .title{
      font-size:42px;
      font-weight:400;
      margin-bottom: 60px;
    }
    .zz-pic-list{
      .list-item{
        margin:28px;
        position: relative;
        float: left;
        .pic-content{
          height:291px;
          position: relative;
          &:after{
            content:'';
            display: block;
            width:200px;
            height:100%;
            position: absolute;
            left:100%;
            top:0;
            background: url(../assets/img/page/zizhi_pic_bg.png) 0 40px no-repeat;
          }
          .pic-box-bg{
            height:100%;
            width:100%;
            position: absolute;
            top:0;
            left:0;
          }
          .pic-box{
            position: absolute;
            top:38px;
            height:222px;
            width:100%;
          }
          .pic-box-a4{
            background: url(../assets/img/page/zizhi_pic_box_02.png) 0 0 no-repeat;
          }
          .pic-box-a3{
            background: url(../assets/img/page/zizhi_pic_box_01.png) 0 0 no-repeat;
          }
          &.pic-a4{
            width:164px;
          }
          &.pic-a3{
            width:291px;
          }
          img{
            position: relative;
            width:100%;
            z-index:0;
          }
          p{
            position: absolute;
            top:275px;
            width:100%;
            text-align: center;
            font-size:16px;
          }
        }

      }
    }
  }

  @media screen and (max-width:767px) {
    .zizhi-wrap{
      padding-top: 30px;
      padding-bottom: 30px;
      .title{
        font-size:24px;
        font-weight:700;
        margin-bottom: 30px;
      }
      .zz-pic-list{
        text-align: center;
        .list-item{
          margin: 20px 3px;
          float: none;
          display: inline-block;
          .pic-content{
            &:after{
              display: none;
            }
            p{
              font-size:14px;
            }
          }
        }
      }
    }
  }
</style>
