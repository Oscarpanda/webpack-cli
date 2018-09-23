
function swap (arr, i ,j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
function getposition(arr,f,e) {
    let x = arr[e];
    let i = f - 1;
    for (let j = f;j<e;j++) {
        if (arr[j] < x) {
            i += 1;
            swap(arr, i, j);
        }
    }
    swap(arr, i+1, e);
    return i+1;
}
function quickFun_right(arr,f,e, callback) {
    if (e <= f) return;
    // if (f < e) {
    let q = getposition(arr, f, e);
    quickFun_right(arr, f, q-1,callback);
    quickFun_right(arr, q+1, e,callback);
    callback(arr);
    return arr;
}
export default function quickFun_rightwrap(arr, callback) {
    quickFun_right(arr, 0, arr.length -1 ,callback)
};