// 4) Write a function that takes two number parameters and adds them. Use return to return the result. - (Try fat arrow function)

const addNums = (num1, num2) => {
    let result = num1 + num2;
    return result;
}

// Shorter refactored version on one line
// const addNums = (num1, num2) => num1 + num2;

console.log(addNums(5, 6));