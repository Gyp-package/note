/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 完美二叉树，next结点都指向右侧结点
// 层级遍历，每一层级最后一个结点next指向null,,, BFS
var connect = function(root) {
    if (!root) return null;

    const queue = [root]; //跟结果入队

    while (queue.length) {
        const size = queue.length; //当前层级长度

        for (let i = 0; i < size; i++) {
            const cur = queue.shift(); //根出队

            // 每一层级最后一个结点next指向null
            if (i < size - 1) {
                cur.next = queue[0];
            }

            if (cur.left) {
                queue.push(cur.left);
            }
            if (cur.right) {
                queue.push(cur.right);
            }
        }
    }
    return root;

};
// @lc code=end