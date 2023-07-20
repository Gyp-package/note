/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 根空或者首根返回根，在左右子树中找最近祖先,递归
// var lowestCommonAncestor = function(root, p, q) {
//     if (!root || root == p || root == q) return root;
//     const left = lowestCommonAncestor(root.left, p, q);
//     const right = lowestCommonAncestor(root.right, p, q);
//     if (left && right) { //均非空
//         return root;}
//     else {
//        return left || right;
//           }
// };


// 迭代，map迭代器，
var lowestCommonAncestor = function(root, p, q) {
        if (!root || root == p || root == q) {
            return root;
        }
        // map为了保存每个结点的父节点，并将根节点加入stack中，并将父节点值设置为null
        const parent = new Map();
        const stack = [root];
        parent.set(root, null);

        while (!parent.has(p) || !parent.has(q)) {
            // 存在p和q时，说明找到父节点
            const node = stack.pop();
            // 左节点非空，左节点放入parent.map中，该节点是父节点放入stack中，
            if (node.left) {
                parent.set(node.left, node);
                stack.push(node.left);
            }
            if (node.right) {
                parent.set(node.right, node);
                stack.push(node.right);
            }
        }
        // parent.map不断向上找到p的祖先结点并保存在ancestors的set中
        const ancestors = new Set();
        // 找到p的所有祖先结点
        while (p) {
            ancestors.add(p);
            p = parent.get(p);
        }
        // 从 q 开始往上找，第一个在 p 的祖先集合中的节点就是最近公共祖先
        while (!ancestors.has(q)) {
            q = parent.get(q);
        }
        return q;
    }
    // @lc code=end