const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
]

const course = courses.find(function (course) {
    return course.name === 'a';
})

console.log(course);

//emptying an array

let numbers = [1, 2, 3, 4];
let another = numbers;

//Solution 1: Assign an empty array
numbers = [];

//Solution 2: Assign array length as 0
//numbers.length = 0;

//Solution 3: 
//numbers.splice(0, numbers.length);

//Solutino 4;
while (numbers.length > 0)
    numbers.pop();

console.log(numbers);
console.log(another);

//Iterating an array
let number2 = [10, 9, 8, 7, 6]

// for (let number of number2)
//     console.log(number);

// number2.forEach(function (number) {     //  forEach method uses a callback function
//     console.log(number);
// })

number2.forEach((number, index) => console.log(index, number));

//Joining arrays
const joined = number2.join(',');
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const combined = parts.join('-');
console.log(combined);

//Sorting arrays
const number3 = [2, 4, 1, 3, 7];
console.log(number3.sort());

number3.reverse();
console.log(number3);

//Sorting Array with Objects

const subjects = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'python' },
    { id: 3, name: 'JavaScript' }
];

subjects.sort(function (a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(subjects);

// Every FUnctions
//check if all the numbers in the array are positive
const number4 = [1, 3, -2, 4];

const allPositive = number4.every(function (value) {
    return value >= 0;
});
console.log(allPositive);

//Some funciton

const anyOnePostive = number4.some(function (value) {
    return value >= 0
});
console.log(anyOnePostive);

//Filtering Arrays
const filtered = number4.filter(value => value >= 0);
console.log(filtered);

//Mapping an Array
//map something to each element of the above filtered array
const items = filtered.map(n => '<li>' + n + '</li>');
console.log(items);

const html = '<ul>' + items.join('\n') + '</ul>';
console.log(html);

//mapping objects

const number5 = [1, 3, 5, 7];
const objItems = number5.map(a => {
    const obj = { value: a };
    return obj;
});
console.log(objItems);

//Chaining methods
const finalItems = number5
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value)
//need to put a bracket for showing an object, other wise the arrow funct will think it as a code snippet
console.log(finalItems);

//Reducing an array to a single value
const sum = number4.reduce((accumulator, currentValue) => accumulator + currentValue, 0);      //reduce function returns a single value for an array as a number or string , etc)
console.log(sum);