let a=5;
let temp=1;
let i = a;
while (i>0) {
    temp = i * temp;
    i--;
}
console.log(temp);

function myvar(points) {
    points.sort(function (a, b) { return 0.5 - Math.random() });
    return points 
}


var points = [1, 100, 200, 5, 6, 3, 30];
console.log(myvar(points));