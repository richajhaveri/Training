let a = 5;
let string = "";

for (i = 0; i < a; i++) {
    
    for (let j = 0; j < a; j++) {
        if (i + j <a - 1) {
            string += " ";
        }
        else {
            string += "*";

        }
        
    }
    string += "\n";
}
console.log(string);