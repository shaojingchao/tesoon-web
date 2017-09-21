/**
 * Created by 邵敬超 on 2017/9/21.
 * requestAnimationFrame and cancelAnimationFrame shim
 */

let lastTime = 0
const vendors = ['webkit', 'moz']
for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
  window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
  window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // Webkit中此取消方法的名字变了
    window[vendors[x] + 'CancelRequestAnimationFrame']
}

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (callback, element) => {
    let currTime = new Date().getTime()
    let timeToCall = Math.max(0, 16.7 - (currTime - lastTime))
    const id = window.setTimeout(() => {
      callback(currTime + timeToCall)
    }, timeToCall)
    lastTime = currTime + timeToCall
    return id
  }
}

if (!window.cancelAnimationFrame) {
  window.cancelAnimationFrame = function (id) {
    clearTimeout(id)
  }
}

export default {
  requestAnimationFrame: window.requestAnimationFrame,
  cancelAnimationFrame: window.cancelAnimationFrame
}
