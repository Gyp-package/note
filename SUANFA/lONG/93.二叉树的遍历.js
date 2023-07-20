// 前序， 中序， 后序， 层级遍历， 深度DFS（ 递归）, 广度BFS（ 层级）

// 1.前序遍历 DLR,                    dfs
function preorderTraversal(root) {
    const res = []; //结果数组存储

    function dfs(node) { //前序dfs
        if (!node) return;
        res.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root); //调用DFS
    return res;
}

//2.中序遍历 LDR  3.后序遍历 LRD
function inorderTravelsal(root) {
    const res = [];

    function dfs(node) {

        if (!node) return;
        dfs(node.left);
        res.push(node.val);
        dfs(node.right);
    }
    dfs(root); //调用DFS
    return res;
}

//4.层级遍历                     BFS
function levelOrder(root) {
    if (!root) return; //根为空

    const res = []; //结果数组
    const queue = [root]; //根节点入新队

    while (queue.length) {
        const levelSize = queue.length; //当前队列长度
        const currentQueue = []; // 新数组
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); //首字出队
            currentQueue.push(node.val); //数值入新数组
        }

        //左右子节点依次入队
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    //当前层级数组放最前面（从下往上输出）
    res.unshift(currentQueue);
}