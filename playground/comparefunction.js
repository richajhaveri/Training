function myvar(points) {
    points.sort(function (a, b) { return 0.5 - Math.random() });
    return points 
}


var points = [1, 100, 200, 5, 6, 3, 30];
console.log(myvar(points));

/*const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});*/

