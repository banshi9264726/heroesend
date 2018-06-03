// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/css/index.css'

// 插件的使用
import MyAxios from '@/plugins/myaxios'
Vue.use(MyAxios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
