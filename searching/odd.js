function odd(x)
{
    if(x>=10)
    {
        return null
    }
   else if(x%2==1)
    {
    console.log("odd :"+ x);    
    }
    else{
    console.log("even:" + x);
    
    }  
    x++
    odd(x)
}
odd(1)
