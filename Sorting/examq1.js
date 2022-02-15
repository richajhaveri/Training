// Q-1: There are Two elements whose sum is closest to zero (An Array of integers is given, both +ve and -ve. You need to find the two elements such that their sum is closest to zero.)
// Test Cases:
// [-1,0,1,5,10,-8,6]
// => (-1,1)
// [5,6,8,-7,5]
// =>(-7,6),(-7,8)


array = [-1,0,1,5,10,-8,6]
for(let i=0;i<array.length;i++)
{
for(let j=0;j<i;j++)
{
    let a=array[i] +array[j]
    if(a>1)
    {      
         break;
    }
    if( a == 1 || a == -1)
    {
        console.log(array[i]+array[j])
    }
}
}