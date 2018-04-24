function find(array, count, yuzhi) {
    let count1 = 0
    let result = false
    array.some((value) => {
        if (value > yuzhi) {
            count1 += 1;
        }
        else {
            count1 = 0
        }
        console.log(count1)
        if (count1 > count) {
            console.log('tu')
            result = true;
            return true;
        }
    });
    return result

}
let a = find([-1,-1,1,1,11,1,1,1,1,1],5, 0)
console.log(a)