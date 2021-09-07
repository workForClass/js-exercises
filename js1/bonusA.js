// ---- Bonus Challenge If You Finish Early -----

// Guessing game - let the user enter a number 1 and 10 and generate a secret random number. If their number matches the random number, congratulate them.

/* PART ONE
Accomplish the above task with hardcoded dummy variables for the ‘guess’ is to make sure your logic works. You’ll need the following 
    Variables/inputs
        - Random Number: Variable that generates a random number.
        - Right User Guess: Variables that represents a right user guess. You will need to make it equal to the random number variable.
        - Wrong User Guess: A variable that represents a wrong user guess. Put in a wrong number here.
    Outputs:
        - If the right guess variable is given, the message: "Congratulations! You guessed the number!"
        - If the wrong guess variable is given, the message: "Sorry, better luck next time." */






/* PART TWO
Update the above code to take in a user’s input (guess) rather than using hardcoded variable values.
 
There are two ways you may choose to accomplish this, and both will require some research one your part!

Option 1: 
    - Run in the browser console environment, use prompt() and Document.write to gain user input and output to the browser. */


    // Note Document.write & prompt() are browser based

// OPTION 1: BROWSER BASED
/* let guess = parseInt(
       prompt("Please give a guess and enter a number between 1 and 10.")
     );
 
     const n = Math.floor(Math.random() * 10) + 1;
     document.write(n);
     if (guess == n) {
       document.write("Congratulations - your first guess was right! ");
     } else if (guess !== n) {
       let guess = parseInt(
         prompt(
           "Incorrect, please give a guess and enter a number between 1 and 10. "
         )
       );
       if (guess == n) {
         document.write("Congratulations - your second guess was right! ");
       } else {
         let guess = parseInt(
           prompt(
             "Incorrect, please give a guess and enter a number between 1 and 10. "
           )
         );
         if (guess == n) {
           document.write("Congratulations - your third guess was right! ");
         } else {
           document.write("Game over! ");
         }
       }
     } */


/* Option 2: 
    - Run in the node command line /terminal environment (on your computer), which uses a node package called readline-sync to allow the user to input answers in the terminal and not have to use the browser. 
    - To Install: npm install readline-sync --save 	
    - To Use in JS File: require(‘readline-sync’);
    - To gain user input: readlineSync.question();
    - Output in console: console.log(); */


// OPTION 2 - NODE.JS ENVIRONMENT WITH READLINE-SYNC https://www.npmjs.com/package/readline-sync

// npm install readline-sync --save


/* const readlineSync = require("readline-sync");

let guess = parseInt(
  readlineSync.question(
    "Please give a guess and enter a number between 1 and 10.\n"
  )
);

const n = Math.floor(Math.random() * 10) + 1;
if (guess == n) {
  console.log("Congratulations - your first guess was right! ");
} else if (guess !== n) {
  let guess = parseInt(
    readlineSync.question(
      "Incorrect, please give a guess and enter a number between 1 and 10.\n"
    )
  );
  if (guess == n) {
    console.log("Congratulations - your second guess was right!");
  } else {
    let guess = parseInt(
      readlineSync.question(
        "Incorrect, please give a guess and enter a number between 1 and 10.\n"
      )
    );
    if (guess == n) {
      console.log("Congratulations - your third guess was right! ");
    } else {
      console.log("Game over!\nThe correct answer was ");
      console.log(n);
    }
  }
} */
