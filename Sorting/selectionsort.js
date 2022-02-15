let array = ["a","B","C","b","A","c"]

function selectionsort(first,second)
{
    first=(first.charCodeAt())
    second=(second.charCodeAt())
    
    if(first>90)
    {
        firstnum=first - 97
    }
    else
    {
        firstnum=first-65
    }
    if(second>90)
    {
        secondnum=second -97
    }
    else
    {
        secondnum=second-65
    }

    if(firstnum == secondnum && second <first)
    {
        return true
    }
    else if(firstnum < secondnum)
    {
        return true
    }
    return false

}
for(let i =0; i<array.length; i++)
{
let minarray = i

    for(var j=i+1;j<array.length;j++)
    {
        if(selectionsort(array[j] ,array[minarray]))
        {
            minarray = j    
        }      
    } 
        let temp = array[minarray]
        array[minarray] = array[i]
        array[i] = temp      
}
console.log(array);

