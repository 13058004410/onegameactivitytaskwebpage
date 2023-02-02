import axios from 'axios'

export default {
  /**
   * get 请求
   * @param url 接口路由
   * @param params 参数
   * @returns {AxiosPromise<any>}
   */
  get (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params
      }).then((res) => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },

  /**
   * post 请求
   *
   * @param url 接口路由
   * @param data 接口参数
   * @param headers 头部信息
   * @returns {AxiosPromise<any>}
   */
  post (url, data = {}, headers = {}, isToken = true) {
    return new Promise((resolve, reject) => {
      axios.post(url, data, headers).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
}