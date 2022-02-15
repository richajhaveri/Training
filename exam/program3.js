var category = [
    "movie",
    "news",
    "education",
    "sports ",
    "politics"
]
var age = [
    "teenager",
    "adult"
]
// console.log(category[2]);

console.log(category[Math.floor(Math.random() * category.length)]);
console.log(age[Math.floor(Math.random() * age.length)]);

var b = []
for (let i = 0; i < 100; i++) {
    var a = {
        category: category[Math.floor(Math.random() * category.length)],
        age: age[Math.floor(Math.random() * age.length)],
        visitors: Math.floor(Math.random() * 100)
    }
    b.push(a)
}
console.log(b);

/*let visitors=1;
for(let i=0;i<category.length;i++)
{
    for(let j=0;j<=age.length;j++)
        
    {
        for (let z=1;z<=3;z++)
        {

        
        console.log("Category : " + category[i]+  " " + ", "+  "Age : " +  age[j] + " " +", " + "Visitors: " + visitors[z]);
        }

    }
}

*/
/*var visitors = [10, 15, 11, 60, 1, , 20, 30, 45, 16];
for (let i = 1; i < 100; i++) {
    console.log("{" + "Age :" + age[Math.floor(Math.random() * age.length)] + " " + ", " + "Category: " + " " + category[Math.floor(Math.random() * category.length)] + " " + ", " + " " +
        "Visitors :" + visitors[Math.floor(Math.random() * visitors.length)] + "}"
    );
}
*/

/*var result = {};
for (let i = 1; i < 100; i++) {
category.forEach((key, i) => result[key] = age[i]);
console.log(result);
}
*/

