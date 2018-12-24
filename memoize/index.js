/**
 * memoize，记忆函数
 * @param {Function} func
 * @return {Function}
 */
function memoize(func) {
  var cache = {}
  return function() {
    var key = arguments.length + Array.prototype.join.call(arguments, ',')
    if (key in cache) {
      return cache[key]
    }
    return (cache[key] = func.apply(this, arguments))
  }
}

// underscore 版本
function memoize_underscore_version(func, resolver) {
  var memoize = function(key) {
    var cache = memoize.cache
    var key = '' + (resolver ? resolver.apply(this, arguments) : key)
    if (!cache[key]) {
      cache[key] = func.apply(this, arguments)
    }
    return cache[key]
  }
  memoize.cache = {}
  return memoize
}

module.exports = memoize
