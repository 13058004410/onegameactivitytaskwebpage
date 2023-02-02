// 判断当前是否为移动设备
export function getWapDetect () {
  const
    ua = navigator.userAgent.toLocaleLowerCase()
  return ua.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
}
// 链接跳转
export function openUrl (path) {
  const a = document.createElement('a')
  a.setAttribute('href', path)
  a.setAttribute('target', '_blank')
  document.body.appendChild(a)
  a.click()
}