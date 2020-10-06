const notes = ['note 1', 'note 2', 'note 3']

// Method 1 : to call a function by creating a variable and passing the variable in forEach method
const doThis = function () {
    console.log('Hello')
}
notes.forEach(doThis)   // This prints 'Hello' three times - based on the number of items present in the array


//Method 2 : to just add function body with the forEach method
notes.forEach(function () {
    console.log('Hey There !!') // This prints 'Hey There !!' three times - based on the number of items present in the array
})

notes.forEach(function (item) {
    console.log(item) // This prints all the items present in the array
})

notes.forEach(function (item, index) {
    console.log(index) // This prints index of the item
    console.log(item) // This prints item present in the array
})
/* prints
0
note 1
1
note 2
2
note 3
*/
