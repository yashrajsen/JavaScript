// create an arrya with five totds
//you have x todos
//  Print the first and second to last items  -? todo: walk the dog

const toDoArray = ['get up early', 'drink green tea', 'get refreshed', 'go for walking', 'talk bath']
console.log(`You have ${toDoArray.length} todos`)
console.log(toDoArray[0])
console.log(toDoArray[toDoArray.length - 2])
console.log(toDoArray)  /* returns [
                                        'get up early',
                                        'drink green tea',
                                        'get refreshed',
                                        'go for walking',
                                        'talk bath'
                                    ]
                                    */
//Delete the 3rd item
toDoArray.splice(2, 1)

//Add a new todo item to the end
toDoArray.push('have breakfast')
//Remove the first item from the list
toDoArray.shift()

console.log(`You have ${toDoArray.length} todos`)   // You have 4 todos
console.log(toDoArray)      //[ 'drink green tea', 'go for walking', 'talk bath', 'have breakfast' ]

//Print all the todos with the index in order
//Method 1
toDoArray.forEach(function (item, index) {
    console.log((index + 1) + '. ' + item)
})

//Method 2
toDoArray.forEach(function (toDoArray, index) {
    const num = index + 1
    console.log(`${num}.${toDoArray}`)
})