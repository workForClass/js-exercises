// 3) Write a function takes a number as a parameter and checks if it is divisible by 5. (use a Function expression)

const checkDivByFive = function (num){
    if (num % 5 === 0) {
        console.log(`${num} is divisible by 5`);
    } else {
        console.log(`${num} is not divisible by 5`);
    }
}

checkDivByFive(13);