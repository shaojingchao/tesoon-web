<template>
  <div class="licheng-wrap">
    <h1 class="tc pt30 p10 lc-title">1998-2014天星教育发展历程回顾</h1>

    <div class="time-line">
      <div class="tl-year">
        <h2 class="tl-title">2014</h2>
        <div class="tl-year-item">
          <p>公司业务覆盖领域拓展，注册资金增资至5000万，正式更名为“河南天星教育传媒股份有限公司”</p>
          <p>未来脑项目部产品《未来脑智能提分系统》、《未来脑智能组卷系统》《天星备考软件》获得国家版权局颁发的计算机软件著作权等级证书</p>
          <p>2014首部手机版《高考临考笔记》精彩发布</p>
          <p>获得《互联网出版许可证》</p>
        </div>
      </div>
      <div class="tl-year">
        <h2 class="tl-title">2013</h2>
        <div class="tl-year-item">
          <p>《活页题选》上市</p>
          <p>《增值电信业务经营许可证》申请成功</p>
          <p>数字出版产品《压轴密卷》上市</p>
          <p>未来脑项目部成立</p>
        </div>
      </div>

      <div class="tl-year">
        <h2 class="tl-title">2012</h2>
        <div class="tl-year-item">
          <p>数字出版部正式成立</p>
          <p>全媒体产品《高考冲刺讲义》上市</p>
        </div>
      </div>

      <div class="tl-year">
        <h2 class="tl-title">2011</h2>
        <div class="tl-year-item">
          <p>《试题调研》高分宝典系列之《高考必备题型1000例》、《高考决战压轴大题》上市</p>
          <p>《金考卷•高考命题新动向》之《小题狂练》、《高考专号》、《大题冲关》上市</p>
          <p>《中国大学自主招生真题详解与模拟预测》上市</p>
          <p>《试题调研》中考版上市；《60天练通中考》上市</p>
          <p>《疯狂阅读梦想地图》上市</p>
          <p>《疯狂作文赢在素材》上市</p>
          <p>《疯狂作文新时文》上市</p>
        </div>
      </div>

      <div class="tl-year">
        <h2 class="tl-title">2010</h2>
        <div class="tl-year-item">
          <p>携手十年，感动天星”答谢代理商大会在郑州裕达国贸隆重举行</p>
          <p>《试题调研》姊妹丛书《专题调研》上市</p>
          <p>《最新3年课标省区高考真题汇编》上市</p>
          <p>《中考题库》延续《高考题库》的畅销神话，向另一个传奇开拓进军</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    metaInfo () {
      return {
        title: '天星教育 - 发展历程'
      }
    }
  }
</script>
<style lang="less">
  .licheng-wrap{
    padding-top: 30px;
    padding-bottom: 70px;
    .lc-title{
      font-weight:400;
      font-size:42px;
    }
  }
  .time-line{
    .tl-title{
      padding-top: 10px;
      font-weight:400;
      font-size:28px;
      border-bottom:1px solid #eee;
    }
    .tl-year-item{
      position: relative;
      &:before{
        position: absolute;
        top:20px;
        bottom:20px;
        left:3px;
        content:"";
        display: block;
        width:1px;
        background-color: #333;
      }
      p{
        font-size:16px;
        line-height:20px;
        padding:12px 0;
        &:before{
          float: left;
          content:"";
          margin-right: 20px;
          display: block;
          margin-top: 6px;
          width:7px;
          height:7px;
          border-radius:5px;
          box-shadow:0 0 1px rgba(0,0,0,0.3);
          background-color: #333;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .licheng-wrap{
      padding-top: 30px;
      padding-bottom: 40px;
      .lc-title{
        font-weight:700;
        font-size:24px;
      }
    }
    .time-line{
      .tl-title{
        font-weight:700;
        font-size:20px;
      }
      .tl-year-item{
        p{
          font-size:14px;
          padding:12px 0 12px 15px;
          &:before{
            margin-left: -15px;
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
