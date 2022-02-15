let a=5;
let string="";
let count =1;

for(let i=1;i<=a;i++){
    for(let j=1;j<=i;j++)
    {
       string+="*";
       count++;
    
    }
    string+="\n";
}
console.log(string);