//function with muliple arguments

let add = function(num1, num2, num3) {
    return num1 + num2 + num3
}
let result = add(10,15,2)
console.log(result)


//default arguments if value is not provided
let getScoreText = function (name = 'Andrew', score = 0){
    console.log ('The player '+ name + ' has scored '+ score)
}

getScoreText() // prints undefined twice for two variables.

getScoreText('Amit')

getScoreText(undefined,98)

//Challenge Area - Tip Calculator: Total Bill and Percentage of tip that can be default tip.

let getTip = function(bill, tipPercent = 25) {
    //    return bill * tipPercent/100 
    return `A ${tipPercent}% tip on the $${bill} would be ${bill * tipPercent/100}.`
}
let tip = getTip(200,15)
console.log(tip)

let tip2 = getTip(200,undefined)
console.log(tip2)