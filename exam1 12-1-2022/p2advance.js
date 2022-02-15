let a = 5;
let string = "";
for (i = -(a + 1); i <= a + 1; i++) {
   for (j = -(a + 1); j <= a + 1; j++) {
       if (Math.abs(j) == a + 1 || j==a+1) {
           string += "|"
       }
       else if(i == -(a+1) || i== (a+1)){
           string+="="
       }
       else if(i==0 &&j==0){
           string+="x"
       }
       else if(j==0){
        string+="0"
    }
    else if(i==0){
        string+="O"
    }
    else if(i==j){
        string+="\\"
    }
    else if(Math.abs(i)==Math.abs(j)){
        string+="/"
    }
    else if(j<0 && i<0 && i<=j || j>0 && i>0 && i>=j){
        string+=Math.abs(j)
    }
    else if(i<0 && j>0 &&  i+j >=0){
        string+=Math.abs(a -j)+1
    }
    else if(i>0 && j<0 &&  i+j <=0){
        string+=Math.abs(a +j)+1
    }
    else if(i<0 && j>0 &&  i+j <=0){
        string+=String.fromCharCode(Math.abs(j) + 97)
    }
    else if(i>0 && j<0 &&  i+j >=0){
        string+=String.fromCharCode(Math.abs(j) + 97)
    }
    else if(j<0 && i<0 &&  i>j){
        string+=String.fromCharCode(Math.abs(a+j+1) + 97)
    }
    else if(j>0 && i>0 &&  i<j){
        string+=String.fromCharCode(Math.abs(a-j+1) + 97)
    }
    else {
        string+=" "
     }
    }
    string+="\n";
}
console.log(string);
 