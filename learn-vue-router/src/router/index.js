//导入路由
import VueRouter from 'vue-router'
//导入Vue  
import Vue from 'vue'

//import Home from '../components/Home'

//import About from '../components/About'

//import User from '../components/User'

//1.通过Vue.use(插件)，安装插件    
const Home = () => import('../components/Home')   
const About = () => import('../components/About')    
const User = () => import('../components/User')  
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')  
const profile = () => import('../components/Profile')
Vue.use(VueRouter)

const routes = [
  { //redirect重定向
    path: '/',  
    redirect: '/home'
  }, 

  {
    path: '/home',
    component: Home, 
    meta: {
      title: '首页'
    }, 
    children: [
      {
        path: '',  
        redirect: 'news'
      },
      {
        path: 'news',  
        component: HomeNews
      },
      {
        path: 'message',  
        component: HomeMessage
      }
    ]
  },

  {
    path: '/about',
    component: About,  
    meta: {
      title: '关于'
    }
  },

  {
    path: '/user/:id',  
    component: User,  
    meta: {
      title: '用户'
    }
  },

  {
    path: '/profile',  
    component: profile,
    meta: {
      title: '档案'
    }
  }
]


//2.创建vueRouter对象   
const router = new VueRouter({
  //配置路由和组件之间的应用关系  
  routes,  
  mode: 'history',  
  linkActiveClass: 'active'
})

router.beforeEach((to,from,next) => {
  //从from跳转到to
 document.title = to.matched[0].meta.title
  next()
})

//3.将router对象传入到vue实例  
export default router
