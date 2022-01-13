let a =5 ;
let string = "";
for (i = -a+1; i <=a-1; i++) {
    if(i==0)
    {
        continue;
    }
    for (j = -a+1; j <=a-1; j++) {
        if(j==0)
        {
            continue;
        }
        if (Math.abs(i) + Math.abs(j) <= a) {

            string += "@";
        }
        else {
            string += "-";
            
        }
    }
    string += "\n";

}
console.log(string);