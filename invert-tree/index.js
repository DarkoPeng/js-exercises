/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * invert-tree, 反转二叉树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null || root === undefined) return root

  var left = root.left
  var right = root.right

  root.left = invertTree(right)
  root.right = invertTree(left)

  // 给测试用例打补丁，叶子节点没有设置 this.left = this.right = null
  !root.left && delete root.left
  !root.right && delete root.right

  return root
}

module.exports = invertTree
