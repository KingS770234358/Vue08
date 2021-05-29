09webpack的使用
· ES6的一些介绍

// ES6导入一个js文件(相当于java中import一个类)
require('webpack-merge')
// 导出该文件(类)的某个方法,暴露给其他文件导入
exports.方法名 = function(){}

// 导入组件
import HelloWorld from './components/HelloWorld'
// 导出组件
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}

//编译检查
'use strict' 
`D:\\NodeJS\\node_modules\\node_modules\\webpack-cli\\package.json`
· npm install的理解 
  之前使用 script标签的src属性直接引入axios.js不符合前端工程的规范
  应当在项目目录里 使用 npm install axios =======> [局部安装]
  因此,npm install 类似在pom.xml中引入依赖

· webpack的使用
1.下载webpack[这里是全局安装 不同于上述的局部安装]
  npm install webpack -g       安装打包工具
  npm install webpack-cli -g   安装webpack客户端
  webpack -v [报错] 找不到webpack-cli的package.json文件
  ### 错误解决
  进入webpack的启动文件webpack.js
  定义全局常量:const ABS_PKG_PATH = `D:/NodeJS/node_modules/node_modules/`;
  修改pkgPath常量即可 const pkgPath = require.resolve(ABS_PKG_PATH+`${installedClis[0].package}/package.json`);
2.使用
配置-创建webpack.config.js配置文件 === 相当于 pom.xml 或是 application.yaml
· entry: 指定webpack用哪个文件作为项目的入口          ----   主启动类
· output: 指定webpack处理生成的文件放置到指定路径      ----  target目录
· module: 模块, 用于处理各种类型的文件                ----   dependencies
· plugin: 插件, 如:热更新、代码重用等                 ----   plugin
· resolve: 设置路径指向                              ----   build resource
· watch: 监听, 用于设置文件改动后自动打包
  在项目目录下运行命令 webpack --watch 则webpack会时刻监听项目文件的改动, 
  发现改动就自动打包项目, 一般打包成bundle.js
