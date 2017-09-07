<template>
  <div class="un-select pagination-wrap">
    <ul class="pagination">
      <li :class="{disabled:currentPage === 1}" @click="goToPage(1)"><a title="首页" class="side-btn" href="javascript:"><<</a></li>
      <li :class="{disabled:currentPage === 1}" @click="prevPage()"><a title="上一页" class="side-btn" href="javascript:"><</a></li>
      <li v-for="item in pages"
          :class="{active:currentPage === item}"
          @click="goToPage(item)"><a href="javascript:">{{item}}</a></li>
      <li :class="{disabled:currentPage === totalPage}" @click="nextPage()"><a title="下一页" class="side-btn" href="javascript:">></a></li>
      <li :class="{disabled:currentPage === totalPage}" @click="goToPage(totalPage)"><a title="尾页" class="side-btn" href="javascript:">>></a></li>
    </ul>
  </div>
</template>
<style lang="less">
  .pagination-wrap{
    /*text-align: right;*/
  }
  .pagination {
    position: relative;
    display: inline-block;
  }

  .pagination li {
    display: inline-block;
    text-align: center;
  }

  .pagination li a {
    font-size:12px;
    width:26px;
    height:26px;
    line-height:26px;
    border-radius:2px;
    /*padding: .5rem 1rem;*/
    display: inline-block;
    border: 1px solid #fff;
    background: #fff;
    color: #333;
    &.side-btn{
      /*width:4em;*/
      font-size:1.2em;
      line-height:26px;
      font-family:consolas, sans-serif;
    }
  }

  .pagination li a:hover {
    background-color: #eee;
    border-color:#eee;
  }

  .pagination li.active a {
    background-color: #0E90D2;
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
