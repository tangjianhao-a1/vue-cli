//导入路由
import VueRouter from 'vue-router'
//导入Vue  
import Vue from 'vue'

import Home from '../components/Home'  

import About from '../components/About'

//1.通过Vue.use(插件)，安装插件    

Vue.use(VueRouter)

const routes = [
{
  path: '/home',
  component: Home
},
{
  path: '/about',
  component: About
}
]


//2.创建vueRouter对象   
const router = new VueRouter({
  //配置路由和组件之间的应用关系  
  routes
})

//3.将router对象传入到vue实例  
export default router
