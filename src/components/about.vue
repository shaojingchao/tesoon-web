<template>
  <div>
    <MyHeader/>
    <div>this is template dynamic</div>
    <MyFooter/>
  </div>
</template>
<style>

</style>
<script>
  import MyHeader from '@/components/header.vue'
  import MyFooter from '@/components/footer.vue'
  export default {
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      MyHeader,
      MyFooter
    }
  }
</script>
