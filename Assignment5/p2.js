let a = 5;
let string = "";
if (a == 5) {
    
for(let i=1;i<=a;i++){
    for (let k = 0; k < a - i; k++) {
        string += " ";
      }
    for(let j=1;j<=i;j++)
    {
       string+="@";
    
    }
       string+="\n";
}
   /* for (i = 0; i < a; i++) {
        for (let k = 0; k < a - i; k++) {
            string += " ";
          }
        for (j = 1; j < a; j++) {
            if (i + j <a +1) {

                string += "@";
            }
            else {
                string += " ";

            }
        }
        string += "\n";
    }
    */
    for (i = 0; i < a; i++) {
        for (let k = 0; k < a ; k++) {
            string += " ";
          }
        for (j = 0; j < a; j++) {
    
            if (i+j <a) {
    
                string += "@";
            }
            else {
                string += " ";
    
            }
        }
        string += "\n";
    }
}
console.log(string);