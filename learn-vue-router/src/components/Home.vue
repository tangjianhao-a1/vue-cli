<template>
  <div>
    <h2>我是首页</h2>  
    <p>我是首页哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
     <router-link to="/home/message">消息</router-link>  
     <router-view></router-view>  
     <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: "Home",   
  path: '/home/news',
  data() {
    return {
      message: '你好啊'
    }
  },  
 
  activated() {
    this.$router.push(this.path)
  },  
  beforeRouteLeave(to,from,next) {
    this.path = this.$route.path; 
    next()
  }
}
</script>

<style>

</style>