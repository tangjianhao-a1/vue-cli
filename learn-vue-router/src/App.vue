<template>
  <div id="app">
  <router-link to="/home" tag="button">首页</router-link>  
  <router-link to="/about" tag="button">关于</router-link>  
  <router-link :to="'/user/'+userId" tag="button">用户</router-link>    
  <router-link :to="{path: '/profile',query:{name:'why',age:18,height:1.88}}" tag="button">档案</router-link>    
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',  
  data() {
    return {
      userId: 'lisi'
    }
  }
}
</script>

<style>
.active {
  color: red;
}
</style>
