function value(arg) {
  if (typeof arg === 'function') {
    return arguments.callee(arg.call(null))
  }
  return arg
}

module.exports = value
