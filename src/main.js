// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// 1.扫描路由配置目录,获得路由配置
import {default as router} from './router/index';

// 是否开启开发提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // Vue实例中配置路由
  router,
  components: { App },
  template: '<App/>'
})
