let a = parseInt(prompt("Enter first number"));
let b = parseInt(prompt("Enter second number"));

let choice = parseInt(prompt("1 - Add\n2 - Subtract\n3 - Multiply\n4 - Divide\n5 - Exit"));
console.log("choice....",choice);
console.log("types of choice ...",typeof choice);

// "1" == 1

switch(choice){
    case 1: console.log("Addition = ",a+b);
    break;
    case 2: console.log("Subtraction = ",a-b);
    break;
    case 3: console.log("Multiplication = ",a*b);
    break;
    case 4: console.log("Division = ",a/b);
    break;
    case 5: console.log("Exiting");
    break;
    
}