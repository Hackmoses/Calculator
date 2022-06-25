  
 
 //Using Prompt
 
const num1 = parseFloat(prompt ('Enter the first number: '));  

const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): '); 

const num2 = parseFloat(prompt ('Enter the second number: '));  
  
let result; 

if (operator == '+') { 
    result = num1 + num2;  
}  
else if (operator == '-') { 
    result = num1 - num2;  
}  
else if (operator == '*') { 
    result = num1 * num2;  
}  
else if (operator == '/')  {  
    result = num1 / num2; 
}  else {

    prompt('Please Enter the right Operator( either +, -, * or / )')

} 
  
// display the result of the Calculator  
window.alert(" Result is " + result);