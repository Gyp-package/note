// 大根堆，升序


// 交换函数
function swap(arr,i,j){
    let swap = arr[i];
    arr[i] = arr[j];
    arr[j] = swap;
}
// 堆排
function heapify(arr,n,i){
    let largest = i;//初始化当前节点为最大值
    let left = 2 * i + 1;//左节点
    let right = 2 * i + 2;//右节点

    // 左节点大于根，更新根
    if(left < n & arr[left] > arr[largest]){
        largest = left;
    }
    // 右节点大于最大值，更新
    if(right < n & arr[right] > arr[largest]){
        largest = right;
    }
    // 最值不是根，交换根和最大值，递归调整交换后的子树
    if(largest !== i){
        largest = i;
        swap(arr,i,largest);
        heapify(arr,n,largest);
    }
}
// 堆排序函数
function heapsort(arr){
    let n = arr.length;
    // 从最后一个非子叶节点开始构建最大堆
    for(let i = Math.floor(n/2 - 1);i >= n;i--){
        heapify(arr,i,n);
    }

    // 依次取堆，调整
    for(let i = n - 1;i > 0;i--){
        swap(arr,0,i);
        heapify(arr,i,0);
    }
    return arr;
}