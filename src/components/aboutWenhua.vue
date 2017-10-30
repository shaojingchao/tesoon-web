<template>
  <div class="wenhua-wrap">
    <h1 class="title tc fw4">天星教育企业文化</h1>
    <div class="wh-content">
      <ul class="wh-card">
        <li>
          <h3>企业精神</h3>
          <p>企业精神：赤诚献皓月　丹心育英杰
            <br>
            企业使命：为优质教育资源的普及不懈努力，为人民群众综合素质的提高不懈奋斗
            <br>
            企业目标：成为卓越的教育传媒集团</p>
        </li>
        <li>
          <h3>经营理念</h3>
          <p>经营理念：诚信守诺，合作共赢
            <br>
            研发理念：务实则优，创新则胜
            <br>
            营销理念：服务客户，传递价值
            </p>
        </li>
        <li>
          <h3>用人理念</h3>
          <p>人才理念：平等竞争，优胜劣汰， 扬长避短，人尽其才
            <br>
            用人标准：具备创新意识和不断进取精神
            <br>
            竞争机制：能者上，平者让，庸者下
            <br>
            </p>
        </li>
      </ul>

      <div class="huodong-content">
        <h2 class="fw4 mt30 mb30 tc hd-title">员工活动</h2>
        <div class="hd-list-item">
          <img src="../assets/img/page/yghd_01.png">
          <h3>趣味运动会</h3>
          <p>公司举办趣味运动会，活跃气氛，让小伙伴们工作之余可以放松身心，找回童真</p>
        </div>
        <div class="hd-list-item">
          <img src="../assets/img/page/yghd_02.png">
          <h3>文娱表演</h3>
          <p>公司会在中国传统节日举办文艺演出，让同事们可以一展才华</p>
        </div>
        <div class="hd-list-item">
          <img src="../assets/img/page/yghd_03.png">
          <h3>拔河比赛</h3>
          <p>春秋季节，公司会举办拔河比赛，增强团队协作</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    metaInfo () {
      return {
        title: '天星教育 - 天星文化'
      }
    }
  }
</script>
<style lang="less">

  @import '../assets/css/_mixins-wln/_wln-variables.less';

  .wenhua-wrap{
    padding:60px 0 80px;
    .title{
      font-size:42px;
      padding-bottom:60px;
    }
    .wh-content{
      .wh-card{
        display: flex;
        justify-content: space-between;
        li{
          width:340px;
          height:230px;
          box-sizing: border-box;
          border:1px solid #e5e5e5;
          padding:0 30px;
          display: inline-block;
          h3{
            font-size:20px;
            font-weight:500;
            width:4em;
            margin:0 auto;
            line-height:80px;
            border-top:6px solid @primary;
          }
          p{
            font-size:16px;
          }
        }
      }
    }
    .huodong-content{
      .hd-title{
        font-size:36px;
      }
    }
    .hd-list-item{
      margin-top:30px;
      margin-bottom:80px;
      img{
        display: block;
        margin:0 auto;
      }
      h3{
        font-weight:400;
        font-size:26px;
        text-align: center;
        margin-top:30px;
        margin-bottom:5px;
      }
      p{
        font-size:16px;
        text-align: center;
      }
    }
  }

  @media screen and (max-width:767px) {
    .wenhua-wrap{
      padding:30px 0 30px;
      .title{
        font-size:24px;
        font-weight:700;
        padding-bottom:30px;
      }
      .wh-content{
        .wh-card{
          flex-direction: column;
          li{
            width:auto;
            height:auto;
            padding:0 10px 10px;
            margin-bottom: 15px;
            h3{
              font-size:16px;
              font-weight:700;
              line-height:40px;
              border-top:4px solid @primary;
            }
            p{
              font-size:14px;
            }
          }
        }
      }
      .huodong-content{
        .hd-title{
          font-weight:700;
          font-size:20px;
        }
      }
      .hd-list-item{
        margin:50px 0;
        h3{
          font-weight:700;
          font-size:18px;
          margin-top:10px;
        }
        p{
          font-size:14px;
        }
      }
    }
  }
</style>
