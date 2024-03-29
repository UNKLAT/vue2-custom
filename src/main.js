// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { osPagination } from '../learn-lib/src/index'


import './styles/index.css' // global css

import './permission.js' // permission control

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(osPagination)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
