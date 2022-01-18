function prime(num,index){
    if(index>Math.sqrt(num))
    {
        console.log("prime",num);
        return null;
    }
    else if(num%index==0)
    {
        console.log("Not prime");

        return null;
    }
    index+=1
prime(num,index)
}
prime(3,3)