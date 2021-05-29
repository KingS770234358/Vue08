// 从src中导入跳转需要的组件
import mycontent from "../components/mycontent";
import HelloWorld from "../components/HelloWorld";
export var router2 = [
    { // 路由配置1
      // 路由路径  ===  相当于RequestMapping等路由映射
      path: '/content2',
      // 路由的名字 这个不常用 就是给路由起一个名字
      name: 'content2',
      // 这个路由要跳转至的组件
      component: mycontent
    },
    { // 路由配置2
      // 路由路径  ===  相当于RequestMapping等路由映射
      path: '/main2',
      // 路由的名字 这个不常用 就是给路由起一个名字
      name: 'main2',
      // 这个路由要跳转至的组件
      component: HelloWorld
    },
]

