function upSort(arr, callback) {
    for (let i = 0; i < arr.length; i++){
        for(let j = 0 ;j < arr.length - i; j++) {
            if (arr[j] > arr[j+1]) {
                swap (arr, j, j+1);
            }
        }
        callback(arr);
    }
    return arr;
}

function swap (arr, i ,j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
export default upSort;