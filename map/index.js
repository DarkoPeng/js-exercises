/**
 * Array.prototype.map polyfill
 * @param {Array} arr
 * @param {Function} cb
 * @param {any} ctx
 * @return {Array}
 */
function map(arr, cb, ctx) {
  var ret = []
  for (var i = 0, len = arr.length; i < len; i++) {
    ret.push(cb.call(ctx, arr[i], i, arr))
  }
  return ret
}

module.exports = map
