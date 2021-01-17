import Vue from 'vue'  
import Vuex from 'vuex'    
import {INCREMENT} from './mutations-types'
//1.安装插件
Vue.use(Vuex)    
//2.创建对象  
const moduleA = {
  state: {
    name: 'zhangsan'
  },  
  mutations: {
    updateName(state,payload) {
      state.name = payload
    }
  },  
  actions: {
    aUpdateName(context) {  
      console.log(context);
     setTimeout(()=>{
      context.commit('updateName','wangwu')
     },1000)
    }
  },  
  getters: {
    fullname(state) {
      return state.name + '11111'
    },  
    fullname2(state,getters) {
      return getters.fullname + '2222'
    }, 
    fullname3(state,getters,rootstate) {
      return getters.fullname2 + rootstate.counter
    }
  }
}

const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id:110,name: 'why', age: 18},
      {id:111,name: 'kobe', age: 24},
      {id:112,name: 'james', age: 30},
      {id:113,name: 'curry', age: 10}
    ],
    info: {
      name: '张三',  
      age: 10,  
      height: 1.98
    },
  },
  mutations: {
    //方法  
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },  
    incremenCont(state,parlocd) {
      state.counter += parlocd.count
    },  
    addStudent(state,stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      state.info.name = 'tom'
    }
  },
 /*  actions: {
    aUpdateInfo(context,payload) {
      setTimeout(() => {
        context.commit('updateInfo')  
        payload.success()
      },1000)
    }
  },   */ 

  actions: {
    aUpdateInfo(context,payload) {
     return new Promise((resolve,reject)=> {
      setTimeout(() => {
        context.commit('updateInfo')  
        console.log(payload);
      },1000)
      resolve('ok')
     })
    }
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
    },  
    moreAgeStu(state) {
     /*  return function(age) {
        return state.students.filter(s => s.age > age)
      } */
      return age => state.students.filter(item => item.age > age)
    }
  },  

  modules: {
    a:moduleA
  }
})  

//导出对象  
export default store

