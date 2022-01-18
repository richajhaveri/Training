function divisible(x) {
    {
        if (x >10) {
            return null
        }
        else if (x % 7 == 0) {
            console.log(x);
        }
        else if (x % 9 == 0) 
        {
            console.log(x);
        }
        
    }

    x++
    divisible(x)
}
divisible(1)