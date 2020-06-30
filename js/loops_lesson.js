// let times = 0;
//
// while (times < 10){
//     times ++;
//     console.log("We have done this " + times + " times.");
// }
// console.log("We are done!")

// let x = 1;
// while (x<= 10){
//     console.log(x);
//     x++;
// }

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// for (let i=2;i<=20;i++){
//     if (i%2 === 0)
//         console.log(i);
// }


let multiply = function(a,b) {
    let answer = 0;
    for (let i = 0;i<b;i++) {
        answer += a;
    }
    return answer;
}

console.log(multiply(6, 7));

let addition = function(a,b) {
    let answer = a;
    for (let i = 0; i<b;i++) {
        answer++;
    }
    return answer;
}

console.log(addition(3,4));

console.log("We are done")
