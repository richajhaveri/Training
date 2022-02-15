let a=5;
let string="";
let string1="";
let count=1;
if(a==5)
{
/*for(let i=1;i<=a;i++){
    for (let k = 0; k < a - i; k++) {
        string += " ";
      }
    for(let j=1;j<=i;j++)
    {
       string+=j;
       //count++;
    
    }
    string+="\n";
    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <=i; j++) {
          string1 += i -j +1;
        }
        string1 += "\n";
      }
}
}


*/
//console.log(string);
/*for(let i=1;i<=a;i++){
    for (let k = 0; k < a - i; k++) {
        string += " ";
      }
      */
for(i=1; i<=a; i++)
{
    for (let k = 0; k < a - i; k++) {
        string += " ";
      }
 for(j=1; j<=i; j++)
 {
    string+=j;

 }
 for(k=i-1; k>=1; k--)
 {
 string +=k;
 }
 string+="\n";

}

}

console.log(string);