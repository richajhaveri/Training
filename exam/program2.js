let numberArray = [0,1,2,3,4,5,6,7,8,9];
let letterArray = ["a","b","c","d","e"];
let x=0;
//let random= Math.random(letterArray);
for(let i=1;i<10;i++)
{
    
        //console.log(letterArray[i] + numberArray[i] + numberArray[i]);    
        a= numberArray[Math.floor(Math.random()*numberArray.length)] ,letterArray[Math.floor(Math.random()*letterArray.length)];
        b= numberArray[Math.floor(Math.random()*numberArray.length)] ,letterArray[Math.floor(Math.random()*letterArray.length)];
        x=a+b;
        console.log(x);
    

}
