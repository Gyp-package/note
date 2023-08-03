//深搜遍历，一条路走到黑,
function dfs(node,visited){
    visited[node] = true;
    for(let neighbor of graph[node]){//取图的相邻边
        if(!visited[neighbor]){ //没访问的话递归访问
            dfs(neighbor,visited);
        }
    }
}

