import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './assets/js/router.js'

import Mint from '../node_modules/mint-ui'
Vue.use(Mint);
import '../node_modules/mint-ui/lib/style.css'

Vue.use(VueRouter)

import './assets/css/base.css'

import axios from 'axios'
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
