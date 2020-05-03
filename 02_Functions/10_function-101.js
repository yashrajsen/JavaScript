//function = input, code, output

//declare the function
let greetUser = function() { //function keyword that could have input variables
    console.log('Welcome User !!')  //define the function
}

//execute the function
greetUser()
greetUser()
greetUser() //execute multiple times

let cube = function(num){
    let result = num * num * num
    //console.log(result)
    return result   //to return the value of a function. it can be used only once
}

cube(3) // this will display output only if the console is used and not the return value

let value = cube(4)
console.log(value)  //This way the return value of the function is printed

//challenge area
//convert faherenheit to celcius

let tempConvertor = function(farenheit) {
    let celcius = (farenheit - 32) * (5/9)
    return celcius
}


let temp1 = tempConvertor(32)
let temp2 = tempConvertor(68)
console.log(temp1)
console.log(temp2)
