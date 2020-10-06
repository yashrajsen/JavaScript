let number = 213.429

console.log(number.toFixed(2))  // returns 213.43   rounds to 2 decimal

console.log(Math.round(number))    // returns 213
console.log(Math.floor(number))    // returns 213
console.log(Math.ceil(number))     // returns 214

console.log(Math.random())     // return number from 0 - 1

//et randomNum = Math.random() * 100 //random number

//console.log(`Random Number: ${randomNum}`)

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
//0 -10
console.log(randomNum)

//Guessing Game
//1 - 5 - true if correct - false if not correct
let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return guess === randomNum
}
console.log(makeGuess(1))