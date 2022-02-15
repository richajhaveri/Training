/*function myArray(item,index)
{
const a = [
        ["hello","Good Morning"],
        [3, 4],
        [5, 6]
      ];
}
console.log(a.forEach(myArray));
*/
let a = [
    [3, 4],
    [5, 6]
  ];
for (let index = 0; index < a.length; index++) 
{
    //var inner =a[index].length;
    for (let i= 0; i < a.length ; i++) 
    {
        console.log("Array Element :"  + a[index][i] +  "" +  "Indexes:" + [index, i]);
    }
}


/*var array2D = new Array(2);
for(var i = 0; i< array2D.length; i++){
array2D[i] = new Array(i,i+1);
};
console.log(array2D);
*/

