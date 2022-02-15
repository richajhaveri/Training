// Q-3: Find the largest pair sum in an unsorted array(Given an unsorted of distinct integers, find the largest pair sum in it. For example, the largest pair sum in {12, 34, 10, 6, 40} is 74.)


let array = [12, 34, 10, 6, 40]
let temp =0
for(var i =0; i<array.length; i++)
{
    for(var j=0;j<array.length -i-1;j++)
    {
        if(array[j] > array[j+1])
        {
           temp = array[j]
           array[j] = array[j + 1]
           array[j+1] = temp
        }
    }
}
console.log(Math.max(...array)+ Math.max(array[j+3]));


