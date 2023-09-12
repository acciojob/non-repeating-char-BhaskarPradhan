function firstNonRepeatedChar(str) {
 // Write your code here
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
let cont=0;
for(let i=0; i<input.length;i++){
    for(let j=1;j<input.length;j++){
    if(input.charAt(i)== input.charAt(j)){
        cont++;
    }
    }
    if(cont==0){
        console.log(input[i]);
    }
    else{
        console.log(null);
    }
}