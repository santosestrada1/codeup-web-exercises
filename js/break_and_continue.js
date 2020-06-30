// BREAK AND CONTINUE
//     1. Create a file named break_and_continue.js in the js directory.
//     2. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     3. Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

// let chosenOddNum = prompt("Enter an odd number between 1 and 50: ");
// for (var x=1; x<=50; x++) {
//     if (x % 2 === 0) {
//         continue;
//     }
//       if (x == chosenOddNum) {
//           console.log("Yikes Skipping Number:" + chosenOddNum)
//           continue;
//       }
//     if ((x % 2) !== 0) {
//         console.log(x)
//     }
// }

// or

let oddNumber;

       while (true){
oddNumber = prompt("Please enter an odd number between 1 and 50.");
oddNumber = parseInt(oddNumber);
if (oddNumber % 2 === 0 && oddNumber >= 1 && OddNumber < 50){
    // we have a good number
    break;
}
// console.log(oddNumber);
}
console.log("Number to skip is: " + oddNumber);
       console.log("")
for (let i=1; i<=50; i+=2) {
    if (i === oddNumber) {
        console.log("Yikes! Skipping Number " + oddNumber);
        continue;
    }
    console.log("Here is an odd number: " + i);
}





    
    
    
    
