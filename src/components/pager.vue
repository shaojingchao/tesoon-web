<template>
  <div class="un-select pagination-wrap pt30 pb30">
    <ul class="pagination">
      <li :class="{disabled:currentPage === 1}" @click="prevPage()"><a class="side-btn" href="javascript:">上一页</a></li>
      <li :class="{disabled:currentPage === 1}" @click="goToPage(1)"><a href="javascript:">首页</a></li>
      <li v-for="item in pages"
          :class="{active:currentPage === item}"
          @click="goToPage(item)"><a href="javascript:">{{item}}</a></li>
      <li :class="{disabled:currentPage === totalPage}" @click="goToPage(totalPage)"><a href="javascript:">尾页</a></li>
      <li :class="{disabled:currentPage === totalPage}" @click="nextPage()"><a class="side-btn" href="javascript:">下一页</a></li>
    </ul>
  </div>
</template>
<style lang="less">
  .pagination-wrap{
    text-align: center;
  }
  .pagination {
    position: relative;
    display: inline-block;
  }

  .pagination li {
    display: inline-block;
    margin: 0 5px;
  }

  .pagination li a {
    width:3em;
    height:3em;
    line-height:3em;
    /*padding: .5rem 1rem;*/
    display: inline-block;
    border: 1px solid #ddd;
    background: #fff;
    color: #0E90D2;
    &.side-btn{
      width:6em;
    }
  }

  .pagination li a:hover {
    background: #eee;
  }

  .pagination li.active a {
    background: #0E90D2;
    border-color:#0E90D2;
    color: #fff;
  }


</style>
<script>
  export default {
    data () {
      return {
        currentPage: 1,
        showItem: 5,
        totalPage: 10
      }
    },
    computed: {
      pages () {
        let pag = []
        if (this.currentPage < this.showItem) {
          // 判断应该显示几项页码
          let pageLen = Math.min(this.showItem, this.totalPage)
          while (pageLen > 0) {
            pag.unshift(pageLen)
            pageLen--
          }
        } else {
          let len = this.showItem
          let middle = Math.floor(this.showItem / 2)
          let itemStart = this.currentPage - middle

          if (middle + this.currentPage >= this.totalPage) {
            itemStart = this.totalPage - this.showItem + 1
          }
          while (len--) {
            pag.push(itemStart++)
          }
        }
        return pag
      }
    },
    methods: {
      goToPage (index) {
        if (index === this.currentPage) return
        this.currentPage = index

        // 这里可以发送ajax请求
        this.$emit('goToPage', this.currentPage)
      },
      nextPage () {
        let index = this.currentPage + 1
        this.goToPage(index)
      },
      prevPage () {
        let index = this.currentPage - 1
        this.goToPage(index)
      }
    }
  }
</script>
