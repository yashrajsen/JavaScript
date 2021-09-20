const notes = ['Note 1', 'Note 2', 'Note 3']

console.log(notes)      //returns [ 'Note 1', 'Note 2', 'Note 3' ]
console.log(notes.length)   // returns 3
console.log(notes[0])   // return first array element : Note 1
console.log(notes[10])  // returns undefined
console.log(notes[notes.length - 1])    // returns the last element : Note 3

// Push method adds an item to the last to an array
notes.push('My new note')
console.log(notes.length) //returns 4
console.log(notes)      // returns [ 'Note 1', 'Note 2', 'Note 3', 'My new note' ]

//Pop removes the last element from an array and returns it
console.log(notes.pop()) // returns My new note

console.log(notes.length)   // returns 3
console.log(notes)      //returns [ 'Note 1', 'Note 2', 'Note 3' ]

//Shift removes first element from an array
console.log(notes.shift())  // returns Note 1
console.log(notes)      // returns [ 'Note 2', 'Note 3' ]
//unshift adds the first element
console.log(notes.unshift('My New Note'))   // returns 3
console.log(notes)      // returns [ 'My New Note', 'Note 2', 'Note 3' ]

//splice - deletes/add item(s) from a starting position
notes.splice(1, 1)   // 1st arg - starting position ; 2nd arg - number of items to delete
console.log(notes)  // returns [ 'My New Note', 'Note 3' ]

notes.splice(1, 0, 'This is the second new item')    // the 0 in 2nd argument indicates to do nothing; but the 3rd argument adds the item to the array
console.log(notes)      //[ 'My New Note', 'This is the second new item', 'Note 3' ]

notes.splice(2, 1, 'This is 3rd element')  // here the 3rd argument is present which means it adds the element to the array
console.log(notes)  // retuens [ 'My New Note', 'This is the second new item', 'This is 3rd element' ]

notes.splice(2, 2, 'note 4', 'note 5')  // here the 3rd and 4th arguments are present which means it adds the elements to the array and replaces the existing 3rd item of the array
console.log(notes)  //returns [ 'My New Note', 'This is the second new item', 'note 4', 'note 5' ]

// assign a new value at any position of an array
notes[1] = 'Note.. 2'   // assign the new value at position 2 of the array
console.log(notes)  //returns [ 'My New Note', 'Note.. 2', 'note 4', 'note 5' ]

//Combining Arrays
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

//Slicing Arrays

//const slice = combined.slice(2, 4);   //this returns [3,4]
// const slice = combined.slice(2);        //this returns [3,4,5,6]
const slice = combined.slice();         //this returns copy of the combined array.
console.log(slice);

//spread operator
const combined2 = [...first, 'a', ...second, 'b'];
console.log(combined2)

//creating copy of an array using the spread operator
const copy = [...combined2];
console.log(copy);