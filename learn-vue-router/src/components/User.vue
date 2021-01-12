<template>
  <div>
    <h2>我是用户</h2>  
    <p>嘿嘿嘿</p>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
  name: 'User',  
  computed: {
    userId() {
      return this.$route.params.abc
    }
  }
}
</script>

<style>

</style>