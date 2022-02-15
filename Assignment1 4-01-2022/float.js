function isFloat(n) {
    return n === +n && n !== (n|0);
}
console.log(isFloat(3.14));