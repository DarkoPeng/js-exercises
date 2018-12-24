function swap(arr, p1, p2) {
  var temp = arr[p1]
  arr[p1] = arr[p2]
  arr[p2] = temp
}

// 冒泡排序
// 时间复杂度：O(n^2)
// 空间负责度：O(1)
function bubbleSort(arr) {
  var len = arr.length,
    i,
    j,
    stop
  for (i = 0; i < len; i++) {
    // 向前比较
    for (j = 0, stop = len - 1 - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

// 选择排序
// 时间复杂度：O(n^2)
// 空间负责度：O(1)
function selectionSort(arr) {
  var len = arr.length,
    i,
    j,
    min

  for (i = 0; i < len; i++) {
    // 当前值为最小值
    min = i

    for (j = i; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    // 当前值不是最小，swap
    if (min != i) {
      swap(arr, i, min)
    }
  }
  return arr
}

// 插入排序
// 时间复杂度：O(n^2)
// 空间负责度：O(1)
function insertionSort(arr) {
  var len = arr.length,
    i,
    j,
    value

  for (i = 0; i < len; i++) {
    // 存储当前位置的值
    value = arr[i]

    // 从已排序数组的末尾往前面比较
    // 当已排序部分的当前元素大于value
    // 就将当前元素向后移一位，再将前一位与value比较
    for (j = i - 1; j > -1 && arr[j] > value; j--) {
      arr[j + 1] = arr[j]
    }

    arr[j + 1] = value
  }
  return arr
}

// 希尔排序
function shellSort(arr) {}

// 归并排序
function mergeSort(arr) {
  // 归并操作，将两个排序数组合并为一个排序数组
  var merge = function(left, right) {
    var final = []
    while(left.length && right.length){
      final.push(left[0] < right[0] ? left.shift() : right.shift())
    }
    return final.concat(left.concat(right))
  }


}

// 快速排序
function quickSort() {}

module.exports = insertionSort
