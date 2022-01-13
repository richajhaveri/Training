let a = 5;
let string = "";
for (i = -a+1; i <=a; i++) {
    if(i==0)
    {
        continue;
    }
    for (j =-a-1; j <=a; j++) {
        if(j==0)
        {
            continue;
        }
        if (Math.abs(i) +Math.abs(j) <= a && Math.sign(i) == Math.sign(j)) {

            string += "@";
        }
        else {
            string += " ";
            
        }
    }
    string += "\n";

}
console.log(string);