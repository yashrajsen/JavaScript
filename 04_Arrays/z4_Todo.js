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
console.log("For loop")
for (let count = 0; count < toDoArray.length; count++) {
    console.log(`${count + 1}. ${toDoArray[count]}`)
}

// 1. Convert array to array of objects --> text, completed
// 2. Create a function to remove a todo by text value
//[ 'drink green tea', 'go for walking', 'talk bath', 'have breakfast' ]
const toDos = [
    { text: 'to drink green tea', completed: true },
    { text: 'go for walking', completed: true },
    { text: 'take bath', completed: false },
    { text: 'have breakfast', completed: false }
]
// console.log(toDos)

const deleteToDo = function (myArray, todo) {
    const index = myArray.findIndex(function (myArray) {
        return myArray.text.toLowerCase() === todo.toLowerCase()
    })
    if (index > -1) {
        console.log('Removed item is : ' + myArray.splice(index, 1))
    }
    return myArray
}

// console.log(deleteToDo(toDos, 'Take Bath'))

// console.log('//////To find todos that yet needs to be completed')

//getThingsToDO(todos)
const getThingsToDO = function (todo) {
    return todo.filter(function (todos) {
        // return todos.completed === false
        return !todos.completed     // alternate way
    })
}
//console.log(getThingsToDO(toDos))

console.log('//////To sort todos by uncompleted first')

const sortTodo = function (todos) {
    return todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1

        } else if (a.completed && !b.completed) {
            return 1
        }
        else return 0
    })
}

sortTodo(toDos)
console.log(toDos)