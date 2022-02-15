//Find if given substring is in string

let string= "hello , Good , Morning";
let string1 ="hello";
console.log(string.substring(7));
var res = isSubstring(string,string1);
if(res==-1)
{
    console.log("False");
}
else{
    console.log("True");
}