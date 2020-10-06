//var based variable
//this was the only way to create a variable initially
var firstName = 'Anil'  //it is similar to let as we can reassign
firstName = 'Senthil'

var firstName = 'Dev'   // it lets you re declare the variable to new value and does not throw error
console.log(firstName)

//due to above reason, we need to avoid use var

if (10 === 10) {
    var firstName = 'Jen'
    let lastName = 'Ben'
}
// var is function scope
console.log(firstName)  // throw no errors
//console.log(lastName)   // throw error

// 
let age
console.log(age)    // prints undefined

console.log(num)    // still prints undefined and not throw error
var num = 10        