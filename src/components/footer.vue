<template>
  <footer class="footer-wrap">
    <div class="footer">
      <div class="footer-nav">
        <div class="fn-item">
          <div class="item-tit">天星动态</div>
          <ul>
            <li><router-link to="/dynamic/all">全部新闻</router-link></li>
            <li><router-link to="/dynamic/jt">集团新闻</router-link></li>
            <li><router-link to="/dynamic/hy">行业新闻</router-link></li>
            <li><router-link to="/dynamic/yg">员工新闻</router-link></li>
          </ul>
        </div>
        <div class="fn-item">
          <div class="item-tit">集团业务</div>
          <ul>
            <li><router-link to="/service/jiaoyu">教育出版</router-link></li>
            <li><router-link to="/service/zonghe">综合出版</router-link></li>
            <li><router-link to="/service/shuzi">数字出版</router-link></li>
          </ul>
        </div>
        <div class="fn-item">
          <div class="item-tit">了解天星</div>
          <ul>
            <li><router-link to="/about/jianjie">集团简介</router-link></li>
            <li><router-link to="/about/licheng">发展历程</router-link></li>
            <li><router-link to="/about/wenhua">天星文化</router-link></li>
            <li><router-link to="/about/zizhi">荣誉资质</router-link></li>
            <li><router-link to="/about/lianxi">联系我们</router-link></li>
          </ul>
        </div>
        <div class="fn-item">
          <div class="item-tit">联系我们</div>
          <ul>
            <li>地址：郑州市高新区翠竹街1号企业
              <br>
              总部基地51-52栋</li>
            <li>电话：0371-68698</li>
          </ul>
        </div>
        <div class="fn-item-ewm">
          <div class="tx-ewm">
            <img src="../assets/img/ewm.png">
            <p>关注天星教育微信公众号<br>请使用微信扫描二维码</p>
          </div>
        </div>
      </div>
      <div class="ft-copyright">
        Copyright © 河南天星教育传媒股份有限公司 豫B2-20130009 1998-2017 All Rights Reserved.
      </div>
    </div>
  </footer>
</template>
<style scoped lang="less">
  @import "../assets/variable.less";
  .footer-wrap{
    background-color:#0c2c4a;
    .footer{
      width:1100px;
      margin: 0 auto;
    }
  }
  .ft-copyright{
    padding:30px 0;
    margin-top:20px;
    text-align: center;
    font-size:12px;
    color:#6d8092;
    border-top:1px solid rgba(255,255,255,.3);
  }
  @color:#b7c0c9;
  .footer-nav{
    overflow: hidden;
    padding-top: 50px;
    .fn-item{
      width:225px;
      float: left;
      .item-tit{
        color:#fff;
        font-size:16px;
        margin-bottom:10px;
      }
      li{
        padding:2px 0;
        font-size:12px;
        color:@color;
        a{
          color:@color;
          transition:color 0.2s;
          &:hover{
            color:#fff;
          }
        }
      }
    }
    .fn-item-ewm{
      float: right;
      padding-right:20px;
      font-size:12px;
      text-align: center;
      color:@color;
      img{
        display: block;
        margin:0 auto;
        margin-bottom:15px;
      }
    }
  }
</style>
