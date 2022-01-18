x=5
function factorial(x)
{

    if(x==0)
    {
        return 1
    }
    else{
        fact=x*factorial(x-1)
        return fact;
    }
    
}
factorial(5)
console.log(factorial(x));
