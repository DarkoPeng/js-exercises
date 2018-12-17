module.exports = function(fn){
  var arity = fn.length

  function curried(...args){
    if(args.length < arity){
      return curried.bind(null, ...args)
    }
    return fn.call(null, ...args)
  }
  return curried
}
