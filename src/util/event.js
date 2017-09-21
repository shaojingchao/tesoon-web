/**
 * Created by 邵敬超 on 2017/9/21.
 */

export default {
  addEvent (el, type, cb) {
    if (el.addEventListener) {
      el.addEventListener(type, cb, false)
    } else if (el.attachEvent) {
      el.attachEvent('on' + type, cb)
    } else {
      el['on' + type] = cb
    }
  },
  delEvent (el, type, cb) {
    if (el.removeEventListener) {
      el.removeEventListener(type, cb, false)
    } else if (el.detachEvent) {
      el.detachEvent('on' + type, cb)
    } else {
      // DOM 0级事件，兼容老浏览器
      el['on' + type] = null
    }
  },
  stopBubble (e) {
    if (e.stopPropagation) {
      e.stopPropagation()
    } else {
      e.cancelBubble = false
    }
  },
  preventDefault (e) {
    if (e.preventDefault) {
      e.preventDefault()
    } else {
      e.returnValue = false
    }
  },
  getDOM (selector, context) {
    if (typeof selector === 'object') {
      return selector
    }
    const doc = typeof context === 'object' ? context : document
    if (selector.indexOf('#') === 0 && selector.indexOf(' ') === -1) {
      return [doc.getElementById(selector.slice(1))]
    } else if (selector.indexOf('.') === 0 && doc.getElementsByClassName) {
      return doc.getElementsByClassName(selector)
    } else if (doc.querySelectorAll) {
      return doc.querySelectorAll(selector)
    }
  }
}
