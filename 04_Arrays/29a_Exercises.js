//  1 : Array from Range

// const numbers = arrayFromRange(-5, 3);
// console.log(numbers);

// function arrayFromRange(min, max) {
//     let rangeArray = [];
//     for (let i = min; i <= max; i++)
//         rangeArray.push(i);
//     return rangeArray;
// }


//2 ; Includes
 //const numbers = [1, 2, 3, 4];
// console.log(includes(numbers,1));
// function includes(array, searchElement) {
//     for (let i of array)
//         if (i === searchElement)
//             return true;
//     return false;
// }

//3 : Except
// const numbers = [1, 2, 3, 4, 5];

// const output = except(numbers, [1, 3]);
// console.log(output);

// function except(array, excluded) {
//     let finalArray = [];
//     for (let i of array) {
//         if (!excluded.includes(i))
//             finalArray.push(i);
//     }
//     return finalArray;
// }

//4: Moving an element
// const numbers = [1, 2, 3, 4, 5];
// const output = move(numbers, 2, -3);
// console.log(output);
// function move(array, index, offset) {
//     const position = index + offset;
//     if (position >= array.length || position < 0 ) {
//         console.error('Invalid Offset!');
//         return;
//     }
//     const output = [...array];
//     const element = output.splice(index, 1)[0]; // [1,3,4,5]
//     output.splice(position, 0, element) //[1,]
//     return output;
// }

// 5: Count Occurances

// const numbers = [1, 2, 2, 1, 4, 2, 3];
// const count = countOccurances(numbers, 2);
// console.log(count);

// function countOccurances(array, searchElement) {
// //method 1:

//     // let count = 0;
//     // for (let element of array) {
//     //     if (searchElement === element)
//     //         count += 1;
//     // }
//     // return count;

// //method 2:
//     return array.reduce((accumulator, current) => {
//         const occurance = (current === searchElement) ? 1 : 0;
//         console.log(accumulator, current, searchElement);
//         return accumulator + occurance;
// },0)
// }

// 6: Get Max
// const numbers = [-7, -1, -3, -4];
// const max = getMax(numbers);
// console.log(max);
// function getMax(array) {
// // //method 1:
// //     if (array.length === 0) return undefined;
// //     let max = array[0];
// //     for (let i = 1; i < array.length; i++)
// //         if (array[i] > max )
// //             max = array[i];
// //     return max;

// //method 2:
//     // return array.reduce((accumulator, current) => {
//     //     let max = (current > accumulator) ? current : accumulator;
//     //     return max;
//     // });    // if the default value for accumulator is not set, then it takes the first elemenmt as the default value.

// //method 3: to shorthand the method 2; replace accumulator by a and current by b
//   return array.reduce((a, b) => (a > b) ? a:b);
// }

// 7: Movies
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 }
];

//all movies in 2018 with rating >4
//sort them by their rating
//descending order
//pick only their title
//result must be 'b','a'

const filtered = movies
    .filter(m => m.rating > 4 && m.year === 2018)
    // .sort((m1, m2) => {
    // const rating1 = m1.rating;
    // const rating2 = m2.rating;
    // if (rating1 > rating2) return 1;
    // if (rating1 < rating2) return -1;
    // return 0;
    // })
    .sort((m1, m2) => m1.rating - m2.rating)
    //4.7-4.5 = 0.2 which is positive then return 1
    //4.5-4.7 = -0.2 which is negative them returns -1
    //if equal then returns 0
    .reverse()  // to get the reverse sorting order.
    .map(obj => obj.title);

console.log(filtered);
