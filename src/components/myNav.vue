<template>
  <ul class="nav">
    <router-link tag="li" to="/" v-bind:title="$route.path" v-show="$route.path !== '/'"><a>首页</a></router-link>
    <router-link tag="li" to="/dynamic" active-class="current"><a>天星动态</a></router-link>
    <router-link tag="li" to="/service" active-class="current"><a>集团业务</a></router-link>
    <router-link tag="li" to="/about" active-class="current"><a>了解天星</a></router-link>
    <router-link tag="li" to="/mobile" active-class="current"><a>手机访问</a></router-link>
  </ul>
</template>
<style lang="less">
  @import "../assets/variable.less";
  .header{
    .logo{
      float: left;
      width:146px;
      height:80px;
      background:url(../assets/img/logo-2.png) 50% 50% no-repeat;
      background-size: 100%;
    }
    .nav {
      float: right;
      li {
        box-sizing:border-box;
        font-size:16px;
        display: inline-block;
        padding:0 6px;
        margin:0 14px;
        height:80px;
        line-height:80px;
        transition:border .3s;
        &:last-child{
          margin-right:0;
        }
        a{
          display: block;
          color:#999;
          transition:color .3s;
        }
        &.current,&:hover{
          border-bottom:4px solid @primary;
          a{
            color:@primary;
          }
        }
      }
    }
  }

  .index-header{
    .header{
      position: relative;
      z-index: 10;
      .logo{
        background:url(../assets/img/logo-1.png) 50% 50% no-repeat;
      }
      .nav {
        li {
          a{
            color:#b7c0c9;
          }
          &.current,&:hover{
            border-bottom:4px solid #fff;
            a{
              color:#fff;
            }
          }
        }
      }
    }
  }

  .page-header{
    border-bottom:1px solid #e8ecef;
  }
  .slider-wrap{
    top:-80px;
  }
</style>
