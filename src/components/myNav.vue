<template>
  <ul class="nav">
    <router-link tag="li" to="/" v-bind:title="$route.path" v-show="$route.path !== '/'">首页</router-link>
    <router-link tag="li" to="/dynamic"><a>天星动态</a></router-link>
    <router-link tag="li" to="/service"><a>集团业务</a></router-link>
    <router-link tag="li" to="/about"><a>了解天星</a></router-link>
    <router-link tag="li" to="/mobile"><a>手机访问</a></router-link>
  </ul>
</template>
<style lang="less">
  @import "../assets/variable.less";
  .header{
    .logo{
      float: left;
      width:60px;
      height:60px;
      background:url(../assets/img/logo.png) 50% 50% no-repeat;
      background-size: 100%;
    }
    .nav {
      float: right;
      padding-top:15px;
      li {
        display: inline-block;
        padding:5px 10px;
        a{
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
  }

  .page-header{
    .router-link-exact-active{
      color:#fff;
      background-color: @primary;
      a{
        color:#fff;
      }
    }
  }

  .index-header{
    position: relative;
    margin-bottom:-60px;
    .router-link-exact-active{
      color:#fff;
    }
    .header{
      position: relative;
      z-index: 10;
      .logo{
        /*background:url(../assets/img/logo.png) 50% 50% no-repeat;*/
      }
      .nav {
        li {
          a{
            color:#fff;
          }
        }
      }
    }
  }
  .slider-wrap{
    top:-60px;
  }
</style>
