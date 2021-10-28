// //Function Declaration
// function walk() {
//     console.log('walk');
// }

// //Another method of declaring function
// //Function Expression
// let run = function () {
//     console.log('run')
// }; //in JS, functions are objects;
// run();
// let move = run;
// move();

// //Hoisting 
// //we cannot call the run function before it is defined. 
// //whereas we can call walk fucntion before it is defined.
// //Hoisting is the preocess of moving the function declaration  to the top of the file
// //and it is done automatically by JavaScript engine when executing the code.

// //Arguments
// function sum(a, b) {
//     console.log(arguments);
//     return a + b;
// }
// console.log(sum(1, 2));
// console.log(sum(1));    // 1 + undefined => NaN
// console.log(sum());     //undefined + undefined => NaN
// console.log(sum(1, 2, 3, 4));     //returns 1 + 2

// //If we want mulitple number of arguments; we have special object called 'arguments'
// function sumAll() {
//     let total = 0;
//     for (let value of arguments)    //arguments is also like arrays that has iterators
//         total += value;
//     return total
// }
// console.log("SumAll: " + sum(1, 2, 3, 4, 5));

// //Rest Operator (...args)
// function display(...args) {
//     return args;
// }
// console.log(display(1, 'Hello', 21, true));

// function add(...args) {
//     return args.reduce((a, b) => a + b);
// }
// console.log("Addition: " + add(1, 2, 3, 4, 10));

// //parameters along with Rest parameters
// function bill(discount,...prices) {
//     const total = prices.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }
// console.log("Final Price: " + bill(0.1, 20, 40, 50));

// //we cannot have any parameter after the Rest parameter.
// //Rest parameter must be the last formal parameter
// //function bill(discount,...prices,someValue)

// //Default Parameters
// function interest(principal, rate, years) {
//     return principal * rate / 100 * years;
// }
// console.log("Interest: " + interest(1500000, 6.75, 7)); //returns 708750

// function interestDefault(principal, rate, years){
//     rate = rate || 3.5;     //rate can be truthy or falsy value. 
//     years = years || 5;     //this expression can set the values to default value using OR operator.
//     return principal * rate / 100 * years;
// }
// console.log("InterestDefault: " + interestDefault(1500000));    //returns 262500

// //After ES6, we have easier way to set default parameters.
// function interestDefaulter(principal, rate = 4, years = 6) {
//     return principal * rate / 100 * years;
// }
// console.log(interestDefaulter(1000000));

//we cannot have a non-defualt paramter after a defualt parameter.
//function interest(principal, rate = 3.5, years)   
//returns NaN for interest(10000)
//returns NaN for interest(10000,5)
//returns 1750 for interest(10000,undefined,5);//but not a best practice.Instead use the default parameter as the last one


///Getters and Setters
// const person = {
//     firstname: 'Anil',
//     lastname: 'Kumar'
// }
// console.log(`Full name : ${person.firstname} ${person.lastname}`);

//We can have a function with in the object to get fullname multiple times;

// const personV2 = {
//     firstname: 'Anil',
//     lastname: 'Kumar',
//     fullName() {
//         return `${person.firstname} ${person.lastname}`;
//     }
// };
// console.log('Fullname: ' + personV2.fullName());
//Some problems with this approach
//1. the function is read only and we cannot set the fullname like
    //person.fullName = 'Senthil';
//2. cannot get the value of fullname as a property instead of a function
    //console.log(personV2.fullname);

//to overcome problems we can have getters and setters
//getters => access properties
//setters => change (mutate) them.

// const personRedined = {
//     firstname: 'Anil',
//     lastname: 'Kumar',
//     get fullName() {
//         return `${personRedined.firstname} ${personRedined.lastname}`;
//     },
//     set fullName(value) {
//         const parts = value.split(' '); //splits the value by the character ' '.
//         this.firstname = parts[0];
//         this.lastname = parts[1];
//     }
// };
// console.log('Person Fullname Earlier: ' + personRedined.fullName);
// personRedined.fullName = 'Senthil Kumar D';
// console.log('Person Fullname After: ' + personRedined.fullName);
// console.log(personRedined);

/// Try and Catch - defensive programming
// const person = {
//     firstname: 'Anil',
//     lastname: 'Kumar',
//     get fullName() {
//         return `${person.firstname} ${person.lastname}`;
//     },
//     set fullName(value) {
//         //check if the value is string
//         if (typeof value !== 'string')
//             throw new Error('Value is not a String.');
        
//         const parts = value.split(' '); //splits the value by the character ' '.
//         if (parts.length < 2)
//             throw new Error('Enter two words for first and last name');
        
//         this.firstname = parts[0];
//         this.lastname = parts[1];
//     }
// };
// console.log('Person Fullname Earlier: ' + person.fullName);
// try {
//     person.fullName = null;
// }
// catch (e) {
//     alert(e);
//    // console.error(e);
// }
// console.log('Person Fullname After: ' + person.fullName);
// console.log(person);

// ///scope = Local and global
// const color = 'red';    //global variable
// function colors() {
//     const color = 'blue';   //local variable
//     const message = 'Hi';
// console.log(color);
// }
// // console.log(message);   //throws Errro: message is not defined.
// colors();

// /// Let vs Var
// function start() {
//     // for (let i = 0; i < 4; i++)
//     for (var i = 0; i < 4; i++)
//         console.log(i);
//     if (true) {
//         var color = 'red';
//         }
//     console.log(i);     //throws error when "let i" is used, but prints next value(4) of i if "var i" is used.
//     // THE SCOPE OF VAR IS NOT RESTRICED FOR THE BLOCK. IT IS THOUGH RESTRICTED WITH IN A FUNCTION.
//     //var => function scoped variables; let => block scoped variable.(introduced in ES6)
//     console.log(color);
// }
// start();

// //Global var variables and functions

// var colors = 'Red';  //var variable is created globally at Window level of html
// let age = 30;   //let variable is not created at window level

// // we get identifier color has already been declared error if we want to use a color varaible in window level.
//  window.colors ; 
// //window.age = 35;
// function sayhi(){
//     console.log('Hi',colors,age);
    
// }
// sayhi();
