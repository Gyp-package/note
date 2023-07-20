/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// BFS 序列化，二叉树序列华为数字

// 将二叉树 root 序列化成字符串。首先判断根节点是否存在；
// 然后创建一个空数组 result 作为存储结果；
// 再创建一个队列 stack ，将根节点入队。之后进入循环，遍历整个二叉树，直到队列 stack 为空。
// 在循环中每次取出队首元素 node，如果 node 存在，就将 node 的值加入结果数组 result 中，
// 然后将 node 的左右子节点入队 stack；如果 node 不存在，就加入字符串 'null'。
// 最后返回数组用逗号分隔后的字符串。
var serialize = function(root) {
    if (!root) return;
    const result = [];
    const stack = [root];

    while (stack.length) {
        // 每次循环取出首元素
        const node = stack.shift();
        if (node) {
            // node存在，值加入result中
            result.push(node.val);
            // 子节点入队stack
            stack.push(node.left);
            stack.push(node.right);
        } else {
            // 否则，result值为null
            result.push('null');
        }
        return result.join(',');
    }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// 将字符串反序列化为二叉树。
// 首先判断字符串是否为空；
// 然后使用逗号将字符串 data 分割成数组 list；
// 接着将 list 的第一个元素作为根节点创建一棵二叉树，并将其放入队列 queue。
// 然后进入循环，当游标 cursor 小于 list 的长度时执行循环体。
// 在循环体中，每次从队列 queue 中取出一个节点 node，并取出其左右子节点的值 leftVal 和 rightVal。
// 如果 leftVal 不是字符串 'null'，就创建一个值为 leftVal 的二叉树节点 leftNode，
// 并将其与 node 的左儿子相连，并将 leftNode 入队。
// 如果 rightVal 不是字符串 'null'，就创建一个值为 rightVal 的二叉树节点 rightNode，
// 并将其与 node 的右儿子相连，并将 rightNode 入队。每次将游标 cursor 值加2。
// 最后返回二叉树的根节点 root。


var deserialize = function(data) {
    if (!data) return;
    const list = data.split(',');
    const root = new TreeNode(list[0]);
    const queue = [root];
    const cursor = 1;
    while (cursor < list.length) {
        const node = stack.shift();
        const leftVal = list[cursor];
        const rightVal = list[cursor + 1];

        if (leftVal !== 'null') {
            const leftNode = new TreeNode(leftVal);
            node.left = leftNode;
            queue.push(leftNode);
        }
        if (rightVal !== 'null') {
            const rightNode = new TreeNode(rightVal);
            node.right = rightNode;
            queue.push(rightNode);
        }
        curcor += 2;
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end