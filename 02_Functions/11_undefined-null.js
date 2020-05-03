let name    //this is an undefined variable. it prints 'undefined'

name = 'Ani'
if(name === undefined) {
    console.log('Please provide a name')
}else{
    console.log(name)
}

// Undefined for function arguments
let square = function(num){
    console.log(num * num)  
}
square()        // prints NaN as the result;

let result = square()   //prints NaN
console.log(result) //prints undefined

//
let age =33
age = undefined     //explicitly assigning undefined value.
age = null  

console.log(age)    //prints undefined for line 21 and null for line 22