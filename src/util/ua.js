const UA = function () {
  var u = navigator.userAgent
  /** 判断是在Android终端内*/
  const isInAndroid = () => {
    return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
  }
  /** 判断是在iOS终端内*/

  const isInIOS = () => {
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  }

  // const isMobile = () => {
  //   return !!u.match(/AppleWebKit.*Mobile.*/) // 是否为移动终端
  // }

  if (isInAndroid()) {
    return 1 // android机器的话  就是返回1
  } else if (isInIOS()) {
    return 2 // ios 设备返回2
  } else {
    return 0 // 其他设备
  }
}
export{ UA }
