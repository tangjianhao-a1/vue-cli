<template>
  <div id="app">
     <h2>------------------action内容--------------------</h2>  
    <h2>{{$store.state.info}}</h2>  
    <button @click="updateInfo">修改信息</button>

    <h2>----------------------App内容--------------------------------</h2>
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>
      ----------------------App内容：getter相关信息-----------------------------------------
    </h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.more20stu }}</h2>
    <h2>{{ $store.getters.more20stulength }}</h2>
    <h2>{{ $store.getters.moreAgeStu(25) }}</h2>
   
    <h2>
      ------------------------ Hello
      vue内容-----------------------------------------
    </h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex"  
import {INCREMENT} from './store/mutations-types'
export default {
  name: "App",
  data() {
    return {
      message: "你好",
      counter: 0,
    };
  },
  /*  computed: {
    more20stu() {
      return this.$store.state.students.filter(item => item.age >= 20)
    }
  }, */
  methods: {
    addition() {
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit("decrement");
    },

    addCount(count) {
      //payload：负载
      //1.普通的提交封装
      //this.$store.commit("incremenCont", count);
      //2.特殊的提交封装
      this.$store.commit({
        type: "incremenCont",
        count
      });
    },
    addStudent() {
      const stu = { id: 114, name: "tom", age: 35 };
      this.$store.commit("addStudent", stu);
    },
    updateInfo() {
      //this.$store.commit("updateInfo")
    /*   this.$store.dispatch('aUpdateInfo',{
        payload: '我是携带的信息',  
        success: () => {
          console.log('里面已经完成了');
        }
      }) */
      this.$store.dispatch('aUpdateInfo','我是信息')
      .then(res => {
        console.log('里面完成了提交')  
        console.log(res);
      })
    }
  },
  components: {
    HelloVuex,
  },
};
</script>

<style>
</style>
