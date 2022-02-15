array = [1, 4, 2, 8, 7]
let n = array.length
let pindex

function partition(array, low, high) {
    let pivot = array[low]
    let i = low - 1
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        i++
        let temp = array[i]
        array[i] = pivot
        array[low] = temp;
        return i;
    }
}

    function quicksort(array, low, high) 
    {

        if (low < high) 
        {
            let pivot = partition(array, low, high)
        }
        quicksort(array, low, pivot - 1)
        quicksort(array, pivot, high)
    }

    
var sorted= quicksort(array, 0, n - 1)
console.log(sorted);

// let items = [5,3,7,6,2,9];
// function swap(items, leftIndex, rightIndex){
//     var temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }
// function partition(items, left, right) {
//     var pivot   = items[0], 
//         i       = left, 
//         j       = right; 
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j); 
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(items, left, right) {
//     var index;
//     if (items.length > 1) {
//         index = partition(items, left, right);
//         if (left < index - 1) { 
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) {
//             quickSort(items, index, right);
//         }
//     }
//     return items;
// }
// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray); 