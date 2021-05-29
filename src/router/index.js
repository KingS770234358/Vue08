// 1.从node_modules中导入需要的包
import Vue from 'vue';
import VueRouter from "vue-router";

// a.导入其他文件的路由配置
import {default as router1} from './router1';
import {router2} from './router2';

// 2.显式声明安装使用VueRouter
Vue.use(VueRouter);

// b.合并路由列表
const baseRoutes = [];
const routes = baseRoutes.concat(router1, router2);

// 配置default导出路由 == 当这个文件被import的时候
// 默认有这个对象或者方法
export default new VueRouter({
  mode: 'history',
  routes: routes,
});


