let a = 4;
let string = ""

for (i = 0; i < a; i++) {
    for (j = 0; j < a; j++) {
        if(i==j && (i==a/2) && (j==a/2)) {
            string+="o";
        }
        else if (i == j) {
            string += "\\";
        }
        else if (i + j == a-1) {
            string += "/";
        }
        else if (j == 0 || j == a - 1) {
            string += "|";
        }
        else if (i == 0 || i == a - 1) {
            string += "-";
        }
        
        else {
            string += " ";

        }
    }
    string += "\n";
}
console.log(string);