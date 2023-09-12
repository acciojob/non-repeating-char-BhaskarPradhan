function firstNonRepeatedChar(str) {
    // Write your code here
    let a;
       for(let i=0; i<str.length;i++){
       let cont=0;
       for(let j=0;j<str.length;j++){
       if(str.charAt(i)== str.charAt(j)){
           cont++;
       }
       }
       if(cont==1){
           a=str.charAt(i);
           break;
       }
      
   }
   console.log(a);
   }
   const input = prompt("Enter a string");
   alert(firstNonRepeatedChar(input));

