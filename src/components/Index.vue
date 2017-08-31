<template>
  <div>
    <Header/>
    <div class="banner">
      <img src="../assets/img/banner1.jpg">
    </div>

    <div class="text-primary">天星动态</div>
    <div>
      <ul>
        <li>
          <div><img src="../assets/img/news-01.jpg"></div>
          <h3>天星教育2016年度工作总结暨员工表彰大会顺利开展</h3>
          <div class="text-muted">
            <span class="fl">2017-05-04</span>
            <span class="fr">天星动态</span>
          </div>
        </li>
      </ul>
    </div>
    <div>{{msg}}</div>
    <Footer/>
  </div>
</template>
<style scoped>

</style>
<script>
  import Header from '@/components/header.vue'
  import Footer from '@/components/footer.vue'
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      Header,
      Footer
    }
  }

</script>
