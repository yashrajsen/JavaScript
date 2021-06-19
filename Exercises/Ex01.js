//write a finction that takes 22 numbers and returns max of the two;

function maximum(num1, num2) {
    // if (num1 > num2)
    //     return num1;
    // return num2;    // no need of else

    //use conditional operator
    return (num1 > num2) ? num1 : num2;
}

console.log(maximum(8, 81));

//
function isLandsscape(width, height) {
    return (width > height) // no need to write the conditional operator output values as true or false.
}
console.log(isLandsscape(440, 103));