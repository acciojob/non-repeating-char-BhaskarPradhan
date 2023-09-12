function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0; i<str.length;i++){
	let cont=0;
    for(let j=1;j<str.length;j++){
    if(str.charAt(i)== str.charAt(j)){
        cont++;
    }
    }
    if(cont==0){
        console.log(str.charAt(i));
    }
    else{
        console.log(null);
    }
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

