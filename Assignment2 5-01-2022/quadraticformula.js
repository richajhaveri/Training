let root1,root2;
let a=1;
let b=1;
let c=1;
// To calculate discriminant
let discriminant  =b *b -4*a*c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
// if roots are not real
else {
    let realPart = (-b / (2 * a));
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log(
        `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
      );
}

/*
function solve(a,b,c){
    var result = (((-1*b) + Math.sqrt((Math.pow(b,2)) - (4*a*c)))/(2*a));
    var result2 = (((-1*b) - Math.sqrt((Math.pow(b,2)) - (4*a*c)))/(2*a));
    
    return result + "and" + result2;
}

console.log(solve(1,6,5));

*/