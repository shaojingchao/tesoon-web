/**
 * Created by 邵敬超 on 2017/9/12.
 */

const Obj = {}

Obj.install = (Vue, options) => {
  Vue.directive('title', (el, binding) => {
    document.title = binding.value
  })
}
export default Obj
