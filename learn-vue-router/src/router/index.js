//导入路由
import vueRouter from 'vue-router'   
//导入Vue  
import Vue from 'vue' 

//1.通过Vue.use(插件)，安装插件    

Vue.use(vueRouter)

const routes = []

//2.创建vueRouter对象   
const router = new vueRouter({
  //配置路由和组件之间的应用关系  
  routes
})

//3.将router对象传入到vue实例  
export default router
