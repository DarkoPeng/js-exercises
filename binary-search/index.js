/**
 * binary-search，二分查找算法
 * 递归版
 * @param {Array} arr     排序数组
 * @param {Number} target 查找的目标值
 * @param {Number} start  起点
 * @param {Number} end    终点
 * @return {Number}       成功返回目标值的下标，失败返回-1
 */
function binarySearch(arr, target, start, end) {
  var start = start === undefined ? 0 : start,
    end = end === undefined ? arr.length - 1 : end

  if (start > end) return -1

  var middle = Number.parseInt((start + end) / 2)
  if (target == arr[middle]) {
    return middle
  } else if (target > arr[middle]) {
    return binarySearch(arr, target, middle + 1, end)
  } else if (target < arr[middle]) {
    return binarySearch(arr, target, start, middle - 1)
  }
  return -1
}

// 非递归版本
function binarySearchLoop(arr, target) {
  var start = 0,
      end = arr.length - 1

  while (start <= end) {
    var middle = Number.parseInt((start + end) / 2)
    if (target === arr[middle]) {
      return middle
    } else if (target > arr[middle]) {
      start = middle + 1
    } else if (target < arr[middle]) {
      end = middle - 1
    }
  }
  return -1
}

module.exports = binarySearch
