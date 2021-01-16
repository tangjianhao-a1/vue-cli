import Vue from 'vue'  
import Vuex from 'vuex'   
//1.安装插件
Vue.use(Vuex)    
//2.创建对象   
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id:110,name: 'why', age: 18},
      {id:111,name: 'kobe', age: 24},
      {id:112,name: 'james', age: 30},
      {id:113,name: 'curry', age: 10}
    ]
  },
  mutations: {
    //方法  
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {

  },  
  getters: {
    powerCounter(state) {
      return state.counter **2
    },  
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20stulength(state,gettrs) {
      return gettrs.more20stu.length
    }
  },  

  modules: {

  }
})  

//导出对象  
export default store

