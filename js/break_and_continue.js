// BREAK AND CONTINUE
//     1. Create a file named break_and_continue.js in the js directory.
//     2. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     3. Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

let chosenOddNum = prompt("Enter an odd number between 1 and 50: ");
for (var x=1; x<=50; x++) {
    if (x % 2 === 0) {
        continue;
    }
      if (x == chosenOddNum) {
          console.log("Yikes Skipping Number:" + chosenOddNum)
          continue;
      }
    if ((x % 2) !== 0) {
        console.log(x)
    }
}





    
    
    
    
