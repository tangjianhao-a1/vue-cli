<template>
  <div id="app">
    <h2>----------------------App内容--------------------------------</h2>
   <h2>{{message}}</h2>   
   <h2>{{$store.state.counter}}</h2>
   <button @click="addition">+</button>  
   <button @click="subtraction">-</button>  

   <h2>----------------------App内容：getter相关信息-----------------------------------------</h2>  
   <h2>{{$store.getters.powerCounter}}</h2>  
   <h2>{{$store.getters.more20stu}}</h2>  
   <h2>{{$store.getters.more20stulength}}</h2>  
   <h2>{{$store.getters.moreAgeStu(25)}}</h2>

   <h2>------------------------ Hello vue内容-----------------------------------------</h2>
   <hello-vuex></hello-vuex>
  </div>
</template>

<script>  
import HelloVuex from './components/HelloVuex'
export default {
  name: 'App',
  data() {
    return {
      message: '你好',
      counter: 0
    }
  },
 /*  computed: {
    more20stu() {
      return this.$store.state.students.filter(item => item.age >= 20)
    }
  }, */
  methods: {
    addition() {
      this.$store.commit('increment')
    },
    subtraction() {
      this.$store.commit('decrement')
    }
  },
  components:{
    HelloVuex,
  }
}
</script>

<style>

</style>
