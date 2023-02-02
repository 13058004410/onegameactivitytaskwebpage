import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import md5 from 'js-md5'
import '@/assets/css/vivify.min.css'
import toastMessage from './component/Toast/index' // message 提示消息插件
import loading from './component/Loading/index'

// vant UI
import './js/vant'

import api from './http/api'
import http from './http/http'
import './http/axios'
import VueClipboard from 'vue-clipboard2'
import encrypt from './util/jsencrypt'
// 判断客户端
import { UA } from './util/ua'

Vue.prototype.$UA = UA
// 赖加载
import vueLazyLoad from 'vue-lazyload'
const errorImg = require('@/assets/img/error/bg-nodata.png')
const loadingImg = require('@/assets/img/loading/loading_4.png')
Vue.use(vueLazyLoad, {
  preLoad: 1.3,
  error: errorImg,
  loading: loadingImg,
  attempt: 1
})
Vue.use(encrypt)
Vue.use(VueClipboard)
Vue.use(toastMessage)
Vue.use(loading)




// 对后端接口 进行全局注册
Vue.prototype.$api = api
// 对请求方式 进行全局注册
Vue.prototype.$http = http

// 静态资源cdn路径配置
if (process.env.NODE_ENV == 'production') {
  __webpack_public_path__ = window.yunweiConfig.cdnServer + "/"
}

const vm = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
