function generateParent(n){
    const result = [];
    backtrack('',left,right,result);
    return result;
}
function backtrack(current,left,right,result){
    if(left === 0 && right === 0){
        result.push(current);
        return;
    }
    if(left > 0){
        backtrack(current+'(',left-1,right,result);
    }
    if(right >left){
        backtrack(current + ')',left,right-1,result);
    }
}