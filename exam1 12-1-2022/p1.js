let a=5;
let string=""
for(let i=0;i<=a*a+1;i++){
    for(let j=-a;j<=a;j++)
    {
        if(i==0 && j==0)
        {
            string+="O"
        }
        else if(i+j ==0 || i>a && i+j ==a){
            string+="/"

        }
        else if(i==j || i>a && i-j ==a){
            string+="\\"

        }
        else if(i <=a && Math.abs(j)<i || i<=a*2 && Math.abs(j)*2 < i ){
            string+="-"

        }
        else if(i < a*a+1 && Math.abs(j)==1 && i>a*2 && Math.abs(j)==1 ){
            string+="|"

        }
        else if(i == a*a+1 || i>a*2 && j==0 ){
            string+="="

        }
        
        
    
    else{
            string+=" "
        }
    }
    string+="\n";
}

console.log(string);
