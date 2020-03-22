import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 用按需加载方式配置路由
// 按需引入layout  一级路由
const layout = () => import('@/views/layout')
// 按需引入home  二级路由
const home = () => import('@/views/home')
// 按需引入question  二级路由
const question = () => import('@/views/question')
// 按需引入video  二级路由
const video = () => import('@/views/video')
// 按需引入user  二级路由
const user = () => import('@/views/user')
// 建立其他一级路由
// 小智同学 一级路由
const chat = () => import('@/views/user/chat')
// 登陆模块 一级路由
const login = () => import('@/views/login')
// 编辑资料模块 一级路由
const profile = () => import('@/views/user/profile')
// 搜索中心模块 一级路由
const search = () => import('@/views/search')
// 搜索结果模块 一级路由
const searchresult = () => import('@/views/search/result')
// 文章详情模块 一级路由
const article = () => import('@/views/article')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: layout,
    children: [{
      // path 什么都不写  就默认  是二级路由的默认组件
      path: '',
      component: home
    }, {
      path: '/question',
      component: question
    }, {
      path: '/video',
      component: video
    }, {
      path: '/user',
      component: user
    }]

  },
  {
    path: '/user/chat',
    component: chat
  }, {
    path: '/login',
    component: login
  }, {
    path: '/user/profile',
    component: profile
  }, {
    path: '/search',
    component: search
  }, {
    path: '/search/result',
    component: searchresult
  }, {
    path: '/article',
    component: article
  }
]

const router = new VueRouter({
  routes
})

export default router
