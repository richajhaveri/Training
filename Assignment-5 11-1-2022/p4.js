let a = 6;
let string = "";
for (i = -a; i <= a; i++) {
    for (j = -a; j <= a; j++) {
        if (Math.abs(i) == 6 || Math.abs(j) == 6) {
            string += "0";
        }

        else if (Math.abs(i) - Math.abs(j) >= 0) {

            if (i < 0 && j > 0 || i > 0 && j < 0) {

                string += Math.abs(i) - Math.abs(j) + 1;
            }
            else {
                string += String.fromCharCode(Math.abs(i)-Math.abs(j)+ 97);
            }
        }
        else {
            string += " "
        }
    }
    string += "\n";

}


console.log(string);
