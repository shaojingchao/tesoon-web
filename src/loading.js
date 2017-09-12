/**
 * Created by 邵敬超 on 2017/9/11.
 */

import loading from '@/bower_components/loading/loading-spin.svg'

const MyLoading = {}
MyLoading.install = function (Vue, options) {
  // 显示动画
  Vue.prototype.$showLoading = () => {
    if (document.querySelector('#loading-svg')) {
      return false
    }
    let div = document.createElement('div')
    let loadingImg = new Image()
    loadingImg.src = loading
    div.id = 'loading-svg'
    div.className = 'animated-loading fadeInDown'
    div.append(loadingImg)
    document.body.prepend(div)
  }
  // 隐藏动画
  Vue.prototype.$hideLoading = () => {
    let getDiv = document.querySelector('#loading-svg')
    if (getDiv) {
      getDiv.className = 'animated-loading fadeOut'
      setTimeout(() => {
        getDiv.remove()
      }, 190)
    }
  }
}
export default MyLoading
