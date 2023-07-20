/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

// inorder中序，postorder后序，构建二叉树，输出按层级输出结点
// 不构成二叉树返回-1
// 后序遍历最后一个是根节点，在中序中查找节点数值，创建新节点,分为左右子树，递归操作

var buildTree = function(inorder, postorder) {
    // 递归结束
    if (!inorder.length) return null;
    // pop弹出数组最后一个
    let rootVal = postorder.pop();
    // 中序中找节点数值
    let midIndex = inorder.indexOf(rootVal);
    // 创建结点
    let node = new TreeNode(inorder[midIndex]);
    // 分为左右子树递归
    node.left = buildTree(inorder.slice(0, midIndex), postorder.slice(0, midIndex));
    node.right = buildTree(inorder.slice(midIndex + 1), postorder.slice(midIndex));
    // 递归返回值
    return node;
};
// @lc code=end