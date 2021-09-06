// 5) Use a switch statement to check a student's grade based on their mark.
// Note Document.write & prompt() are browser based
// For use with node.js, choose console.log and the variable value.

// FOR USE IN BROWSER
/* let mark = prompt("Please enter a mark.");
switch (true) {
 case mark < 50:
   document.write("Fail");
   break;

   case mark < 70 && mark >= 50:
   document.write("Pass");
   break;
 
 case mark < 86 && mark >= 70:
   document.write("Credit");
   break;
 
 case mark >= 86:
   document.write("Distinction");
   break;
 
 default:
   document.write("Please enter a mark");
   break;
} */

// FOR USE IN NODE.JS ENVIRONMENT
let mark = 55;
switch (true) {
 case mark < 50:
   console.log("Fail");
   break;

   case mark < 70 && mark >= 50:
   console.log("Pass");
   break;
 
 case mark < 86 && mark >= 70:
   console.log("Credit");
   break;
 
 case mark >= 86:
   console.log("Distinction");
   break;
 
 default:
   console.log("Error");
   break;
}