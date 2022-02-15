// Q-2: Find the repeating and the missing (with O(nxn) complexity, best solution is O(n))
// Input: arr[] = {3, 1, 3}
// Output: Missing = 2, Repeating = 3
// Explanation: In the array,
// 2 is missing and 3 occurs twice
// Input: arr[] = {4, 3, 6, 2, 1, 1}
// Output: Missing = 5, Repeating = 1

let array = [4, 3, 6, 2, 1, 1]
let missing =0 , repeat =0
for(let i =0; i<array.length; i++)
{
    for(let j=0;j<array.length -i-1;j++)
    {
        if(array[j] > array[j+1])
        {
           temp = array[j]
           array[j] = array[j + 1]
           array[j+1] = temp
        }

    }
}
for(i=0;i<array.length;i++)
{
    if(i==array.length-1)
    {
        break;
    }
    else if(array[i] == array[i+1])
    {
        repeat =array[i]
    }
    else if(array[i+1] - array[i]!=1)  
    {
        missing =i+1
    }
}
console.log("Missing:" + missing )
console.log("Repeating:" + repeat);
