//Global scope - tempConvertor, temp1, temp2
    //Local scope - farenheit, celsius
        //Local scope - isFreezing

let tempConvertor = function(farenheit) {
    let celcius = (farenheit - 32) * (5/9)
    
    if(celcius <= 0) {
        let isFreezing = true
    }
    return celcius
}

let temp1 = tempConvertor(32)
let temp2 = tempConvertor(68)

console.log(temp1)
console.log(temp2)