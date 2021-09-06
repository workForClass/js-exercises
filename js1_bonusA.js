// ---- Bonus Challenge If You Finish Early -----

/* Guessing game - let the user enter a number 1 and 10 and generate a secret random number. If their number matches the random number, congratulate them. You can make this more complicated by giving them multiple choices.
Inputs
Text: Choose a number between 1 and 10 (user's guess)
Outputs
Message if correct guess: Congratulations! You guessed the number!
Message if wrong guess: Sorry, better luck next time. */

// Note Document.write & prompt() are browser based
// To simulate in a Node.js environment you can install readline-sync with npm https://www.npmjs.com/package/readline-sync

// BROWSER BASED
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

     // NODE.JS ENVIRONMENT WITH READLINE-SYNC https://www.npmjs.com/package/readline-sync

     // npm install readline-sync --save

     const readlineSync = require('readline-sync');

     let guess = parseInt(readlineSync.question("Please give a guess and enter a number between 1 and 10.\n"));
  
 
     const n = Math.floor(Math.random() * 10) + 1;
  /*    console.log(n); */
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
     }