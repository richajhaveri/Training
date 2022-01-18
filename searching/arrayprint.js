array = [1, 2, 3, 4, 5, 6, 7, 8,9,10]

function print(index) {

   if(array.length > 0)
   {
   console.log(array.shift());
   print(index);
   }
}   
print(array);
