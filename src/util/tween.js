/**
 * Created by 邵敬超 on 2017/9/21.
 * 缓动函数
 */

const Tween = {
  Quad: {
    easeIn (t, b, c, d) {
      return c * (t /= d) * t + b
    },
    easeOut (t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b
    },
    easeInOut (t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b
      return -c / 2 * ((--t) * (t - 2) - 1) + b
    }
  },
  Cubic: {
    easeIn (t, b, c, d) {
      return c * (t /= d) * t * t + b
    },
    easeOut (t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOut (t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t + b
      return c / 2 * ((t -= 2) * t * t + 2) + b
    }
  }
}
export default Tween
