let array = [10, 1.2, 5, 8, 3, "C", "b", "a", "A"]


    for (let i = 1; i < array.length; i++)
     {
        key = array[i]
        j = i - 1;
        
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j]
            j = j - 1
        }
        array[j + 1] = key
    }

console.log(array);

