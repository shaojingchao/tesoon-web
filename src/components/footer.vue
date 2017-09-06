<template>
  <footer class="footer-wrap">
    <div class="footer">
      <div class="footer-nav">
        <div class="fn-item">
          <div class="item-tit">天星动态</div>
          <ul>
            <li><a href="">全部新闻</a></li>
            <li><a href="">集团新闻</a></li>
            <li><a href="">行业新闻</a></li>
            <li><a href="">员工新闻</a></li>
          </ul>
        </div>
        <div class="fn-item">
          <div class="item-tit">集团业务</div>
          <ul>
            <li><a href="">教育出版</a></li>
            <li><a href="">综合出版</a></li>
            <li><a href="">数字出版</a></li>
          </ul>
        </div>
        <div class="fn-item">
          <div class="item-tit">了解天星</div>
          <ul>
            <li><a href="">集团简介</a></li>
            <li><a href="">发展历程</a></li>
            <li><a href="">天星文化</a></li>
            <li><a href="">荣誉资质</a></li>
            <li><a href="">联系我们</a></li>
            <li><a href="">加入天星</a></li>
          </ul>
        </div>
        <div class="fn-item">
          <div class="item-tit">联系我们</div>
          <ul>
            <li>地址：郑州市高新区翠竹街1号企业
              <br>
              总部基地51-52栋</li>
            <li>电话：0371-68698</li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="fn-item-ewm">
          <div class="tx-ewm">
            <img src="../assets/img/ewm.png">
            <p>扫码或输入网址<br>http://weixin.tetsen.com</p>
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
