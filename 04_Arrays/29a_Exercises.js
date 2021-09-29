//  1 : Array from Range

const numbers = arrayFromRange(-5, 3);
console.log(numbers);

function arrayFromRange(min, max) {
    let rangeArray = [];
    for (let i = min; i <= max; i++)
        rangeArray.push(i);
    return rangeArray;
}