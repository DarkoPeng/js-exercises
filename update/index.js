/**
 * 参考资料：
 * https://github.com/camsong/blog/issues/3
 * https://github.com/gaohs/react-addons-update
 */

let hasOwnProperty = Object.prototype.hasOwnProperty

function shallowCopy(value) {
  if (Array.isArray(value)) {
    return value.concat()
  } else if (value && typeof value === 'object') {
    return Object.assign(new value.constructor(), value)
  } else {
    return value
  }
}
const COMMAND_SET = '$set'
const COMMAND_PUSH = '$push'
const COMMAND_UNSHIFT = '$unshift'
const COMMAND_SPLICE = '$splice'
const COMMAND_APPLY = '$apply'
const COMMAND_MERGE = '$merge'
let ALL_COMMANDS_LIST = [
  COMMAND_PUSH,
  COMMAND_UNSHIFT,
  COMMAND_SPLICE,
  COMMAND_SET,
  COMMAND_MERGE,
  COMMAND_APPLY
]

let ALL_COMMANDS_SET = {}
ALL_COMMANDS_LIST.forEach(command => {
  ALL_COMMANDS_SET[command] = true
})

/**
 * immutable update
 * @param {any} value   要修改的值
 * @param {Object} spec 规则
 */
function update(value, spec) {
  let nextValue = shallowCopy(value)

  if (hasOwnProperty.call(spec, COMMAND_SET)) {
    return spec[COMMAND_SET]
  }

  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
    Array.prototype.push.apply(nextValue, spec[COMMAND_PUSH])
  }

  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
    nextValue = spec[COMMAND_UNSHIFT].concat(nextValue)
  }

  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
    spec[COMMAND_SPLICE].forEach(args => {
      nextValue.splice.apply(nextValue, args)
    })
  }

  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
    Object.assign(nextValue, spec[COMMAND_MERGE])
  }

  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
    nextValue = spec[COMMAND_APPLY](nextValue)
  }

  // support deep update
  // hasOwnPerperty safe check
  for (let k in spec) {
    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
      nextValue[k] = update(nextValue[k], spec[k])
    }
  }

  return nextValue
}

module.exports = update
