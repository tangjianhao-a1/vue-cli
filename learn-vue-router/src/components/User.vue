<template>
  <div>
    <h2>我是用户</h2>  
    <p>嘿嘿嘿</p>
    <h2>{{userId}}</h2>  
    <h2>{{$route.params.id}}</h2>  
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'User', 
   
   computed: {
    userId() {
      return this.$route.params.id
    }
  },  
  methods: {
    btnClick() {
      console.log(this.$router);
    }
  } 
}
</script>

<style>

</style>