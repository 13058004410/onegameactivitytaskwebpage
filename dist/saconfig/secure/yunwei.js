// var appApiUrl = 'http://uatc08web.bawinx.com' // UAT环境 接口网关地址
// var appApiUrl = 'http://www.pt-gateway.com' // 测试环境 接口网关地址
var appApiUrl = 'https://txyq8r.net' // 生产环境 接口网关地址 os9527.com  
// var appApiUrl = 'https://uatc08-mobile.aywbxnll.net' // UAT环境 接口网关地址
var yunweiConfig = {
  apiUrl: appApiUrl, // 接口网关地址
  cdnServer: appApiUrl, // 默认`
  cdnPath: '/cdn/C08M/static', // 静态文件路径
  cdns: [''], // 可选cdn
  cacheTime: 300
}

typeof window === 'object' && (window.yunweiConfig = yunweiConfig)

if (typeof exports === 'object' && typeof module === 'object') {
  module.exports = yunweiConfig
}
