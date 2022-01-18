array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arraysearch = 4
let start = 0
let end = array.length - 1

function binary(array, start, end) {
    let mid = Math.floor(start + end / 2);

    if (array[mid] == arraysearch) { return mid; }
    else if (array[mid] > arraysearch) { return binary(array, start, mid - 1, arraysearch) }
    else if (array[mid] < arraysearch) {
        return binary(array,mid + 1, end, arraysearch)
    }
    else {
        console.log("Not Found");
    }
}
console.log("ARRAY INDEX IS:" +binary(array,start,end,arraysearch));
