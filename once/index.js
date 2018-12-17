function once(fn) {
  var fired, ret
  return function() {
    var self = this
    if (!fired) {
      fired = true
      ret = fn.apply(self, arguments)
    }
    return ret
  }
}

module.exports = once
