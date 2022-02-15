let a = 5;
let string = "";
for (i = -(a + 1); i <= a + 1; i++) {
   for (j = -(a + 1); j <= a + 1; j++) {
       if (Math.abs(j) == a + 1 ||  j == a+1) {
           string += "O"
       }
       else if(i==0 && j==0){
           string+="O"
       }
  
   else if (i == -(a+1) || i== (a+1)) {
       string += "0"
   }
 
   else if(j<0 && i<0 && i<=j || j>0 && i>0 && i>=j){
        string+=Math.abs(j)
    }
   else if (i>0 && j<0 &&  i+j <=0 || j>0 && i<0 && i+j>=0  ) {
       string += a - Math.abs(j) + 1;
   }
   
 
    else {
    string += " ";
   }
 
}
string += "\n";

}
console.log(string);
