// 4) Use a switch statement to find out what to do at a set of traffic lights.
// Note Document.write & prompt() are browser based
// For use with node.js, choose console.log and the variable value.

// FOR BROWSER
/* let light = prompt("Enter a traffic light colour:");
 
switch (light.toLowerCase().trim()) {
 case "green":
   document.write("You should go.");
   break;
 
 case "orange":
   document.write("You should slow down.");
   break;
 
 case "red":
   document.write("You should stop!");
   break;
 
 default:
   document.write("Please enter a valid valor.");
   break;
} */

// FOR NODE.JS ENVIRONMENT
let light = "green";
 
switch (light) {
 case "green":
   console.log("You should go.");
   break;
 
 case "orange":
   console.log("You should slow down.");
   break;
 
 case "red":
   console.log("You should stop!");
   break;
 
 default:
   console.log("Please enter a valid valor.");
   break;
}
