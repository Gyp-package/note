/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 递归调用停止条件
// 前序首是根，中序找下标，创建树节点，分为左右子树递归，返回结点
var buildTree = function(preorder, inorder) {
    if (!inorder.length || !preorder.length) return null;
    // 前序第一个是根节点
    // let rootVal = preorder.shift();
    let rootVal = preorder[0];
    let midIndex = inorder.indexOf(rootVal);
    let node = new TreeNode(inorder[midIndex]);
    //  左子树范围： 先序下标1~mid + 1, 中序 下标 0, mid
    node.left = buildTree(preorder.slice(1, midIndex + 1), inorder.slice(0, midIndex));
    node.right = buildTree(preorder.slice(midIndex + 1), inorder.slice(midIndex + 1))
    return node;

};
// @lc code=end