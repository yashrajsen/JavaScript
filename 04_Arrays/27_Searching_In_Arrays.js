//search for a specific item in an array

console.log(notes.indexOf('note2')) //returns 1

console.log(notes.indexOf('Note2')) //returns -1 which means the item is not present in the array

// create an array of objects
const myNotes = [{
    title: 'My next trip',
    body: 'I would like to travel to US'
}, {
    title: 'Get my car and things',
    body: 'Collect my car and things from Storage'
}, {
    title: 'look for a house',
    body: 'rent a house near to the office'
}]
console.log(myNotes)
// console.log(notes.indexOf({}))      // returns -1 even if the array has the empty object

// let someObject = {}
// let otherObject = someObject
// console.log(someObject === otherObject)     //returns true

// // findIndex -- retuens the index of the firs element in the array that satisfies the condition in the function
// const index = myNotes.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === 'Get my car and things'       //returns true
// })
// console.log(index)

//create new function findNote by its title

// const findNote = function (note, titl) {
//     const index = note.findIndex(function (note, index) {
//         return note.title.toLowerCase() === titl.toLowerCase()      //toLowerCase does not work when the array has an empty object
//     })
//     console.log(index)
//     return note[index]
// }
// console.log(findNote(myNotes, 'look for A house'))

//Another way to do the above function
const findNote = function (note, titl) {
    return note = note.find(function (note, index) {                //find returns object instead of index
        return note.title.toLowerCase() === titl.toLowerCase()      //toLowerCase does not work when the array has an empty object
    })
}
console.log(findNote(myNotes, 'look for A house'))