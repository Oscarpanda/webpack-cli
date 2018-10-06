function insertSort (arr,callback) {
    for (let i = 1; i < arr.length; i ++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
           arr[j + 1] = arr[j];
           j = j -1
        }
        arr[j + 1] = key;
        callback(arr);
    }
}
function swap (arr, i ,j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
export default insertSort;