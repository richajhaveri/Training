array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
addition = 0
function arrayaddition(add) {
    if (add >= array.length) {
        return null;
    }
    else {
        addition = addition + array[add]
        add++;

    }
    arrayaddition(add)

}
arrayaddition(0)
console.log(addition);