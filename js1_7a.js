// 7) Use an if and else statement to declare a number and assign it a value. 

let num = 24;

// Determine if a number is negative, positive or zero 
if (Math.sign(num) == 1) {
 result = "positive";
} else if (Math.sign(num) == -1) {
 result = "negative";
} else if (Math.sign(num) == 0) {
 result = "zero";
} else {
 result = "invalid";
}
console.log(result);
