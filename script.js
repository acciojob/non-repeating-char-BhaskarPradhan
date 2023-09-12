function firstNonRepeatedChar(str) {
 // Write your code here
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

for(let i=0; i<input.length;i++){
	let cont=0;
    for(let j=1;j<input.length;j++){
    if(input.charAt(i)== input.charAt(j)){
        cont++;
    }
    }
    if(cont==0){
        console.log(input.charAt(i));
    }
    else{
        console.log(null);
    }
}