let array = [2,0,8,6,9,3]
let temp =0
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
console.log(array);


