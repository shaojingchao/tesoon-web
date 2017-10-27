<template>
  <div class="nav-menu" :class="{'nav-open':isShowNavMenu}">
    <span class="menu-toggle show-xs" @click="showNavMenu"><b></b></span>
    <transition name="fadeInDown">
      <ul class="nav" v-show="isShowNavMenu || !isMobile">
        <router-link tag="li" to="/" v-if="$route.path !== '/'"><a>首页</a></router-link>
        <router-link tag="li" to="/dynamic" active-class="current"><a>天星动态</a></router-link>
        <router-link tag="li" to="/service" active-class="current"><a>集团业务</a></router-link>
        <router-link tag="li" to="/about" active-class="current"><a>了解天星</a></router-link>
        <!--<li class="web-ewm-item cur-def hide-xs" @mouseenter="mouseoverEwm" @mouseleave="mouseoutEwm">-->
          <!--<a>手机访问</a>-->
          <!--<transition name="fadeIn-up">-->
            <!--<div class="web-ewm-content" v-if="isShowEwm">-->
              <!--<img src="../assets/img/ewm.png">-->
              <!--<p>请使用微信扫描二维码</p>-->
            <!--</div>-->
          <!--</transition>-->
        <!--</li>-->
      </ul>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        isShowEwm: false,
        isShowNavMenu: false
      }
    },
    computed: {
      isMobile () {
        return document.body.clientWidth <= 767
      }
    },
    methods: {
      mouseoverEwm () {
        this.isShowEwm = true
      },
      mouseoutEwm () {
        this.isShowEwm = false
      },
      showNavMenu () {
        this.isShowNavMenu = !this.isShowNavMenu
      }
    }
  }

</script>
<style lang="less">
  @import "../assets/css/_mixins-wln.less";

  .header {
    .logo {
      float: left;
      width: 146px;
      height: 80px;
      background: url(../assets/img/logo-2.png) 50% 50% no-repeat;
      background-size: 100% !important;
    }
    .nav {
      li {
        box-sizing: border-box;
        font-size: 16px;
        display: inline-block;
        padding: 0 6px;
        margin: 0 14px;
        height: 80px;
        line-height: 80px;
        transition: border .3s;
        &:last-child {
          margin-right: 0;
        }
        a {
          display: block;
          color: #999;
          transition: color .3s;
        }
        &.current, &:hover {
          border-bottom: 4px solid @primary;
          a {
            color: @primary;
          }
        }
        &.web-ewm-item {
          &:hover {
            border-bottom: none;
          }
        }
      }
    }
  }
  .nav-menu {
    float: right;
    .menu-toggle{
      position: absolute;
      right:14px;
      top:15px;
      b,&:after,&:before{
        display: block;
        width:22px;
        height:2px;
        background-color: rgba(255,255,255,.3);
        border-radius: 2px;
      }
      &:after,&:before{
        content:'';
      }
      b,&:after{
        margin-top:6px;
      }
    }
  }

  .index-header {
    .header {
      position: relative;
      z-index: 10;
      .logo {
        background: url(../assets/img/logo-1.png) 50% 50% no-repeat;
      }
      .nav {
        li {
          a {
            color: #b7c0c9;
          }
          &.current, &:hover {
            border-bottom: 4px solid #fff;
            a {
              color: #fff;
            }
          }
          &.web-ewm-item {
            &:hover {
              border-bottom: none;
            }
          }
        }
      }
    }
  }

  .page-header {
    border-bottom: 1px solid #e8ecef;
  }

  .slider-wrap {
    top: -80px;
  }

  // 二维码
  .web-ewm-item {
    position: relative;
  }

  .web-ewm-content {
    position: absolute;
    box-sizing: border-box;
    top: 80px;
    left: 50%;
    width: 180px;
    height: 208px;
    margin-left: -90px;
    border: 1px solid #f6f6f6;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 3px 20px 1px rgba(0, 0, 0, .2);
    &:after, &:before {
      content: '';
      display: block;
      position: absolute;
      top: -20px;
      left: 50%;
      margin-left: -7px;
      border-width: 10px 7px 10px 7px;
      border-style: solid;
      border-color: transparent transparent #fff transparent;
    }
    &:before {
      top: -21px;
      border-color: transparent transparent #ddd transparent;
    }
    img {
      width: 151px;
      display: block;
      margin: 0 auto;
      margin-top: 13px;
    }
    p {
      font-size: 13px;
      text-align: center;
      margin-top: 5px;
      line-height: 1.4;
    }
  }

  @media screen and (max-width: 767px) {

    //header
    .header {
      .logo {
        width: 100px;
        height: 48px;
        background-size:contain;
      }
      .nav-menu {
        .menu-toggle{
          b,&:after,&:before{
            background-color: rgba(255,255,255,.3);
          }
        }
      }
      .nav{
        float:none;
        position: absolute;
        top:48px;
        left:0;
        right:0;
        padding:10px 0;
        background-color: #103356;
        border-top:1px solid rgba(255,255,255,0.05);
        box-shadow:0 4px 10px rgba(0,0,0,.1);
        li{
          display: block;
          height:50px;
          line-height:50px;
          padding:0;
          margin:0;
          border-top:1px solid rgba(255,255,255,.02);
          a{
            padding:0 20px;
          }
          &.current, &:hover {
            border-bottom: none !important;
            background-color: rgba(255,255,255,.1);
          }
          &:not(:visited):first-child {
            border-top:none;
          }
        }
      }
    }

    .nav-menu {
      float: right;
      .menu-toggle{
        position: absolute;
        right:14px;
        top:15px;
        b,&:after,&:before{
          display: block;
          width:22px;
          height:2px;
          background-color: rgba(255,255,255,.3);
          border-radius: 2px;
        }
        &:after,&:before{
          content:'';
          transition: transform 0.3s;
        }
        &:before{
          transform-origin: 0 4px;
        }
        &:after{
          transform-origin: 12px -3px;
        }
        b{
          transform-origin: 0 0;
          transition: transform 0.3s,opacity 0.3s;
        }
        b,&:after{
          margin-top:6px;
        }
      }
      &.nav-open{
        .menu-toggle{
          &:after{
            transform: rotate(135deg);
          }
          &:before{
            transform: rotate(45deg);
          }

          b{
            transform: rotate(90deg);
            opacity:0;
          }
        }
      }
    }

    .page-header {
      border-bottom: 1px solid #e8ecef;
      .nav-menu {
        .menu-toggle{
          b,&:after,&:before{
            background-color: #484aa2;
          }
        }
      }
      .nav {
        background-color: #fff;
        border-top:1px solid #eee;
        li{
          border-top:1px solid #f7f7f7;
        }
      }
    }
  }
</style>
