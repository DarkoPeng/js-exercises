/**
 * 扁平化数组
 * @param {array} arr
 */
function flatten(arr){
  return arr.reduce((prev, curr) => {
    if(Array.isArray(curr)){
      return prev.concat(flatten(curr))
    }else{
      prev.push(curr)
      return prev
    }
  }, [])
}

module.exports = flatten
