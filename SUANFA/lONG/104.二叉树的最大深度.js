/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归,自低向上，选左右树最大层次加一
var maxDepth = function deepth(root) {
    function f(node) {
        if (!node) {
            return 0;
        }
        return Math.max(f(node.left), f(node.right)) + 1;
    }
    return f(root);
};

// @lc code=end