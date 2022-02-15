    let a = 5;
    let string = "";
    for (i = 0; i < a; i++) {
        for (j = -4; j < a; j++) {
            if (i-Math.abs(j) >= 0) {

                string += "*";
            }
            else {
                string += " ";

            }
        }
        string += "\n";
    }
    console.log(string);

/*
    output:

    *    
   ***   
  *****  
 ******* 
*********

*/
