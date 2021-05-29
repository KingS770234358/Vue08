<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
<!--    <HelloWorld/>-->
    <h1>第一个Vue-Cli项目</h1>
    <!-- router-link标签相当于a标签
         to属性相当于href属性 -->
    <router-link to="/main">首页</router-link>
    <router-link to="/main2">首页2</router-link>
    <router-link to="/content">内容</router-link>
    <router-link to="/content2">内容2</router-link>
    <!-- router-view用于展示当前路由返回的组件视图
         缺少这个标签则无法展示组件视图 -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
// 1.引入自己写的mycontent组件
import mycontent from './components/mycontent'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
