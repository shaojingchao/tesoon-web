<template>
  <div class="lianxi-wrap">
    <h1 class="title fw4 tc">联系我们</h1>
    <ul class="address-list">
      <li class="list-item clearfix" v-for="(item,index) in addressList" key="item.map">
        <img :class="{fr:index%2===1,fl:index%2===0}" :src="item.map">
        <div class="text" :class="{fl:index%2===1,fr:index%2===0}">
          <div class="pb10">
            <h3 class="fw4 f28">{{item.name}}</h3>
            <p class="f16 mt20">{{item.address}}<br>{{item.tell}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        addressList: [
          {
            name: '河南天星教育传媒股份有限公司（数字出版/综合出版）',
            address: '地址：郑州市高新区翠竹街1号企业总部基地51-52栋',
            tell: '联系电话：0371-68698013',
            map: require('../assets/img/page/map/map_txjycm.png')
          },
          {
            name: '河南华腾书业有限公司',
            address: '地址：郑州市中原区伏牛南路209号金帝大厦18层',
            tell: '联系电话：0371-68698013',
            map: require('../assets/img/page/map/map_huateng.png')
          },
          {
            name: '河南天星教育传媒股份有限公司（教育出版）',
            address: '地址：郑州市中原区伏牛路209号金帝大厦17层',
            tell: '联系电话：0371-68698013',
            map: require('../assets/img/page/map/map_txjycmcb.png')
          },
          {
            name: '河南华汇书业有限公司',
            address: '地址：郑州市二七区兴华南街158号-174号',
            tell: '联系电话：0371-68203861',
            map: require('../assets/img/page/map/map_huahui.png')
          },
          {
            name: '郑州环宇书社',
            address: '地址：郑州市二七区兴华南街158号-174号 ',
            tell: '联系电话：0371-68203828',
            map: require('../assets/img/page/map/map_zzhyss.png')
          }
        ]
      }
    },
    metaInfo () {
      return {
        title: '天星教育 - 联系我们'
      }
    }
  }
</script>
<style lang="less">
  @import '../assets/css/_mixins-wln/_wln-variables.less';
  .lianxi-wrap{
    padding-bottom: 80px;
    .title{
      font-size:42px;
      padding:60px 0;
    }
    .address-list{
      .list-item{
        border-top:1px solid #dddddd;
        padding:40px 0;
      }
      .text{
        height:320px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width:500px;
      }
    }
  }
  @media screen and (max-width:767px) {
    .lianxi-wrap{
      padding-bottom: 40px;
      .title{
        font-size:24px;
        font-weight:700;
        padding:30px 0;
      }
      .address-list{
        .list-item{
          border-top:none;
          border-bottom:1px solid #eee;
          padding:20px 0 20px 10px;
          img{
            display: none;
          }
          &:before{
            content:'';
            display: block;
            float: left;
            height:16px;
            width:3px;
            margin-left: -10px;
            margin-top: 3px;
            background-color: @primary;
          }
        }
        .text{
          display: block;
          float: none;
          height:auto;
          width:auto;
          h3{
            font-size:16px;
            font-weight:700;
          }
          p{
            font-size:14px;
            margin-top:10px;
          }
        }
      }
    }
  }
</style>
