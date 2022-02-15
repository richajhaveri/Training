var variable_1=5;
var variable_2=10;
console.log("input :sign = -");
console.log("variable_1 = " + variable_1 );
console.log("variable_2 =" + variable_2);
var a="-";

switch (a){
    case "*":
        console.log(variable_1 * variable_2);
        break;
    case "+":
        console.log(variable_1 + variable_2);
        break;
    case "-":
        console.log(variable_1 - variable_2);
        break;
    default:
        console.log("End");    
}