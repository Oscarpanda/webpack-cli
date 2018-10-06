import selectsort from "./select-sort";
import quicksort from "./quick-sort";
import upsort from "./up-sort";
export const funMap = {
    '0': () => {
        console.log("0");
    },
    '1': selectsort,
    '2': quicksort,
    '3': upsort,
}