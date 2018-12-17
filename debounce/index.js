module.exports = function(fn, wait) {
  var timer
  return function() {
    var self = this,
        args = arguments

    timer && clearTimeout(timer)
    timer = setTimeout(function() {
      fn.apply(self, args)
    }, wait)
  }
}
