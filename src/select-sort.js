function selectsort(arr, callback) {
    for (let i = 0 ; i < arr.length; i++ ){
        let index = i;
        let min = arr[index]
        for (let j = i; j< arr.length;j++){
            if ( min > arr[j]){
                min = arr[j];
                index = j;
            }
        }
        arr[index] = arr[i]
        arr[i] = min;
        callback(arr);
    }
}
export default selectsort;