<template>
  <div id="app">
 <!--  <router-link to="/home" tag="button" replace="">首页</router-link>  
  <router-link to="/about" tag="button" replace="">关于</router-link>  
  <router-view></router-view> -->  
  <button @click="homeClick">首页</button>  
  <button @click="aboutClick">关于</button>  
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',  
  methods: {
    homeClick() {
      //通过代码的方式修改路由vue-router  
      this.$router.push('/home')
    },  
    aboutClick() {
      this.$router.push('/about')
    }
  }
}
</script>

<style>

.active {
  color: red;
}
</style>
