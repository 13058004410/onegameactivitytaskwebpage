function init() {
  window.canuseWepb = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0
  document.write('<script type="text/javascript" src="/saconfig/secure/yunwei.js?' + Math.random() + '"></' + 'script>');
}

/**
 * cdn选址方法
 * @param {callBack} 选址回调函数
 */
function cdnPing(callBack) {
  //如果localStorage里面已经存了, 并且在n秒以内
  var fastUrl = localStorage.getItem('cdn')      
  if (fastUrl) {
    var cdn = JSON.parse(fastUrl)
    if(Date.now() - cdn.time < 1000*window.yunweiConfig.cacheTime) {
      fastUrl = cdn.url
      window.yunweiConfig.cdnServer = fastUrl
      callBack()
      return
    } 
  } 
  
  //超过五分钟, 或者没存过, 测速
  localStorage.removeItem('cdn')
  var reqs = []
  var fails = 0
  console.log(window.yunweiConfig)
  var cdns = window.yunweiConfig.cdns

  //请求失败处理
  var failCallBack = function() {
    fails += 1
    if (fails == cdns.length) {
      window.yunweiConfig.cdnServer = location.href.split("//")[0] + "//" + location.host
      callBack()
    }
  }

  //开始选址
  for (var i = 0; i<cdns.length; i++) {
    var xhr = new XMLHttpRequest()
    xhr.url = cdns[i]
    reqs.push(xhr)
    xhr.open('GET', cdns[i]+window.yunweiConfig.cdnPath+'/cdn_test.jpg', true)

    //如果每个请求成功, 则测速结束了, 停止未完成的请求, 并把最快的cdn存到localStorage里
    xhr.onload = function (e) {
      if (e.target.status != 200) {
        failCallBack()
      } else {
        var fastUrl = e.target.url.split(window.yunweiConfig.cdnPath)[0]
        var cdn = {
          url: fastUrl,
          time: Date.now()
        }
        //选址成功, 存入localStorage
        localStorage.setItem('cdn', JSON.stringify(cdn))
        window.yunweiConfig.cdnServer = fastUrl
  
        for(var i=0; i<reqs.length; i++) {
          if (reqs[i].url != fastUrl) reqs[i].abort()
        }
        callBack()
      }
    }

    //如果请求失败
    xhr.onerror = failCallBack
    //如果请求超时
    xhr.ontimeout = failCallBack
    
    xhr.send()
  }
}

/**
 * 
 * @param {files}  要创建的js和css的文件资源
 */
function createTags(files) {
  console.log(window.yunweiConfig)
  createdCss(files.css, window.yunweiConfig.cdnServer)
  createdJs(files.js, window.yunweiConfig.cdnServer, false)
  // createdJs(['https://3s.sreanalyze.com/static/js/3s/3s_A02_frontend_web.js'], '', false) //3s检测, 必须异步引入
}

/**
 * 
 * @param {srcs} 要创建的css标签的文件资源对象 
 * @param {host} 标签的cdn路径 
 */
function createdCss(srcs, host) {
  console.log(host);
  for (var i = 0; i < srcs.length; i++) {
    var styleTag = document.createElement("link");
    styleTag.href = host + srcs[i];
    styleTag.rel = "stylesheet";
    styleTag.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(styleTag);
  }
}

/**
 * 
 * @param {srcs} 要创建的js标签的文件资源对象 
 * @param {host} 标签的cdn路径 
 */
function createdJs(srcs, host, async) {
  console.log(srcs)
  for (var i = 0; i < srcs.length; i++) {
    var jsTag = document.createElement("script");
    jsTag.src = host + srcs[i];
    if (async) jsTag.async = 'async';
    document.body.appendChild(jsTag);
  }
}