// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/base.less'
import '@/bower_components/animate.css/animate.min.css'

import Loading from '@/loading'
import MetaInfo from 'vue-meta-info'
require('./mock')
require('es6-promise').polyfill()
// import Promise from 'es6-promise'
// Promise.polyfill()
import axios from 'axios'

Vue.use(Loading)
Vue.use(MetaInfo)

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
