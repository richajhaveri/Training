function multiply(x,y)
{

    if(y>=10)
    {
        return null
    }
    else{
        multi=x*y
        console.log(x + "x" +y + "="+multi);
    }
    y++
    multiply(x,y)
}
multiply(2,1)
