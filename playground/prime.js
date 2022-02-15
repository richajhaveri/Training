const a=2;
let isprime=true;
if(a==1)
console.log("Is not a prime number");
else if(a>1)
for(let i=2;i<a; i++)
{
    if(a % i==0)
    isprime=false;
    break;
}
if(isprime)
console.log(`${a} is a prime number`);
else
console.log(`${a} is not a prime number`);