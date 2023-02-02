const isPro = process.env.NODE_ENV == 'production'
const webpack = require("webpack")
const Analyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
  assetsDir: 'cdn/C08M/static',
  productionSourceMap: !isPro,
  transpileDependencies: [], //未做ie兼容的第三方包, 需要加入数组
  lintOnSave: false, //是否执行eslint检查

  //修改webpack的默认配置
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].minify = false
      args[0].template = './public/index.ejs',
      args[0].inject = !isPro,
      args[0].templateParameters = function(c, {js, css}) {
        return {
          files: JSON.stringify({js, css}),
          isPro: isPro
        }
      }
      return args
    })

    //把cdn选址图片复制到cdn目录去
    config.plugin('copy').tap(args => {
      args[0].push({from: __dirname+'/public/cdn_test.jpg', to: __dirname+'/dist/cdn/C08M/static'})
      return args
    })
  }, 

  //自定义webpack配置
  configureWebpack: config => {
    var plugins = [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/) //减少moment库打包体积
    ]
    // if (isPro) { plugins.push(new Analyzer()) } //打包结果分析
    return { plugins }
  },
}