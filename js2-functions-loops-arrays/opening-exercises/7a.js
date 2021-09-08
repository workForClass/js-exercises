// 7) Use a for loop to loop through all numbers from 50 to 1 backwards and display their sum 

let sum = 0;
for (let num = 50; num >= 1; num--) {
    sum = sum + num; // this could also be written as sum+= num
}

console.log(sum);