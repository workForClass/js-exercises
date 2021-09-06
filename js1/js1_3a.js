// 3) Use an if statement to check if a number entered is less than 20.
// Note Document.write & prompt() are browser based
// For use with node.js, choose console.log and the variable value.


// FOR BROWSER
let number = prompt("Enter a number");
 
if (number >= 20) {
 document.write("Your number is greater than or equal to 20.");
} else {
 document.write("Your number is less than 20.");
}

// FOR NODE.JS ENVIRONMENT
/* let number = 5;
 
if (number >= 20) {
 console.log("Your number is greater than or equal to 20.");
} else {
 console.log("Your number is less than 20.");
} */