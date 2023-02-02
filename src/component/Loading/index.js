import Loading from './index.vue'
// 来保持实例，单例模式
let instance
let el

Loading.install = function(Vue, options = {}) {
  const defaultOptions = {
    text: '',
    textStyle: {
      fontSize: '14px',
      color: '#fff',
    },
    ringStyle: {
      width: '100px',
      height: '100px',
      color: '#407af3',
    },
    ...options,
  }
  Vue.prototype.$loading = {
    show(options = {}) {
      if (!instance) {
        let LoadingInstance = Vue.extend(Loading)
        el = document.createElement('div')
        document.body.appendChild(el)
        instance = new LoadingInstance({
          propsData: { defaultOptions, ...options },
        }).$mount(el)
      } else {
        return instance
      }
    },
    hide() {
      if (instance) {
        document.body.removeChild(document.getElementById('loading-wrapper'))
        instance = undefined
      }
    },
  }
}

export default Loading
