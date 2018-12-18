/**
 * throttle 节流函数
 * @param {Function} fn
 * @param {Number} wait
 */
function throttle(fn, wait) {
  var timer,
    first = true,
    self,
    args

  return function() {
    self = this
    args = arguments

    if (first) {
      first = false
      return fn.apply(self, args)
    }
    if (timer) return false
    timer = setTimeout(function() {
      clearTimeout(timer)
      timer = null
      return fn.apply(self, args)
    }, wait)
  }
}

module.exports = throttle
