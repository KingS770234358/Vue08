10vue-router
重装nodejs之后 只在配置文件npmrc中配置了prefix;
-g全局安装webpack4.41.2 和 webpack-cli3.3.9的时候 只是按照之前添加了ABS_PATH_PREFIX
====一切又正常了...

进入项目目录之后
npm install --save-dev XXXX
把模块引入项目的node_modules [在js文件中可以使用import的方式导入,然后显式声明使用该包]
相当于把XXXX引入buildpath  
相当于在pom.xml中把XXXX依赖加入dependencies中

· Vue-Router 是 Vuejs 官方的路由管理器, 它和Vuejs的核心深度集成, 让构建单页面应用变得易如反掌
  主要功能:
  1. 嵌套的路由/视图表
  2. 模块化的、基于组件的路由配置
  3. 路由参数、查询、通配符
  4. 基于Vue.js过滤系统的视图过滤效果
  5. 细粒度的导航控制
  6. 带有自动激活的Css Class的链接
  7. HTML5历史模式或hash模式,在IE9中自动降级
  8.自定义的滚动条行为
· 安装
  基于第一个vue-cli测试学习;先查看项目的node_modules中是否存在vue-router
  vue-router是一个插件包, 要使用 npm install 来进行安装
  打开IDEA窗口下方的终端,进入项目目录, 输入如下命令
  npm install vue-router --save-dev
  [如果要在模块化的工程中使用它, 必须要先import导入,
  然后通过Vue.use()明确地安装路由功能]
  import Vue from 'vue'               // from后面是文件(类) Vue是其中定义的对象或者方法
  import VueRouter from 'vue-router'
  Vue.use(VueRouter);                 // 明确地指定安装路由功能
· 操作项目
  1.可先删除项目中不需要的文件,如asset文件夹中vue的log,components文件夹中默认生成的HelloWorld组件
  最后保留必要的 App.vue main.js index.html即可
  2.安装vue-router 
  | npm install vue-router --save-dev | 会到项目的node_modules文件夹下
  安装出错 npm audit fix 即可, [不用管修复之后报出的信息]
  3.在main.js中[导入] import VueRouter from 'vue-router' 
    这里from如何填写要看node_modules中下载的包名 
    然后[显式声明使用] Vue.use(VueRouter)
    ====>这个只是测试,在第六步正式编写路由文件
  扩展: 安装使用axios包
  =============>这就相当于在html页面中通过script标签的src属性引入js包,然后编写script
  4.项目目录下运行npm run dev开启nodejs服务器进行测试
    之后对项目做的改动都会实时更新----[热部署]
  5.写一个自己的组件 内容页mycontent.vue 
    IDEA中右键components文件夹new一个vue组件
    App.vue组件中import引入mycontent.vue 然后components里包含mycontent.vue即可
  6.src中新建router文件夹,配置路由index.js
    这里将项目默认生成的HelloWorld.vue作为食品中的Main.vue
    1)### 这里区别组件.vue文件中的import和
    ### .vue中的import是导入组件
    ### .js中的import可以导入node_module中的模块也可以导入组件
    2)### 默认有这个对象或者方法
    export default new VueRouter
    3)import引入路由[https://www.jianshu.com/p/b7de93d03ed3]
    // a.导入其他文件的路由配置[合并多个路由配置就是用合并数组的思想...]
    import {default as router1} from './router1';
    import {router2} from './router2';[引入默具体导出的时候需要加{}]
    // 2.显式声明安装使用VueRouter
    Vue.use(VueRouter);
    // b.合并路由列表
    const baseRoutes = [];
    const routes = baseRoutes.concat(router1, router2);
    export default new VueRouter({
      mode: 'history',  // 这里去掉url中的#号
      routes: routes,
    });
  7.在项目的路口文件main.js文件中
    // 1.扫描路由配置目录,获得路由配置
    import {default as router} from './router';[这种是引入默认导出的时候的写法]
    2)在Vue中放置路由
    new Vue({
      el: '#app',
      // Vue实例中配置路由 [只能存放一个路由配置]
      router,
      components: { App },
      template: '<App/>'
    })
  8.在App组件中使用配置的路由
      <!-- router-link标签相当于a标签
           to属性相当于href属性 -->
      <router-link to="/main">首页</router-link>
      <router-link to="/main2">首页2</router-link>
      <router-link to="/content">内容</router-link>
      <router-link to="/content2">内容2</router-link>
      <!-- router-view用于展示当前路由返回的组件视图
           缺少这个标签则无法展示组件视图 -->
      <router-view></router-view>
