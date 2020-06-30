
// Create a function named showMultiplicationTable that accepts a number and
// console.logs the multiplication table for that number (just multiply by the
// numbers 1 through 10).

// let showMultiplicationTable = function() {
//     let x = 7;
//     y = 1;
//     while (y <= 10) {
//         console.log(x + " * " + y + " = " + (x * y))
//         y++;
//     }
// }

// or

// let showMultiplicationTable = function(num){
// for (let i=1; i<=10; i++) {
//     console.log(num + " x " + i + " = " + (i * num));
// }
// }
// showMultiplicationTable(7);


// Use a FOR loop and the code from the previous lessons to generate 10 random
// numbers between 20 and 200 and output to the console whether each number is odd or even.


// for (var i = 0; i < 10; i++) {
//     let x = Math.floor(Math.random() * (200 - 20 + 1) + 20);
//     if (x === 0) {
//         console.log(x + " is even");
//     } else if (x % 2 === 0) {
//         console.log(x + " is even");
//     } else {
//         console.log(x + " is odd");
//     }
//     x = Math.floor(Math.random() * (200 - 20 + 1) + 20);
// }

// or

// for (i = 0; i<10; i++) {
//     let random = Math.floor(Math.random() * 181) + 20;
//     if (random % 2 === 0){
//         console.log(random + " is even");
// }else{
//     console.log(random + " is odd");
// }
// }



// Create a for loop that uses console.log to create output (Christmas Tree with
// repeating numbers.)

// for(i = 1; i < 10; i++) {
//     console.log(String(i).repeat(i))
// }

// or

// for (let i=1; i<=9; i++){
//     let str = ""
//     for(let j=1; j<=i; j++){
//         str += i;
//     }
//     console.log(str);
// }


// Create a FOR loop that uses console.log to create the output (counting down by 5 from 100. )

// for(let i=100; i>=5; i-=5) {
//     console.log(i);
// }

// or

// for (let i=100; i>0; i-=5){
//     console.log(i);
// }


