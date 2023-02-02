// var appApiUrl = 'http://www.pt-gateway.com' // 测试环境 接口网关地址
//  var appApiUrl = 'https://os666168.com' // 生产环境 接口网关地址
let appApiUrl = 'http://uatc08web-w.bawinx.com' // UAT环境 接口网关地址
let myConfig = {
  apiUrl: appApiUrl, // 接口网关地址
  // wmsPath: appWmsPath, // wms环境路径
  uatApiUrl: "https://uatc08-mobile.aywbxnll.net",
  // uatApiUrl2: appApiUrl,
  wmsServer: '', // 默认wmsServer
  cdnServer: appApiUrl, // 默认cdn
  cdnPath: '/cdn/C08M/static', // 静态文件路径
  cdns: [appApiUrl], // 可选cdn
  cacheTime: 300,
  salt: '59d8fa393ac5acbd7cba527ec0e1f605', // 产品网关加密
  platform: '3', // 平台客户端类型
  v: '1.0.0', // 平台版本
  productId: 'a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi', // 产品id
  appId: '5614IRCtfm1a7BJsC5VTH5yUw8efnhwn',
  srcAppId: '5614IRCtfm1a7BJsC5VTH5yUw8efnhwn',
  deviceId: '11231231',
  baseAPI: '/_glaxy_e1s2e8_', // 产品网关api
  timeout: 60000,
  webkey: '', // 暂时无用
  publickey: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDSu2AZPdT2Fqpqxctx3EbnRuuYdBxFZDYG7MASIgw/DFl3P9FAp7S9WaQjdM1NmgBDgvfUWx1xj72LNz4EP4Euh9EESKceNCeoE4M8ZP4ENUQX0nDMbpmIG3/JCI8B5Iv2FKj2q0gGbE0WsLdrYDzFXTYbZKRJSbMMjHT3HtKD/wIDAQAB', //加密传各产品的加密公钥
}

export default {
  host: process.env.NODE_ENV === "production" ? window.yunweiConfig.apiUrl || myConfig.apiUrl : myConfig.uatApiUrl, // 请求链接
  baseAPI: myConfig.baseAPI, // 端口api
  productId: myConfig.productId,
  appId: myConfig.appId,
  v: myConfig.v,
  srcAppId: myConfig.srcAppId,
  deviceId: myConfig.deviceId,
  timeout: myConfig.timeout,
  webkey: myConfig.webkey,
  publickey: myConfig.publickey,
  salt: myConfig.salt,
  platform: myConfig.platform,
}