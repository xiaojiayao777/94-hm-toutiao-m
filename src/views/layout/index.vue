<template>
  <div class="container">
    <!-- 导航组件 可采用vant组件的导航 fixed是否固定在头部-->
    <!-- 当页面地址是/user时 应该隐藏导航 否则不隐藏 -->
    <van-nav-bar @click-right="$router.push('/search')" fixed title="黑马头条" right-text="搜索" v-if="$route.path !== '/user'">

    </van-nav-bar>
    <!-- 二级路由容器 -->
    <!-- 判断当前的地址 如果是user就给一个noTop 的Class -->
    <div class="my-wrapper" :class="{noTop:$route.path === '/user'}">
      <router-view></router-view>
    </div>
    <!-- 标签栏组件 -->
    <!-- 加route开启路由模式 -->
    <van-tabbar route>
      <!-- 应该点击导航标签跳转路由 -->
      <!-- 一旦启用路由模式 van-tabbar-item就可以当作router-link使用 -->
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="/question">问答</van-tabbar-item>
      <van-tabbar-item icon="tv-o" to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  height: 100%;
  position: relative;
  // 控制二级路由容器的高宽
  .my-wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 46px;
    padding-bottom: 50px;
    box-sizing: border-box;
    &.noTop{
      padding-top: 0;
    }
  }
}

</style>
